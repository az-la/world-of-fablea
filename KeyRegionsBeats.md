# Key Regions: Content Spec (Archive 003)

What the homepage's **Key Regions** section (`#regions`, rendered by `RegionsGrid.astro`) should present. All facts come from `Fablea_tidied.md`; formatting follows `DESIGN.md` (ArchiveHeader 6.1, StatusBadge 6.2, LoreCard 6.3, "Data as Decoration").

Design read: archival dossier index for worldbuilding readers, Deep Archive language, dials ENERGY 2 / RHYTHM 2 / MOTION 1.

## Section frame

- `ArchiveHeader`: archive id `003`, category `Key Regions`, display title `Explore Fablea`, subtitle `Regions with filed dossiers`.
- Banner: `src/assets/banners/regions.jpg`, decorative (`alt=""`).
- Grid: uniform LoreCard columns (1 / 2 / 3 across breakpoints). Uniformity is the point: an archive drawer looks the same whatever it holds. Variation comes from the badge color and the marker line, not from card shapes.

## Curation rules

- A card qualifies if it is a nation, territory, or major landmass with its own geography in the source. Cities, corporations, and single-estate files do not get cards here (see "Not presented here").
- Order runs outward from the known: the reference point first, then core nations, distant nations, frontier isles, and finally the unfiled and restricted, so the section ends on mystery and hands off to Restricted Archives (beat 6).
- Each card carries one monospace **marker** line (bearing, capital, currency). This is principle 4 of DESIGN.md: coordinates and codes as texture.
- Badges use the StatusBadge mapping: `active` (azure) for filed nations, `restricted` (red) for the wasteland, `pending`/`neutral` for incomplete files.
- Every number, name, and distance in an excerpt must trace to `Fablea_tidied.md`. Where the file is empty, say so with a `NOT ON FILE` marker instead of inventing detail.

## The card lineup

12 cards. ID, title, badge, marker, then the exact excerpt.

### R-01 · Twin Isles

- Badge: `ACTIVE`
- Marker: `ALL DISTANCES MEASURED FROM HERE`
- Excerpt: Two identical islands at the middle of the open ocean. Small hills, rich vegetation, species found nowhere on Earth. Azure Land claims them as territory; Taihei is a faction-state on the southern isle.
- Source: Twin Isles entry; Azure Land Geography; Taihei Overview.

### R-02 · Azure Land

- Badge: `LAWFUL NEUTRAL`
- Marker: `CAPITAL NORTHPORT / CURRENCY AZL`
- Excerpt: Tropical, tourism-oriented maritime nation where yachting culture meets eco-conscious advanced technology. Naval exploration, a highly trained military, and island dossiers ranging from resort atolls to submarine pens.
- Source: Azure Land Overview and Economy.

### R-03 · Taihei

- Badge: `ACTIVE`
- Marker: `PM TAKECHI HIRONAKA / CURRENCY TQL`
- Excerpt: Faction-state on the southern Twin Isles, governed by Earthian Prime Minister Takechi Hironaka. The Omi Alliance administers the east, Mankai-no-Wa the west. Eight cities, from Shin Tokyo to Therei, an underwater district 200 m below sea level.
- Source: Taihei section (Overview, Currency, Major Cities).

### R-04 · Afrea

- Badge: `MACAHAM UNION`
- Marker: `CAPITAL FLETIN / CURRENCY AFR / 12H BEHIND TWIN ISLES`
- Excerpt: Large river-cut country on the continent of Macaham, some 20,000 km from the Twin Isles. Its Venice-like capital has canals deep enough for superyachts, and the Macaham Union's leading member hosts the largest yacht show in Fablea.
- Source: Afrea section; Teruhashi Conglomerate (Afrea Yacht Show).

### R-05 · Sirmiq

- Badge: `ACTIVE`
- Marker: `CAPITAL SIVUDLERK / CURRENCY SIK`
- Excerpt: A country ringing the Arctic zone of Fablea Prime: Scandinavia, northern Canada, Siberia, and Alaska folded into one multicultural state. Inuktitut is the main language; the coastal capital answers to Ryouko Fueguchi.
- Source: Sirmiq entry.

### R-06 · Volnyk

- Badge: `EMPIRE`
- Marker: `CAPITAL ATALIN / RULE EMPRESS IMPERA LORESSA`
- Excerpt: Island empire near the Antarctic side, 2,000 km south of Azure Land, whose radar-burst coast hides icy bays and black-stone cliffs. Steel, polar oil, cold storage, and ice-trained elites. Hard, disciplined, expensive to ignore.
- Source: Volnyk section (Geography, Economy, Reputation).

