// Single source of truth for the lore the homepage renders and the navbar
// navigates. Keeping the arrays here means the nav dropdowns can never drift
// out of sync with the sections (R-24: no dead navigation).
// All data sourced from Fablea_tidied.md (the lore source of record).

export interface Region {
	id: string;
	title: string;
	excerpt: string;
	status: 'active' | 'restricted' | 'pending' | 'neutral';
	statusLabel: string;
}

export interface Earthian {
	no: string;
	name: string;
	title: string;
	excerpt: string;
}

export interface Institution {
	id: string;
	title: string;
	excerpt: string;
	status: 'active' | 'restricted' | 'pending' | 'neutral';
	statusLabel: string;
	featured?: boolean;
}

export interface RestrictedFile {
	fileId: string;
	title: string;
	description: string;
	note?: string;
	accessLabel: string;
}

export const regions: Region[] = [
	{
		id: 'R-01',
		title: 'Azure Land',
		excerpt:
			'Tropical, tourism-oriented maritime nation. Yachting culture, naval exploration, eco-integrated technology. Lawful neutral stance.',
		status: 'active',
		statusLabel: 'Active'
	},
	{
		id: 'R-02',
		title: 'Taihei',
		excerpt:
			'Faction-state on the southern Twin Isles. Administered east by the Omi Alliance, west by Mankai-no-Wa. Led by Earthian PM Takechi Hironaka.',
		status: 'active',
		statusLabel: 'Active'
	},
	{
		id: 'R-03',
		title: 'Twin Isles',
		excerpt:
			'Two identical islands at the center of the open ocean. Small hills, rich vegetation, and exotic species found nowhere on Earth.',
		status: 'active',
		statusLabel: 'Active'
	},
	{
		id: 'R-04',
		title: 'Crimson Wasteland',
		excerpt:
			"No-man's-land 3,000 km north of the Twin Isles. Red terrain, roaming beasts, and artifacts that spawn for a limited time.",
		status: 'restricted',
		statusLabel: 'Restricted'
	},
	{
		id: 'R-05',
		title: 'Suichi Island',
		excerpt:
			'Large island 350 km southeast of the Twin Isles. Nanomaterial mining at its center, Azure Navy castles on the northern cape, beaches to the southeast.',
		status: 'active',
		statusLabel: 'Active'
	},
	{
		id: 'R-06',
		title: 'Star Land',
		excerpt:
			"A star-shaped island with a large central lake, devoid of humans, 3,000 km east of the Twin Isles. A replica of Hoshinomiya Girls' High School sits on the south shore.",
		status: 'pending',
		statusLabel: 'Archive pending'
	}
];

export const earthians: Earthian[] = [
	{
		no: '01',
		name: 'hmgfan',
		title: 'Harem Maker',
		excerpt: 'First Earthian. Yachting promoter for Income Makers, Northport, Azure Land.'
	},
	{
		no: '02',
		name: 'Dina Agustina',
		title: 'Master of Financing',
		excerpt: 'CEO of Agustina Offshore Financing, Calding Village. Arrived with hmgfan.'
	},
	{
		no: '03',
		name: 'Alisha Elliott',
		title: 'Absolute Seductress',
		excerpt:
			'Influencer, venture capitalist, lobbyist, skill cultivator. Arrived one year after hmgfan.'
	},
	{
		no: '04',
		name: 'Takechi Hironaka',
		title: 'Great Unifier',
		excerpt: 'Prime Minister of Taihei. Arrived one year after hmgfan.'
	},
	{
		no: '05',
		name: 'Jenny Sinclair',
		title: 'Relentless Actress',
		excerpt: 'Elite actress and media personality. Arrived one year after hmgfan.'
	},
	{
		no: '06',
		name: 'Akari Hoshino',
		title: 'Energetic Train Idol',
		excerpt: 'Ex-idol and master train driver for Suichi Mining. Arrived one year after hmgfan.'
	},
	{
		no: '07',
		name: 'Mamiya Matsumoto',
		title: 'Femme Fatale Oligarch',
		excerpt: 'President of Argent Peaks. Arrived one year after hmgfan.'
	},
	{
		no: '08',
		name: 'Lisette Johanssen',
		title: 'Digital Master',
		excerpt: 'CEO and owner of Wraiting Inc. Arrived one year after hmgfan.'
	},
	{
		no: '09',
		name: 'Natalie Halsey-Taylor',
		title: 'Logistics Queen',
		excerpt: 'CEO and owner of HT Logistics. Arrived one year, two months after hmgfan.'
	},
	{
		no: '10',
		name: 'Lee Ji-ho',
		title: 'Thorough Fullstacker',
		excerpt: 'Senior fullstack programmer, self-employed. Arrived one year, two months after hmgfan.'
	},
	{
		no: '11',
		name: 'Aika Yukimura',
		title: 'Master Influencer',
		excerpt: 'Influencer and celebrity. Arrived one year, three months after hmgfan.'
	},
	{
		no: '12',
		name: 'Katarina Petrenko',
		title: 'Smoke Signal',
		excerpt: 'Soldier and mechanized infantry engineer. Arrived one year, three months after hmgfan.'
	}
];

