# Region Detail Page: Beats Spec (`src/pages/regions/[slug].astro`)

A content contract for the dynamic region detail page, not a component spec. It says what beats the page must render, where each piece of info comes from, and how the existing component vocabulary (`DESIGN.md` 6.1-6.3, `StatusBadge.astro`, `LoreCard.astro`) slots in. The slug is the region title slugified by the existing `slugify()`, so `azure-land` and `crimson-wasteland` resolve; regions with no slug-friendly name (Twin Isles) fall back to a slug key on the `Region` object.

Design read: single-dossier detail screen for archive readers, Deep Archive Vesper City language, dials ENERGY 2 / RHYTHM 1 / MOTION 1.

## What feeds the page

- `src/data/lore.ts` gains a marker field plus a fuller body per region; the detail page reads the matched `region` object, not a separate content file.
- `ArchiveHeader` carries the dossier id (from `region.id`) and category `REGION`, replacing the grid's `Explore Fablea` header.
- `StatusBadge` (variant tied to `region.status`) is rendered inline, mirroring the grid so a reader can confirm they are in the right file.
- The grid's LoreCard excerpt becomes the page's lead blurb; a new `body` field (plain markdown, curated from `Fablea_tidied.md`) fills the deep sections.

## Layout (top to bottom)

1. `ArchiveHeader` -- id `region.id`, category `REGION`, title `region.title`. Same metadata style as the grid header (monospaced, thin bottom border), just retitled from "Key Regions" to "REGION".
2. `StatusBadge` -- flush above the display title, one line, so the reader sees the access level before the heading.
3. Display title -- region name in display-serif (`font-display`), the same treatment the LoreCard title gets on hover.
4. Lead blurb -- the grid excerpt, now in body copy width. Sets context before deeper detail.
5. Marker line -- the one-line coordinate/currency tag from KeyRegionsBeats, monospaced under the heading to act as texture.
6. `RegionDetail` -- structured markdown body, the actual substance of the dossier.
7. Back to Key Regions -- a plain link to `#regions` (the grid anchor), because this page is reached by expanding a card, so returning is the expected motion.

## RegionDetail body: ordered beats

The body field is an ordered list of sections, each keyed to one fact block in `Fablea_tidied.md`. Missing beats render a neutral `NOT ON FILE` paragraph rather than an empty box. Sections that exist only in the source as single sentences (e.g. a currency value) stay single-sentence; never inflate prose to fill space.

1. **Overview** -- the summary paragraph from the source (Azure Land's "tropical, tourism-oriented... lawful neutral stance", etc.).
2. **Geography & Location** -- islands, coastlines, distances from Twin Isles, terrain, climate. For Volnyk: the radar-burst coast and icy bays. For Hermifair: the circular shape and Shelllam Pond.
3. **Polities & Governance** -- who rules; for Taihei, the east/west split and PM Takechi; for Azure Land, Laeticia Aucerius and the Navy Council; for Afrea, the Macaham Union.
4. **Economy & Currency** -- currency name and peg if given; key industries and major employers from the source (Azure Power Company, Teruhashi Conglomerate, K-Cruises, Minamitsu Shipbuilding).
5. **Major Sites** -- islands and cities as sub-headings. Azure Land gets its island list (Calding, Plybury, etc.) one level deep; Taihei gets its cities and islands; Volnyk gets its cities and isles. Each sub-heading is bold, not a LoreCard.
6. **People & Notable Residents** -- only the named figures tied to the region (Maya Satou for Tosa-Sato, Ho'olheyak for Seapoint, Kamisato Ayato for Therei, Laeticia for Azure Land). No invented biographies -- a name and title line, sourced.
7. **Institutions & Organizations** -- military, corporations, and factions stationed there (Azure Navy and Azure People Army for Azure Land; Omi Alliance for Taihei; Sullivan Institute for Argent Peaks). This beat links back to the Factions & Institutions section, closing the loop.
8. **Restrictions & Access** -- rendered only for restricted or pending regions. Crimson Wasteland shows its `ACCESS RESTRICTED` block with the note about artifact windows; Argent Peaks and Star Land show `ARCHIVE PENDING` in the restricted tint so the reader understands the file is deliberately thin, not broken.

## States the page must show

- **Complete dossier** -- the normal path, at least beats 1 through 5 render.
- **Thin file** -- beats 1-3 exist, beats 4-7 are `NOT ON FILE`, so Argent Peaks and Star Land still feel intentional, not broken.
- **Restricted region** -- Crimson Wasteland renders all real beats, plus a bordered `RestrictedFileBlock`-style callout instead of beat 8, matching the homepage Restricted Archives tone.
- **404 slug** -- slug not matching any region renders the same `ArchiveHeader` with `STATUS: NOT FILED` and a back link, so a mistyped URL still feels on-brand.
- **Loading** -- because the matching happens client-side on navigation, a static skeleton of the ArchiveHeader renders until the region data resolves; no spinner, just the header placeholder to avoid layout thrash.

## Cross-beat links

- Institutions named in the body link to their entries in the `#powers` section (nav anchor `#powers-{slug}`), already wired in `navGroups`.
- Notable residents link to the `#earthians-{slug}` anchors where the resident is itself an Earthian; otherwise the beat keeps just the name with no link rather than pointing to nothing (R-24 dead-link rule).
- The "Back to Key Regions" link points to `#regions`, the existing anchor, so it works whether the reader scrolled down or navigated fresh.

## Data shape note

Add `marker?: string` and `body?: string` to the `Region` interface in `src/data/lore.ts`. The marker is the one-line coordinate tag; the body is a markdown string assembled per the beat order above. Regions with no real body (Hermifair, Star Land) leave `body` as a curated three-sentence string so the page never ships empty content sections. This keeps the single source of truth in `lore.ts`, matching how the grid already pulls from it.

## Copy rules applied

One fact per line, no hedging. Currency is "1 AZL = 1 USD" (Twin Isles rule), not restated as prose. Badge variants are literal: `active`, `restricted`, `pending`, `neutral`. The restricted tint on Crimson Wasteland uses `--accent-restricted` exactly as DESIGN.md defines it.
