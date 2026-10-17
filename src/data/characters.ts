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
	origin?: string;
	excerpt: string;
}

const figures: FigureInput[] = [
	// hmgfan's circle (Earthians.md, HOSC / HPIC sections)
	{
		id: 'imperia',
		name: 'Imperia',
		title: 'CEO and owner of inFlow',
		faction: 'inFlow',
		origin: 'Final Gear',
		excerpt: 'Matriarch of inFlow. The main wife of hmgfan. Ultra-powerful.'
	},
	{
		id: 'anna-nishikinomiya',
		name: 'Anna Nishikinomiya',
		title: 'CEO of Income Makers',
		faction: 'Income Makers',
		origin: 'Shimoneta',
		excerpt: 'Head of Income Makers. Created HOSC as hmgfan\u2019s long reach, and recommended the raising of HPIC.'
	},
	{
		id: 'hiyori-shiina',
		name: 'Hiyori Shiina',
		title: 'HOSC Leader',
		faction: 'HOSC',
		origin: 'Classroom of the Elite',
		excerpt: 'Leads HOSC, the One-stop Service Club that acts as hmgfan\u2019s long hand while its members pass as ordinary citizens.'
	},
	{
		id: 'chiyo-shimada',
		name: 'Chiyo Shimada',
		title: 'HPIC Leader',
		faction: 'HPIC',
		origin: 'Girls und Panzer',
		excerpt: 'Leads HPIC, the Portfolio & Investment Club that invests across Fablea on hmgfan\u2019s behalf.'
	},
	{
		id: 'herminia-bertolini',
		name: 'Herminia Bertolini',
		origin: 'Octopath Traveler: Champions of the Continent',
		excerpt: 'Equipped Alisha Elliott with ultra-vast powers and brought Lisette Johanssen to First Ascension. Few other facts filed.'
	},
	// Dina Agustina's circle "The Equilibrium" (Earthians.md, second Earthian)
	{
		id: 'homelander',
		name: 'Homelander',
		origin: 'The Boys',
		excerpt: 'Leader of The Equilibrium, Dina\u2019s mercenary and companion group.'
	},
	{
		id: 'ellie-williams',
		name: 'Ellie Williams',
		origin: 'The Last of Us',
		excerpt: 'Member of The Equilibrium, sub-unit "Without Debt".'
	},
	{
		id: 'leia-organa',
		name: 'Leia Organa',
		origin: 'Star Wars',
		excerpt: 'Member of The Equilibrium, sub-unit "Without Debt".'
	},
	{
		id: 'takeo-masaki',
		name: 'Takeo Masaki',
		origin: 'Call of Duty Zombies',
		excerpt: 'Member of The Equilibrium, sub-unit "Without Debt".'
	},
	{
		id: 'farah-karim',
		name: 'Farah Karim',
		origin: 'Call of Duty: Modern Warfare (2019)',
		excerpt: 'Member of The Equilibrium, sub-unit "Without Debt".'
	},
	{
		id: 'coach',
		name: 'Coach',
		origin: 'Left 4 Dead 2',
		excerpt: 'Member of The Equilibrium, sub-unit "Without Debt".'
	},
	{
		id: 'ryoko-shinonome',
		name: 'Ryoko Shinonome',
		origin: '13 Sentinels: Aegis Rim',
		excerpt: 'Member of The Equilibrium, sub-unit "Excellent Credit".'
	},
	{
		id: 'kazuma-kiryu',
		name: 'Kazuma Kiryu',
		origin: 'Yakuza/Like a Dragon',
		excerpt: 'Member of The Equilibrium, sub-unit "Excellent Credit".'
	},
	{
		id: 'selvaria-bles',
		name: 'Selvaria Bles',
		origin: 'Valkyria Chronicles',
		excerpt: 'Member of The Equilibrium, sub-unit "Excellent Credit".'
	},
	{
		id: 'eren-yager',
		name: 'Eren Yeager',
		origin: 'Attack on Titan',
		excerpt: 'Member of The Equilibrium, sub-unit "Excellent Credit".'
	},
	{
		id: 'royal-arsenal',
		name: 'Royal Arsenal',
		origin: 'Last Origin',
		excerpt: 'Member of The Equilibrium, sub-unit "Excellent Credit".'
	},
	{
		id: 'kohta-hirano',
		name: 'Kohta Hirano',
		origin: 'Highschool of the Dead',
		excerpt: 'Member of The Equilibrium, sub-unit "Excellent Credit".'
	},
	// Jenny Sinclair's circle (Earthians.md, fifth Earthian)
	{
		id: 'kumiko-oumae',
		name: 'Kumiko Oumae',
		origin: 'Sound! Euphonium',
		excerpt: 'Loyal companion of Jenny Sinclair.'
	},
	{
		id: 'yuno',
		name: 'Yuno',
		origin: 'Hidamari Sketch',
		excerpt: 'One of Jenny Sinclair\u2019s good friends, among the Hidamari Sketch girls.'
	},
	{
		id: 'miyako',
		name: 'Miyako',
		origin: 'Hidamari Sketch',
		excerpt: 'One of Jenny Sinclair\u2019s good friends, among the Hidamari Sketch girls.'
	},
	{
		id: 'isadora',
		name: 'Isadora',
		excerpt: 'Converted most of the Earthians\u2019s Earth fortune to AZL. Came with the white portal or ressurection that brought those from Earth to Fablea.'
	},
	// Akari Hoshino's circle (Earthians.md, sixth Earthian)
	{
		id: 'akiizumi-momiji',
		name: 'Akiizumi Momiji',
		origin: 'Blue Archive',
		excerpt: 'Loyal companion of Akari Hoshino.'
	},
	{
		id: 'hatsuzuki',
		name: 'Hatsuzuki',
		origin: 'Azur Lane',
		excerpt: 'Loyal companion of Akari Hoshino.'
	},
	{
		id: 'black-maria',
		name: 'Black Maria',
		title: 'CEO of Suichi Mining',
		faction: 'Suichi Mining',
		origin: 'One Piece',
		excerpt: 'Runs Suichi Mining, and is Akari Hoshino\u2019s current boss on the Suichi Island to Twin Isles cargo lines.'
	},
	// Mamiya Matsumoto's circle (Earthians.md, seventh Earthian)
	{
		id: 'itsuki-nakano',
		name: 'Itsuki Nakano',
		origin: 'The Quintessential Quintuplets',
		excerpt: 'Loyal companion of Mamiya Matsumoto.'
	},
	{
		id: 'kiryuu-kikyou',
		name: 'Kiryuu Kikyou',
		origin: 'Blue Archive',
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
		origin: '86 -Eighty Six-',
		excerpt: 'Loyal companion of Lisette Johanssen.'
	},
	{
		id: 'konoe-mina',
		name: 'Konoe Mina',
		origin: 'Blue Archive',
		excerpt: 'Loyal companion of Lisette Johanssen.'
	},
	{
		id: 'fu-xuan',
		name: 'Fu Xuan',
		origin: 'Honkai Impact 3rd',
		excerpt: 'Loyal companion of Lisette Johanssen.'
	},
	// Natalie Halsey-Taylor's circle (Earthians.md, ninth Earthian)
	{
		id: 'pamiat-merkuria',
		name: 'Pamiat Merkuria',
		origin: 'Azur Lane',
		excerpt: 'Loyal companion of Natalie Halsey-Taylor.'
	},
	{
		id: 'yuzuriha',
		name: 'Yuzuriha',
		origin: 'Under Night In-Birth',
		excerpt: 'Loyal companion of Natalie Halsey-Taylor.'
	},
	// Lee Ji-ho's circle (Earthians.md, tenth Earthian)
	{
		id: 'liscia-elfrieden',
		name: 'Liscia Elfrieden',
		origin: 'How a Realist Hero Rebuilt the Kingdom',
		excerpt: 'Helper to Lee Ji-ho and one of his loyal companions; the two can live in his spiritual house.'
	},
	{
		id: 'sunohara-kokona',
		name: 'Sunohara Kokona',
		origin: 'Blue Archive',
		excerpt: 'Helper to Lee Ji-ho and one of his loyal companions; the two can live in his spiritual house.'
	},
	{
		id: 'osakabehime',
		name: 'Osakabehime',
		origin: 'Fate/Grand Order',
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
		origin: 'Corpse Party',
		excerpt: 'Loyal companion of Aika Yukimura.'
	},
	{
		id: 'rean-schwarzer',
		name: 'Rean Schwarzer',
		origin: 'Trails of Cold Steel',
		excerpt: 'Loyal companion of Aika Yukimura.'
	},
	// Katarina Petrenko's circle (Earthians.md, twelfth Earthian)
	{
		id: 'voroshilov',
		name: 'Voroshilov',
		origin: 'Azur Lane',
		excerpt: 'Light cruiser shipgirl. Katarina Petrenko\u2019s one loyal companion.'
	},
	// Takechi Hironaka's circle (Earthians.md, fourth Earthian)
	{
		id: 'hajime-tsukishima',
		name: 'Hajime Tsukishima',
		title: 'Team Icchi Leader',
		faction: 'Team Icchi',
		origin: 'Golden Kamuy',
		excerpt: 'Leads Team Icchi (Team Unity), the helpers of Takechi Hironaka.'
	},
	// Sivudlerk (lore.ts, region R-? body: People & Notable Residents)
	{
		id: 'roroa-amidonia',
		name: 'Roroa Amidonia',
		title: 'CEO of Amidonia Enterprises',
		faction: 'Amidonia Enterprises',
		origin: 'How a Realist Hero Rebuilt the Kingdom',
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
	{ from: 'imperia', to: 'hmgfan', label: 'wife of', reverse: 'husband of', kind: 'bond' },
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
	// The Equilibrium
	{ from: 'homelander', to: 'dina-agustina', label: 'leads The Equilibrium for', reverse: 'has as loyal companion', kind: 'division' },
	{ from: 'ellie-williams', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'leia-organa', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'takeo-masaki', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'farah-karim', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'coach', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'ryoko-shinonome', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'kazuma-kiryu', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'selvaria-bles', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'eren-yager', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'royal-arsenal', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
	{ from: 'kohta-hirano', to: 'homelander', label: 'follower of', reverse: 'has as subordinate', kind: 'division' },
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
 * placement needs a nudge. Paste the JSON from the chart's "Copy layout"
 * button here (drag nodes on /characters/, then copy) to make an arrangement
 * the build-time default for every visitor. An empty object restores the pure
 * computed layout.
 */
export const layoutOverrides: Record<string, { x: number; y: number }> = {};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CHARACTER DOSSIERS
// Vesper-City dossier structure adapted for Fablea: 8 sections
// (Identity / History / Record / Incident / Archive / Associations /
//  Blackthorn / Final Note). Each entry pulls facts from the lorebook;
// thin files use the archive idiom ("NOT ON FILE", "ARCHIVE PENDING").
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/** Dossier status maps to StatusBadge variant in DESIGN.md section 6.2. */
export type DossierStatus = 'active' | 'restricted' | 'pending' | 'neutral';

export interface DossierIdentity {
	legalName: string;
	title?: string;
	faction?: string;
	alias?: string;
	age?: string;
	birth?: string;
	family?: string;
	origin?: string;
}

export interface DossierRecordEntry {
	label: string;
	detail: string;
}

export interface DossierAssociation {
	role: string;
	name: string;
	description: string;
	characterId?: string;
}

export interface DossierSections {
	identity: DossierIdentity;
	history: string;
	record: DossierRecordEntry[];
	incident: { title: string; body: string };
	archive: string;
	associations: DossierAssociation[];
	blackthorn: string;
	finalNote: string;
}

export interface CharacterDossier {
	characterId: string;
	fileId: string;
	fileTitle: string;
	accessLevel: string;
	status: DossierStatus;
	facility?: string;
	risk?: string;
	sections: DossierSections;
}



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CHARACTER DOSSIERS
// Vesper-City dossier structure adapted for Fablea: 8 sections
// (Identity / History / Record / Incident / Archive / Associations /
//  Blackthorn / Final Note). Each entry pulls facts from the lorebook;
// thin files use the archive idiom ("NOT ON FILE", "ARCHIVE PENDING").
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const dossiers: CharacterDossier[] = [
  {
    "characterId": "hmgfan",
    "fileId": "C-01 / hmgfan",
    "fileTitle": "hmgfan",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Seapoint Estate / Sigma-lux / Delta-lux / Xi-otic / Cosmos / Yume",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "hmgfan",
        "alias": "The Ascender",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified blood relation.",
        "origin": "Summoned from Earth via The Summoning (Day 0, First Arrival)."
      },
      "history": "hmgfan is the first Earthian summoned to Fablea, titled Harem Maker. He arrived alone in Northport, Azure Land, and built an informal empire of romantic and business entanglements.",
      "record": [
        {
          "label": "SUMMONING",
          "detail": "First Earthian. Arrived Day 0 at Northport, Azure Land."
        },
        {
          "label": "Ascensions",
          "detail": "Ascended: Alisha Elliott (First), Mamiya Matsumoto (First via Alisha), Akari Hoshino (Second). Third Ascension: 0/4."
        },
        {
          "label": "Superyacht ownership",
          "detail": "Delta-lux, Sigma-lux, Xi-otic, Cosmos, Hoshino Nap."
        },
        {
          "label": "Business empire",
          "detail": "Infinite Sea, Seapoint Estate, secret Deck Zero network."
        }
      ],
      "incident": {
        "title": "The University Incident",
        "body": "An individual identifying as Voile attempted to seize control of Vesper University during a national congress. The operation was interrupted; the subject was captured."
      },
      "archive": "No verified birth record. No childhood documentation. No pre-summoning financial trail.",
      "associations": [
        {
          "role": "Wife of",
          "name": "Imperia",
          "description": "Matriarch of inFlow. Main wife.",
          "characterId": "imperia"
        },
        {
          "role": "Wife of",
          "name": "Alisha Elliott",
          "description": "Absolute Seductress. First Ascension.",
          "characterId": "alisha-elliott"
        },
        {
          "role": "Wife of",
          "name": "Akari Hoshino",
          "description": "Energetic Train Idol.",
          "characterId": "akari-hoshino"
        },
        {
          "role": "Devoted to",
          "name": "Dina Agustina",
          "description": "Master of Financing.",
          "characterId": "dina-agustina"
        },
        {
          "role": "Target of",
          "name": "Jenny Sinclair",
          "description": "Relentless Actress.",
          "characterId": "jenny-sinclair"
        },
        {
          "role": "Devoted to",
          "name": "Natalie Halsey-Taylor",
          "description": "Logistics Queen.",
          "characterId": "natalie-halsey-taylor"
        },
        {
          "role": "Loved by",
          "name": "Mamiya Matsumoto",
          "description": "Femme Fatale Oligarch.",
          "characterId": "mamiya-matsumoto"
        },
        {
          "role": "Loved by",
          "name": "Lisette Johanssen",
          "description": "Digital Master.",
          "characterId": "lisette-johanssen"
        },
        {
          "role": "Loved by",
          "name": "Aika Yukimura",
          "description": "Master Influencer.",
          "characterId": "aika-yukimura"
        },
        {
          "role": "Created HOSC for",
          "name": "Anna Nishikinomiya",
          "description": "CEO of Income Makers.",
          "characterId": "anna-nishikinomiya"
        },
        {
          "role": "Has HOSC led by",
          "name": "Hiyori Shiina",
          "description": "HOSC Leader.",
          "characterId": "hiyori-shiina"
        },
        {
          "role": "Has HPIC led by",
          "name": "Chiyo Shimada",
          "description": "HPIC Leader.",
          "characterId": "chiyo-shimada"
        }
      ],
      "blackthorn": "hmgfan operates outside formal institutional constraints. He is the de facto sovereign of his yacht-based domain.",
      "finalNote": "No verified explanation exists for the years before the Summoning. The Third Ascension chamber sits empty at 0 of 4."
    }
  },
  {
    "characterId": "dina-agustina",
    "fileId": "C-02 / dina-agustina",
    "fileTitle": "Dina Agustina",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Agustina Offshore Financing, Calding Village",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Dina Agustina",
        "alias": "The Calculator",
        "age": "Mid-twenties",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned alongside hmgfan (Day 0, simultaneous arrival)."
      },
      "history": "Dina Agustina, the second Earthian, arrived simultaneously with hmgfan. Her mundane accounting skills manifested as supernatural abilities: infinite calculation power, mind-reading, vast energy. She leads The Equilibrium mercenary group.",
      "record": [
        {
          "label": "THE EQUILIBRIUM",
          "detail": "Mercenary group leader. Two sub-units: Without Debt and Excellent Credit."
        },
        {
          "label": "Agustina Offshore Financing",
          "detail": "CEO and owner. Ultra-thorough KYC for all clients."
        },
        {
          "label": "Supernatural abilities",
          "detail": "Infinite calculation, mind-reading, vast energy."
        }
      ],
      "incident": {
        "title": "The Equilibrium Formation",
        "body": "Prior to Dina's arrival, Homelander led The Equilibrium. Upon her summoning, she asserted leadership, reorganizing into two sub-units."
      },
      "archive": "Dina's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Arrived with",
          "name": "hmgfan",
          "description": "First Earthian. Simultaneous arrival.",
          "characterId": "hmgfan"
        },
        {
          "role": "Leads The Equilibrium for",
          "name": "Homelander",
          "description": "Field commander of Without Debt.",
          "characterId": "homelander"
        },
        {
          "role": "Has as subordinates",
          "name": "Ellie Williams",
          "description": "Without Debt member.",
          "characterId": "ellie-williams"
        },
        {
          "role": "Has as subordinates",
          "name": "Leia Organa",
          "description": "Without Debt member.",
          "characterId": "leia-organa"
        },
        {
          "role": "Has as subordinates",
          "name": "Takeo Masaki",
          "description": "Without Debt member.",
          "characterId": "takeo-masaki"
        },
        {
          "role": "Has as subordinates",
          "name": "Farah Karim",
          "description": "Without Debt member.",
          "characterId": "farah-karim"
        },
        {
          "role": "Has as subordinates",
          "name": "Coach",
          "description": "Without Debt member.",
          "characterId": "coach"
        },
        {
          "role": "Has as subordinates",
          "name": "Ryoko Shinonome",
          "description": "Excellent Credit member.",
          "characterId": "ryoko-shinonome"
        },
        {
          "role": "Has as subordinates",
          "name": "Kazuma Kiryu",
          "description": "Excellent Credit member.",
          "characterId": "kazuma-kiryu"
        },
        {
          "role": "Has as subordinates",
          "name": "Selvaria Bles",
          "description": "Excellent Credit member.",
          "characterId": "selvaria-bles"
        },
        {
          "role": "Has as subordinates",
          "name": "Eren Yeager",
          "description": "Excellent Credit member.",
          "characterId": "eren-yager"
        },
        {
          "role": "Has as subordinates",
          "name": "Royal Arsenal",
          "description": "Excellent Credit member.",
          "characterId": "royal-arsenal"
        },
        {
          "role": "Has as subordinates",
          "name": "Kohta Hirano",
          "description": "Excellent Credit member.",
          "characterId": "kohta-hirano"
        }
      ],
      "blackthorn": "Dina operates from Agustina Offshore Financing. Her supernatural abilities make her a threat assessment priority.",
      "finalNote": "Dina's pre-summoning identity as an accountant is unverified. Whether The Equilibrium existed before her arrival is unknown."
    }
  },
  {
    "characterId": "alisha-elliott",
    "fileId": "C-03 / alisha-elliott",
    "fileTitle": "Alisha Elliott",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Residential Tower, Sector 9-FL112",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Alisha Elliott",
        "alias": "The Seducer",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year after hmgfan. Previously richest in Fablea."
      },
      "history": "Alisha Elliott, titled Absolute Seductress, is the third Earthian. She arrived one year after hmgfan and became the wealthiest person in Fablea (AZL 234 billion). Her wealth funded A.f.H. (All for Him), a covert ops group.",
      "record": [
        {
          "label": "A.f.H.",
          "detail": "Leader of All for Him. Covert ops group."
        },
        {
          "label": "Wealth",
          "detail": "AZL 234 billion."
        },
        {
          "label": "Ascension",
          "detail": "First to receive Ascension from Herminia Bertolini."
        },
        {
          "label": "Property",
          "detail": "Two towers on Sector 9-FL112."
        }
      ],
      "incident": {
        "title": "First Ascension",
        "body": "Herminia Bertolini equipped Alisha with ultra-vast powers. Alisha then granted First Ascension to Mamiya Matsumoto."
      },
      "archive": "Alisha's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Wife of",
          "name": "hmgfan",
          "description": "First to receive Ascension.",
          "characterId": "hmgfan"
        },
        {
          "role": "Grants First Ascension to",
          "name": "Mamiya Matsumoto",
          "description": "Seventh Earthian.",
          "characterId": "mamiya-matsumoto"
        },
        {
          "role": "Equipped with powers by",
          "name": "Herminia Bertolini",
          "description": "Octopath Traveler origin.",
          "characterId": "herminia-bertolini"
        },
        {
          "role": "Commands loyalist",
          "name": "Semiramis",
          "description": "A.f.H. operative.",
          "characterId": null
        }
      ],
      "blackthorn": "Alisha operates A.f.H. under hmgfan's permission. Jointly owns residential towers.",
      "finalNote": "No verified explanation for pre-summoning wealth. Power transfer repeatability unknown."
    }
  },
  {
    "characterId": "takechi-hironaka",
    "fileId": "C-04 / takechi-hironaka",
    "fileTitle": "Takechi Hironaka",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Prime Minister's Office, Taihei",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Takechi Hironaka",
        "alias": "The Unifier",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year after hmgfan. Fourth Earthian."
      },
      "history": "Takechi Hironaka, titled Great Unifier, is the fourth Earthian and Prime Minister of Taihei. He resolved the conflict between Omi Alliance and Mankai-no-Wa. His helpers form Team Icchi.",
      "record": [
        {
          "label": "Prime Ministership",
          "detail": "Leader of Taihei. Unified eastern and western factions."
        },
        {
          "label": "Team Icchi",
          "detail": "Helpers. Leader: Hajime Tsukishima."
        },
        {
          "label": "Omi Alliance relations",
          "detail": "Good working relationship with Jin Goda."
        },
        {
          "label": "Mankai-no-Wa relations",
          "detail": "Shares governance with Tsukatsuki Rio."
        }
      ],
      "incident": {
        "title": "The Unification of Taihei",
        "body": "Upon Takechi's arrival, the conflict between Omi Alliance and Mankai-no-Wa was resolved. He became Prime Minister of the reorganized Taihei state."
      },
      "archive": "Takechi's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Summoned alongside",
          "name": "Jenny Sinclair",
          "description": "Fifth Earthian.",
          "characterId": "jenny-sinclair"
        },
        {
          "role": "Team Icchi led by",
          "name": "Hajime Tsukishima",
          "description": "Team Icchi leader.",
          "characterId": "hajime-tsukishima"
        },
        {
          "role": "Shares power with",
          "name": "Jin Goda",
          "description": "Omi Alliance leader.",
          "characterId": null
        },
        {
          "role": "Shares power with",
          "name": "Tsukatsuki Rio",
          "description": "Mankai-no-Wa leader.",
          "characterId": null
        }
      ],
      "blackthorn": "As Prime Minister of Taihei, Takechi operates within formal governmental structure.",
      "finalNote": "No verified explanation for how he unified Taihei so rapidly."
    }
  },
  {
    "characterId": "jenny-sinclair",
    "fileId": "C-05 / jenny-sinclair",
    "fileTitle": "Jenny Sinclair",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Yume Luxury Liner, Apt. 26",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Jenny Sinclair",
        "alias": "The Performer",
        "age": "Mid-twenties",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year after hmgfan. Fifth Earthian. Elite actress."
      },
      "history": "Jenny Sinclair, titled Relentless Actress, is the fifth Earthian. She arrived one year after hmgfan, summoned concurrently with Takechi Hironaka. She is an elite actress and media personality. She resides aboard the Yume gigayacht liner in Apt. 26, shared with Kumiko Oumae, Yuno, and Miyako.",
      "record": [
        {
          "label": "Media career",
          "detail": "Elite actress and media personality."
        },
        {
          "label": "Yume residency",
          "detail": "Apt. 26 aboard the Yume gigayacht liner."
        }
      ],
      "incident": {
        "title": "Concurrent Arrival",
        "body": "Jenny arrived simultaneously with Takechi Hironaka, one year after hmgfan."
      },
      "archive": "Jenny's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Summoned alongside",
          "name": "Takechi Hironaka",
          "description": "Fourth Earthian.",
          "characterId": "takechi-hironaka"
        },
        {
          "role": "Target of",
          "name": "hmgfan",
          "description": "Seeks a place among his lovers.",
          "characterId": "hmgfan"
        },
        {
          "role": "Household member",
          "name": "Kumiko Oumae",
          "description": "Shared Apt. 26.",
          "characterId": "kumiko-oumae"
        },
        {
          "role": "Household member",
          "name": "Yuno",
          "description": "Shared Apt. 26.",
          "characterId": "yuno"
        },
        {
          "role": "Household member",
          "name": "Miyako",
          "description": "Shared Apt. 26.",
          "characterId": "miyako"
        },
        {
          "role": "Fortune converted by",
          "name": "Isadora",
          "description": "Converted Jenny's Earth fortune to AZL.",
          "characterId": "isadora"
        }
      ],
      "blackthorn": "Jenny operates as a media personality aboard the Yume gigayacht liner.",
      "finalNote": "No verified explanation for Jenny's pre-summoning acting career."
    }
  },
  {
    "characterId": "akari-hoshino",
    "fileId": "C-06 / akari-hoshino",
    "fileTitle": "Akari Hoshino",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Suichi Island",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Akari Hoshino",
        "alias": "The Engineer",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year after hmgfan. Sixth Earthian. Ex-idol, master train driver."
      },
      "history": "Akari Hoshino, titled Energetic Train Idol, is the sixth Earthian. She arrived one year after hmgfan and took up residence on Suichi Island, serving as master train driver for Suichi Mining and automating the freight trains. Her current boss is Black Maria, CEO of Suichi Mining.",
      "record": [
        {
          "label": "Suichi Mining",
          "detail": "Master train driver. Automating freight trains."
        },
        {
          "label": "Previous career",
          "detail": "Japanese idol."
        },
        {
          "label": "Ascension",
          "detail": "Second Ascension with Sovetsky Soyuz."
        }
      ],
      "incident": {
        "title": "Second Ascension at Suichi",
        "body": "Akari received her Second Ascension through the Ascender device, conducted jointly with Sovetsky Soyuz on Suichi Island."
      },
      "archive": "Akari's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Wife of",
          "name": "hmgfan",
          "description": "Ascended via Second Ascension.",
          "characterId": "hmgfan"
        },
        {
          "role": "Boss of",
          "name": "Black Maria",
          "description": "CEO of Suichi Mining.",
          "characterId": "black-maria"
        },
        {
          "role": "Loyal companion",
          "name": "Akiizumi Momiji",
          "description": "Blue Archive origin.",
          "characterId": "akiizumi-momiji"
        },
        {
          "role": "Loyal companion",
          "name": "Hatsuzuki",
          "description": "Azur Lane origin.",
          "characterId": "hatsuzuki"
        },
        {
          "role": "Ascended with",
          "name": "Sovetsky Soyuz",
          "description": "Joint Second Ascension.",
          "characterId": null
        }
      ],
      "blackthorn": "Akari is stationed on Suichi Island under Suichi Mining. As an ascended wife of hmgfan, she has Deck Zero access.",
      "finalNote": "No verified explanation for Akari's transition from ex-idol to industrial operator."
    }
  },
  {
    "characterId": "mamiya-matsumoto",
    "fileId": "C-07 / mamiya-matsumoto",
    "fileTitle": "Mamiya Matsumoto",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Argent Peaks / Silent Verdict",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Mamiya Matsumoto",
        "alias": "The Oligarch",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year after hmgfan. Seventh Earthian. President of Argent Peaks."
      },
      "history": "Mamiya Matsumoto, titled Femme Fatale Oligarch, is the seventh Earthian and President of Argent Peaks. She overthrew Queen Elizabeth Crowskin and seized control. She owns the yacht Silent Verdict and received First Ascension from Alisha Elliott.",
      "record": [
        {
          "label": "Presidency",
          "detail": "President of Argent Peaks. Overthrew Queen Elizabeth Crowskin."
        },
        {
          "label": "Yacht ownership",
          "detail": "Silent Verdict (Mærsk Recorder-based superyacht)."
        },
        {
          "label": "Ascension",
          "detail": "First Ascension granted by Alisha Elliott."
        },
        {
          "label": "Ascension grant",
          "detail": "Granted First Ascension to Elizabeth Crowley."
        }
      ],
      "incident": {
        "title": "The Fall of Argent Peaks",
        "body": "Mamiya overthrew Queen Elizabeth Crowskin, taking control of Argent Peaks. Alisha Elliott granted her First Ascension, instrumental in the coup. Mamiya then passed the power to Elizabeth Crowley, the True Soul of Silent Verdict."
      },
      "archive": "Mamiya's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Wife of",
          "name": "hmgfan",
          "description": "Seventh Earthian. First Ascension from Alisha.",
          "characterId": "hmgfan"
        },
        {
          "role": "Grants First Ascension to",
          "name": "Elizabeth Crowskin",
          "description": "Fallen Queen of Argent Peaks.",
          "characterId": "elizabeth-crowskin"
        },
        {
          "role": "Ascended by",
          "name": "Alisha Elliott",
          "description": "Third Earthian.",
          "characterId": "alisha-elliott"
        },
        {
          "role": "Loyal companion",
          "name": "Itsuki Nakano",
          "description": "The Quintessential Quintuplets origin.",
          "characterId": "itsuki-nakano"
        },
        {
          "role": "Loyal companion",
          "name": "Kiryuu Kikyou",
          "description": "Blue Archive origin.",
          "characterId": "kiryuu-kikyou"
        }
      ],
      "blackthorn": "Mamiya operates as President of Argent Peaks, a contested monarchy-turned-republic. Her yacht Silent Verdict is a key Azure Navy asset.",
      "finalNote": "No verified explanation for Mamiya's pre-summoning political ambitions. Whether Elizabeth Crowskin and Elizabeth Crowley are one person remains reconciled."
    }
  },
  {
    "characterId": "lisette-johanssen",
    "fileId": "C-08 / lisette-johanssen",
    "fileTitle": "Lisette Johanssen",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Cosmos Yacht / Wraiting Inc.",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Lisette Johanssen",
        "alias": "The Architect",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year after hmgfan. Eighth Earthian. CEO of Wraiting Inc."
      },
      "history": "Lisette Johanssen, titled Digital Master, is the eighth Earthian and CEO of Wraiting Inc. She operates the flat-profiled explorer superyacht Cosmos, capable of icebreaking and equipped with loyal robots. She received First Ascension from Herminia Bertolini.",
      "record": [
        {
          "label": "Wraiting Inc.",
          "detail": "CEO and owner. Digital solutions enterprise."
        },
        {
          "label": "Yacht ownership",
          "detail": "Cosmos (explorer superyacht with icebreaking capability)."
        },
        {
          "label": "Ascension",
          "detail": "First Ascension granted by Herminia Bertolini."
        }
      ],
      "incident": {
        "title": "First Ascension via Herminia",
        "body": "Lisette was brought to First Ascension by Herminia Bertolini through direct power transfer, not via the Ascender device. She has Deck Zero access via Yamris."
      },
      "archive": "Lisette's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Wife of",
          "name": "hmgfan",
          "description": "Eighth Earthian. Loves hmgfan.",
          "characterId": "hmgfan"
        },
        {
          "role": "Ascended by",
          "name": "Herminia Bertolini",
          "description": "Direct power transfer.",
          "characterId": "herminia-bertolini"
        },
        {
          "role": "Loyal companion",
          "name": "Theoto Rikka",
          "description": "86 -Eighty Six- origin.",
          "characterId": "theoto-rikka"
        },
        {
          "role": "Loyal companion",
          "name": "Konoe Mina",
          "description": "Blue Archive origin.",
          "characterId": "konoe-mina"
        },
        {
          "role": "Loyal companion",
          "name": "Fu Xuan",
          "description": "Honkai Impact 3rd origin.",
          "characterId": "fu-xuan"
        }
      ],
      "blackthorn": "Lisette operates Wraiting Inc. and commands the Cosmos yacht. Her ascended status grants Deck Zero access via Yamris.",
      "finalNote": "No verified explanation for Lisette's pre-summoning digital expertise. The direct power transfer mechanism differs from the Ascender protocol."
    }
  },
  {
    "characterId": "natalie-halsey-taylor",
    "fileId": "C-09 / natalie-halsey-taylor",
    "fileTitle": "Natalie Halsey-Taylor",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "HT Logistics / Silent Dagger",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Natalie Halsey-Taylor",
        "alias": "The Logistics Queen",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year, two months after hmgfan. Ninth Earthian. CEO of HT Logistics."
      },
      "history": "Natalie Halsey-Taylor, titled Logistics Queen, is the ninth Earthian. She arrived one year and two months after hmgfan and operates HT Logistics. She owns the superyacht Silent Dagger, whose True Soul is Pamiat Merkuria, a light cruiser shipgirl from Azur Lane. With Pamiat aboard, the yacht cruises without seasickness.\n\nShe is devoted to hmgfan and commands the HT Logistics fleet.",
      "record": [
        {
          "label": "HT Logistics",
          "detail": "CEO and owner. Logistics and transportation enterprise."
        },
        {
          "label": "Yacht ownership",
          "detail": "Silent Dagger. True Soul: Pamiat Merkuria (Azur Lane)."
        },
        {
          "label": "Devotion",
          "detail": "Deeply devoted to hmgfan."
        }
      ],
      "incident": {
        "title": "Silent Dagger Commission",
        "body": "Natalie commissioned the Silent Dagger superyacht, based on Roman Abramovich's Venus design. The yacht's True Soul, Pamiat Merkuria, ensures smooth cruising without seasickness for all aboard."
      },
      "archive": "Natalie's life before the Summoning is entirely unverified. Her expertise in logistics emerged immediately upon arrival.",
      "associations": [
        {
          "role": "Devoted to",
          "name": "hmgfan",
          "description": "Ninth Earthian. Commands HT Logistics fleet.",
          "characterId": "hmgfan"
        },
        {
          "role": "True Soul aboard",
          "name": "Pamiat Merkuria",
          "description": "Light cruiser shipgirl. Azur Lane origin.",
          "characterId": "pamiat-merkuria"
        },
        {
          "role": "Loyal companion",
          "name": "Yuzuriha",
          "description": "Under Night In-Birth origin.",
          "characterId": "yuzuriha"
        }
      ],
      "blackthorn": "Natalie operates HT Logistics as a commercial enterprise. Her yacht Silent Dagger is a key asset in the Azure Navy's auxiliary fleet.",
      "finalNote": "No verified explanation for Natalie's pre-summoning logistics expertise. Whether her devotion to hmgfan is natural or Ascension-enhanced is unknown."
    }
  },
  {
    "characterId": "lee-ji-ho",
    "fileId": "C-10 / lee-ji-ho",
    "fileTitle": "Lee Ji-ho",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Self-employed / Spiritual House",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Lee Ji-ho",
        "alias": "The Fullstacker",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year, two months after hmgfan. Tenth Earthian. Senior fullstack programmer."
      },
      "history": "Lee Ji-ho, titled Thorough Fullstacker, is the tenth Earthian. He arrived one year and two months after hmgfan and works as a senior fullstack programmer. He is one of the Earthians whose fortune was converted to AZL by Isadora, who came and comforted him during the portal transition.\n\nHis spiritual house can accommodate multiple companions. His loyal companions include Liscia Elfrieden, Sunohara Kokona, Osakabehime, and Diane Cross.",
      "record": [
        {
          "label": "Programming",
          "detail": "Senior fullstack programmer. Self-employed."
        },
        {
          "label": "Fortune conversion",
          "detail": "Earth fortune converted to AZL by Isadora."
        },
        {
          "label": "Spiritual house",
          "detail": "Liscia Elfrieden and Sunohara Kokona can live in his spiritual house."
        }
      ],
      "incident": {
        "title": "The Portal Transition",
        "body": "Isadora came and comforted Lee Ji-ho during his transition through the summoning portal. His Earth fortune was converted to AZL currency for use in Fablea."
      },
      "archive": "Lee Ji-ho's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Arrived with",
          "name": "Isadora",
          "description": "Converted his fortune to AZL. Comforted him during portal transition.",
          "characterId": "isadora"
        },
        {
          "role": "Loyal companion",
          "name": "Liscia Elfrieden",
          "description": "Can live in his spiritual house.",
          "characterId": "liscia-elfrieden"
        },
        {
          "role": "Loyal companion",
          "name": "Sunohara Kokona",
          "description": "Can live in his spiritual house.",
          "characterId": "sunohara-kokona"
        },
        {
          "role": "Loyal companion",
          "name": "Osakabehime",
          "description": "Trained to be his DevOps.",
          "characterId": "osakabehime"
        },
        {
          "role": "Loved by",
          "name": "Diane Cross",
          "description": "Gifted him a midnight blue suit.",
          "characterId": "diane-cross"
        }
      ],
      "blackthorn": "Lee Ji-ho operates as a self-employed programmer. His spiritual house is a unique spatial domain.",
      "finalNote": "No verified explanation for Lee Ji-ho's pre-summoning programming expertise."
    }
  },
  {
    "characterId": "aika-yukimura",
    "fileId": "C-11 / aika-yukimura",
    "fileTitle": "Aika Yukimura",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Self-employed",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Aika Yukimura",
        "alias": "The Influencer",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year, three months after hmgfan. Eleventh Earthian. Influencer and celebrity."
      },
      "history": "Aika Yukimura, titled Master Influencer, is the eleventh Earthian. She arrived one year and three months after hmgfan and works as an influencer and celebrity. Her companions are Ayumi Shinozaki and Rean Schwarzer.",
      "record": [
        {
          "label": "Influencer career",
          "detail": "Celebrity influencer with significant social media presence."
        },
        {
          "label": "Companions",
          "detail": "Ayumi Shinozaki, Rean Schwarzer."
        }
      ],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No major incident documented."
      },
      "archive": "Aika's life before the Summoning is entirely unverified.",
      "associations": [
        {
          "role": "Loves",
          "name": "hmgfan",
          "description": "One of his wives.",
          "characterId": "hmgfan"
        },
        {
          "role": "Loyal companion",
          "name": "Ayumi Shinozaki",
          "description": "Corpse Party origin.",
          "characterId": "ayumi-shinozaki"
        },
        {
          "role": "Loyal companion",
          "name": "Rean Schwarzer",
          "description": "Trails of Cold Steel origin.",
          "characterId": "rean-schwarzer"
        }
      ],
      "blackthorn": "Aika operates as a self-employed influencer. No formal institutional affiliation.",
      "finalNote": "No verified explanation for Aika's pre-summoning celebrity status."
    }
  },
  {
    "characterId": "katarina-petrenko",
    "fileId": "C-12 / katarina-petrenko",
    "fileTitle": "Katarina Petrenko",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Military / Mechanized Infantry",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Katarina Petrenko",
        "alias": "The Signal",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Summoned one year, three months after hmgfan. Twelfth Earthian. Soldier, mechanized infantry engineer."
      },
      "history": "Katarina Petrenko, titled Smoke Signal, is the twelfth and final Earthian. She arrived one year and three months after hmgfan and is still very fresh. She is a soldier and mechanized infantry engineer. Her one loyal companion is Voroshilov, a light cruiser shipgirl from Azur Lane.",
      "record": [
        {
          "label": "Military service",
          "detail": "Soldier. Mechanized infantry engineer."
        },
        {
          "label": "Companion",
          "detail": "Voroshilov, light cruiser shipgirl (Azur Lane origin)."
        }
      ],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No major incident documented. The subject is still fresh to Fablea."
      },
      "archive": "Katarina's life before the Summoning is entirely unverified. She is the most recent Earthian arrival.",
      "associations": [
        {
          "role": "Loyal companion",
          "name": "Voroshilov",
          "description": "Light cruiser shipgirl. Katarina's one loyal companion.",
          "characterId": "voroshilov"
        }
      ],
      "blackthorn": "Katarina operates within a military framework. Her role as a mechanized infantry engineer is classified.",
      "finalNote": "Katarina is still fresh to Fablea. Her full capabilities and military record have not yet been filed."
    }
  },
  {
    "characterId": "black-maria",
    "fileId": "C-FIG / black-maria",
    "fileTitle": "Black Maria",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Suichi Mining HQ, Suichi Island",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Black Maria",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "One Piece. CEO of Suichi Mining."
      },
      "history": "Black Maria is the CEO of Suichi Mining on Suichi Island. She is Akari Hoshino current boss on the cargo lines. Suichi Islands central city ruins have been converted to a nanomaterial mining facility under her leadership.",
      "record": [
        {
          "label": "Suichi Mining",
          "detail": "CEO. Nanomaterial mining facility."
        },
        {
          "label": "Cargo ops",
          "detail": "Oversees Suichi to Twin Isles cargo lines."
        }
      ],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "Black Maria life before One Piece is unverified.",
      "associations": [
        {
          "role": "Boss of",
          "name": "Akari Hoshino",
          "description": "Master train driver. Sixth Earthian.",
          "characterId": "akari-hoshino"
        }
      ],
      "blackthorn": "Black Maria operates Suichi Mining under Azure Land administration.",
      "finalNote": "No verified explanation for Black Maria transition from One Piece to corporate leadership."
    }
  },
  {
    "characterId": "elizabeth-crowskin",
    "fileId": "C-FIG / elizabeth-crowskin",
    "fileTitle": "Elizabeth Crowskin",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Argent Peaks / Silent Verdict",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Elizabeth Crowskin",
        "title": "Fallen Queen of Argent Peaks",
        "family": "No verified record",
        "origin": "Unknown. Former Queen of Argent Peaks."
      },
      "history": "Elizabeth Crowskin was the Queen of Argent Peaks until Mamiya Matsumoto overthrew her. She is now the True Soul of the yacht Silent Verdict.",
      "record": [
        {
          "label": "Queenship",
          "detail": "Former Queen of Argent Peaks."
        },
        {
          "label": "Toppling",
          "detail": "Overthrown by Mamiya Matsumoto."
        },
        {
          "label": "True Soul",
          "detail": "True Soul of Silent Verdict."
        }
      ],
      "incident": {
        "title": "The Fall of Argent Peaks",
        "body": "Elizabeth ruled Argent Peaks until Mamiya Matsumoto overturned her reign."
      },
      "archive": "Elizabeth pre-queenship origins are unverified.",
      "associations": [
        {
          "role": "Toppled by",
          "name": "Mamiya Matsumoto",
          "description": "Overthrew Elizabeth.",
          "characterId": "mamiya-matsumoto"
        }
      ],
      "blackthorn": "Elizabeth operates as True Soul of Silent Verdict.",
      "finalNote": "Whether Crowskin and Crowley are the same person remains unverified."
    }
  },
  {
    "characterId": "imperia",
    "fileId": "C-FIG / imperia",
    "fileTitle": "Imperia",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "inFlow HQ / Seapoint Estate",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Imperia",
        "alias": "The Matriarch",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Final Gear. CEO and owner of inFlow."
      },
      "history": "Imperia is the CEO and owner of inFlow, an income management team devoted to hmgfan. She is hmgfan's main wife and is described as ultra-powerful. Her team maintains shell companies and investments across Fablea while keeping a low profile to preserve Imperia's vast wealth.\n\nShe resides at Seapoint Estate, Imperia's private 3-square-kilometer island leased from Azure Land. The estate is a marvel of off-grid power, hidden coves, and superyacht berths (Delta-lux and Sigma-lux). Her team is led by Ho'olheyak.",
      "record": [
        {
          "label": "inFlow",
          "detail": "CEO and owner. Income management team devoted to hmgfan."
        },
        {
          "label": "Seapoint Estate",
          "detail": "Private 3-square-kilometer island leased from Azure Land."
        },
        {
          "label": "Wealth management",
          "detail": "Shell companies and private banks across Fablea. Team keeps low profile to preserve wealth."
        }
      ],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented. Imperia activities operate under high secrecy."
      },
      "archive": "Imperia's life before Final Gear is unverified. Her true origins and the full extent of her power remain classified.",
      "associations": [
        {
          "role": "Wife of",
          "name": "hmgfan",
          "description": "Main wife. Ultra-powerful.",
          "characterId": "hmgfan"
        },
        {
          "role": "Commands",
          "name": "Sophia Nishikinomiya",
          "description": "Leader of inFlow team.",
          "characterId": null
        },
        {
          "role": "Led by",
          "name": "Ho'olheyak",
          "description": "Leads Imperia team at Seapoint Estate.",
          "characterId": null
        }
      ],
      "blackthorn": "Imperia operates inFlow as a financial management entity directly tied to hmgfan. Seapoint Estate is a secure, off-grid facility with superyacht berths for Delta-lux and Sigma-lux.",
      "finalNote": "Imperia true origins and the full scope of her power remain unverified. The relationship between inFlow and Income Makers is not fully documented."
    }
  },
  {
    "characterId": "anna-nishikinomiya",
    "fileId": "C-FIG / anna-nishikinomiya",
    "fileTitle": "Anna Nishikinomiya",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Income Makers HQ, Northport",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Anna Nishikinomiya",
        "alias": "The Magnate",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Shimoneta. CEO of Income Makers."
      },
      "history": "Anna Nishikinomiya is the CEO of Income Makers, a massive entertainment and tourism conglomerate with HQ north of Northport and a large superyacht marina. She holds the patent for a perfect liquor replicator with 100% taste but zero alcohol, which is why Income Makers yachts serve non-alcoholic beverages by default.\n\nAnna created HOSC (hmgfan's One-stop Service Club) as hmgfan's long reach, and recommended the raising of HPIC (Portfolio & Investment Club). She reports to Scathach-Skadi and is a member of the Azure Navy Council.",
      "record": [
        {
          "label": "Income Makers",
          "detail": "CEO. Entertainment and tourism conglomerate. Northport HQ with superyacht marina."
        },
        {
          "label": "Liquor patent",
          "detail": "Perfect liquor replicator: 100% taste, 0% alcohol."
        },
        {
          "label": "HOSC creation",
          "detail": "Created the One-stop Service Club as hmgfan's long reach."
        },
        {
          "label": "HPIC recommendation",
          "detail": "Recommended the raising of hmgfan's Portfolio & Investment Club."
        }
      ],
      "incident": {
        "title": "Azure Navy Council Membership",
        "body": "Anna is a member of the Azure Navy Council, the governing body under Scathach-Skadi's leadership. She previously served on the council before Adrianna Monzano took over some of her operational duties."
      },
      "archive": "Anna's life before Shimoneta is unverified. Her rapid ascension to CEO of Income Makers is unexplained.",
      "associations": [
        {
          "role": "Created HOSC for",
          "name": "hmgfan",
          "description": "One-stop Service Club as his long reach.",
          "characterId": "hmgfan"
        },
        {
          "role": "Recommended HPIC to",
          "name": "hmgfan",
          "description": "Portfolio & Investment Club.",
          "characterId": "hmgfan"
        },
        {
          "role": "Reports to",
          "name": "Scathach-Skadi",
          "description": "Supreme leader of Azure Navy Council.",
          "characterId": null
        },
        {
          "role": "Business rival",
          "name": "Roroa Amidonia",
          "description": "CEO of Amidonia Enterprises. Biggest business rival.",
          "characterId": "roroa-amidonia"
        },
        {
          "role": "Has subordinate",
          "name": "Adrianna Monzano",
          "description": "Overlord of Civil-blending Ops. Previously Azure Navy Council member.",
          "characterId": null
        }
      ],
      "blackthorn": "Anna operates Income Makers as a major entertainment conglomerate. Her HOSC and HPIC divisions function as hmgfan's operational arms across Fablea.",
      "finalNote": "The connection between Anna's Shimoneta origin and her current role in Fablea is unverified. Whether her liquor replicator technology was pre-existing or developed in Fablea is unknown."
    }
  },
  {
    "characterId": "herminia-bertolini",
    "fileId": "C-FIG / herminia-bertolini",
    "fileTitle": "Herminia Bertolini",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Unverified",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Herminia Bertolini",
        "alias": "The Equipresser",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Octopath Traveler: Champions of the Continent."
      },
      "history": "Herminia Bertolini arrived in Fablea with the ability to grant ultra-vast powers directly, bypassing the Ascender device. She equipped Alisha Elliott with ultra-vast powers, making Alisha the first Ascension recipient. She also brought Lisette Johanssen to First Ascension through the same direct method.\n\nThe mechanism by which Herminia imparts power without the Ascender device remains unfiled. Few other facts about her are recorded.",
      "record": [
        {
          "label": "Power grant",
          "detail": "Equipped Alisha Elliott with ultra-vast powers (First Ascension)."
        },
        {
          "label": "Power grant",
          "detail": "Brought Lisette Johanssen to First Ascension."
        },
        {
          "label": "Origin",
          "detail": "Octopath Traveler: Champions of the Continent."
        }
      ],
      "incident": {
        "title": "Direct Ascension Bestowal",
        "body": "Herminia demonstrated power transfer without the Ascender device, granting First Ascension directly to Alisha Elliott and Lisette Johanssen. This method differs fundamentally from the Ascender protocol."
      },
      "archive": "Herminia's arrival in Fablea and her activities prior to the Ascension events are unverified. Few facts have been filed about her.",
      "associations": [
        {
          "role": "Grants power to",
          "name": "Alisha Elliott",
          "description": "Equipped with ultra-vast powers.",
          "characterId": "alisha-elliott"
        },
        {
          "role": "Brings to First Ascension",
          "name": "Lisette Johanssen",
          "description": "Direct power transfer.",
          "characterId": "lisette-johanssen"
        }
      ],
      "blackthorn": "Herminia operates outside any known institutional framework. Her power-granting ability makes her a person of interest to all factions.",
      "finalNote": "The source of Herminia's power-bestowing ability is unknown. Whether this capability is repeatable or unique to her is undetermined."
    }
  },
  {
    "characterId": "isadora",
    "fileId": "C-FIG / isadora",
    "fileTitle": "Isadora",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Unknown",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Isadora",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Unknown. Came with the white portal or resurrection."
      },
      "history": "Isadora converted most of the Earthians Earth fortune to AZL. She came with the white portal or resurrection that brought those from Earth to Fablea. She comforted Lee Ji-ho during his portal transition and converted Jenny Sinclair fortune.",
      "record": [
        {
          "label": "Fortune conversion",
          "detail": "Converted Earthians Earth fortune to AZL."
        },
        {
          "label": "Portal transition",
          "detail": "Comforted Lee Ji-ho during summoning."
        }
      ],
      "incident": {
        "title": "The Fortune Conversion",
        "body": "Isadora converted the Earthians Earth fortune to AZL upon their arrival in Fablea. She also comforted Lee Ji-ho during his portal transition."
      },
      "archive": "Isadora origins and her connection to the white portal are unverified.",
      "associations": [
        {
          "role": "Converted the fortune of",
          "name": "Jenny Sinclair",
          "description": "Fifth Earthian.",
          "characterId": "jenny-sinclair"
        },
        {
          "role": "Comforted and brought through",
          "name": "Lee Ji-ho",
          "description": "Tenth Earthian.",
          "characterId": "lee-ji-ho"
        }
      ],
      "blackthorn": "Isadora operates independently of any known institution. Her portal-related abilities are of interest to Azure Navy.",
      "finalNote": "The nature of Isadora 'white portal' origins and her full capabilities remain unverified."
    }
  },
  {
    "characterId": "hajime-tsukishima",
    "fileId": "C-FIG / hajime-tsukishima",
    "fileTitle": "Hajime Tsukishima",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Team Icchi HQ, Taihei",
    "risk": "MODERATE",
    "sections": {
      "identity": {
        "legalName": "Hajime Tsukishima",
        "title": "Team Icchi Leader",
        "faction": "Team Icchi",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Golden Kamuy. Leader of Team Icchi."
      },
      "history": "Hajime Tsukishima leads Team Icchi (Team Unity), the helpers of Takechi Hironaka. Team Icchi consists of: Hajime Tsukishima (leader), Oono Tsukuyo, Fikatsia Latrova, Blake Belladonna, Hanya, and Squall Leonhart.",
      "record": [
        {
          "label": "Team Icchi",
          "detail": "Leader of Team Unity, helpers of Takechi Hironaka."
        },
        {
          "label": "Team members",
          "detail": "Oono Tsukuyo, Fikatsia Latrova, Blake Belladonna, Hanya, Squall Leonhart."
        }
      ],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "Hajime life before Golden Kamuy is unverified.",
      "associations": [
        {
          "role": "Leads Team Icchi for",
          "name": "Takechi Hironaka",
          "description": "Fourth Earthian. Prime Minister of Taihei.",
          "characterId": "takechi-hironaka"
        }
      ],
      "blackthorn": "Hajime operates under Takechi Hironaka's command within the Taihei governmental structure.",
      "finalNote": "No verified explanation for Hajime's leadership of Team Icchi beyond his Golden Kamuy origin."
    }
  },
  {
    "characterId": "roroa-amidonia",
    "fileId": "C-FIG / roroa-amidonia",
    "fileTitle": "Roroa Amidonia",
    "accessLevel": "RESTRICTED",
    "status": "restricted",
    "facility": "Amidonia Enterprises HQ, Sivudlerk",
    "risk": "HIGH",
    "sections": {
      "identity": {
        "legalName": "Roroa Amidonia",
        "title": "CEO of Amidonia Enterprises",
        "faction": "Amidonia Enterprises",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "How a Realist Hero Rebuilt the Kingdom. CEO of Amidonia Enterprises."
      },
      "history": "Roroa Amidonia is the owner and CEO of Amidonia Enterprises, a conglomerate fully focused on entertainment based in Sivudlerk (capital of Sirmiq). Her net worth is very close to Anna Nishikinomiya's, at over AZL 1 billion. She is the biggest business rival of Anna Nishikinomiya.\n\nHer subordinates include Tobiichi Origami (chief innovation officer), Mikasa (CEO of Amidonia Yachting), and Lusamine (CEO of Amidonia Production).",
      "record": [
        {
          "label": "Amidonia Enterprises",
          "detail": "CEO. Entertainment conglomerate based in Sivudlerk."
        },
        {
          "label": "Net worth",
          "detail": "Over AZL 1 billion. Closest rival to Anna Nishikinomiya."
        },
        {
          "label": "Subordinates",
          "detail": "Tobiichi Origami, Mikasa, Lusamine."
        }
      ],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "Roroa rise to CEO of Amidonia Enterprises is unverified in detail.",
      "associations": [
        {
          "role": "Business rival",
          "name": "Anna Nishikinomiya",
          "description": "CEO of Income Makers. Biggest business rival.",
          "characterId": "anna-nishikinomiya"
        }
      ],
      "blackthorn": "Roroa operates Amidonia Enterprises independently of Azure Land administration, though business licensing falls under Sivudlerk municipal oversight.",
      "finalNote": "No verified explanation exists for how Roroa Amidonia acquired her fortune or her full relationship with the Origami-Suzumori family remains unverified."
    }
  },
  {
    "characterId": "hiyori-shiina",
    "fileId": "C-FIG / hiyori-shiina",
    "fileTitle": "Hiyori Shiina",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Hiyori Shiina",
        "title": "HOSC Leader",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Classroom of the Elite"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Leads HOSC for",
          "name": "hmgfan",
          "description": "One-stop Service Club as his long hand.",
          "characterId": "hmgfan"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "chiyo-shimada",
    "fileId": "C-FIG / chiyo-shimada",
    "fileTitle": "Chiyo Shimada",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Chiyo Shimada",
        "title": "HPIC Leader",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Girls und Panzer"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Leads HPIC for",
          "name": "hmgfan",
          "description": "Portfolio and Investment Club.",
          "characterId": "hmgfan"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "homelander",
    "fileId": "C-FIG / homelander",
    "fileTitle": "Homelander",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Homelander",
        "title": "Leader of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "The Boys"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Leads The Equilibrium for",
          "name": "Dina Agustina",
          "description": "Mercenary and companion group.",
          "characterId": "dina-agustina"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "ellie-williams",
    "fileId": "C-FIG / ellie-williams",
    "fileTitle": "Ellie Williams",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Ellie Williams",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "The Last of Us"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Without Debt.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "leia-organa",
    "fileId": "C-FIG / leia-organa",
    "fileTitle": "Leia Organa",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Leia Organa",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Star Wars"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Without Debt.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "takeo-masaki",
    "fileId": "C-FIG / takeo-masaki",
    "fileTitle": "Takeo Masaki",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Takeo Masaki",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Call of Duty Zombies"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Without Debt.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "farah-karim",
    "fileId": "C-FIG / farah-karim",
    "fileTitle": "Farah Karim",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Farah Karim",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Call of Duty: Modern Warfare (2019)"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Without Debt.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "coach",
    "fileId": "C-FIG / coach",
    "fileTitle": "Coach",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Coach",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Left 4 Dead 2"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Without Debt.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "ryoko-shinonome",
    "fileId": "C-FIG / ryoko-shinonome",
    "fileTitle": "Ryoko Shinonome",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Ryoko Shinonome",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "13 Sentinels: Aegis Rim"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Excellent Credit.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "kazuma-kiryu",
    "fileId": "C-FIG / kazuma-kiryu",
    "fileTitle": "Kazuma Kiryu",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Kazuma Kiryu",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Yakuza/Like a Dragon"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Excellent Credit.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "selvaria-bles",
    "fileId": "C-FIG / selvaria-bles",
    "fileTitle": "Selvaria Bles",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Selvaria Bles",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Valkyria Chronicles"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Excellent Credit.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "eren-yager",
    "fileId": "C-FIG / eren-yager",
    "fileTitle": "Eren Yeager",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Eren Yeager",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Attack on Titan"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Excellent Credit.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "royal-arsenal",
    "fileId": "C-FIG / royal-arsenal",
    "fileTitle": "Royal Arsenal",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Royal Arsenal",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Last Origin"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Excellent Credit.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "kohta-hirano",
    "fileId": "C-FIG / kohta-hirano",
    "fileTitle": "Kohta Hirano",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Kohta Hirano",
        "title": "Member of The Equilibrium",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Highschool of the Dead"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Subordinate of",
          "name": "Homelander",
          "description": "Sub-unit: Excellent Credit.",
          "characterId": "homelander"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "kumiko-oumae",
    "fileId": "C-FIG / kumiko-oumae",
    "fileTitle": "Kumiko Oumae",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Kumiko Oumae",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Sound! Euphonium"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Jenny Sinclair",
          "description": "Fifth Earthian.",
          "characterId": "jenny-sinclair"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "yuno",
    "fileId": "C-FIG / yuno",
    "fileTitle": "Yuno",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Yuno",
        "title": "Good friend of Jenny Sinclair",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Hidamari Sketch"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Jenny Sinclair",
          "description": "One of the Hidamari Sketch girls.",
          "characterId": "jenny-sinclair"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "miyako",
    "fileId": "C-FIG / miyako",
    "fileTitle": "Miyako",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Miyako",
        "title": "Good friend of Jenny Sinclair",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Hidamari Sketch"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Jenny Sinclair",
          "description": "One of the Hidamari Sketch girls.",
          "characterId": "jenny-sinclair"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "akiizumi-momiji",
    "fileId": "C-FIG / akiizumi-momiji",
    "fileTitle": "Akiizumi Momiji",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Akiizumi Momiji",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Blue Archive"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Akari Hoshino",
          "description": "Sixth Earthian.",
          "characterId": "akari-hoshino"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "hatsuzuki",
    "fileId": "C-FIG / hatsuzuki",
    "fileTitle": "Hatsuzuki",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Hatsuzuki",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Azur Lane"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Akari Hoshino",
          "description": "Sixth Earthian.",
          "characterId": "akari-hoshino"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "itsuki-nakano",
    "fileId": "C-FIG / itsuki-nakano",
    "fileTitle": "Itsuki Nakano",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Itsuki Nakano",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "The Quintessential Quintuplets"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Mamiya Matsumoto",
          "description": "Seventh Earthian.",
          "characterId": "mamiya-matsumoto"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "kiryuu-kikyou",
    "fileId": "C-FIG / kiryuu-kikyou",
    "fileTitle": "Kiryuu Kikyou",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Kiryuu Kikyou",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Blue Archive"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Mamiya Matsumoto",
          "description": "Seventh Earthian.",
          "characterId": "mamiya-matsumoto"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "theoto-rikka",
    "fileId": "C-FIG / theoto-rikka",
    "fileTitle": "Theoto Rikka",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Theoto Rikka",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "86 -Eighty Six-"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Lisette Johanssen",
          "description": "Eighth Earthian.",
          "characterId": "lisette-johanssen"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "konoe-mina",
    "fileId": "C-FIG / konoe-mina",
    "fileTitle": "Konoe Mina",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Konoe Mina",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Blue Archive"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Lisette Johanssen",
          "description": "Eighth Earthian.",
          "characterId": "lisette-johanssen"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "fu-xuan",
    "fileId": "C-FIG / fu-xuan",
    "fileTitle": "Fu Xuan",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Fu Xuan",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Honkai Impact 3rd"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Lisette Johanssen",
          "description": "Eighth Earthian.",
          "characterId": "lisette-johanssen"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "pamiat-merkuria",
    "fileId": "C-FIG / pamiat-merkuria",
    "fileTitle": "Pamiat Merkuria",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Pamiat Merkuria",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Azur Lane"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Natalie Halsey-Taylor",
          "description": "Ninth Earthian.",
          "characterId": "natalie-halsey-taylor"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "yuzuriha",
    "fileId": "C-FIG / yuzuriha",
    "fileTitle": "Yuzuriha",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Yuzuriha",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Under Night In-Birth"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Natalie Halsey-Taylor",
          "description": "Ninth Earthian.",
          "characterId": "natalie-halsey-taylor"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "liscia-elfrieden",
    "fileId": "C-FIG / liscia-elfrieden",
    "fileTitle": "Liscia Elfrieden",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Liscia Elfrieden",
        "title": "Helper",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "How a Realist Hero Rebuilt the Kingdom"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Helper of",
          "name": "Lee Ji-ho",
          "description": "Tenth Earthian.",
          "characterId": "lee-ji-ho"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "sunohara-kokona",
    "fileId": "C-FIG / sunohara-kokona",
    "fileTitle": "Sunohara Kokona",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Sunohara Kokona",
        "title": "Helper",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Blue Archive"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Helper of",
          "name": "Lee Ji-ho",
          "description": "Tenth Earthian.",
          "characterId": "lee-ji-ho"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "osakabehime",
    "fileId": "C-FIG / osakabehime",
    "fileTitle": "Osakabehime",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Osakabehime",
        "title": "Companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Fate/Grand Order"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Lee Ji-ho",
          "description": "Tenth Earthian.",
          "characterId": "lee-ji-ho"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "diane-cross",
    "fileId": "C-FIG / diane-cross",
    "fileTitle": "Diane Cross",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Diane Cross",
        "title": "Media Mogul",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Unknown"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loves",
          "name": "Lee Ji-ho",
          "description": "Media mogul of Afrea. Tenth Earthian.",
          "characterId": "lee-ji-ho"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "ayumi-shinozaki",
    "fileId": "C-FIG / ayumi-shinozaki",
    "fileTitle": "Ayumi Shinozaki",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Ayumi Shinozaki",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Corpse Party"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Aika Yukimura",
          "description": "Eleventh Earthian.",
          "characterId": "aika-yukimura"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "rean-schwarzer",
    "fileId": "C-FIG / rean-schwarzer",
    "fileTitle": "Rean Schwarzer",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Rean Schwarzer",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Trails of Cold Steel"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Aika Yukimura",
          "description": "Eleventh Earthian.",
          "characterId": "aika-yukimura"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  },
  {
    "characterId": "voroshilov",
    "fileId": "C-FIG / voroshilov",
    "fileTitle": "Voroshilov",
    "accessLevel": "ROUTINE",
    "status": "neutral",
    "facility": "NOT ON FILE",
    "risk": "LOW",
    "sections": {
      "identity": {
        "legalName": "Voroshilov",
        "title": "Loyal companion",
        "alias": "NOT ON FILE",
        "age": "Unknown",
        "birth": "Unverified",
        "family": "No verified record",
        "origin": "Azur Lane"
      },
      "history": "No verified record filed. This individual History is archived as pending.",
      "record": [],
      "incident": {
        "title": "NOT ON FILE",
        "body": "No specific incident documented."
      },
      "archive": "ARCHIVE PENDING. No verified records for this individual have been recovered.",
      "associations": [
        {
          "role": "Loyal companion of",
          "name": "Katarina Petrenko",
          "description": "Twelfth Earthian.",
          "characterId": "katarina-petrenko"
        }
      ],
      "blackthorn": "No institutional affiliation on file.",
      "finalNote": "No verified records for this individual remain in the archive. Further investigation pending."
    }
  }
];

/** Lookup a dossier by character id (the slug used in /characters/<slug>). */
export function getDossier(id: string): CharacterDossier | undefined {
	return dossiers.find((d) => d.characterId === id);
}
