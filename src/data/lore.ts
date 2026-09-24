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
	marker?: string;
	body?: string;
}

// Per-section background images for region detail pages (Vesper-City style).
// Local files served from /regions/ in the public/ folder; replace the
// woa-r*-*.jpg placeholders with real art when ready.
// URL per (region id, section key); section keys match the ## headings in body.
// BASE_URL ships with a trailing slash, so a plain relative prefix is safe.
export const regionSectionImages: Record<string, Record<string, string>> = {
	'R-01': {
		Overview: 'regions/woa-r01-overview.jpg',
		'Geography & Location': 'regions/woa-r01-geography.jpg',
		'Polities & Governance': 'regions/woa-r01-governance.jpg',
		'Economy & Currency': 'regions/woa-r01-economy.jpg',
		'Major Sites': 'regions/woa-r01-sites.jpg',
		'People & Notable Residents': 'regions/woa-r01-people.jpg',
		'Institutions & Organizations': 'regions/woa-r01-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r01-access.jpg'
	},
	'R-02': {
		Overview: 'regions/woa-r02-overview.jpg',
		'Geography & Location': 'regions/woa-r02-geography.jpg',
		'Polities & Governance': 'regions/woa-r02-governance.jpg',
		'Economy & Currency': 'regions/woa-r02-economy.jpg',
		'Major Sites': 'regions/woa-r02-sites.jpg',
		'People & Notable Residents': 'regions/woa-r02-people.jpg',
		'Institutions & Organizations': 'regions/woa-r02-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r02-access.jpg'
	},
	'R-03': {
		Overview: 'regions/woa-r03-overview.jpg',
		'Geography & Location': 'regions/woa-r03-geography.jpg',
		'Polities & Governance': 'regions/woa-r03-governance.jpg',
		'Economy & Currency': 'regions/woa-r03-economy.jpg',
		'Major Sites': 'regions/woa-r03-sites.jpg',
		'People & Notable Residents': 'regions/woa-r03-people.jpg',
		'Institutions & Organizations': 'regions/woa-r03-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r03-access.jpg'
	},
	'R-04': {
		Overview: 'regions/woa-r04-overview.jpg',
		'Geography & Location': 'regions/woa-r04-geography.jpg',
		'Polities & Governance': 'regions/woa-r04-governance.jpg',
		'Economy & Currency': 'regions/woa-r04-economy.jpg',
		'Major Sites': 'regions/woa-r04-sites.jpg',
		'People & Notable Residents': 'regions/woa-r04-people.jpg',
		'Institutions & Organizations': 'regions/woa-r04-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r04-access.jpg'
	},
	'R-05': {
		Overview: 'regions/woa-r05-overview.jpg',
		'Geography & Location': 'regions/woa-r05-geography.jpg',
		'Polities & Governance': 'regions/woa-r05-governance.jpg',
		'Economy & Currency': 'regions/woa-r05-economy.jpg',
		'Major Sites': 'regions/woa-r05-sites.jpg',
		'People & Notable Residents': 'regions/woa-r05-people.jpg',
		'Institutions & Organizations': 'regions/woa-r05-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r05-access.jpg'
	},
	'R-06': {
		Overview: 'regions/woa-r06-overview.jpg',
		'Geography & Location': 'regions/woa-r06-geography.jpg',
		'Polities & Governance': 'regions/woa-r06-governance.jpg',
		'Economy & Currency': 'regions/woa-r06-economy.jpg',
		'Major Sites': 'regions/woa-r06-sites.jpg',
		'People & Notable Residents': 'regions/woa-r06-people.jpg',
		'Institutions & Organizations': 'regions/woa-r06-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r06-access.jpg'
	},
	'R-07': {
		Overview: 'regions/woa-r07-overview.jpg',
		'Geography & Location': 'regions/woa-r07-geography.jpg',
		'Polities & Governance': 'regions/woa-r07-governance.jpg',
		'Economy & Currency': 'regions/woa-r07-economy.jpg',
		'Major Sites': 'regions/woa-r07-sites.jpg',
		'People & Notable Residents': 'regions/woa-r07-people.jpg',
		'Institutions & Organizations': 'regions/woa-r07-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r07-access.jpg'
	},
	'R-08': {
		Overview: 'regions/woa-r08-overview.jpg',
		'Geography & Location': 'regions/woa-r08-geography.jpg',
		'Polities & Governance': 'regions/woa-r08-governance.jpg',
		'Economy & Currency': 'regions/woa-r08-economy.jpg',
		'Major Sites': 'regions/woa-r08-sites.jpg',
		'People & Notable Residents': 'regions/woa-r08-people.jpg',
		'Institutions & Organizations': 'regions/woa-r08-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r08-access.jpg'
	},
	'R-09': {
		Overview: 'regions/woa-r09-overview.jpg',
		'Geography & Location': 'regions/woa-r09-geography.jpg',
		'Polities & Governance': 'regions/woa-r09-governance.jpg',
		'Economy & Currency': 'regions/woa-r09-economy.jpg',
		'Major Sites': 'regions/woa-r09-sites.jpg',
		'People & Notable Residents': 'regions/woa-r09-people.jpg',
		'Institutions & Organizations': 'regions/woa-r09-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r09-access.jpg'
	},
	'R-10': {
		Overview: 'regions/woa-r10-overview.jpg',
		'Geography & Location': 'regions/woa-r10-geography.jpg',
		'Polities & Governance': 'regions/woa-r10-governance.jpg',
		'Economy & Currency': 'regions/woa-r10-economy.jpg',
		'Major Sites': 'regions/woa-r10-sites.jpg',
		'People & Notable Residents': 'regions/woa-r10-people.jpg',
		'Institutions & Organizations': 'regions/woa-r10-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r10-access.jpg'
	},
	'R-11': {
		Overview: 'regions/woa-r11-overview.jpg',
		'Geography & Location': 'regions/woa-r11-geography.jpg',
		'Polities & Governance': 'regions/woa-r11-governance.jpg',
		'Economy & Currency': 'regions/woa-r11-economy.jpg',
		'Major Sites': 'regions/woa-r11-sites.jpg',
		'People & Notable Residents': 'regions/woa-r11-people.jpg',
		'Institutions & Organizations': 'regions/woa-r11-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r11-access.jpg'
	},
	'R-12': {
		Overview: 'regions/woa-r12-overview.jpg',
		'Geography & Location': 'regions/woa-r12-geography.jpg',
		'Polities & Governance': 'regions/woa-r12-governance.jpg',
		'Economy & Currency': 'regions/woa-r12-economy.jpg',
		'Major Sites': 'regions/woa-r12-sites.jpg',
		'People & Notable Residents': 'regions/woa-r12-people.jpg',
		'Institutions & Organizations': 'regions/woa-r12-institutions.jpg',
		'Restrictions & Access': 'regions/woa-r12-access.jpg'
	}
};

