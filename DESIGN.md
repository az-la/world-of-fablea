# Fablea Prime Archive: Design System & UI Specification

## 1. Project Overview
**Fablea** is a worldbuilding website documenting a magical, maritime universe where summoned Earthians and fictional characters coexist. The design must evoke the feeling of a **high-class, living archival database**. 

**Core Aesthetic Inspiration**: Vesper City (clean typography, modular information design, subtle atmospheric vibes, "classified document" elegance).
**Vibe Keywords**: Archival, Maritime, Sophisticated, Mysterious, Structured, Harmonious.

---

## 2. Design Principles
1. **Archival Elegance**: Treat every piece of lore as a classified or historical document. Use structured metadata, thin borders, and generous whitespace.
2. **Functional Mystery**: Reveal information progressively. Use "Restricted" or "Archive Pending" states to create intrigue without breaking usability.
3. **Maritime Minimalism**: Avoid heavy, clunky UI. Favor clean lines, subtle nautical motifs (e.g., faint grid lines, compass-like dividers), and a sense of open space.
4. **Data as Decoration**: Metadata (e.g., `ARCHIVE 001`, `STATUS: ACTIVE`, `CURRENCY: AZL`) should be styled prominently using monospaced fonts, acting as both information and visual texture.

---

## 3. Typography
A three-tier font system ensures hierarchy between grand lore, readable body text, and archival metadata.

| Role | Font Family | Usage | Example |
| :--- | :--- | :--- | :--- |
| **Display / Headings** | `Playfair Display`, `Cinzel`, or `Lora` (Serif) | Main page titles, major section headers. | "Where stories breathe..." |
| **Body / UI** | `Inter`, `Geist`, or `System UI` (Sans-Serif) | Paragraphs, navigation, button text, card descriptions. | "Azure Land is a tropical, maritime nation..." |
| **Metadata / Data** | `JetBrains Mono`, `Fira Code`, or `Courier Prime` (Monospace) | Archive IDs, status badges, currency tags, coordinates. | `ARCHIVE 001 / THE WORLD` |

**Base Settings**:
- Base font size: `16px` (1rem)
- Line height (Body): `1.6`
- Line height (Headings): `1.2`
- Letter spacing (Metadata): `0.05em` (uppercase)

---

## 4. Color Palette
A sophisticated "Deep Archive" theme (Dark Mode default) with high-contrast accents for readability and status indication.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `--bg-primary` | `#0B0F19` | Main background (Deep Navy/Slate) |
| `--bg-secondary` | `#111827` | Card backgrounds, sidebars |
| `--bg-tertiary` | `#1F2937` | Hover states, input fields |
| `--text-primary` | `#F8FAFC` | Main headings, primary body text |
| `--text-secondary` | `#94A3B8` | Subtitles, metadata, muted text |
| `--accent-azure` | `#38BDF8` | Primary links, active states, Azure Land theme |
| `--accent-gold` | `#FBBF24` | AZL currency, high-value items, Earthian titles |
| `--accent-restricted`| `#EF4444` | Restricted files, warnings, Crimson Wasteland |
| `--border-subtle` | `#334155` | Card borders, dividers, grid lines |

*Note: If implementing Light Mode, invert to an "Off-White Parchment" theme (`--bg-primary: #FAFAF9`, `--text-primary: #1C1917`, `--border-subtle: #E7E5E4`).*

---

## 5. Layout & Spacing
- **Container Max-Width**: `1200px` (centered with `margin: 0 auto`)
- **Grid System**: CSS Grid with `gap: 1.5rem` (24px) for card layouts.
- **Spacing Scale**: Use multiples of 4px (`0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`).
- **Section Padding**: `padding: 4rem 1.5rem` (vertical rhythm is crucial for the archival feel).

---

## 6. Core UI Components

### 6.1 `ArchiveHeader`
The signature top-level identifier for any page or section.
- **Structure**: 
  ```html
  <div class="archive-header">
    <span class="metadata">ARCHIVE 001 / THE WORLD</span>
    <h1 class="display-title">Where stories breathe.</h1>
  </div>
  ```
- **Styling**: Metadata in `--text-secondary`, monospace, uppercase, with a thin bottom border (`1px solid var(--border-subtle)`) separating it from the display title.

### 6.2 `StatusBadge`
Small, pill-shaped indicators for world states, faction status, or file access.
- **Props**: `label` (string), `variant` ('active' | 'restricted' | 'pending' | 'neutral')
- **Styling**: 
  - Background: `var(--bg-tertiary)`
  - Text: Monospace, uppercase, `font-size: 0.75rem`, `letter-spacing: 0.1em`
  - Variants: 
    - `active`: Border-left `3px solid var(--accent-azure)`
    - `restricted`: Border-left `3px solid var(--accent-restricted)`
    - `neutral`: Border-left `3px solid var(--text-secondary)`