export const institutions: Institution[] = [
	{
		id: 'I-01',
		title: 'Income Makers',
		excerpt:
			'Massive entertainment and tourism conglomerate. HQ north of Northport, with a large superyacht marina. Owned and led by Anna Nishikinomiya.',
		status: 'active',
		statusLabel: 'Institution',
		featured: true
	},
	{
		id: 'I-02',
		title: 'Azure Navy',
		excerpt:
			'Military force of Azure Land. Reformed by Scathach-Skadi to include non-shipgirl soldiers. Advanced tech and crews. More marines than navy.',
		status: 'active',
		statusLabel: 'Military',
		featured: true
	},
	{
		id: 'I-03',
		title: 'Azure People Army',
		excerpt:
			'Secondary military force composed solely of Fablea-native residents. Rigid, parallel to Earthian military doctrine.',
		status: 'active',
		statusLabel: 'Military'
	},
	{
		id: 'I-04',
		title: 'K-Cruises',
		excerpt:
			'Budget yacht chartering and cruise rival to Income Makers. Owned by Karen of Spy x Family. Specializes in budget to luxury cruise tiers.',
		status: 'active',
		statusLabel: 'Institution'
	},
	{
		id: 'I-05',
		title: 'Teruhashi Conglomerate',
		excerpt:
			'Afrea-based empire spanning private education, entertainment media, and mining. Promotes the Afrea Yacht Show, the largest in Fablea.',
		status: 'active',
		statusLabel: 'Institution'
	},
	{
		id: 'I-06',
		title: 'Omi Alliance',
		excerpt:
			'Lawful-evil organization that rules eastern Taihei. Led by Jin Goda. Maintains good relations with Mankai-no-Wa and Prime Minister Hironaka.',
		status: 'restricted',
		statusLabel: 'Alliance'
	}
];

export const restrictedFiles: RestrictedFile[] = [
	{
		fileId: 'R-001',
		title: 'The Ascender',
		description:
			"An ultra-special device reserved for Azure Navy higher-ups and hmgfan's already-ascended lovers. Upon activation, it grants the target vast, mana-enhanced power. The device is a floating box that spews cables to the target.",
		note: 'The Ascended remain strictly human. Godhood is an impossibility. Current Third Ascension slots: 0 of 4.',
		accessLabel: 'Invitation only'
	},
	{
		fileId: 'R-002',
		title: 'Seapoint Estate',
		description:
			"Imperia's private 3-square-kilometer island, leased from Azure Land. A marvel of off-grid power, hidden coves, superyacht berths (DLux and SLux), and a fiercely loyal, superpower-equipped team led by Ho'olheyak.",
		accessLabel: 'Invitation only'
	}
];

export function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/['\u2019]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export interface NavGroup {
	key: string;
	sectionTitle: string;
	label: string;
	href: string;
	items: { label: string; anchor: string }[];
}

// One group per navigable section. `href` targets the section anchor;
// each `item.anchor` targets a card id, so every dropdown link resolves.
export const navGroups: NavGroup[] = [
	{
		key: 'regions',
		sectionTitle: 'Explore Fablea',
		label: 'Regions',
		href: '#regions',
		items: regions.map((r) => ({
			label: r.title,
			anchor: `#regions-${slugify(r.title)}`
		}))
	},
	{
		key: 'earthians',
		sectionTitle: 'The Earthians',
		label: 'Earthians',
		href: '#earthians',
		items: earthians.map((e) => ({
			label: e.name,
			anchor: `#earthians-${slugify(e.name)}`
		}))
	},
	{
		key: 'powers',
		sectionTitle: 'Powers Behind the Realm',
		label: 'Powers',
		href: '#powers',
		items: institutions.map((i) => ({
			label: i.title,
			anchor: `#powers-${slugify(i.title)}`
		}))
	},
	{
		key: 'restricted',
		sectionTitle: 'Restricted Archives',
		label: 'Restricted',
		href: '#restricted',
		items: restrictedFiles.map((f) => ({
			label: f.title,
			anchor: `#restricted-${slugify(f.title)}`
		}))
	}
];
