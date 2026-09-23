# Floating Navbar + Site-wide Scanlines

## 1. Single source of truth for nav data — `src/data/lore.ts` (new)
The dropdowns must list the same entries the sections render, with real anchor targets (antislop R-24: no dead navigation). Extract the arrays currently inline in component frontmatter:
- `regions` (6), `earthians` (12), `institutions` (6) move out of `RegionsGrid.astro` / `EarthianRegistry.astro` / `InstitutionsGrid.astro`; `restrictedFiles` (The Ascender, Seapoint Estate) out of `RestrictedArchives.astro`. Those four components import the data back; rendering is unchanged.
- Add `slugify(title)` and `navGroups`: one entry per section with `key` (`regions`/`earthians`/`powers`/`restricted`), section `href` (`#regions` etc.), and `items: { label, anchor }` where `anchor = \`${key}-${slugify(title)}\`` (e.g. `#regions-azure-land`, `#earthians-takechi-hironaka`, `#restricted-the-ascender`).

## 2. Anchors on real destinations
- Section ids: `RegionsGrid` → `id="regions"`, `EarthianRegistry` → `id="earthians"`, `InstitutionsGrid` → `id="powers"`, `RestrictedArchives` → `id="restricted"`.
- Card ids: `LoreCard.astro` and `RestrictedFileBlock.astro` get an optional `anchor` prop rendered as `id` on the `<article>`; `EarthianRegistry`'s inline cards get `id={anchor}`. Every dropdown link therefore scrolls to its actual card.
- `global.css` base: `[id] { scroll-margin-top: 5rem }` so the fixed bar never covers the heading on jump (`scroll-behavior: smooth` already exists).

## 3. `src/components/FloatingNav.astro` (new), mounted in `Layout.astro`
Floating bar: `position: fixed`, inset with margin (centered, `max-width: 1200px`), `rounded-arch` (the existing 4px token), `z-50`. Contents:
- **Index**: brand link "Fablea Prime Archive" (mono, uppercase) → `Astro.baseUrl` (resolves `/world-of-fablea/` on GitHub Pages).
- **Four groups** (desktop `lg+`): short labels `Regions`, `Earthians`, `Powers`, `Restricted`; each group = link to its section (`#regions`…) plus a chevron `button[aria-expanded][aria-controls]` opening a dropdown panel. Panel: `bg-bg-secondary`, `border-border-subtle`, one monospace link per card; Earthians panel is `max-h-[60vh] overflow-y-auto` for its 12 entries. Full section titles appear as the panel's header line.
- **Mobile (< lg)**: same brand + hamburger button; a sheet below the bar with the groups stacked as the same disclosure pattern. Tap targets ≥ 44px.
- **States**: no-JS-safe — without the script, panels stay closed but section links still work. Script (plain `<script>`, no framework):
  - scroll state: passive listener + rAF toggling `data-scrolled` at `scrollY > 24` (also on load, so reloads mid-page start correct).
  - disclosures: click toggles; opening one closes others; Escape closes and restores focus; outside click closes; clicking a panel link closes the group.
- **Azure on scroll** (user's choice): transparent bar with `#F8FAFC` text at top → `data-scrolled` swaps it to solid `#38BDF8` with `#0B0F19` text (≈10:1, AA). Transition `background-color/color/border-color 0.2s ease-in-out` per DESIGN §7, disabled under `prefers-reduced-motion`. Panels stay dark in both states (hierarchy). No backdrop-blur (antislop glassmorphism cap).
- **Contrast/focus detail**: the global azure `:focus-visible` ring vanishes on the azure bar — override to a dark ring (`outline-color: var(--color-bg-primary)`) in the scrolled state. Include a "Skip to content" link.
- Antislop notes: motion only in transitions (MOTION dial 1); one deliberate accent moment (the bar); flat panels with 1px borders, shadow only on dropdown elevation.

## 4. Faint scanlines across the site
`Layout.astro` body gets `<div class="scanlines" aria-hidden="true"></div>` (after the slot); CSS in `global.css`:
```css
.scanlines {
  position: fixed; inset: 0; z-index: 30; pointer-events: none;
  background-image: repeating-linear-gradient(to bottom,
    rgba(148,163,184,0.035) 0 1px, transparent 1px 3px);
}
```
Static CRT texture at ~3.5% slate: visible over both bg-primary and bg-secondary sections without touching AA contrast; sits below the navbar (z-50) so nav/dropdowns stay crisp; `@media print { display: none }`. Motif is sanctioned by DESIGN.md §6.5 (scanline overlay); the reason goes in a CSS comment (R-07).

## 5. Files
- New: `src/data/lore.ts`, `src/components/FloatingNav.astro`
- Modified: `src/layouts/Layout.astro`, `src/styles/global.css`, `src/components/{RegionsGrid,EarthianRegistry,InstitutionsGrid,RestrictedArchives,LoreCard,RestrictedFileBlock}.astro`

## 6. Verification (programmatic; no screenshot viewing on this model)
Via the running dev server + browser evaluate: nav is fixed and `data-scrolled` + computed `rgb(56, 189, 248)` background appear after scrolling and clear at top; **every** dropdown/section href resolves to a real `getElementById` (zero dead anchors); Escape/outside-click close panels; no horizontal overflow at 375/768/1280; `npx astro build` passes clean.