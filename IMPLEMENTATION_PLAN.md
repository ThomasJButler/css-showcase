# CSS Showcase - Implementation Plan (Next.js Migration)

**Last Updated:** 8 February 2026 (Visual Audit #4)
**Status:** Phase 8.5 NEARLY COMPLETE (5/7) → Phase 9 - Homepage → Phase 10 - Polish

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

### Task 10.1: Centre Page Titles and Fix Double-Title Repetition
**Status:** PENDING
**Priority:** CRITICAL
**Files:** `css-showcase/components/page-hero.tsx`, all 30 `css-showcase/app/*/page.tsx`

Two related issues with page headers:

1. **Centre the PageHero title and subtitle.** Currently left-aligned (`max-w-3xl` div). Should be centred on both desktop and mobile for a more polished, editorial look.

2. **Fix "double title" effect.** The PageHero shows the page title (e.g., "Responsive Design") and a subtitle, then the first `<Section>` immediately below repeats the same concept (e.g., "Responsive Design Fundamentals" with a similar intro). This looks redundant — like the page title is said twice. Fix the first Section on each page to use a distinct heading that doesn't echo the hero title.

### Task 10.2: Fix Demo Layout — Column Stack with Collapsible Code
**Status:** PENDING
**Priority:** CRITICAL
**Files:** `css-showcase/components/demo-grid.tsx`, `css-showcase/components/demo-card.tsx`, all page files

- Default `DemoGrid` to single-column layout (`columns={1}`) on all pages
- If keeping multi-column grids (e.g., gradient swatches, button variants), make code blocks collapsible and hidden by default
- The `DemoCard` component already has a `collapsibleCode` prop — ensure this is set to `true` by default when cards are in a multi-column grid

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

## Screenshot Audit Observations (8 February 2026 — Audit #4)

### Overall Status: GHIBLI THEME APPLIED — POLISH PHASE

Phase 8.5 is 5/7 complete. The Ghibli theme, Nunito fonts, premium components, base components, and extended colour tokens are all applied. All 30 content pages + homepage migrated and rendering. Shell fully functional. Dark mode uses twilight forest tones. Mobile responsive. No broken routes or 404s. **Major visual improvement since Audit #3.**

### What's Changed Since Audit #3

**RESOLVED — Ghibli Theme (was Issue #5)**
- Creamy parchment backgrounds throughout (`oklch(0.97 0.01 90)`) — no more zinc grey
- Forest green primary visible in sidebar badge, active state highlighting, primary buttons
- Earth brown secondary tones in borders and subtle accents
- Warm, cohesive colour palette across all 30 pages
- Dark mode: twilight forest tones (deep forest green `~#0a1f15` backgrounds, indigo code blocks) — not old slate/zinc

**RESOLVED — Fonts (was implicit in Issue #5)**
- Nunito Sans body text rendering with rounded, friendly letterforms
- Nunito display font on headings — softer, warmer than geometric Inter
- JetBrains Mono preserved for code blocks
- Font rendering is clean and consistent across all pages

**RESOLVED — Premium + Base Components Installed (was Issue #6)**
- Apple Cards Carousel, 3D Card, Compare, Animated Tooltip installed from Aceternity UI
- Marquee, Number Ticker, Terminal, Typing Animation installed from Magic UI
- Kbd component installed from core shadcn/ui
- Progress, Alert, Label, Switch, Slider, Select, Hover Card, Aspect Ratio, Popover installed
- Components are installed but NOT YET USED on pages — that's Tasks 9.1 and 10.3–10.10

### What's Working Well

**Shell & Navigation — EXCELLENT (Ghibli themed)**
- Sidebar: 7 collapsible sections, 30 links, Lucide icons, forest green active state on Home
- Header: Breadcrumbs, search trigger (Cmd+K badge), sun/moon theme toggle
- Footer: 4-column grid (Categories, Resources, Quick Links), GitHub + Portfolio links, copyright
- Mobile header: Hamburger, search icon, theme toggle — compact and functional
- Creamy parchment background throughout sidebar and main content area
- Breadcrumb navigation correct on every content page

**Content Pages (30/30 — ALL RENDERING CORRECTLY)**
- PageHero + Section + DemoGrid + DemoCard structure consistent across all pages
- Code blocks: Shiki syntax highlighting with dot indicators, collapsible toggle, copy button
- Live CSS demos rendering correctly across all categories — unchanged from Audit #3
- Forest green accents visible in section headers, tip boxes, and interactive elements
- Demo card backgrounds use warm cream/beige surfaces, distinct from page background
- All page-specific demo CSS colours preserved (educational content unchanged)

**Dark Mode — TWILIGHT FOREST AESTHETIC**
- Deep forest green page backgrounds (not old slate/zinc) — confirmed across all pages
- Code blocks: dark indigo/navy backgrounds with bright syntax highlighting — excellent contrast
- Demo cards: olive-tinted dark surfaces, clearly distinct from page background
- Sidebar: deep forest green with readable light text, green active state
- Gradient demos: **spectacular** against dark backgrounds — colours pop beautifully
- Cards page: gradient cards vivid (pink-to-coral, blue-to-purple, yellow-to-orange) on dark surface
- Animations: spinning shapes, glitch text, loading spinners all clearly visible on dark demo areas
- Colour spaces: OKLCH/P3 swatches remain vivid and accurate
- Buttons: coloured variants (green, red, orange) stand out well against dark forest background
- No white blocks or unthemed areas visible on any dark mode screenshot

**Mobile (375px) — GOOD, NO REGRESSIONS**
- All content readable, single-column stack
- Creamy parchment background consistent on mobile
- Nunito fonts rendering cleanly at mobile sizes
- Code blocks fit within viewport (horizontal scroll where needed)
- Footer stacks vertically with clear section headings
- No horizontal overflow observed on any page
- Homepage on mobile: title + subtitle centred, then straight to footer (still needs content — Task 9.1)

### What Still Needs Work

1. **HOMEPAGE (CRITICAL)**: Desktop is nearly empty — "CSS Showcase" title, one-line subtitle, then ~500px of creamy void before the footer. Mobile identical. Dark mode identical. The Ghibli theme makes it look warmer but doesn't solve the emptiness. **This is the #1 priority — Task 9.1.**

2. **PAGE TITLES LEFT-ALIGNED (CRITICAL)**: PageHero titles are left-aligned on all 30 pages. Title and subtitle sit in a `max-w-3xl` div, leaving the right 60% empty on desktop. Should be centred for editorial polish. **Task 10.1.**

3. **DOUBLE-TITLE EFFECT (CRITICAL)**: Unchanged from Audit #3. 7 pages need fix:
   - `/flexbox` ("Flexbox" → "Flexbox Fundamentals"), `/grid` ("CSS Grid" → "Grid Fundamentals"), `/has-selector` ("The :has() Selector" → "What is :has()?"), `/container-queries` ("Container Queries" → "What are Container Queries?"), `/box-model` ("The Box Model" → "Box Model Fundamentals"), `/custom-properties` ("CSS Custom Properties" → echoes), `/css-nesting` ("Native CSS Nesting" → "Understanding CSS Nesting")
   - 23 pages already good — no change needed. **Task 10.1.**

4. **DEMO LAYOUT — SIDE-BY-SIDE CRAMPED (CRITICAL)**: Unchanged. `/basic`, `/box-model`, `/typography`, `/transitions`, `/custom-properties`, `/css-nesting` all cramped in 2-column. Multi-column works well for: `/gradients`, `/flexbox-patterns`, `/frameworks`, `/tools`, `/icons`. **Task 10.2.**

5. **NO INTERACTIVE UX (HIGH)**: Pages are static — no scroll-triggered animations, no hover lift effects, no micro-interactions. Premium components installed but not yet integrated. **Task 10.3.**

6. **DESKTOP CONTENT DENSITY (MEDIUM)**: Long pages unchanged: `/forms` (~18700px), `/buttons` (~18000px), `/advanced` (~14600px). Collapsible code + tabbed sections would help. **Task 10.11.**

### Bugs Found (Carried Forward + New)

1. **Sidebar label mismatch**: Sidebar says "Layout Techniques" but page title is "CSS Layout Techniques". Minor — tidy during Task 10.1.

2. **Forms page extremely long**: ~18700px on desktop. Needs collapsible sections or tabbed grouping. **Task 10.7.**

3. **Buttons page long on mobile**: ~20000px at 375px. Collapsible code blocks would help. **Task 10.7.**

### NEW Issues Found in Audit #4

```text
ROUTE: /has-selector
ISSUE: The PageHero has a pinkish/salmon tinted gradient background that doesn't match the forest green Ghibli palette. Other pages use neutral/warm gradients. This page stands out as inconsistent.
SCREENSHOT: desktop/has-selector.png
FIX: Update the PageHero gradient on /has-selector to use Ghibli forest/earth tones. Check if any other pages have off-palette hero gradients. Could be addressed during Task 10.1 (centre titles) since it touches PageHero.

ROUTE: /color-spaces
ISSUE: Page background at the very top appears to have a white/light section before the Ghibli cream kicks in. The vibrant color swatches (hot pink, red, green, blue) render excellently, but the page header area looks slightly off compared to other pages.
SCREENSHOT: desktop/color-spaces.png
FIX: Verify the PageHero background matches other pages. May be a CSS specificity issue with the color-spaces page module CSS overriding the global background.

ROUTE: /flexbox
ISSUE: The 2-column layout here actually works reasonably well because the demos are compact green boxes. However, the "Flexbox Fundamentals" title directly echoes the "Flexbox" PageHero — classic double-title. The Interactive Flexbox Playground at the bottom is excellent and well-spaced.
SCREENSHOT: desktop/flexbox.png
FIX: Task 10.1 will fix the double-title. Layout is acceptable here — consider keeping 2-column for this page's compact box demos.

ROUTE: /animations
ISSUE: The "Keyframe Basics" demos (spinning circle, bouncing diamond, pulsing square) each occupy a single-column full-width card — this looks GREAT. The section spacing is generous and the demos breathe. This is the ideal layout that other pages should follow.
SCREENSHOT: desktop/animations.png
FIX: No fix needed — use /animations as the reference layout for Task 10.2 single-column migration.

ROUTE: /cards
ISSUE: The gradient cards (blue-to-purple header, green gradient, pink-to-coral) look spectacular in both light and dark mode. The card layout patterns section shows a proper grid of preview cards. Excellent page overall.
SCREENSHOT: desktop/cards.png, dark-mode/cards.png
FIX: No fix needed. Cards page is a visual highlight.

ROUTE: /tools, /frameworks
ISSUE: The 3-column card grids with coloured icon squares look polished and professional. Consistent spacing, clear hierarchy, good information density. These pages are model resource layouts.
SCREENSHOT: desktop/tools.png, desktop/frameworks.png
FIX: No fix needed. These are template-quality resource pages.

ROUTE: ALL PAGES
ISSUE: "Continue Your Journey" / "Ready for X?" footer sections still bland — simple link cards with no hover effects or visual interest. The Ghibli cream background makes them blend in rather than stand out as CTAs.
SCREENSHOT: All desktop screenshots — bottom of every page
FIX: Task 10.3 — add hover lift effects, subtle gradients, or card borders to make these sections more inviting.
```

### Recommended Implementation Order (Updated for Post-Ghibli)

Phase 8.5 is 5/7 complete. The visual identity is established. Next priorities:

1. **Task 9.1** — Homepage redesign (CRITICAL — biggest visible gap, use installed premium components)
2. **Task 10.1** — Centre page titles + fix 7 double-titles + standardise hero gradients
3. **Task 10.2** — Fix demo layout to single-column (use /animations as reference)
4. **Task 10.0** — Streamline Freehand Colour icons (personality, warmth)
5. **Task 10.3** — Global UX polish (scroll reveals, hover lifts, micro-interactions)
6. **Tasks 10.4–10.10** — Page enhancements (category by category)
7. **Task 8.5.7** — Clean up legacy static files (housekeeping)
8. **Task 8.5.6 / 10.12** — Dark mode fine-tuning (twilight forest is solid, just edge cases)
9. **Task 10.11** — Desktop density tightening
10. **Task 10.13** — Responsive audit
11. **Task 10.14** — Accessibility and final build

---

## Archive Reference

Previous static HTML/CSS/JS implementation (Phases 0-15) completed 25 January - 7 February 2026. Full history in git log on `ralph/UI-Improvement-Test` branch.
