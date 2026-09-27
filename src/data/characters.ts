// Relationship-chart data: the figures filed alongside the twelve Earthians,
// and every edge on the chart. Sources of record: Earthians.md,
// EarthiansCopyPlan.md, and the region/institution strings in lore.ts.
// Nothing here adds a fact those sources do not file; where a dossier is
// thin, the copy says so in the archive idiom.

import { earthians, slugify } from './lore';

export interface DiagramCharacter {
	id: string;
	name: string;
	kind: 'earthian' | 'figure';
	/** Earthian archive number ('01'-'12'); absent for figures. */
	no?: string;
	title?: string;
	faction?: string;
	excerpt: string;
}

export type RelationshipKind = 'bond' | 'division' | 'rival';

export interface Relationship {
	from: string;
	to: string;
	/** Reads as "<from> <label> <to>" in the from-side dossier. */
	label: string;
	/** Reads as "<to> <reverse> <from>" in the to-side dossier; defaults to label. */
	reverse?: string;
	kind: RelationshipKind;
}

interface FigureInput {
	id: string;
	name: string;
	title?: string;
	faction?: string;
	excerpt: string;
}

const figures: FigureInput[] = [
	// hmgfan's circle (Earthians.md, HOSC / HPIC sections)
	{
		id: 'anna-nishikinomiya',
		name: 'Anna Nishikinomiya',
		title: 'CEO of Income Makers',
		faction: 'Income Makers',
		excerpt: 'Head of Income Makers. Created HOSC as hmgfan\u2019s long reach, and recommended the raising of HPIC.'
	},
	{
		id: 'hiyori-shiina',
		name: 'Hiyori Shiina',
		title: 'HOSC Leader',
		faction: 'HOSC',
		excerpt: 'Leads HOSC, the One-stop Service Club that acts as hmgfan\u2019s long hand while its members pass as ordinary citizens.'
	},
	{
		id: 'chiyo-shimada',
		name: 'Chiyo Shimada',
		title: 'HPIC Leader',
		faction: 'HPIC',
		excerpt: 'Leads HPIC, the Portfolio & Investment Club that invests across Fablea on hmgfan\u2019s behalf.'
	},
	{
		id: 'herminia-bertolini',
		name: 'Herminia Bertolini',
		excerpt: 'Equipped Alisha Elliott with ultra-vast powers and brought Lisette Johanssen to First Ascension. Few other facts filed.'
	},
	// Jenny Sinclair's circle (Earthians.md, fifth Earthian)
	{
		id: 'kumiko-oumae',
		name: 'Kumiko Oumae',
		excerpt: 'Loyal companion of Jenny Sinclair.'
	},
	{
		id: 'yuno',
		name: 'Yuno',
		excerpt: 'One of Jenny Sinclair\u2019s good friends, among the Hidamari Sketch girls.'
	},
	{
		id: 'miyako',
		name: 'Miyako',
		excerpt: 'One of Jenny Sinclair\u2019s good friends, among the Hidamari Sketch girls.'
	},
	{
		id: 'isadora',
		name: 'Isadora',
		excerpt: 'Converted Jenny Sinclair\u2019s Earth fortune to AZL. Came with the white portal that brought Lee Ji-ho to Fablea.'
	},
	// Akari Hoshino's circle (Earthians.md, sixth Earthian)
	{
		id: 'akiizumi-momiji',
		name: 'Akiizumi Momiji',
		excerpt: 'Loyal companion of Akari Hoshino.'
	},
	{
		id: 'hatsuzuki',
		name: 'Hatsuzuki',
		excerpt: 'Loyal companion of Akari Hoshino.'
	},
	{
		id: 'black-maria',
		name: 'Black Maria',
		title: 'CEO of Suichi Mining',
		faction: 'Suichi Mining',
		excerpt: 'Runs Suichi Mining, and is Akari Hoshino\u2019s current boss on the Suichi Island to Twin Isles cargo lines.'
	},
	// Mamiya Matsumoto's circle (Earthians.md, seventh Earthian)
	{
		id: 'itsuki-nakano',
		name: 'Itsuki Nakano',
		excerpt: 'Loyal companion of Mamiya Matsumoto.'
	},
	{
		id: 'kiryuu-kikyou',
		name: 'Kiryuu Kikyou',
		excerpt: 'Loyal companion of Mamiya Matsumoto.'
	},
	{
		id: 'elizabeth-crowskin',
		name: 'Elizabeth Crowskin',
		title: 'Fallen Queen of Argent Peaks',
		faction: 'Argent Peaks',
		excerpt: 'Ruled Argent Peaks until Mamiya Matsumoto toppled her.'
	},
	// Lisette Johanssen's circle (Earthians.md, eighth Earthian)
	{
		id: 'theoto-rikka',
		name: 'Theoto Rikka',
		excerpt: 'Loyal companion of Lisette Johanssen.'
	},
	{
		id: 'konoe-mina',
		name: 'Konoe Mina',
		excerpt: 'Loyal companion of Lisette Johanssen.'
	},
	{
		id: 'fu-xuan',
		name: 'Fu Xuan',
		excerpt: 'Loyal companion of Lisette Johanssen.'
	},
	// Natalie Halsey-Taylor's circle (Earthians.md, ninth Earthian)
	{
		id: 'pamiat-merkuria',
		name: 'Pamiat Merkuria',
		excerpt: 'Loyal companion of Natalie Halsey-Taylor.'
	},
	{
		id: 'yuzuriha',
		name: 'Yuzuriha',
		excerpt: 'Loyal companion of Natalie Halsey-Taylor.'
	},
	// Lee Ji-ho's circle (Earthians.md, tenth Earthian)
	{
		id: 'liscia-elfrieden',
		name: 'Liscia Elfrieden',
		excerpt: 'Helper to Lee Ji-ho and one of his loyal companions; the two can live in his spiritual house.'
	},
	{
		id: 'sunohara-kokona',
		name: 'Sunohara Kokona',
		excerpt: 'Helper to Lee Ji-ho and one of his loyal companions; the two can live in his spiritual house.'
	},
	{
		id: 'osakabehime',
		name: 'Osakabehime',
		excerpt: 'One of Lee Ji-ho\u2019s loyal companions, trained to be his DevOps.'
	},
	{
		id: 'diane-cross',
		name: 'Diane Cross',
		title: 'Media Mogul of Afrea',
		faction: 'Afrea',
		excerpt: 'One of the media moguls of Afrea. Loves Lee Ji-ho and is loved back; gifted his midnight blue suit.'
	},
	// Aika Yukimura's circle (Earthians.md, eleventh Earthian)
	{
		id: 'ayumi-shinozaki',
		name: 'Ayumi Shinozaki',
		excerpt: 'Loyal companion of Aika Yukimura.'
	},
	{
		id: 'rean-schwarzer',
		name: 'Rean Schwarzer',
		excerpt: 'Loyal companion of Aika Yukimura.'
	},
	// Katarina Petrenko's circle (Earthians.md, twelfth Earthian)
	{
		id: 'voroshilov',
		name: 'Voroshilov',
		excerpt: 'Light cruiser shipgirl. Katarina Petrenko\u2019s one loyal companion.'
	},
	// Takechi Hironaka's circle (Earthians.md, fourth Earthian)
	{
		id: 'hajime-tsukishima',
		name: 'Hajime Tsukishima',
		title: 'Team Icchi Leader',
		faction: 'Team Icchi',
		excerpt: 'Leads Team Icchi (Team Unity), the helpers of Takechi Hironaka.'
	},
	// Sivudlerk (lore.ts, region R-? body: People & Notable Residents)
	{
		id: 'roroa-amidonia',
		name: 'Roroa Amidonia',
		title: 'CEO of Amidonia Enterprises',
		faction: 'Amidonia Enterprises',
		excerpt: 'Owner and CEO of Amidonia Enterprises, based in Sivudlerk. The biggest business rival of Anna Nishikinomiya.'
	}
];

