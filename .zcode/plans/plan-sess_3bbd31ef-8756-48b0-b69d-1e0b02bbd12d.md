# Dashboard Color Match, Section Banners, Image-Component Migration

## 1. World Status Dashboard background → dissolve color
The hero fades out into `#0B0F19` (bg-primary), and "Explore Fablea" shows exactly that by carrying no background of its own. Do the same for the dashboard:

- `WorldStatusDashboard.astro:14` — drop the inline `style="background-color: var(--color-bg-secondary);"` so the section inherits the body's `bg-primary`, matching the RegionsGrid idiom. Keep its `border-b` to separate it from Explore Fablea.
- `HeroSection.astro:8` — remove `border-b border-border-subtle` from the hero section. Same-color neighbors plus the 1px rule would leave a visible hairline across the dissolve; without it the fade melts straight into the dashboard.
- Check after: `DataGrid` cells are `bg-bg-primary p-4` on a `gap-px bg-border-subtle` frame, so they'll merge with the section and the grid stays readable via 1px rules only. No change unless it looks broken in the browser.

## 2. Hero image → `astro:assets` `Image` component (Astro audit note)
- `git mv public/images/hero-bg.webp src/assets/hero-bg.webp` (files in `public/` can't be optimized; `src/assets/` can).
- In `HeroSection.astro`: `import heroBg from '../assets/hero-bg.webp'`, delete the `BASE_URL` string-building lines, and swap the `<img>` for:
  `<Image src={heroBg} alt="" class="absolute inset-0 h-full w-full object-cover opacity-40" cover={{ width: 2560, height: 1440 }} fetchpriority="high" />`
  (`cover` emits a responsive srcset; `sharp` is already installed so optimization runs.)
- The masked wrapper, scrim, wash, and grid layers stay exactly as they are.

## 3. Placeholder banners from picsum.photos (one per section, 3 files)
Download three fixed picsum photos (pinned `/id/{n}/1600/600` landscape endpoints, chosen so each reads atmospherically) into `src/assets/banners/`:
- `regions.jpg` → Explore Fablea
- `earthians.jpg` → The Earthians
- `institutions.jpg` → Powers Behind the Realm

Render each as a full-width strip inside the section container, between `ArchiveHeader` and the card grid: `<Image src={banner} alt="" cover={{ width: 1600, height: 600 }} class="mb-10 h-40 w-full rounded-arch object-cover md:h-56" />` (`rounded-arch` uses the existing but currently unused `--radius-arch: 4px` token). `alt=""` for now since the photos are placeholders; real captions come with the user's own images.

Components touched: `RegionsGrid.astro`, `EarthianRegistry.astro`, `InstitutionsGrid.astro` — each imports its banner from `../assets/banners/`. To swap in their own image later, the user overwrites the same filename (same extension) — no code edit needed; a different format means one import-line change, which I'll call out in delivery.

## 4. Verification
- Dev server is already running on :4321; via browser evaluate confirm: dashboard computed background equals `rgb(11, 15, 25)` (same as hero/body), the hero renders an `<img>` with a generated optimized `srcset`, all three banners load with nonzero natural width/height, no horizontal overflow.
- `npx astro build` must pass clean.
- Report the picsum ids used and the exact banner filenames/locations for replacement.

## Files
- Modified: `HeroSection.astro`, `WorldStatusDashboard.astro`, `RegionsGrid.astro`, `EarthianRegistry.astro`, `InstitutionsGrid.astro`
- Added: `src/assets/hero-bg.webp` (moved), `src/assets/banners/{regions,earthians,institutions}.jpg`
- Removed: `public/images/hero-bg.webp`