### 6.3 `LoreCard`
The primary building block for displaying regions, characters, or factions.
- **Structure**:
  ```html
  <article class="lore-card">
    <div class="card-meta">
      <span>REGION / 01</span>
      <StatusBadge variant="active" label="LAWFUL NEUTRAL" />
    </div>
    <h3 class="card-title">Azure Land</h3>
    <p class="card-excerpt">A tropical, maritime nation where yachting culture meets eco-conscious advanced technology...</p>
    <a href="/regions/azure-land" class="card-link">Access File →</a>
  </article>
  ```
- **Styling**: 
  - Background: `var(--bg-secondary)`
  - Border: `1px solid var(--border-subtle)`
  - Padding: `1.5rem`
  - Hover: `transform: translateY(-2px)`, `border-color: var(--accent-azure)`, subtle `box-shadow`.
  - Transition: `all 0.2s ease-in-out`.

### 6.4 `DataGrid` / `WorldDashboard`
A horizontal or grid-based status monitor for the homepage hero.
- **Structure**: A grid of 4-5 key-value pairs.
- **Styling**: 
  - Key: Monospace, `--text-secondary`, `font-size: 0.8rem`
  - Value: Sans-serif, `--text-primary`, `font-weight: 500`
  - Separator: Thin vertical lines (`1px solid var(--border-subtle)`) between items on desktop, stacking on mobile.

### 6.5 `RestrictedFileBlock`
A special component for deep lore hooks (e.g., The Ascender, Seapoint Estate).
- **Styling**: 
  - Background: Slightly tinted with `--accent-restricted` at 5% opacity.
  - Border: `1px dashed var(--accent-restricted)`
  - Overlay: Optional subtle "scanline" or noise texture overlay.
  - Text: "ACCESS RESTRICTED" watermark or badge.

---

## 7. Micro-interactions & Animations
Keep animations subtle and purposeful. No bouncy or playful easing.
- **Page Load**: Staggered fade-in + slight upward translate (`opacity: 0` → `1`, `translateY: 10px` → `0`, `duration: 0.4s`, `ease: cubic-bezier(0.16, 1, 0.3, 1)`).
- **Link Hover**: Underline expands from left to right (`width: 0` → `100%`).
- **Card Hover**: Border color transitions to `--accent-azure` or `--accent-gold` over `0.2s`.
- **Loading States**: Use a pulsing monospace text effect: `"Decrypting Archive..."` or `"Synchronizing with Azure Network..."`

---

## 8. Asset & Iconography Guidelines
- **Icons**: Use a minimalist, stroke-based icon set (e.g., Lucide React, Heroicons, or Phosphor Icons). Stroke width: `1.5px`.
- **Dividers**: Instead of standard `<hr>`, use stylized dividers (e.g., a thin line with a small diamond or compass rose icon in the center).
- **Backgrounds**: Avoid solid, flat colors for large sections. Use subtle CSS radial gradients or a very faint SVG grid pattern (opacity: `0.03`) to add depth without distraction.

---

## 9. Accessibility (a11y) Requirements
- **Contrast**: All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
- **Focus States**: Clear, visible focus rings (`outline: 2px solid var(--accent-azure); outline-offset: 2px;`) for keyboard navigation.
- **Screen Readers**: 
  - All `StatusBadge` components must have `aria-label` (e.g., `aria-label="Status: Restricted"`).
  - Decorative icons must have `aria-hidden="true"`.
  - Archive IDs should be semantically marked up (e.g., `<small>` or `<span>` with appropriate ARIA roles).

---

## 10. Astro Implementation Notes
1. **Global Styles**: Define all CSS variables in `src/styles/global.css` under `:root`.
2. **Component Props**: Use TypeScript interfaces for all components (e.g., `interface LoreCardProps { id: string; category: string; title: string; excerpt: string; status: 'active' | 'restricted' | 'pending'; href: string; }`).
3. **Tailwind Integration**: If the starter project uses Tailwind, extend the `tailwind.config.mjs` to include the custom colors (`azure`, `gold`, `restricted`) and font families (`display`, `mono`) defined above.
4. **Content Collections**: Plan to use Astro Content Collections (`src/content/earthians/`, `src/content/regions/`) to feed data into these components, ensuring the "archival" data structure is maintained at the code level.