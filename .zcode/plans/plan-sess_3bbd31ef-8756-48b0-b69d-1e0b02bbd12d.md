# Main Page Rewrite with Tailwind: Implementation Plan

## Context
Rewriting World of Fablea main page using Tailwind CSS, following DESIGN.md specifications and HomepageBeats.md structure, with antislop principles applied DURING development.

**Current State**: Astro 7.3.3, vanilla CSS with custom properties, 4-section flow (Hero → Dashboard → Map → Earthian Registry)

**New Structure** (HomepageBeats.md): 6 sections
1. Hero Section: "The Hook"
2. World Status Dashboard
3. Explore Fablea: Key Regions
4. The Earthians: The Summoned (12 Earthians)
5. Factions & Institutions
6. Restricted Archives: Deep Lore Hooks

## Design System (DESIGN.md)

**Typography**:
- Display: Playfair Display (archival elegance for titles)
- Body: Inter (clean readability for data)
- Metadata: JetBrains Mono (archival metadata aesthetic)

**Color Palette** (Deep Archive Dark Mode):
- bg-primary: #0B0F19, bg-secondary: #111827, bg-tertiary: #1F2937
- text-primary: #F8FAFC, text-secondary: #94A3B8
- accent-azure: #38BDF8 (navigation), accent-gold: #FBBF24 (Earthian emphasis)
- accent-restricted: #EF4444 (deep lore mystery)
- border-subtle: #334155

**Layout**: 1200px max-width, 1.5rem grid gap, 4rem vertical section padding

**Liveliness Dials**: ENERGY 2 (Balanced), RHYTHM 2 (Consistent with breaks), MOTION 1 (Hover only)

## Implementation Steps

### Phase 1: Tailwind Setup
1. Install: `npx astro add tailwind`
2. Configure `tailwind.config.mjs`:
   - Map DESIGN.md colors to theme
   - Add font families (display/sans/mono)
   - Set container max-width 1200px
3. Update `src/styles/global.css` with Tailwind directives
4. **Antislop R-06**: Typography chosen for brand character, not defaults. Reason documented.

### Phase 2: Component Architecture

**New/Refactored Components**:

1. **ArchiveHeader.astro** - Metadata span + display title with border separator
2. **StatusBadge.astro** (refactor) - Pill with left-border variants, real status only (R-09)
3. **LoreCard.astro** - Card with meta, title, excerpt, link. Hover lift. Real hrefs required (R-26)
4. **DataGrid.astro** - Key-value pairs for dashboard, responsive stacking
5. **RestrictedFileBlock.astro** - Restricted tint, dashed border, functional mystery (R-01 purpose: intentional intrigue)

**Antislop R-31**: Every component purpose documented.

### Phase 3: Section Implementation

#### Section 1: Hero (The Hook)
- ArchiveHeader: "ARCHIVE 001 / THE WORLD" + "Where stories breathe"
- 3 paragraphs: Fablea intro (living testament, fictional characters, yachting culture)
- No generic CTA unless content demands (R-15)
- Typography hierarchy: One focal point (title)
- No em dash (R-02)

#### Section 2: World Status Dashboard
- DataGrid with 5 items from HomepageBeats.md
- Monospace keys (archival metadata), sans-serif values
- Vertical separators on desktop, stack on mobile
- All data real from lore (R-17)

#### Section 3: Explore Fablea: Key Regions
- Grid: 6-8 region cards (Azure Land, Taihei, Twin Isles, Crimson Wasteland, etc.)
- LoreCard components with varied heights (not uniform R-14)
- Real hrefs to /regions/* or "Coming soon" label (R-24, R-26)
- 3-column desktop, 2-col tablet, 1-col mobile
- Composition varies from previous sections (RHYTHM 2)

#### Section 4: The Earthians (12 from Fablea_tidied.md)
- Intro: "Pulled from nothingness. Bound to this world."
- 4-column dense grid (denser than regions)
- Gold accent for titles (hierarchy: Earthian importance)
- Monospace metadata "EARTHIAN / 01"
- No fake avatars (R-23)
- All names/data real from lore (R-18, R-38)

#### Section 5: Factions & Institutions
- 6-8 institution cards (Income Makers, Azure Navy, K-Cruises, Teruhashi Conglomerate, etc.)
- 2-column grid for emphasis (asymmetric composition)
- Varied card sizes (R-14)
- StatusBadge for types (INSTITUTION/MILITARY/ALLIANCE)
- Different grid pattern = RHYTHM 2 compliance

#### Section 6: Restricted Archives
- Darker section background (bg-primary vs bg-secondary)
- 2 RestrictedFileBlock cards: The Ascender, Seapoint Estate
- Styling: bg-accent-restricted/5, border-dashed, "ACCESS RESTRICTED" badge
- Purpose documented (R-01, R-31): functional mystery for deep lore
- Distinct composition: darker, fewer items, larger cards (RHYTHM 2)

### Phase 4: Responsive & Accessibility

**Responsive (R-03)**:
- Mobile breakpoint: 768px (Tailwind md:)
- No horizontal overflow, text stays in containers
- Touch targets minimum 44px
- Spacing consistent across breakpoints

**Accessibility (R-25, R-32)**:
- Color contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Keyboard: Tab navigation, Enter/Space activation, Escape for modals
- Focus rings: focus:outline-2 focus:outline-accent-azure focus:outline-offset-2
- ARIA: StatusBadge aria-label, decorative elements aria-hidden

### Phase 5: Verification (R-35)

Before delivery:
1. Run `npm run dev`
2. Click every link, verify destination or "Coming soon" label
3. Test mobile breakpoint
4. Tab through with keyboard only
5. Check console for errors
6. Record click-through results

**Delivery Gate checklist**: All Hard Gate items NO, all Purpose-Gate items have written reasons, all Liveliness items YES, all Craftsmanship items pass.

## File Changes

**New**: tailwind.config.mjs, ArchiveHeader.astro, DataGrid.astro, LoreCard.astro, RestrictedFileBlock.astro, RegionsGrid.astro, InstitutionsGrid.astro, RestrictedArchives.astro

**Modified**: package.json, astro.config.mjs, global.css, index.astro, HeroSection.astro, WorldStatusDashboard.astro, StatusBadge.astro, EarthianRegistry.astro (reuse as EarthianRegistryPreview), Layout.astro

**Deprecated**: WorldMap.astro (replaced by RegionsGrid), ArchiveCard.astro (replaced by LoreCard)

## Antislop Compliance

✓ Design direction: DESIGN.md + HomepageBeats.md + Fablea_tidied.md (R-37)
✓ Typography: Brand character documented (R-06)
✓ Colors: 2 core + 2 accent, purposeful (R-01, R-29)
✓ Layout: Content-driven, varied rhythm (R-05, RHYTHM 2)
✓ Components: Varied, not uniform (R-14, R-20)
✓ Motion: Hover only (R-19, MOTION 1)
✓ Content: All real from lore (R-17, R-18, R-36, R-38)