### R-07 · Truporis

- Badge: `ACTIVE`
- Marker: `NATIONS LURAYEN, CYMERE, ZURNWEH`
- Excerpt: An Australia-sized continent 1,200 km northeast, waterways capable of carrying ships, three nations. Under the old queen nobody here could afford a yacht; since hmgfan's arrival and Empress Licinia Donatus, charters slowly gain momentum.
- Source: Truporis entry.

### R-08 · Argent Peaks

- Badge: `ARCHIVE PENDING`
- Marker: `CITY ON FILE: ORDPORT / PRESIDENT MAMIYA MATSUMOTO`
- Excerpt: Few facts filed: home of Earthian President Mamiya Matsumoto, and of Ordport, where the conservative think-tank Sullivan Institute and its anti-corruption arm One Integrity sit.
- Source: Earthians list (Mamiya); Sullivan Institute entry.

### R-09 · Suichi Island

- Badge: `ACTIVE`
- Marker: `350 KM SE OF TWIN ISLES`
- Excerpt: A large island whose central city ruins became a nanomaterial mining complex running on green fuel. An Azure Navy castle with hangars and a runway guards the northern cape; Earthian Akari Hoshino automates the freight trains.
- Source: Suichi Island entry; Earthians list (Akari).

### R-10 · Hermifair Island

- Badge: `UNINHABITED`
- Marker: `400 KM SW OF TWIN ISLES`
- Excerpt: A large abandoned island shaped like a circle, Shelllam Pond at its center. A canopied observation deck north of the pond and a bakery south of it each keep a basement; a ruined coastal city lines the south.
- Source: Hermifair Island entry.

### R-11 · Star Land

- Badge: `ARCHIVE PENDING`
- Marker: `3,000 KM E OF TWIN ISLES / NO HUMAN RESIDENTS`
- Excerpt: A star-shaped island with a large lake at its center, devoid of humans. On the south shore stands a replica of Hoshinomiya Girls' High School.
- Source: Star Land entry.

### R-12 · Crimson Wasteland

- Badge: `RESTRICTED`
- Marker: `3,000 KM N OF TWIN ISLES, EXACT`
- Excerpt: A no-man's-land located precisely 3,000 km north of the Twin Isles. The terrain runs red, beasts roam it, and artifacts spawn here from time to time, each for a limited window.
- Source: Crimson Wasteland entry.

## Not presented here

Routed elsewhere on purpose, so the grid stays a map and not a phone book:

- Azure Land's islands (Calding, Plybury, Amestry, Sentinel Atoll, Mariner's Rest, Cinder Reef, Glass Cay, Haven Isle) and cities (Northport, Toyotani, Esenor): sub-files of the Azure Land dossier page.
- Taihei's cities and islands, Mezzoluna Village: sub-files of the Taihei dossier page.
- Sirmiq's Amidonia Enterprises and Silatuyok Shipyards: beat 5, Factions & Institutions.
- Seapoint Estate and The Ascender: beat 6, Restricted Archives. Do not duplicate.

## Link behavior

Region pages (`/regions/<slug>`) do not exist yet, so cards must not carry a live link. Keep current behavior: each card anchors to its own id (`#regions-<slug>`, already wired through `navGroups`, so the navbar dropdown gains new entries automatically). Use the link label `Dossier pending` until the page ships, then switch to the `Access File` link from DESIGN.md 6.3. No dead controls (DESIGN.md R-24/R-26).

## Gap versus current data

`src/data/lore.ts` ships six of these cards (Azure Land, Taihei, Twin Isles, Crimson Wasteland, Suichi, Star Land). This spec adds Afrea, Sirmiq, Volnyk, Truporis, Hermifair, and Argent Peaks, renumbers ids to presentation order, and adds one field to `Region` for the marker line. Twelve cards make an even 3-column grid, stacking to a single column on mobile per DESIGN.md 5.

## Copy rules applied

- Every fact traces to `Fablea_tidied.md`; where the file lacks a fact, the card says `NOT ON FILE` or `ARCHIVE PENDING` rather than guess.
- No em dashes, no marketing adjectives, no fabricated statistics (antislop R-02, R-16, R-17).
- Statuses are honest: restricted is reserved for the wasteland, pending marks genuinely thin files.