export const characters: DiagramCharacter[] = [
	...earthians.map((e) => ({
		id: slugify(e.name),
		name: e.name,
		kind: 'earthian' as const,
		no: e.no,
		title: e.title,
		excerpt: e.excerpt
	})),
	...figures.map((f) => ({ ...f, kind: 'figure' as const }))
];

export const relationships: Relationship[] = [
	// hmgfan's marriages, suitors, and divisions
	{ from: 'alisha-elliott', to: 'hmgfan', label: 'wife of', reverse: 'husband of', kind: 'bond' },
	{ from: 'akari-hoshino', to: 'hmgfan', label: 'wife of', reverse: 'husband of', kind: 'bond' },
	{ from: 'dina-agustina', to: 'hmgfan', label: 'arrived with', kind: 'bond' },
	{ from: 'jenny-sinclair', to: 'hmgfan', label: 'wants a place among his lovers', reverse: 'is wanted by', kind: 'bond' },
	{ from: 'natalie-halsey-taylor', to: 'hmgfan', label: 'devoted to', reverse: 'has the devotion of', kind: 'bond' },
	{ from: 'mamiya-matsumoto', to: 'hmgfan', label: 'loves', reverse: 'is loved by', kind: 'bond' },
	{ from: 'lisette-johanssen', to: 'hmgfan', label: 'loves', reverse: 'is loved by', kind: 'bond' },
	{ from: 'aika-yukimura', to: 'hmgfan', label: 'loves', reverse: 'is loved by', kind: 'bond' },
	{ from: 'anna-nishikinomiya', to: 'hmgfan', label: 'created HOSC for', reverse: 'has HOSC created by', kind: 'division' },
	{ from: 'hiyori-shiina', to: 'hmgfan', label: 'leads HOSC for', reverse: 'has HOSC led by', kind: 'division' },
	{ from: 'chiyo-shimada', to: 'hmgfan', label: 'leads HPIC for', reverse: 'has HPIC led by', kind: 'division' },
	// Ascension grants (Earthians.md, Alisha / Lisette / Mamiya entries)
	{ from: 'herminia-bertolini', to: 'alisha-elliott', label: 'granted ultra-vast powers to', reverse: 'granted ultra-vast powers by', kind: 'bond' },
	{ from: 'herminia-bertolini', to: 'lisette-johanssen', label: 'brought to First Ascension', reverse: 'brought to First Ascension by', kind: 'bond' },
	{ from: 'alisha-elliott', to: 'mamiya-matsumoto', label: 'granted First Ascension to', reverse: 'granted First Ascension by', kind: 'bond' },
	// Jenny Sinclair's circle
	{ from: 'jenny-sinclair', to: 'takechi-hironaka', label: 'summoned alongside', kind: 'bond' },
	{ from: 'kumiko-oumae', to: 'jenny-sinclair', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'yuno', to: 'jenny-sinclair', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'miyako', to: 'jenny-sinclair', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'isadora', to: 'jenny-sinclair', label: 'converted the fortune of', reverse: 'had her fortune converted by', kind: 'bond' },
	{ from: 'isadora', to: 'lee-ji-ho', label: 'comforted and brought through', reverse: 'comforted and brought through by', kind: 'bond' },
	// Akari Hoshino's circle
	{ from: 'akiizumi-momiji', to: 'akari-hoshino', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'hatsuzuki', to: 'akari-hoshino', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'black-maria', to: 'akari-hoshino', label: 'boss of', reverse: 'answers to', kind: 'division' },
	// Mamiya Matsumoto's circle
	{ from: 'itsuki-nakano', to: 'mamiya-matsumoto', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'kiryuu-kikyou', to: 'mamiya-matsumoto', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'mamiya-matsumoto', to: 'elizabeth-crowskin', label: 'toppled', reverse: 'toppled by', kind: 'rival' },
	// Lisette Johanssen's circle
	{ from: 'theoto-rikka', to: 'lisette-johanssen', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'konoe-mina', to: 'lisette-johanssen', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'fu-xuan', to: 'lisette-johanssen', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	// Natalie Halsey-Taylor's circle
	{ from: 'pamiat-merkuria', to: 'natalie-halsey-taylor', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'yuzuriha', to: 'natalie-halsey-taylor', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	// Lee Ji-ho's circle
	{ from: 'liscia-elfrieden', to: 'lee-ji-ho', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'sunohara-kokona', to: 'lee-ji-ho', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'osakabehime', to: 'lee-ji-ho', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'diane-cross', to: 'lee-ji-ho', label: 'loves, and is loved back', kind: 'bond' },
	// Aika Yukimura's circle
	{ from: 'ayumi-shinozaki', to: 'aika-yukimura', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	{ from: 'rean-schwarzer', to: 'aika-yukimura', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	// Katarina Petrenko's circle
	{ from: 'voroshilov', to: 'katarina-petrenko', label: 'loyal companion of', reverse: 'has as loyal companion', kind: 'bond' },
	// Takechi Hironaka's circle
	{ from: 'hajime-tsukishima', to: 'takechi-hironaka', label: 'leads Team Icchi for', reverse: 'has Team Icchi led by', kind: 'division' },
	// Sivudlerk rivalry (lore.ts region body)
	{ from: 'roroa-amidonia', to: 'anna-nishikinomiya', label: 'biggest business rival of', kind: 'rival' }
];

// Build-time integrity: a typo in an id must fail the build, not render a
// dangling edge or a silent duplicate.
const ids = characters.map((c) => c.id);
if (new Set(ids).size !== ids.length) {
	throw new Error('characters.ts: duplicate character id');
}
for (const r of relationships) {
	if (!ids.includes(r.from) || !ids.includes(r.to)) {
		throw new Error(`characters.ts: relationship references unknown id: ${r.from} -> ${r.to}`);
	}
}

/**
 * Fine-tuning hook for the chart: design-unit coordinates that override the
 * computed cluster layout for a single node, used when the automatic fan
 * placement needs a nudge. Coordinates live in a 1152 x 800 box.
 */
export const layoutOverrides: Record<string, { x: number; y: number }> = {};
