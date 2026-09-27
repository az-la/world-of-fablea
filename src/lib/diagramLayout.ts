// Deterministic cluster layout for the relationship chart. No randomness, no
// runtime physics: the same data always renders the same chart, and the chart
// is drawn at build time. Design box: 1152 x 800 units.
import type { DiagramCharacter, Relationship } from '../data/characters';

export interface Point {
	x: number;
	y: number;
}

export interface DiagramLayout {
	width: number;
	height: number;
	hubId: string;
	positions: Record<string, Point>;
}

export interface LayoutOptions {
	width?: number;
	height?: number;
	overrides?: Record<string, Point>;
}

const DEFAULTS = { width: 1152, height: 800 };

// Node cells hold a 62px portrait plus a wrapped name below, so centers need
// roughly this much clearance to keep name plates from touching.
const MIN_DISTANCE = 120;
const RELAXATION_PASSES = 240;

export function computeDiagramLayout(
	characters: DiagramCharacter[],
	relationships: Relationship[],
	options: LayoutOptions = {}
): DiagramLayout {
	const base = { ...DEFAULTS, ...options };
	// Growth headroom: every ~10 figures past the original 28 adds a lane to
	// the box (and grows the fan radii below), so the chart scales with the
	// roster instead of cramming. At 28 figures the box is exactly the
	// original 1152 x 800.
	const figureCount = characters.filter((c) => c.kind === 'figure').length;
	const lanes = Math.ceil(Math.max(0, figureCount - 28) / 10);
	const W = base.width + lanes * 160;
	const H = base.height + lanes * 220;
	const overrides = options.overrides ?? {};
	const positions: Record<string, Point> = {};

	const earthians = characters.filter((c) => c.kind === 'earthian');
	const figureIds = new Set(characters.filter((c) => c.kind === 'figure').map((c) => c.id));

	// The hub sits at the center of the chart. It is computed, not hardcoded:
	// today that is hmgfan, the chart's densest subject.
	const degree = new Map<string, number>();
	for (const r of relationships) {
		degree.set(r.from, (degree.get(r.from) ?? 0) + 1);
		degree.set(r.to, (degree.get(r.to) ?? 0) + 1);
	}
	const hub = earthians.reduce(
		(best, e) => ((degree.get(e.id) ?? 0) > (degree.get(best.id) ?? 0) ? e : best),
		earthians[0]
	);

	const cx = W / 2;
	const cy = H / 2;
	positions[hub.id] = { x: cx, y: cy };

	// The remaining Earthians ring the hub; figures fan outward from the
	// Earthian they are filed under, so the rings stay readable.
	const rx = W * 0.3;
	const ry = H * 0.3;
	const ring = earthians.filter((e) => e.id !== hub.id);
	ring.forEach((e, i) => {
		const angle = -Math.PI / 2 + (i * 2 * Math.PI) / ring.length;
		positions[e.id] = { x: cx + rx * Math.cos(angle), y: cy + ry * Math.sin(angle) };
	});

	// Anchor chain: a figure attaches to the Earthian on its first edge;
	// figures attached to other figures (Roroa to Anna) chase the chain until
	// it lands on an Earthian.
	const firstPartner = new Map<string, string>();
	for (const r of relationships) {
		if (!firstPartner.has(r.from) && figureIds.has(r.from)) firstPartner.set(r.from, r.to);
		if (!firstPartner.has(r.to) && figureIds.has(r.to)) firstPartner.set(r.to, r.from);
	}
	const anchorOf = (id: string): string => {
		const seen = new Set<string>();
		let current = id;
		while (figureIds.has(current) && !seen.has(current)) {
			seen.add(current);
			current = firstPartner.get(current) ?? hub.id;
		}
		return current;
	};

	const figuresByAnchor = new Map<string, string[]>();
	for (const id of figureIds) {
		const anchor = anchorOf(id);
		const list = figuresByAnchor.get(anchor) ?? [];
		list.push(id);
		figuresByAnchor.set(anchor, list);
	}

	for (const [anchor, list] of figuresByAnchor) {
		const base = positions[anchor];
		const dx = base.x - cx;
		const dy = base.y - cy;
		const outward = Math.atan2(dy, dx);
		const n = list.length;
		// Fan half-spread grows with the roster but stays inside a wedge, and
		// alternating radii give dense fans a second lane. The hub's own
		// figures (Anna, Hiyori, Chiyo today) sit one lane farther out so
		// their edge labels clear the crowded center.
		const isHubFan = anchor === hub.id;
		const step = Math.min(0.42, (n > 1 ? 2.1 : 0) / Math.max(n - 1, 1));
		// Fan radii stretch only once the roster outgrows the original design,
		// so today's chart is unchanged and bigger rosters get breathing room.
		const fanScale = 1 + Math.max(0, figureCount - 28) / 50;
		list.forEach((id, j) => {
			const angle = outward + (j - (n - 1) / 2) * step;
			const radius = ((j % 2 === 1 ? 205 : 150) + (isHubFan ? 55 : 0)) * fanScale;
			positions[id] = {
				x: base.x + radius * Math.cos(angle),
				y: base.y + radius * Math.sin(angle)
			};
		});
	}

	// Relaxation: nudge overlapping figure nodes apart. Every node is an
	// obstacle (a figure may not sit on a pinned Earthian either); Earthians
	// themselves stay pinned so the ring geometry survives. Everything clamps
	// inside the frame.
	const movable = [...figureIds];
	const allIds = characters.map((c) => c.id);
	for (let pass = 0; pass < RELAXATION_PASSES; pass++) {
		for (let a = 0; a < movable.length; a++) {
			const idA = movable[a];
			for (let b = a + 1; b < movable.length; b++) {
				const idB = movable[b];
				const pa = positions[idA];
				const pb = positions[idB];
				const ddx = pb.x - pa.x;
				const ddy = pb.y - pa.y;
				const dist = Math.hypot(ddx, ddy) || 0.01;
				if (dist >= MIN_DISTANCE) continue;
				const push = (MIN_DISTANCE - dist) / 2;
				const ux = ddx / dist;
				const uy = ddy / dist;
				pa.x -= ux * push;
				pa.y -= uy * push;
				pb.x += ux * push;
				pb.y += uy * push;
			}
			// One-sided push against pinned Earthians.
			for (const idB of allIds) {
				if (!figureIds.has(idB)) {
					const pa = positions[idA];
					const pb = positions[idB];
					const ddx = pa.x - pb.x;
					const ddy = pa.y - pb.y;
					const dist = Math.hypot(ddx, ddy) || 0.01;
					if (dist >= MIN_DISTANCE) continue;
					const push = MIN_DISTANCE - dist;
					const ux = ddx / dist;
					const uy = ddy / dist;
					pa.x += ux * push;
					pa.y += uy * push;
				}
			}
		}
		for (const id of movable) {
			const p = positions[id];
			p.x = Math.min(Math.max(p.x, 70), W - 70);
			p.y = Math.min(Math.max(p.y, 64), H - 70);
		}
	}

	for (const [id, p] of Object.entries(overrides)) {
		if (positions[id]) positions[id] = { ...p };
	}

	return { width: W, height: H, hubId: hub.id, positions };
}
