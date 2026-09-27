# Characters Page Beats (Relationship Chart)

Content contract for `/characters/` (archive id C-01). Every fact on the page
traces to a source of record; nothing here adds one. Register follows
`EarthiansCopyPlan.md`: archival, composed, no marketing superlatives, no
fabricated detail, thin files say "few facts filed".

## Page contract

- Header: `C-01 / The Relationship Chart`, title "Characters of Fablea",
  subtitle "Who stands with whom."
- Intro states the two real counts (subjects and links), computed from the
  data module, never hardcoded.
- Chart: fit-to-view, 1152 x 800 design box, deterministic cluster layout
  (`src/lib/diagramLayout.ts`): the most-connected Earthian sits at the
  center (computed, currently hmgfan), the other eleven ring the center, and
  figures fan outward from the Earthian they are filed under.
- Node: circular portrait thumbnail (or monogram placeholder) with the name
  below. Earthians get a gold ring and archive-number badge; figures get a
  slate ring. Click/Enter opens the dossier panel on the canvas; Escape, the
  close button, or clicking empty chart plate closes it.
- Dossier panel: archive meta line (kind / no / faction), name, title,
  excerpt, and the connection list. Each connection chip shows the other
  character's name and the filed label, color-coded left edge by kind
  (azure bond, slate division, red rivalry). Chips open the other dossier.
- Edge names appear as a single cursor-following tooltip while hovering an
  edge (wide invisible hit lines make the thin strokes hoverable); the
  resting chart stays an unlabeled web, and the dossier panel carries the
  full labeled connection list. One tooltip cannot collide with anything,
  which is why labels are not painted onto the chart.
- Deep links: `#char-<id>` opens that dossier on load; nav items point at
  them.
- Mobile: chart scrolls horizontally (min stage width 860px); the panel is a
  bottom sheet; close and chip targets respect the 44px tap minimum.

## Node roster (40)

Earthians (12): `src/data/lore.ts` is the source of record for no, name,
title, excerpt. Node ids are `slugify(name)`.

Figures (28), each with its source line:

| id | name | source |
| --- | --- | --- |
| anna-nishikinomiya | Anna Nishikinomiya | Earthians.md "HOSC" and "HPIC" sections (created HOSC, recommended HPIC); faction from lore.ts I-01 |
| hiyori-shiina | Hiyori Shiina | Earthians.md HOSC roster, "leader" |
| chiyo-shimada | Chiyo Shimada | Earthians.md HPIC roster, "the leader" |
| herminia-bertolini | Herminia Bertolini | Earthians.md Alisha ("equipped with ultra-vast powers") and Lisette ("First Ascension") |
| kumiko-oumae | Kumiko Oumae | Earthians.md "Jenny's companions" |
| yuno | Yuno | Earthians.md "Jenny's companions" / "good friends" |
| miyako | Miyako | Earthians.md "Jenny's companions" / "good friends" |
| isadora | Isadora | Earthians.md Jenny ("thanks to Isadora") and Ji-ho ("Isadora came, and comforted") |
| akiizumi-momiji | Akiizumi Momiji | Earthians.md "Akari's companions" |
| hatsuzuki | Hatsuzuki | Earthians.md "Akari's companions" |
| black-maria | Black Maria | Earthians.md Akari, "current boss is Black Maria, the CEO of Suichi Mining" |
| itsuki-nakano | Itsuki Nakano | Earthians.md "Mamiya's companions" |
| kiryuu-kikyou | Kiryuu Kikyou | Earthians.md "Mamiya's companions" |
| elizabeth-crowskin | Elizabeth Crowskin | Earthians.md Mamiya, "after toppling Queen Elizabeth Crowskin" |
| theoto-rikka | Theoto Rikka | Earthians.md "Lisette's companions" |
| konoe-mina | Konoe Mina | Earthians.md "Lisette's companions" |
| fu-xuan | Fu Xuan | Earthians.md "Lisette's companions" |
| pamiat-merkuria | Pamiat Merkuria | Earthians.md "Natalie's companions" |
| yuzuriha | Yuzuriha | Earthians.md "Natalie's companions" |
| liscia-elfrieden | Liscia Elfrieden | Earthians.md Ji-ho ("as his helper", "his loyal companions") |
| sunohara-kokona | Sunohara Kokona | Earthians.md Ji-ho (same lines) |
| osakabehime | Osakabehime | Earthians.md Ji-ho ("trained to be his DevOps", "his loyal companions") |
| diane-cross | Diane Cross | Earthians.md Ji-ho ("Diane Cross... loves him. And, he loves Diane back", midnight blue suit) |
| ayumi-shinozaki | Ayumi Shinozaki | Earthians.md "Aika's companions" |
| rean-schwarzer | Rean Schwarzer | Earthians.md "Aika's companions" |
| voroshilov | Voroshilov | Earthians.md Katarina, "loyal companion is Voroshilov" |
| hajime-tsukishima | Hajime Tsukishima | Earthians.md Team Icchi roster, "(leader)" |
| roroa-amidonia | Roroa Amidonia | lore.ts region body (Sivudlerk), "biggest business rival of Anna Nishikinomiya" |

