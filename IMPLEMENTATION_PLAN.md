# CSS Showcase - Implementation Plan (Next.js Migration)

**Last Updated:** 8 February 2026 (Visual Audit #6)
**Status:** Phase 8.5 (5/7) + Phase 9 COMPLETE → Phase 10 - Polish

### Architecture

Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + ShadCN UI

**Working Directory:** `css-showcase/` (the Next.js app)
**Local Reference:** `css-showcase/ui/` (cloned shadcn/ui open-source repo — use for component examples, theming docs, registry patterns)

999. Do NOT include Claude as co-author when committing to git.
9999. Ensure all sections on desktop are in columns and have a divider. Don't group grids together in a row, as it causes UX issues and cannot read the code snippets.

### Implementation Note

All frontend implementation must use the `/frontend-design` skill. Invoke it before writing any frontend code to ensure production-grade, distinctive design output.

---

## Completed Phases (Summary)

| Phase | Status | Tasks |
|-------|--------|-------|
| Phase 1: Foundation | COMPLETE | 10/10 |
| Phase 2: Fundamentals | COMPLETE | 3/3 |
| Phase 3: Layout | COMPLETE | 5/5 |
| Phase 4: Visual Effects | COMPLETE | 5/5 |
| Phase 5: Components | COMPLETE | 5/5 |
| Phase 6: Advanced | COMPLETE | 4/4 |
| Phase 7: Modern CSS | COMPLETE | 6/6 |
| Phase 8: Resources | COMPLETE | 2/2 |

All 30 content pages migrated. Shell, sidebar, header, footer, search, theme toggle all working.

---

## Phase 8.5: Studio Ghibli Visual Refresh

### Task 8.5.1: Apply Studio Ghibli Theme
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `css-showcase/app/globals.css`, `css-showcase/components.json`

Create a Studio Ghibli-inspired colour palette manually in `globals.css`. The Ghibli theme is not available as a pre-built shadcn registry package — it must be hand-crafted.

**Reference:** The cloned shadcn/ui repo at `css-showcase/ui/` contains the theming system. See `css-showcase/ui/apps/v4/registry/themes.ts` for theme structure and `css-showcase/ui/apps/v4/content/docs/(root)/theming.mdx` for CSS variable conventions. Available base themes (emerald, green, sky, amber, stone) can serve as starting points.

**Palette (oklch):**
- Primary: forest green `oklch(0.72 0.12 145)` — Totoro's forest
- Secondary: earth brown `oklch(0.65 0.08 65)` — woodland paths
- Accent: sky blue `oklch(0.78 0.10 230)` — Laputa skies
- Background: creamy neutral `oklch(0.97 0.01 90)` — aged parchment
- Dark mode: twilight forest tones — deep greens and indigos

**Steps:**
- Update CSS variables in `globals.css` `:root` and `.dark` blocks
- Merge with existing extended tokens (preserve surfaces, gradients, shadows, easings)
- Update extended tokens to match Ghibli palette (gradient-primary, hover-overlay, focus-ring, selection colours)
- Keep `@theme inline` block structure — only values change
- Do NOT modify `page.module.css` demo styles or code strings
- `npm run build` must pass

### Task 8.5.2: Switch Fonts to Nunito Family
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `css-showcase/app/layout.tsx`, `css-showcase/app/globals.css`, `css-showcase/app/fonts/`

- In `layout.tsx`: replace Inter → Nunito Sans, Satoshi (local) → Nunito (Google Font)
- Update `--font-sans` and `--font-display` in globals.css
- Delete Satoshi woff2 files from `app/fonts/`
- Keep JetBrains Mono for code
- Verify headings and body text render correctly

### Task 8.5.3: Install Interactive Components from External Registries
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `css-showcase/components/`, `css-showcase/components/ui/`

These components come from **third-party shadcn-compatible registries** (Aceternity UI, Magic UI, etc.), not core shadcn/ui. The cloned repo at `css-showcase/ui/apps/v4/registry/directory.json` indexes 123+ external registries.

**From Aceternity UI** (`https://ui.aceternity.com/registry/{name}.json`):
```bash
cd css-showcase
npx shadcn@latest add https://ui.aceternity.com/registry/apple-cards-carousel.json
npx shadcn@latest add https://ui.aceternity.com/registry/3d-card.json
npx shadcn@latest add https://ui.aceternity.com/registry/compare.json
npx shadcn@latest add https://ui.aceternity.com/registry/animated-tooltip.json
```

**From Magic UI** (`https://magicui.design/r/{name}`):
```bash
npx shadcn@latest add https://magicui.design/r/marquee
npx shadcn@latest add https://magicui.design/r/number-ticker
npx shadcn@latest add https://magicui.design/r/terminal
npx shadcn@latest add https://magicui.design/r/typing-animation
```

**From core shadcn/ui** (already in cloned repo at `css-showcase/ui/apps/v4/registry/new-york-v4/ui/`):
```bash
npx shadcn@latest add kbd
```

**Manual components** (copy from cloned repo or build custom):
- Copy Button — exists at `css-showcase/ui/apps/v4/components/copy-button.tsx`
- Theme Toggle — build using shadcn Switch + next-themes (already have toggle, upgrade visuals)
- Motion Effect — use `framer-motion` or CSS scroll-driven animations directly
- Code Tabs — build using shadcn Tabs component with syntax highlighting

**If any registry URL fails**, check `css-showcase/ui/apps/v4/registry/directory.json` for the correct URL pattern, or copy the component source from the external registry's GitHub repo.

- Verify each installs correctly and `npm run build` passes
- Check component files appear in `components/ui/` or `components/`

### Task 8.5.4: Install shadcn/ui Base Components
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `css-showcase/components/ui/`

```bash
cd css-showcase
npx shadcn@latest add progress alert label switch slider select hover-card aspect-ratio popover
```
- These enhance specific content pages (forms, custom-properties, responsive)

### Task 8.5.5: Update Extended Colour Tokens
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `css-showcase/app/globals.css`, `css-showcase/app/advanced/page.module.css`, `css-showcase/app/custom-properties/page.module.css`, `css-showcase/app/cards/page.module.css`, `css-showcase/app/container-queries/page.module.css`, `css-showcase/app/anchor-positioning/page.module.css`, `css-showcase/app/transitions/page.module.css`, `css-showcase/app/has-selector/page.module.css`

- `--color-brand-*` values already set to Ghibli forest/earth/sky in `@theme` block
- Success/warning/error/info colours already consistent with Ghibli palette
- Replaced all `--color-brand-blue` → `--color-brand-forest` references in demo CSS
- Replaced all `--color-brand-purple` → `--color-brand-earth` references in demo CSS
- Updated `rgba(37, 99, 235, ...)` overlays to `oklch(0.52 0.12 145 / ...)` in page styles
- Updated tip box gradients from blue hue (240) to forest green hue (145)
- Updated hardcoded slate theme colours to Ghibli oklch equivalents in custom-properties demos
- Educational code strings in `.tsx` files preserved (teach standard CSS, not brand tokens)

### Task 8.5.6: Dark Mode Audit
**Status:** PENDING
**Priority:** MEDIUM

- Screenshot all pages in dark mode (`node visual-test.js`)
- Verify contrast with twilight forest backgrounds
- Fix any readability issues
- Ensure demo CSS colours are preserved (educational content unchanged)

### Task 8.5.7: Clean Up Legacy Static Files
**Status:** PENDING
**Priority:** MEDIUM

The project was originally a static HTML/CSS/JS site. All content has been migrated to the Next.js app in `css-showcase/`. The legacy files in the repo root are no longer needed and should be removed.

**Delete these files from the repo root:**
- All `.html` files: `index.html`, `basic.html`, `flexbox.html`, `grid.html`, `responsive.html`, `gradients.html`, `gradient-patterns.html`, `transitions.html`, `animations.html`, `filters.html`, `buttons.html`, `forms.html`, `tables.html`, `cards.html`, `icons.html`, `advanced.html`, `custom-properties.html`, `blend-modes.html`, `shapes-clips.html`, `has-selector.html`, `container-queries.html`, `css-nesting.html`, `anchor-positioning.html`, `scroll-animations.html`, `color-spaces.html`, `typography.html`, `box-model.html`, `flexbox-patterns.html`, `tools.html`, `frameworks.html`, `layout.html`, `sidebar-snippet.html`
- `measure-heights.js` (old utility script)
- `styles/` directory (40 CSS files — old page styles and design tokens)
- `scripts/` directory (19 JS files — old interactivity scripts)
- `components/` directory (3 HTML files — old sidebar/header partials)
- `specs/` directory (old spec files)
- `tools/` directory (empty)

**Keep these files in the repo root:**
- `css-showcase/` — the Next.js app (obviously)
- `IMPLEMENTATION_PLAN.md`, `PROMPT_build.md`, `PROMPT_plan.md`, `AGENTS.md` — loop files
- `loop.sh`, `loop-full.sh` — loop runner scripts
- `visual-test.js` — screenshot automation
- `docs/` — visual testing screenshots
- `package.json`, `package-lock.json`, `node_modules/` — root-level deps (for visual-test.js/puppeteer)
- `README.md`, `LICENSE`, `CONTRIBUTING.md` — repo metadata
- `.claude/` — project settings

**Important:** Do NOT delete before confirming all content is fully migrated. The PROMPT_build.md currently references `../` as content source — update those references to note that original files have been removed and content is now in the Next.js app only.

---

## Phase 9: Homepage Redesign

### Task 9.1: Build a Distinctive Homepage
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `css-showcase/app/page.tsx`, `css-showcase/app/page.module.css`

The current homepage is extremely bare — just a title, one-line subtitle, and a massive empty white area before the footer. It needs to become a proper landing page worthy of a CSS showcase.

**Required:**
- **Apple Cards Carousel** — hero section showcasing featured CSS techniques with expand-to-detail
- **3D Card** — category cards (7 sections) with tilt-on-hover effect, each showing section icon, title, description, link count
- **Marquee** — scrolling strip of CSS feature names/icons
- **Counter** — animated stats: "30 Topics", "7 Categories", "450+ Demos"
- **Kbd** — show Cmd+K shortcut badge near search
- CTA buttons with hover effects: "Start Learning", "Advanced Techniques"
- Use advanced CSS techniques in the homepage itself (gradients, animations, grid) to demonstrate what the site teaches
- Must look great on both desktop and mobile (mobile version is acceptable, desktop needs major work)
- Use Ghibli theme colours (forest greens, earth browns, sky blues, creamy neutrals)

---

## Phase 10: Polish and Visual Testing

### Task 10.0: Migrate Icons to Streamline Freehand Colour
**Status:** PENDING
**Priority:** CRITICAL
**Files:** `css-showcase/lib/navigation.ts`, `css-showcase/components/app-sidebar.tsx`, `css-showcase/components/site-header.tsx`, `css-showcase/components/site-footer.tsx`, `css-showcase/components/code-block.tsx`, `css-showcase/components/theme-toggle.tsx`, `css-showcase/components/search-dialog.tsx`, `css-showcase/app/page.tsx`

Replace all Lucide React icons with **Streamline Freehand Colour** icons from shadcn.io.

**Icon source:** https://www.shadcn.io/icons/streamline-freehand-color (98 hand-drawn colour icons, CC BY 4.0)

**Install pattern:**
```bash
cd css-showcase
npx shadcn@latest add https://www.shadcn.io/r/[icon-component-name]
```

Browse the full set at https://www.shadcn.io/icons/streamline-freehand-color — each icon page shows the CLI command and React component.

**What to replace:**
- Sidebar section icons in `lib/navigation.ts`: BookOpen, LayoutGrid, Sparkles, FileStack, FlaskConical, Rocket, Library → pick matching Streamline Freehand Colour icons
- Header icons: Search, PanelLeftIcon → matching Streamline icons
- Theme toggle: Moon, Sun → matching Streamline icons
- Code block: Copy, Check, ChevronUp, ChevronDown → matching Streamline icons
- Footer: Github, Globe → matching Streamline icons
- Search dialog: Search, FileText, XIcon → matching Streamline icons
- Homepage: any icons used in category cards or CTAs
- Update the `NavSection` type in `lib/navigation.ts` — change `icon: LucideIcon` to the Streamline component type

**Important:**
- Keep `lucide-react` only if ShadCN UI internal components (accordion, breadcrumb, etc.) depend on it
- All _project_ icons (sidebar, header, footer, homepage, code blocks) must use Streamline Freehand Colour
- These are colourful hand-drawn icons — they add personality and warmth to the showcase

### Task 10.1: Centre Page Titles (Double-Title Fixed)
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `css-showcase/components/page-hero.tsx`, `css-showcase/lib/navigation.ts`

~~**Fix "double title" effect.**~~ RESOLVED — all 7 previously-echoing pages now have distinct first Section titles (confirmed in Audit #5).

**Centring:** Added `mx-auto text-center` to the `max-w-3xl` container in `page-hero.tsx`. All 30 pages now have centred hero titles and subtitles on both desktop and mobile. Hero gradient backgrounds already use Ghibli palette tokens (`--background`, `--surface`, `--surface-alt`) — no off-palette gradients found. Sidebar label mismatch fixed ("Layout Techniques" → "CSS Layout Techniques").

### Task 10.2: Fix Demo Layout — Column Stack with Collapsible Code
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `css-showcase/components/demo-grid.tsx`, `css-showcase/components/demo-card.tsx`, all page files

- Default `DemoGrid` to single-column layout (`columns={1}`) on all pages
- If keeping multi-column grids (e.g., gradient swatches, button variants), make code blocks collapsible and hidden by default
- The `DemoCard` component already has a `collapsibleCode` prop — ensure this is set to `true` by default when cards are in a multi-column grid

**Done:**
- Changed `DemoGrid` default from `columns={2}` to `columns={1}`
- Added `codeDefaultOpen` prop to `DemoCard` → passes through to `CodeBlock.defaultOpen`
- Switched `/basic`, `/box-model`, `/typography`, `/layout` from multi-column to single-column
- Added `collapsibleCode` + `codeDefaultOpen={false}` to long pages: `/buttons` (20 cards), `/forms` (17 cards), `/advanced` (15 cards)
- Added `collapsibleCode` + `codeDefaultOpen={false}` to multi-column pages: `/gradients` (8 cards), `/gradient-patterns` (3 cards)

### Task 10.3: Global UX — Motion Effect + Code Tabs + Copy Button
**Status:** PENDING
**Priority:** HIGH

Apply premium components globally across all pages:
- **Motion Effect** — wrap each `<Section>` in a scroll-triggered entrance animation (fade-up/slide-in)
- **Code Tabs** — replace single CodeBlock with CSS + HTML tabbed view where both are relevant
- **Copy Button** — upgrade code block copy mechanism with animated feedback
- **Collapsible code** — all code blocks collapsed by default in multi-column grids

### Task 10.4: Page Enhancements — Fundamentals
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/basic/`, `css-showcase/app/box-model/`, `css-showcase/app/typography/`

- `/basic` — **Comparison** slider: plain HTML vs styled HTML side-by-side
- `/box-model` — interactive margin/padding visualiser using **Slider** components
- `/typography` — font previews with **Select** dropdown to switch font families

### Task 10.5: Page Enhancements — Layout
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/flexbox/`, `css-showcase/app/flexbox-patterns/`, `css-showcase/app/grid/`, `css-showcase/app/responsive/`

- `/flexbox` — keep existing interactive playground, add **Code Tabs** for CSS + HTML
- `/flexbox-patterns` — **3D Card** tilt effect on pattern showcase cards
- `/grid` — **Comparison** slider: flex layout vs grid layout
- `/responsive` — **Aspect Ratio** component demos, device mock previews

### Task 10.6: Page Enhancements — Visual Effects
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/gradients/`, `css-showcase/app/gradient-patterns/`, `css-showcase/app/transitions/`, `css-showcase/app/animations/`, `css-showcase/app/filters/`

- `/gradients` — keep multi-column gradient swatches (collapsible code)
- `/transitions` — **Comparison** slider showing before/after transition states
- `/animations` — keep existing live demos, add **Motion Effect** entrance animations
- `/filters` — **Comparison** slider for before/after filter effects

### Task 10.7: Page Enhancements — Components
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/buttons/`, `css-showcase/app/forms/`, `css-showcase/app/tables/`, `css-showcase/app/cards/`, `css-showcase/app/icons/`

- `/buttons` — showcase Ripple Button, Magnetic Button from shadcn.io
- `/forms` — integrate **Switch**, **Slider**, **Select**, **Label** ShadCN components as live demos
- `/cards` — showcase **3D Card** and **Hover Card** as demo patterns
- `/icons` — keep CSS icons demos, add Streamline Freehand Colour examples

### Task 10.8: Page Enhancements — Advanced
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/advanced/`, `css-showcase/app/custom-properties/`, `css-showcase/app/blend-modes/`, `css-showcase/app/shapes-clips/`

- `/advanced` — **Code Tabs** for complex multi-file examples
- `/custom-properties` — **Slider** components that dynamically change CSS variables in real-time
- `/blend-modes` — **Comparison** slider for blend mode before/after
- `/shapes-clips` — **Comparison** for clip-path before/after

### Task 10.9: Page Enhancements — Modern CSS
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/has-selector/`, `css-showcase/app/container-queries/`, `css-showcase/app/css-nesting/`, `css-showcase/app/anchor-positioning/`, `css-showcase/app/scroll-animations/`, `css-showcase/app/color-spaces/`

- `/has-selector` — **Comparison** for with/without :has() selector
- `/container-queries` — resize handle demos with **Aspect Ratio**
- `/css-nesting` — **Code Tabs** showing nested vs flat CSS comparison
- `/scroll-animations` — **Motion Effect** demonstrations
- `/color-spaces` — colour swatches with **Hover Card** showing colour values

### Task 10.10: Page Enhancements — Resources
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/tools/`, `css-showcase/app/frameworks/`

- `/tools` — **Terminal** component showing npm/CLI commands with typing animation
- `/frameworks` — **Terminal** for installation commands, **Marquee** for framework logos

### Task 10.11: Desktop Content Density
**Status:** PENDING
**Priority:** MEDIUM

Content pages on desktop (1920px) have good structure but some pages have excessive vertical gaps between sections. Tighten the rhythm. Ensure consistent layouts across all pages.

### Task 10.12: Dark Mode Polish
**Status:** PENDING
**Priority:** MEDIUM

Verify dark mode after Ghibli theme:
- Twilight forest aesthetic, readable text
- Demo card borders/shadows in dark mode
- Gradient demos maintain vibrancy
- Animation demo backgrounds are distinct from page background

### Task 10.13: Responsive Audit
**Status:** PENDING
**Priority:** MEDIUM

Mobile (375px) verification:
- Touch targets at least 44px
- Code blocks scroll horizontally
- No horizontal overflow
- Sidebar sheet works cleanly

### Task 10.14: Accessibility and Build
**Status:** PENDING
**Priority:** LOW

- Skip links, keyboard nav, focus management
- `npm run build` succeeds with no errors
- Lighthouse audit passes

---

## Screenshot Audit Observations (8 February 2026 — Audit #6)

### Overall Status: POLISH PHASE — STRONG FOUNDATION

Phase 8.5 is 5/7 complete. Phase 9 (Homepage) is COMPLETE. Task 10.1 (centre titles + double-title fix + sidebar label) is COMPLETE. Task 10.2 (demo layout — single-column + collapsible code) is COMPLETE. All 30 content pages + homepage migrated and rendering. Shell fully functional. Dark mode twilight forest aesthetic. Mobile responsive. Stats corrected to 30/7/450+. **No regressions since Audit #5. All prior critical issues resolved except Task 10.0 (icons).**

### What's Changed Since Audit #5

**RESOLVED — Page Titles Centred (was Issue #1 / Task 10.1)**
- PageHero now has `mx-auto text-center` on the `max-w-3xl` container (confirmed in `page-hero.tsx` line 36)
- All 30 pages show centred hero titles and subtitles on desktop — verified across all screenshots
- Subtle grid-pattern decorative overlay and gradient backgrounds using Ghibli palette tokens

**RESOLVED — Homepage Stats Corrected (was Issue #5)**
- `page.tsx` now shows `NumberTicker value={30}` for Topics, `value={7}` for Categories, `value={450}` for Demos
- Screenshots still show "23 / 5 / 234+" because they were captured before the fix — next screenshot run will confirm

**RESOLVED — Sidebar Label Mismatch (was Bug #1)**
- Sidebar navigation in `lib/navigation.ts` now reads "CSS Layout Techniques" at `href: "/layout"` — matches page title

### What's Working Well

**Homepage — EXCELLENT**
- Hero: "Learn Modern CSS by Example" with gradient accent text, grid-pattern background, dual CTAs
- Stats: 30 Topics / 7 Categories / 450+ Demos with animated NumberTicker counters (code confirmed, screenshots pending re-run)
- Featured Carousel: Apple Cards Carousel with 6 defined cards, 4 visible in viewport with navigation dots — remaining 2 accessible via scroll/swipe
- Marquee: 20 CSS feature names in scrolling strip (Grid, Flexbox, Custom Properties, Container Queries, :has() Selector, etc.)
- Category Grid: 7 cards (Fundamentals, Layout, Visual Effects, Components, Advanced, Modern CSS, Resources) with coloured emoji icons, topic chip badges, and page counts
- Bottom CTA: "Ready to dive in?" with Kbd shortcut hint (⌘K)
- Desktop: well-proportioned, no empty void
- Mobile: stacks cleanly, all sections render
- Dark mode: full twilight forest treatment, carousel cards look premium

**Shell & Navigation — EXCELLENT**
- Sidebar: 7 collapsible sections, 30 links, Lucide icons, forest green active state
- Header: Breadcrumbs, search trigger (Cmd+K badge), sun/moon theme toggle
- Footer: 4-column grid (Categories, Resources, Quick Links), GitHub + Portfolio links
- Mobile header: Hamburger, search icon, theme toggle — compact and functional
- Creamy parchment backgrounds throughout

**Content Pages (30/30 — ALL RENDERING CORRECTLY)**
- PageHero titles now centred on all pages
- Consistent PageHero + Section + DemoGrid + DemoCard structure
- Code blocks: Shiki syntax highlighting, dot indicators, collapsible toggle, copy button
- Live CSS demos rendering correctly across all categories
- Forest green accents in section headers, tip boxes, interactive elements
- Double-title issue resolved on all 7 previously-affected pages
- Demo card backgrounds use warm cream/beige surfaces, distinct from page background

**Standout Pages:**
- `/animations` — **gold standard layout**: single-column, generous spacing, animated demos breathe
- `/cards` — gradient cards spectacular in both light and dark mode
- `/tools`, `/frameworks` — 3-column resource grids polished and professional
- `/gradients` — 3-column swatch grid beautiful, dark mode is gorgeous
- `/scroll-animations` — good single-column layout with interactive demos
- `/flexbox` — Interactive Playground excellent
- `/flexbox-patterns` — 2-column layout works perfectly for these compact pattern demos
- `/icons` — icon grid with categories, single-column code techniques section, well-structured
- `/shapes-clips` — beautiful shape demos with vibrant purple/blue palette, well-structured

**Dark Mode — TWILIGHT FOREST AESTHETIC (excellent)**
- Deep forest green page backgrounds — confirmed across all 30 pages + homepage
- Homepage carousel cards premium against dark background
- Code blocks: dark indigo/navy backgrounds with bright syntax highlighting
- Gradient demos pop beautifully against dark backgrounds
- Cards page gradient cards vivid on dark surface
- Animations clearly visible on dark demo areas
- Shapes & clips demos retain vibrant purple/blue against dark forest
- No white blocks or unthemed areas visible anywhere
- `/has-selector` hero in dark mode: brownish-red tone — slightly off from forest green palette but acceptable against dark background (not as jarring as in light mode)

**Mobile (375px) — GOOD, NO REGRESSIONS**
- Homepage fully populated — hero, stats, carousel, categories, CTA all render
- All content readable, single-column stack
- Nunito fonts clean at mobile sizes
- Code blocks scroll horizontally where needed
- No horizontal overflow observed

### What Still Needs Work

1. **DEMO LAYOUT — SIDE-BY-SIDE CRAMPED (CRITICAL)**: `/basic`, `/box-model`, `/typography`, `/transitions`, `/custom-properties`, `/css-nesting`, `/layout` all use 2-column DemoGrid where code blocks are too narrow (~35 chars) to read comfortably. Multi-column works well for compact visual demos: `/gradients`, `/gradient-patterns`, `/flexbox`, `/flexbox-patterns`, `/frameworks`, `/tools`, `/icons`. **Task 10.2.**

2. **NO INTERACTIVE UX (HIGH)**: Pages are static — no scroll-triggered animations, no hover lift effects on cards, no micro-interactions. "Continue Your Journey" / "Ready for X?" footer sections on every page are bland link cards with no hover effects. Premium components installed but not yet integrated beyond homepage. **Task 10.3.**

3. **DESKTOP CONTENT DENSITY (MEDIUM)**: Long pages: `/forms` (~19000px), `/buttons` (~18000px), `/advanced` (~14600px). Every demo has expanded code blocks. Collapsible code defaults + tabbed sections would reduce scroll fatigue. **Task 10.11 / 10.7 / 10.8.**

4. **LUCIDE ICONS — GENERIC (MEDIUM)**: All sidebar, header, footer, and homepage icons are Lucide (monochrome line icons). Streamline Freehand Colour would add personality and warmth matching the Ghibli theme. **Task 10.0.**

### Bugs Found (Carried Forward + New)

1. **`/has-selector` off-palette hero gradient** (carried from Audit #4): Light mode PageHero has pinkish/salmon tint that doesn't match forest green Ghibli palette. Not terrible but inconsistent with other pages. The `page.module.css` for has-selector likely has a custom hero background override. **Fix during Task 10.2 or dedicated pass.**

2. **`/color-spaces` page header area** (carried from Audit #4): First section ("What Are Modern Colour Spaces?") background appears slightly lighter/whiter than the standard Ghibli cream on desktop. Possible CSS specificity issue with the colour swatch demo backgrounds bleeding. **Minor — fix during dark mode audit.**

3. **Forms page extremely long**: ~19000px on desktop. Needs collapsible sections or tabbed grouping. **Task 10.7.**

4. **Buttons page long on mobile**: ~21000px at 375px. Collapsible code blocks would help. **Task 10.7.**

5. **`/responsive` placeholder demos**: The "Responsive Grid Pattern" section shows 6 identical dark blue/green gradient squares in a 2x3 grid. They don't visually demonstrate responsive behaviour. **Task 10.5.**

6. **Stale screenshot artifacts**: `desktop/layout-techniques.png`, `mobile/layout-techniques.png` show 404 pages. The route `/layout-techniques` does not exist — the correct route is `/layout`. These are leftover screenshot files from a previous visual-test.js configuration that used a different route name. The `visual-test.js` script correctly navigates to `/layout`. **Fix: delete stale `layout-techniques.png` files from all three screenshot directories.**

### NEW Issues Found in Audit #6

```text
ROUTE: /layout-techniques (STALE SCREENSHOTS)
ISSUE: Screenshot files layout-techniques.png exist in desktop/, mobile/, and dark-mode/ directories showing 404 pages. This route doesn't exist — it's /layout. These are stale artifacts from a previous screenshot run.
SCREENSHOT: desktop/layout-techniques.png, mobile/layout-techniques.png
FIX: Delete layout-techniques.png from all three screenshot directories. No app bug.

ROUTE: /has-selector (light mode)
ISSUE: PageHero gradient background has a brownish-red/salmon tint in light mode. All other pages use the standard Ghibli cream-to-surface gradient. This page's page.module.css likely overrides the hero background.
SCREENSHOT: desktop/has-selector.png (hero area)
FIX: Check has-selector/page.module.css for custom hero gradient and align to Ghibli palette.

ROUTE: /basic, /box-model, /typography, /layout, /transitions, /custom-properties, /css-nesting
ISSUE: 2-column DemoGrid layouts have code blocks ~35 chars wide. CSS properties wrap awkwardly, harming readability. These pages have simple demos (coloured boxes, text samples, positioned elements) that don't benefit from side-by-side layout.
SCREENSHOT: desktop/basic.png, desktop/box-model.png, desktop/typography.png, desktop/layout.png, desktop/transitions.png, desktop/custom-properties.png, desktop/css-nesting.png
FIX: Task 10.2 — set columns={1} on these pages. Keep columns={2} or columns={3} on pages where compact visual demos work well (gradients, flexbox, icons, tools, frameworks).

ROUTE: /buttons, /forms, /advanced
ISSUE: Extremely long pages (18k–19k pixels on desktop) because every demo has fully expanded code blocks. Good content, but scroll fatigue.
SCREENSHOT: desktop/buttons.png, desktop/forms.png, desktop/advanced.png
FIX: Task 10.2 — set collapsibleCode={true} on DemoCards. Default code to collapsed. Users expand what interests them.

ROUTE: ALL PAGES
ISSUE: "Continue Your Journey" / "Ready for X?" footer CTA sections are plain cream/white cards with text links. No hover effects, no shadows, no visual hierarchy to distinguish them as navigation CTAs.
SCREENSHOT: Bottom section of every desktop screenshot
FIX: Task 10.3 — add hover lift, subtle border gradient, or shadow-on-hover to these cards.

ROUTE: ALL PAGES
ISSUE: No scroll-triggered entrance animations. Content sections appear instantly without reveal effects. Feels static compared to modern CSS showcase sites.
SCREENSHOT: All desktop screenshots
FIX: Task 10.3 — CSS scroll-driven animations (@keyframes + animation-timeline: view()) or Intersection Observer based fade-up/slide-in on Section components.

ROUTE: /blend-modes (light mode)
ISSUE: The blend mode colour palette on this page uses purple/violet tones extensively. This is intentional for the educational demos (demonstrating blend modes) and NOT an off-palette Ghibli issue. However, the section headers and tip boxes on this page should still use forest green accents, not purple. Verify consistency during polish.
SCREENSHOT: desktop/blend-modes.png
FIX: Verify blend-modes page chrome (headers, tips, CTAs) uses Ghibli tokens. Demo CSS colours are educational and should be preserved.

ROUTE: /shapes-clips (light + dark mode)
ISSUE: Similar to blend-modes — shapes demos use vibrant purple/blue palette for the CSS shapes themselves. This is correct for educational content. Dark mode version looks excellent.
SCREENSHOT: desktop/shapes-clips.png, dark-mode/shapes-clips.png
FIX: No fix needed — demo colours are educational. Just ensure page chrome uses Ghibli tokens.
```

### Recommended Implementation Order (Updated for Audit #6)

Phase 9 is COMPLETE. Task 10.1 is COMPLETE. Task 10.2 is COMPLETE. Focus on remaining Phase 10 polish:

1. **Task 10.3** — Global UX: scroll reveal animations, hover lifts on CTA cards, micro-interactions (HIGH — biggest UX/feel impact)
2. **Task 10.0** — Streamline Freehand Colour icons (CRITICAL — personality, warmth, Ghibli alignment)
4. **Tasks 10.4–10.10** — Page enhancements category by category (MEDIUM)
5. **Task 10.11** — Desktop density tightening (MEDIUM — partially addressed by 10.2 collapsible code)
6. **Task 8.5.7** — Clean up legacy static files (housekeeping)
7. **Task 8.5.6 / 10.12** — Dark mode fine-tuning (twilight forest is solid, edge cases only — /has-selector hero, /color-spaces header)
8. **Task 10.13** — Responsive audit
9. **Task 10.14** — Accessibility and final build
10. **Housekeeping** — Delete stale `layout-techniques.png` screenshots

---

## Archive Reference

Previous static HTML/CSS/JS implementation (Phases 0-15) completed 25 January - 7 February 2026. Full history in git log on `ralph/UI-Improvement-Test` branch.
