## Performance fixes — 3 edits + 1 dependency

**Context from Phase 1 exploration (verified):**
- Fonts actually used per family: **Playfair Display 400 only** (no weight class anywhere on `font-display` elements), **Inter 400/500/600**, **JetBrains Mono 400/500/600**. CDN loads 9 weights (Layout.astro:34) — the variable-font + `subset: latin` version loads 3 files instead of 9.
- Sharp 0.35.4 is already installed (Astro auto-selects it — that's why dist has webp variants today). The `Image` component supports `quality` and `widths` props directly, so image work needs no new package.
- Deployment: GitHub Pages, `base: /world-of-fablea/` — no change needed, fonts will serve fine from `_astro/` hashed assets.

### 1. Dev-only 800ms load floor — `src/layouts/Layout.astro`
The inline script (lines 40–57) unconditionally does `setTimeout(setLoaded, 800)` after `window.load`. Wrap it in an `import.meta.env.DEV` check (inlined at build time — no runtime cost in prod):
- **Dev:** unchanged — `load` + 800ms floor, you still see the staggered animation while working locally.
- **Prod:** `data-loaded` is set on `window.load` with no floor, so the fade cascade starts immediately once resources are in. No other CSS/JS changes — `global.css` stays as-is.

### 2. Self-hosted fonts — `package.json`, `Layout.astro`, `tsconfig.json`
- Add `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`, `@fontsource/playfair-display` (only the 400 weight package: `@fontsource/playfair-display@400`).
- In `Layout.astro`, replace the 3 Google Fonts `<link>` tags (lines 31–36) with imports of the 4 CSS files (3 variable + 1 Playfair), placed before the `global.css` import so `@import` statements resolve via Vite. `subset: latin` is default; all 3 files are served locally with hashed names.
- `tsconfig.json`: `include` currently `"**/*"` — add a negated `!"node_modules"` (Astro's base tsconfig excludes it implicitly, but being explicit is safer after the new imports).
- No `global.css` change: the `--font-*` stacks already name "Inter"/"JetBrains Mono"/"Playfair Display", which `@fontsource` registers under.

**Byte impact:** replaces ~9 woff2 files + a render-blocking third-party CSS request (~250KB+) with ~3 local files (~45–60KB), no third-party TTFB, no serializing CSS request.

### 3. Image sizes/quality — 4 components
All keep `astro:assets` `Image` (sharp service auto-active). Changes:
- `HeroSection.astro` (lines 16–23): `widths={[640, 1280]}` (dropped 1920/2560 — hero text is at most 2560 CSS px wide, and the 40%-opacity backdrop doesn't need more), `quality={80}` explicit, keep `loading="eager" fetchpriority="high"`.
- `RegionsGrid.astro` / `EarthianRegistry.astro` / `InstitutionsGrid.astro` (banner `Image`s at lines 17–22 / 16–21 / 17–22): `widths={[640, 960]}` and `quality={65}`. The banners display at `h-40 md:h-56` (160–224px tall), so 960w at quality 65 is a big cut from today's 1600w @ q80 (e.g. institutions 192KB → ~40–50KB).

**Expected payload drop (homepage, worst-case 2560-wide viewport):** hero 305KB → ~120KB, three banners 298+201+193KB → ~150KB total; plus fonts 250KB+ → ~50KB. Homepage drops from ~1.6MB+ to well under 0.6MB.

### Verification
1. `npx astro build` — confirm no errors, 4 font files appear in `dist/_astro/`, and `dist/index.html` no longer references `fonts.googleapis.com`/`gstatic.com`.
2. `ls -lh dist/_astro/*.webp` — confirm smaller variant sizes.
3. `astro dev` (background, per AGENTS.md) — open localhost, confirm the 800ms floor still shows the animation on dev; then verify prod behavior via the built HTML (no `setTimeout`).

No commit unless you ask.