Companion entries whose only filed fact is the companionship read "Loyal
companion of X" and nothing more.

## Edge list (40)

Labels are filed per direction (`label` reads from-side, `reverse` to-side).
Grouped by circle; sources are the same lines as the roster table:

- hmgfan hub: Alisha "wife of" (Earthians.md: "one of the wives of hmgfan");
  Akari "wife of" ("Akari is hmgfan's wife"); Dina "arrived with"; Jenny
  "wants a place among his lovers" ("she wants to be one of his lovers");
  Natalie "devoted to" ("deeply devoted to hmgfan"); Mamiya / Lisette / Aika
  "loves" (each Earthian's own entry); Anna "created HOSC for"; Hiyori
  "leads HOSC for"; Chiyo "leads HPIC for".
- Ascension grants: Herminia to Alisha ("granted ultra-vast powers") and
  Lisette ("brought to First Ascension"); Alisha to Mamiya ("Thanks to
  Alisha Elliott, Mamiya has attained her First Ascension").
- Jenny: "summoned alongside" Takechi ("concurrent with Takechi Hironaka's
  arrival"); companions Kumiko, Yuno, Miyako; Isadora "converted the
  fortune of" ("GBP 1.5 billion... thanks to Isadora").
- Isadora to Ji-ho: "comforted and brought through" ("Isadora came, and
  comforted Ji-Ho... he got into the portal").
- Akari: companions Momiji, Hatsuzuki; Black Maria "boss of" / reverse
  "answers to" ("now answers to Black Maria").
- Mamiya: companions Itsuki, Kiryuu; "toppled" Elizabeth Crowskin.
- Lisette: companions Theoto, Konoe, Fu Xuan.
- Natalie: companions Pamiat Merkuria, Yuzuriha.
- Ji-ho: companions Liscia, Kokona, Osakabehime; Diane Cross "loves, and is
  loved back" (symmetric, per source).
- Aika: companions Ayumi, Rean.
- Katarina: companion Voroshilov ("her one loyal companion").
- Takechi: Hajime "leads Team Icchi for".
- Rivalry: Roroa "biggest business rival of" Anna.

## Considered and excluded

- **Imperia**: ties run through devices (Ascender, Coupler) rather than
  personal edges; excluded from the chart, noted here for the owner.
- **Elizabeth Crowley**: the source names both "Queen Elizabeth Crowskin"
  (toppled) and "Elizabeth Crowley" (fallen queen, True Soul of Silent
  Verdict). Only Crowskin is charted; if they are one person, the owner
  should reconcile the names in the sources first.
- **Inglis Eucus**: Akari's tie is past employment ("previously working
  under"); only the current boss edge is filed.
- **Division rosters** (HOSC members, The Equilibrium, Team Icchi members,
  A.f.H. loyalists, HPIC staff): rank-and-file members have no personal edge
  beyond membership; excluded per the curation decision. Division leadership
  appears as edge labels instead.
- **Anna to Chiyo (HPIC recommendation)**: mediated through hmgfan's
  division edges; dropped to keep the hub readable.

## Design decisions (one line each)

- Chart metaphor over cards: a relationship web is spatial data; a chart
  shows the hub structure (hmgfan) that cards would flatten.
- Fit-to-view, no pan/zoom: 40 fixed subjects fit one archival plate; less
  client code, keyboard traversal stays trivial.
- Monogram placeholders, not generated portraits: no portrait art exists;
  initials are an honest placeholder until real art is filed (R-23). Drop
  `<id>.jpg` into `src/assets/characters/` and the chart picks it up.
- Edge color code from existing tokens only: azure/gold/restricted/slate are
  the archive's established vocabulary; no new hues.
- Labels on selection only: 40 permanent labels would collide; a single
  hover tooltip plus the dossier list keep the resting chart legible.
- Names in JetBrains Mono under each node: metadata tier per DESIGN.md §3.

## Portraits

`src/assets/characters/<id>.jpg` (png/webp also accepted), named after the
node id, e.g. `hmgfan.jpg`, `diane-cross.jpg`. Files are picked up at build
time by `import.meta.glob`, rendered through `astro:assets` at 72/144px
(quality 80). No file means the monogram placeholder renders.