/**
 * Per-section background URL for a region, falling back to the region's
 * hero image when no section-specific image is filed. Paths are relative
 * to the site base; the page composes them with import.meta.env.BASE_URL.
 */
export function regionImage(regionId: string, sectionKey?: string): string | undefined {
	if (sectionKey && regionSectionImages[regionId]?.[sectionKey]) {
		return regionSectionImages[regionId][sectionKey];
	}
	return regionSectionImages[regionId]?.Overview;
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
		title: 'Twin Isles',
		excerpt:
			'Two identical islands at the middle of the open ocean. Small hills, rich vegetation, species found nowhere on Earth. Azure Land claims them as territory; Taihei is a faction-state on the southern isle.',
		status: 'active',
		statusLabel: 'Active',
		marker: 'ALL DISTANCES MEASURED FROM HERE',
		body: `## Overview

Two identical islands at the center of the open ocean. Small hills, rich vegetation, and exotic species found nowhere on Earth. Azure Land claims the Twin Isles as territory; Taihei is a faction-state on the southern isle.

## Geography & Location

The Twin Isles sit at the center of Fablea Prime's ocean, serving as the reference point for all distances across the realm. Both islands have identical topographies with small hills and rich vegetation. The islands are home to exotic animals and plants found nowhere on Earth.

## Polities & Governance

Azure Land claims the Twin Isles as territory. The southern isle hosts Taihei, a faction-state administered by the Omi Alliance in the east and Mankai-no-Wa in the west, led by Earthian Prime Minister Takechi Hironaka.

## Economy & Currency

The Twin Isles themselves have no independent currency. Taihei uses the Taihei Quill (TQL), pegged to the Japanese Yen. Azure Land Gold (AZL) is also accepted.

## Major Sites

- **Northport**: Coastal city on the northern Twin Isle. Bustling port, modern architecture, lively markets, friendly residents, beautiful beaches.
- **Shin Tokyo**: Main metropolitan center of Taihei on the southern isle.

## People & Notable Residents

- **Takechi Hironaka**: Earthian, Prime Minister of Taihei. Title: Great Unifier.

## Institutions & Organizations

- **Omi Alliance**: Lawful-evil organization ruling eastern Taihei. Led by Jin Goda.
- **Mankai-no-Wa**: Tsukatsuki Rio's group governing western Taihei.

## Restrictions & Access

No restrictions. Both isles are accessible to visitors.`
	},
	{
		id: 'R-02',
		title: 'Azure Land',
		excerpt:
			'Tropical, tourism-oriented maritime nation where yachting culture meets eco-conscious advanced technology. Naval exploration, a highly trained military, and island dossiers ranging from resort atolls to submarine pens.',
		status: 'active',
		statusLabel: 'Lawful Neutral',
		marker: 'CAPITAL NORTHPORT / CURRENCY AZL',
		body: `## Overview

Azure Land is a tropical, tourism-oriented maritime nation with a strong emphasis on yachting culture, naval exploration, and environmental preservation. The nation maintains a lawful neutral stance with highly trained military forces and advanced technology integrated with eco-conscious policies.

## Geography & Location

Azure Land consists of the main archipelago plus the Twin Isles territory. The capital Northport sits on the southeastern coast, while Toyotani anchors the northeast and Esenor guards the northwest approaches. The nation's islands span from resort atolls to military installations.

## Polities & Governance

Led by Princess Laeticia Aucerius. The Azure Navy Council advises on military matters, with Scathach-Skadi as Supreme Leader of the Azure Navy. Laeticia's servants include figures such as Astesia, Index Librorum Prohibitorum, Clara, Phoebe (Minister of Home Affairs), and Makima (Minister of Finance).

## Economy & Currency

- **Currency**: Azure Land Gold (AZL), pegged 1:1 with USD.
- **Legal drinking age**: 18 years.
- **Key Industries**: Yacht manufacturing, marine tourism, sustainable technology, offshore finance.

## Major Sites

- **Northport**: Capital city on the southeastern coast.
- **Toyotani**: Agrarian city on the southeast of Northport, primarily exports fruits such as peaches.
- **Esenor**: Mountainous city with earthships and green apartments. Previously a slum, now the most sustainable living city in Azure Land with zero poverty rate.
- **Calding Island**: Agricultural hub with luxury villas, offshore corporate headquarters, and premium marinas. 50 km northwest of Twin Isles.
- **Plybury Island**: Renewable energy backbone with wind turbines, tidal generators, and solar arrays. Powers 60% of Azure Land's grid. 70 km west of Twin Isles.
- **Amestry Island**: Exclusive resort destination with overwater bungalows and coral diving preserves. 50 km northeast of Twin Isles.
- **Sentinel Atoll**: Military installation and naval training grounds. 50 km east of Twin Isles.
- **Mariner's Rest**: Historical preservation site with maritime museum and shipwreck recovery center. 50 km north of Twin Isles.
- **Cinder Reef**: Former penal colony turned rehabilitation community. 80 km north-northeast of Twin Isles.
- **Glass Cay**: Scientific research station focused on marine biology and climate monitoring. 80 km north-northeast of Twin Isles.
- **Haven Isle**: Neutral ground for diplomatic conferences and peace negotiations.

## People & Notable Residents

- **Laeticia Aucerius**: Princess who leads Azure Land.
- **Scathach-Skadi**: Supreme leader of Azure Navy, leader of Azure Navy Council.
- **Ikaruga**: Major of Northport.
- **Watatsuki no Toyohime**: Major of Toyotani city.
- **Katarina von Bayern**: CEO of Azure Power Company, former Azure Navy.

## Institutions & Organizations

- **Azure Navy**: Military force of Azure Land. Reformed by Scathach-Skadi to include non-shipgirl soldiers. More marines than navy.
- **Azure People Army**: Secondary military force composed solely of Fablea-native residents.
- **Azure Power Company**: State-owned company providing all electricity to Azure Land. HQ on Plybury Island.
- **Income Makers**: Massive entertainment and tourism conglomerate. HQ north of Northport. Owned by Anna Nishikinomiya.
- **Minamitsu Shipbuilding Company**: Shipbuilder located northeast of Northport.
- **Bremmer and Dahl Naval Architecture**: Medium-sized shipbuilder west of Esenor.
- **Tosa-Sato Shipyard**: Shipyard north of Northport, subsidiary of Income Makers.
- **K-Cruises**: Budget yacht chartering and cruise company. HQ in eastern Toyotani.

## Restrictions & Access

No restrictions. Standard entry procedures apply.`
	},
	{
		id: 'R-03',
		title: 'Taihei',
		excerpt:
			'Faction-state on the southern Twin Isles, governed by Earthian Prime Minister Takechi Hironaka. The Omi Alliance administers the east, Mankai-no-Wa the west. Eight cities, from Shin Tokyo to Therei, an underwater district 200 m below sea level.',
		status: 'active',
		statusLabel: 'Active',
		marker: 'PM TAKECHI HIRONAKA / CURRENCY TQL',
		body: `## Overview

Taihei is a faction-state on the southern Twin Isles. It was formerly contested between the Omi Alliance and Mankai-no-Wa, and is now led by the fourth Earthian, Takechi Hironaka, who serves as Prime Minister of Taihei. Omi administers eastern Taihei, while Mankai-no-Wa administers western Taihei.

## Geography & Location

Taihei occupies the southern half of the Twin Isles. Its territory includes several artificial and natural islands connected by tunnels, bridges, and ferries.

## Polities & Governance

Prime Minister Takechi Hironaka leads Taihei. The Omi Alliance administers the eastern half under Jin Goda. Mankai-no-Wa administers the western half under Tsukatsuki Rio, who also serves as governor of western Taihei.

## Economy & Currency

- **Currency**: Taihei Quill (TQL), pegged to the Japanese Yen.

## Major Sites

- **Shin Tokyo**: The main metropolitan center tied to Taihei's island network.
- **Kurogane**: Industrial port city on Toutou, known for freight yards and ship repair.
- **Hoshizaka**: Residential and administrative city on Seitou, built around an artificial hill.
- **Natsuhama**: Main resort city on Kyuushima, with cliffside hotels and whitewashed lanes.
- **Therei**: Underwater city 200 m below sea level between Twin Isles and Suichi Island. 100 km from Twin Isles, 150 km from Suichi Island. No tall buildings. Founded by Madame Bonnet (Jeanne). Mayor: Kamisato Ayato.
- **Natsuura**: Port city on Minamitori-jima handling fish markets and cargo overflow.
- **Sumisaki**: Quarry and harbor city on Aokuzu-jima with steep roads and stone terraces.
- **Harunagi**: Marina city on Shirosuna-jima built around beaches and villas.
- **Toutou**: Artificial island 15 km east of Shin Tokyo, industrial zone.
- **Seitou**: Artificial island 15 km west of Shin Tokyo, residential landmass.
- **Kyuushima**: Natural island 5 km south of Seitou, resort island blending Okunoshima with Santorini.
- **Minamitori-jima**: Reclaimed island 18 km south of Shin Tokyo.
- **Aokuzu-jima**: Natural island 22 km southwest of Shin Tokyo.
- **Shirosuna-jima**: Crescent-shaped island 20 km southeast of Shin Tokyo.

## People & Notable Residents

- **Takechi Hironaka**: Earthian, Prime Minister of Taihei. Title: Great Unifier.
- **Jin Goda**: Leader of Omi Alliance.
- **Tsukatsuki Rio**: Governor of western Taihei, leader of Mankai-no-Wa.
- **Kamisato Ayato**: Mayor of Therei.
- **Madame Bonnet (Jeanne)**: Founder of Therei.

## Institutions & Organizations

- **Omi Alliance**: Lawful-evil organization ruling eastern Taihei.
- **Mankai-no-Wa**: Group governing western Taihei.
- **Senri Shipyard**: Shipbuilder south of Shin Tokyo.

## Restrictions & Access

No restrictions.`
	},
	{
		id: 'R-04',
		title: 'Afrea',
		excerpt:
			'Large river-cut country on the continent of Macaham, some 20,000 km from the Twin Isles. Its Venice-like capital has canals deep enough for superyachts, and the Macaham Union leading member hosts the largest yacht show in Fablea.',
		status: 'active',
		statusLabel: 'Macaham Union',
		marker: 'CAPITAL FLETIN / CURRENCY AFR / 12H BEHIND TWIN ISLES',
		body: `## Overview

Afrea is a large country on the continent of Macaham, characterized by numerous rivers and many inactive (dormant) mountains. It is a leading member of the Macaham Union, the Fablean equivalent of the European Union.

## Geography & Location

Located approximately 20,000 km east/west of the Twin Isles. Features hundreds of islands off its southern coasts. Time difference: 12 hours behind Twin Isles (e.g., 06:30 AM in Twin Isles is 06:30 PM the previous day in Afrea).

## Polities & Governance

Afrea is a leading member of the Macaham Union. The Teruhashi Conglomerate, an Afrea-based multi-million conglomerate, holds significant influence through its education, media, and mining operations.

## Economy & Currency

- **Currency**: Afrean Real (AFR), pegged to and functions similarly to the European Euro.
- **Key Industries**: Tourism, shipping, finance, manufacturing, and viniculture.

## Major Sites

- **Fletin**: Venice-like coastal capital. Extensive network of water canals deep and wide enough for large superyachts.
- **Valerius**: Major inland financial and cultural hub along the great Selen River. Known for historic universities and marble plazas.
- **Port Solara**: Primary naval and commercial port on the southern coast. Gateway to Afrea's southern archipelago.
- **Ironhaven**: Industrial city in the foothills of dormant Mount Cinder. Center of manufacturing and mining.
- **Sunspire**: Resort city on the Blue Coast with pristine beaches, luxury villas, and vibrant nightlife.

## People & Notable Residents

- **Kokomi Teruhashi**: Owner and matriarch of Teruhashi Conglomerate.

## Institutions & Organizations

- **Teruhashi Conglomerate**: Multi-million conglomerate in private education, entertainment media, and mining. Promoter of Afrea Yacht Show.
- **Taka-no-fune**: Ship classification society based in Fletin. Led by Miyo Takano.
- **Bowers-Oomichi Yachts**: Boutique yacht builder based in Transmere.
- **Oyama Shipbuilding**: Shipbuilding company based in Fletin.

## Restrictions & Access

No restrictions.`
	},
	{
		id: 'R-05',
		title: 'Sirmiq',
		excerpt:
			'A country ringing the Arctic zone of Fablea Prime: Scandinavia, northern Canada, Siberia, and Alaska folded into one multicultural state. Inuktitut is the main language; the coastal capital answers to Ryouko Fueguchi.',
		status: 'active',
		statusLabel: 'Active',
		marker: 'CAPITAL SIVUDLERK / CURRENCY SIK',
		body: `## Overview

Sirmiq (meaning "Glacier") is a country that circles the Arctic zone of Fablea Prime. It is a fictional country combining elements of Scandinavian countries, northern Canada, northern Russia, and northern Alaska. Inuktitut is its main language, though its people can speak English and other languages. Multicultural.

## Geography & Location

Sirmiq rings the Arctic zone of Fablea Prime. Its capital, Sivudlerk, is a coastal city.

## Polities & Governance

The capital city Sivudlerk is led by Ryouko Fueguchi.

## Economy & Currency

- **Currency**: Sirmiq Ice Krone (SIK), based on the Danish Krone.

## Major Sites

- **Sivudlerk**: Coastal capital city. Means "First".

## People & Notable Residents

- **Ryouko Fueguchi**: Leader of Sivudlerk.
- **Roroa Amidonia**: Owner and CEO of Amidonia Enterprises, biggest business rival of Anna Nishikinomiya. Based in Sivudlerk.

## Institutions & Organizations

- **Amidonia Enterprises**: Conglomerate fully focused on entertainment. Based in Sivudlerk.
- **Silatuyok Shipyards**: Shipbuilding company in coastal Sivudlerk. Rivals Minamitsu Shipbuilding.

## Restrictions & Access

No restrictions.`
	},
	{
		id: 'R-06',
		title: 'Volnyk',
		excerpt:
			'Island empire near the Antarctic side, 2,000 km south of Azure Land, whose radar-burst coast hides icy bays and black-stone cliffs. Steel, polar oil, cold storage, and ice-trained elites. Hard, disciplined, expensive to ignore.',
		status: 'active',
		statusLabel: 'Empire',
		marker: 'CAPITAL ATALIN / RULE EMPRESS IMPERA LORESSA',
		body: `## Overview

Volnyk is a large island nation about 2,000 km south of Azure Land, near the Antarctic side of Fablea Prime. Ruled by Empress Impera Loressa. Its people are called Volnykians.

## Geography & Location

Volnyk's mainland is a near-circular island with jagged outward landspikes, giving it the look of a radar burst when viewed on a map. The coast is broken by icy bays, black-stone cliffs, wind-cut capes, and narrow natural harbors. Small surrounding islands sit closest to the western and southern waters. The interior is colder, elevated, and marked by frozen lakes, mining belts, and training grounds for cold-aspect powers.

## Polities & Governance

Ruled by Empress Impera Loressa from the capital Atalin.

## Economy & Currency

- **Steel**: Heavy foundries, ship metalworks, rail stock, and industrial forging.
- **Polar oil**: Offshore rigs and southern transfer ports supply fuel and export reserves.
- **Cold-storage**: Frozen warehousing, preservation, ice-cellar logistics, and long-haul cold freight.
- **Cold-based powers mastery**: Disciplined training in frost, ice, and temperature-control arts.
- **Tourism**: Ice resorts, aurora cruises, mineral baths, winter festivals, glacier walks, and luxury lodges.

## Major Sites

- **Atalin**: Capital city. A fortified southern harbor of government halls, merchant piers, and old administrative stonework.
- **Velimgrad**: Major city on the northeast. Known for steelworks, naval fabrication, and wind-scoured dock districts.
- **Severin**: Northern mainland port tied to polar oil fleets and icebreakers.
- **Karsk**: Southeastern freight city built around cold-storage vaults and rail depots.
- **Belozor**: Inland city centered on academies and controlled-power training yards.
- **Morgrad**: Southwestern coastal city with fish markets, repair slips, and winter fairs.
- **Lagerny**: Resort island west of mainland, known for grand hotels and heated bathhouses.
- **Serey Ostrov**: Small western island of white beaches, cold spas, and seasonal villas.
- **Dravik**: Southern industrial isle for fuel transfer and rig servicing.
- **Holmir**: Northern rock island with lighthouse stations and weather towers.
- **Nerova Cay**: Eastern outer isle used by whale-watch operators and bird researchers.

## People & Notable Residents

- **Empress Impera Loressa**: Ruler of Volnyk.

## Institutions & Organizations

NOT ON FILE

## Restrictions & Access

No restrictions.`
	},
	{
		id: 'R-07',
		title: 'Truporis',
		excerpt:
			'An Australia-sized continent 1,200 km northeast, waterways capable of carrying ships, three nations. Under the old queen nobody here could afford a yacht; since hmgfan arrival and Empress Licinia Donatus, charters slowly gain momentum.',
		status: 'active',
		statusLabel: 'Active',
		marker: 'NATIONS LURAYEN, CYMERE, ZURNWEH',
		body: `## Overview

Truporis is an Australia-sized continent with ship-capable waterways located 1,200 km northeast of the Twin Isles. It has three countries: Lurayen, Cymere, and Zurnweh. All the countries there do not have yachting as their hobby. Even the smallest commoner yachts were unaffordable until the arrival of hmgfan.

## Geography & Location

An Australia-sized continent 1,200 km northeast of the Twin Isles. Its waterways are capable of carrying ships.

## Polities & Governance

Formally, Lurayen, Cymere, and Zurnweh stand alone, but actually the three were led by a nekomimi queen from Lurayen named Queen Amarki, a tyrant nobody liked. Now, Empress Licinia Donatus rules the continent.

## Economy & Currency

NOT ON FILE

## Major Sites

NOT ON FILE

## People & Notable Residents

- **Empress Licinia Donatus**: Current ruler of Truporis.
- **Queen Amarki**: Former tyrant ruler from Lurayen.

## Institutions & Organizations

NOT ON FILE

## Restrictions & Access

No restrictions.`
	},
	{
		id: 'R-08',
		title: 'Argent Peaks',
		excerpt:
			'Few facts filed: home of Earthian President Mamiya Matsumoto, and of Ordport, where the conservative think-tank Sullivan Institute and its anti-corruption arm One Integrity sit.',
		status: 'pending',
		statusLabel: 'Archive pending',
		marker: 'CITY ON FILE: ORDPORT / PRESIDENT MAMIYA MATSUMOTO',
		body: `## Overview

Few facts filed on Argent Peaks. It is the home of Earthian President Mamiya Matsumoto and the city of Ordport.

## Geography & Location

NOT ON FILE

## Polities & Governance

President Mamiya Matsumoto leads Argent Peaks.

## Economy & Currency

NOT ON FILE

## Major Sites

- **Ordport**: City where the Sullivan Institute and its anti-corruption arm One Integrity are based.

## People & Notable Residents

- **Mamiya Matsumoto**: Earthian, President of Argent Peaks. Title: Femme Fatale Oligarch.

## Institutions & Organizations

- **Sullivan Institute**: Conservative think-tank based in Ordport. Founded and led by Amber Grace Sullivan.
- **One Integrity**: Anti-corruption reporting organization, child organization of Sullivan Institute. Led by Lucyna Kushinada.

## Restrictions & Access

Archive pending. Limited information available.`
	},
	{
		id: 'R-09',
		title: 'Suichi Island',
		excerpt:
			'A large island whose central city ruins became a nanomaterial mining complex running on green fuel. An Azure Navy castle with hangars and a runway guards the northern cape; Earthian Akari Hoshino automates the freight trains.',
		status: 'active',
		statusLabel: 'Active',
		marker: '350 KM SE OF TWIN ISLES',
		body: `## Overview

Suichi Island is a large island located 350 km southeast of the Twin Isles. Its central city ruins have been converted to a large nanomaterial mining facility running on green fuel and technology.

## Geography & Location

350 km southeast of the Twin Isles. The island has a cave in the center. Beaches line the east and southeast. Hills rise on the northern side. Swamps and forests cover the northwest. Village ruins lie on the west. Tundra highlands sit on the southwest. Grassy fields stretch across the south. A river delta marks the southeast. An abandoned village and marsh occupy the northeast.

## Polities & Governance

Under Azure Land administration. Azure Navy maintains a presence on the northern cape.

## Economy & Currency

Nanomaterial mining is the primary industry. The mining complex runs on green fuel and technology.

## Major Sites

- **Nanomaterial mining facility**: Converted from central city ruins, includes housing.
- **Azure Navy castle**: Luxurious castle on the northern cape with aircraft maintenance facility (two hangars, one runway).
- **Azure Navy mansion**: Luxurious mansion on the southern edge of the central city ruins.

## People & Notable Residents

- **Akari Hoshino**: Earthian, master train driver for Suichi Mining, automating freight trains. Title: Energetic Train Idol.

## Institutions & Organizations

- **Azure Navy**: Maintains a castle and mansion on the island.

## Restrictions & Access

No restrictions.`
	},
	{
		id: 'R-10',
		title: 'Hermifair Island',
		excerpt:
			'A large abandoned island shaped like a circle, Shelllam Pond at its center. A canopied observation deck north of the pond and a bakery south of it each keep a basement; a ruined coastal city lines the south.',
		status: 'neutral',
		statusLabel: 'Uninhabited',
		marker: '400 KM SW OF TWIN ISLES',
		body: `## Overview

Hermifair Island is a large, abandoned island shaped like a circle, located 400 km southwest of the Twin Isles. A large lake named Shelllam Pond sits at its center.

## Geography & Location

400 km southwest of the Twin Isles. The island is circular in shape with a large central lake (Shelllam Pond). A rocky beach lies on the southwest. An abandoned coastal city sits on the south.

## Polities & Governance

No formal governance. The island is abandoned.

## Economy & Currency

No economic activity.

## Major Sites

- **Shelllam Pond**: Large lake at the center of the island.
- **Observation deck**: Two-floor, canopied structure north of Shelllam Pond. Imperia and her team's home base. Has a basement.
- **Bakery**: South of Shelllam Pond. Albedo (and Sylvia) and her team's home base. Has a basement.
- **Abandoned coastal city**: On the south of the island.

## People & Notable Residents

- **Imperia**: Uses the observation deck as home base.
- **Albedo and Sylvia**: Use the bakery as home base.

## Institutions & Organizations

NOT ON FILE

## Restrictions & Access

No restrictions. The island is abandoned and unclaimed.`
	},
	{
		id: 'R-11',
		title: 'Star Land',
		excerpt:
			'A star-shaped island with a large lake at its center, devoid of humans. On the south shore stands a replica of Hoshinomiya Girls High School.',
		status: 'pending',
		statusLabel: 'Archive pending',
		marker: '3,000 KM E OF TWIN ISLES / NO HUMAN RESIDENTS',
		body: `## Overview

Star Land is a star-shaped island with a large central lake, devoid of humans. A replica of Hoshinomiya Girls' High School sits on the south shore.

## Geography & Location

3,000 km east of the Twin Isles. The island is star-shaped with a large lake at its center.

## Polities & Governance

No governance. The island is devoid of humans.

## Economy & Currency

No economic activity.

## Major Sites

- **Hoshinomiya Girls' High School replica**: Located on the south shore of the central lake.

## People & Notable Residents

No human residents.

## Institutions & Organizations

NOT ON FILE

## Restrictions & Access

Archive pending. Limited information available.`
	},
	{
		id: 'R-12',
		title: 'Crimson Wasteland',
		excerpt:
			'A no-man-land located precisely 3,000 km north of the Twin Isles. The terrain runs red, beasts roam it, and artifacts spawn here from time to time, each for a limited window.',
		status: 'restricted',
		statusLabel: 'Restricted',
		marker: '3,000 KM N OF TWIN ISLES, EXACT',
		body: `## Overview

Crimson Wasteland is a no-man's-land located precisely 3,000 km north of the Twin Isles. Its terrain is mostly red and inhabited with various beasts. Sometimes various artifacts spawn here for a limited time.

## Geography & Location

3,000 km north of the Twin Isles. The terrain is predominantly red. The area is inhabited by various beasts.

## Polities & Governance

No governance. It is a no-man's-land.

## Economy & Currency

No formal economy. Artifact harvesting occurs during limited spawn windows.

## Major Sites

NOT ON FILE

## People & Notable Residents

No permanent residents.

## Institutions & Organizations

NOT ON FILE

## Restrictions & Access

ACCESS RESTRICTED. The Crimson Wasteland is a no-man's-land. Artifacts spawn for limited time windows. Entry is not advised without proper authorization and preparation.`
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
		href: '/',
		items: regions.map((r) => ({
			label: r.title,
			anchor: `/regions/${slugify(r.title)}`
		}))
	},
	{
		key: 'earthians',
		sectionTitle: 'The Earthians',
		label: 'Earthians',
		href: '/#earthians',
		items: earthians.map((e) => ({
			label: e.name,
			anchor: `/#earthians-${slugify(e.name)}`
		}))
	},
	{
		key: 'powers',
		sectionTitle: 'Powers Behind the Realm',
		label: 'Powers',
		href: '/#powers',
		items: institutions.map((i) => ({
			label: i.title,
			anchor: `/#powers-${slugify(i.title)}`
		}))
	},
	{
		key: 'restricted',
		sectionTitle: 'Restricted Archives',
		label: 'Restricted',
		href: '/#restricted',
		items: restrictedFiles.map((f) => ({
			label: f.title,
			anchor: `/#restricted-${slugify(f.title)}`
		}))
	}
];