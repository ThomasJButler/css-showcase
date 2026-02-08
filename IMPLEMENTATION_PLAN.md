# CSS Showcase - Implementation Plan (Next.js Migration)

**Last Updated:** 8 February 2026 (Visual Audit #3)
**Status:** Phase 8.5 - Ghibli Visual Refresh → Phase 9 - Homepage → Phase 10 - Polish

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
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/components/ui/`

```bash
cd css-showcase
npx shadcn@latest add progress alert label switch slider select hover-card aspect-ratio popover
```
- These enhance specific content pages (forms, custom-properties, responsive)

### Task 8.5.5: Update Extended Colour Tokens
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/app/globals.css`

- Update `--color-brand-*` values in `@theme` block to Ghibli greens/browns/blues
- Update success/warning/error/info colours for consistency with Ghibli palette
- Grep all files for old brand colour references (e.g., `#2563eb`) and update
- Use semantic tokens (`var(--primary)`, `bg-primary`) — never hardcode old hex values

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
**Status:** PENDING
**Priority:** HIGH
**Files:** `css-showcase/app/page.tsx`

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

## Screenshot Audit Observations (8 February 2026 — Audit #3)

### Overall Status: MIGRATION COMPLETE — POLISH PHASE

All 30 content pages + homepage migrated and rendering. Shell (sidebar, header, footer, search, theme toggle) fully functional. Dark mode working across all pages. Mobile responsive. No broken routes or 404s. No regressions since Audit #2.

### What's Working Well

**Shell & Navigation — EXCELLENT**
- Sidebar: 7 collapsible sections, all 30 links present, Lucide icons, active state highlighting (blue background on Home)
- Header: Breadcrumbs with separator icons, search trigger (Cmd+K badge), theme toggle (sun/moon)
- Footer: 4-column grid (Categories, Resources, Quick Links), GitHub + Portfolio links, copyright + "Built with Next.js" credit
- Mobile header: Hamburger menu, search icon, theme toggle — compact and functional
- Breadcrumb navigation renders correctly on every content page (e.g., "Home > Visual Effects > Gradients")

**Content Pages (30/30 — ALL RENDERING CORRECTLY)**
- PageHero + Section + DemoGrid + DemoCard structure consistent across all pages
- Code blocks: Shiki syntax highlighting with dot indicators (red/yellow/green), collapsible toggle, copy button — working everywhere
- Live CSS demos rendering correctly across all categories:
  - **Fundamentals:** Basic CSS selectors/properties, box model visualiser with margin/padding/border diagram, typography font stacks and sizing scales
  - **Layout:** Flexbox blue demo boxes + interactive playground with controls, flexbox patterns (nav bar, card layout, media object, sticky footer, holy grail), grid coloured area layouts, layout techniques (display, positioning, multi-column, float), responsive media queries + fluid typography
  - **Visual Effects:** Gradients 3-column grid (linear, radial, conic), gradient patterns (geometric, organic, animated), transitions (hover effects, timing functions, credit card flip), animations (spinning circle, bouncing diamond, pulsing square, glitch text, loading spinner, morphing shapes), filters (blur, brightness, sepia, grayscale with blue spheres)
  - **Components:** Buttons (primary, outline, ghost, gradient, 3D, icon, animated), forms (input fields, validation states with green/red borders, file upload, complex layouts), tables (zebra striping, status badges, sticky headers), cards (gradient header, profile, pricing, feature, interactive hover, flip-to-expand), icons (basic CSS shapes, animated, interactive, fun collection — all rendering as pure CSS)
  - **Advanced:** Complex selectors, pseudo-elements (colourful circles), CSS counters (numbered lists), attribute selectors, combinators, specificity diagram
  - **Modern CSS:** :has() selector with browser support badges, container queries with responsive card demos, CSS nesting syntax comparison, anchor positioning tooltips/dropdowns, scroll animations (scroll-down demo, progress indicator, reveal cards), colour spaces (OKLCH palette, Display P3, color-mix demos)
  - **Resources:** Frameworks 3-column cards with coloured icons (Tailwind teal, Bootstrap purple, etc.), Tools 3-column cards (DevTools, preprocessors, linters, generators)

**Dark Mode — SOLID, NO REGRESSIONS**
- No white blocks visible on any dark mode screenshot
- Sidebar and header: dark slate/navy backgrounds, readable text, blue active state still visible
- Code blocks: dark backgrounds with proper syntax colours, dot indicators still visible
- Demo cards: darker surface colours with subtle borders — all 30 pages checked
- Gradient demos maintain vibrancy (the gradient swatches look even better against dark backgrounds)
- Animation demos: spinning/bouncing shapes clearly visible on dark grey demo areas
- Cards page: gradient cards vivid (pink-to-coral, blue-to-purple, yellow-to-orange)
- Tools/Frameworks: coloured icon squares pop nicely against dark card backgrounds
- Colour spaces: OKLCH/P3 swatches remain vivid and accurate
- Shapes & Clips: purple/pink shapes clearly distinct from dark background

**Mobile (375px) — GOOD, NO REGRESSIONS**
- All content readable, single-column stack
- Code blocks fit within viewport (horizontal scroll where needed)
- Flexbox Patterns: patterns stack vertically with full code visible
- Frameworks/Tools: cards stack single-column with complete descriptions
- Forms: long page but all elements render correctly in single column
- Buttons: all button variants visible, code blocks readable
- Footer: stacks vertically with clear section headings
- No horizontal overflow observed on any page

### What Needs Work (Unchanged from Audit #2)

1. **HOMEPAGE (CRITICAL)**: Desktop is nearly empty — "CSS Showcase" title, one-line subtitle, then ~500px of white void before the footer. Mobile shows title + subtitle → immediately jumps to footer with no content. Dark mode identical issue. This is the #1 priority.

2. **PAGE TITLES LEFT-ALIGNED (CRITICAL)**: PageHero titles are left-aligned on all 30 pages. Should be centred for a polished editorial look. Visible on every desktop screenshot — title and subtitle sit in a `max-w-3xl` div, leaving the right 60% of the viewport empty.

3. **DOUBLE-TITLE EFFECT (CRITICAL)**: Some pages have redundant first-section headings that echo the hero title. Detailed audit:
   - **NEEDS FIX:** `/flexbox` ("Flexbox" → "Flexbox Fundamentals"), `/grid` ("CSS Grid" → "Grid Fundamentals"), `/has-selector` ("The :has() Selector" → "What is :has()?"), `/container-queries` ("Container Queries" → "What are Container Queries?"), `/box-model` ("The Box Model" → "Box Model Fundamentals"), `/custom-properties` ("CSS Custom Properties" → first section echoes), `/css-nesting` ("Native CSS Nesting" → "Understanding CSS Nesting")
   - **ALREADY GOOD:** `/basic` ("Basic CSS" → "CSS Selectors"), `/responsive` ("Responsive Design" → "Mobile-First Development"), `/animations` ("CSS Animations" → "Keyframe Basics"), `/buttons` ("Brilliant Buttons" → "Base Button Styles"), `/gradients` ("CSS Gradients" → "Linear Gradients"), `/typography` ("Typography" → "Font Families & Loading"), `/layout` ("CSS Layout Techniques" → "The Display Property"), `/filters` ("CSS Filters" → "Blur Filter Functions"), `/shapes-clips` ("CSS Shapes & Clipping" → "Shapes to Be"), `/blend-modes` ("CSS Blend Modes" → "What are Blend Modes?"), `/color-spaces` ("Modern CSS Colour Spaces" → "What are Modern Colour Spaces?"), `/anchor-positioning` ("CSS Anchor Positioning" → "The Modern Anchor Positioning Rules"), `/scroll-animations` ("CSS Scroll-Driven Animations" → "The Future of Scroll Effects"), `/frameworks` ("CSS Frameworks" → "Utility-First Frameworks"), `/tools` ("CSS Tools" → "Browser Developer Tools"), `/icons` ("Pure CSS Icons" → "Basic Icons"), `/cards` ("Card Components" → "Basic Card Patterns"), `/forms` ("Forms Made Beautiful" → "Input Fields"), `/tables` ("Tables That Tell Stories" → "Built Your Story"), `/flexbox-patterns` ("Flexbox Patterns" → "Common Flexbox Patterns"), `/gradient-patterns` ("Gradient Patterns" → "Geometric Patterns"), `/transitions` ("CSS Transitions" → "Transition Basics"), `/advanced` ("Advanced CSS Techniques" → "Modern Complex Selectors")

4. **DEMO LAYOUT — SIDE-BY-SIDE CRAMPED (CRITICAL)**: On desktop, 2-column DemoGrid puts demo + code side-by-side, making code blocks too narrow. Most affected:
   - `/basic` — worst offender, tiny code snippets in narrow columns
   - `/box-model` — visualiser + code cramped side-by-side
   - `/typography` — font previews + code side-by-side, hard to read
   - `/transitions` — demo + code equally cramped
   - `/custom-properties` — interactive demos lose impact at narrow width
   - `/css-nesting` — code comparison needs full width to be readable
   - **Works well as multi-column:** `/gradients` (visual swatches), `/flexbox-patterns` (pattern cards), `/frameworks` (info cards), `/tools` (info cards), `/icons` (icon grids)

5. **GHIBLI THEME NOT YET APPLIED**: Current theme is default ShadCN — zinc grey backgrounds, blue-600 primary buttons/links, white card surfaces. No forest greens, earth browns, or creamy neutrals. Fonts are Inter (body) + Satoshi (display), not Nunito. Expected — Task 8.5.1 hasn't started.

6. **NO PREMIUM COMPONENTS**: No Apple Cards Carousel, 3D Card, Marquee, Terminal, or other premium interactive components installed. Expected — Tasks 8.5.3/8.5.4 pending.

7. **NO INTERACTIVE UX**: Pages are entirely static — no scroll-triggered entrance animations, no hover lift effects on cards, no route transitions, no micro-interactions. Content loads and sits. Expected — Task 10.3 pending.

8. **DESKTOP CONTENT DENSITY**: Some pages are extremely long with vertical gaps between sections:
   - `/forms` (~18700px) — extremely long, needs collapsible sections or tabbed grouping
   - `/buttons` (~18000px) — many button variants, long vertical scroll
   - `/advanced` (~14600px) — needs sub-navigation or TOC
   - `/animations` (~13800px) — long but rich content, acceptable
   - `/cards` (~13100px) — many card patterns, could benefit from grouping
   - `/box-model` (~12000px) — decent length, some vertical gaps between sections

### Bugs Found

1. **Layout page screenshots NOW PRESENT**: The layout.png screenshots that were deleted are now regenerated and present in all three directories (desktop, mobile, dark-mode). The `layout-techniques.png` files also exist. **RESOLVED.**

2. **Sidebar label "Layout Techniques"**: Sidebar says "Layout Techniques" but page title is "CSS Layout Techniques". Minor mismatch — not a blocker but should be tidied.

3. **Forms page extremely long**: Needs collapsible sections or tabbed grouping for Input Fields → Form Controls → Form Validation → Advanced Controls → Complex Form Examples.

4. **Advanced page very long**: Could use a floating TOC or accordion sections for Modern Complex Selectors → Pseudo-elements → CSS Counters → Attribute Selectors → Combinators → Specificity.

5. **NEW — Buttons page mobile**: At 375px width, the buttons page is extremely long (~20000px mobile). Each button variant has a code block that takes significant vertical space. Collapsible code blocks would help immensely here.

### NEW Issues Found in Audit #3

```text
ROUTE: /icons
ISSUE: Icons page uses full-width single-column layout for icon grids (Basic Icons, Animated, Interactive, Fun) — this is actually great and looks polished. However, the "Icon Techniques" section at the bottom has large code blocks that would benefit from collapsible code.
SCREENSHOT: desktop/icons.png
FIX: Add collapsibleCode to DemoCards in the Icon Techniques section.

ROUTE: /gradient-patterns
ISSUE: "Organic Textures" section shows 4 gradient pattern swatches but 2 of them render as plain white/light grey — the polka dot and noise textures may not be rendering properly in the screenshot (could be a timing issue with CSS background-image).
SCREENSHOT: desktop/gradient-patterns.png
FIX: Verify organic texture demos render correctly in browser. May need background-size or background-image fixes.

ROUTE: /transitions
ISSUE: "Transition Basics" section is one of the most cramped 2-column layouts. The hover demo area is narrow and the code block next to it is barely readable.
SCREENSHOT: desktop/transitions.png
FIX: Task 10.2 will address this — switch to single-column.

ROUTE: /has-selector
ISSUE: The PageHero has a very light pinkish/salmon gradient background that differs from the blue-tinted gradient on other pages. Inconsistent hero styling.
SCREENSHOT: desktop/has-selector.png
FIX: Standardise PageHero gradient backgrounds across all pages, or make the colour intentionally themed per category.

ROUTE: ALL PAGES
ISSUE: The "Continue Your Journey" / "Ready for X?" footer sections at the bottom of each page use a simple 2-3 card link layout that works but looks bland. No hover effects, no visual interest.
SCREENSHOT: All desktop screenshots — visible at the bottom of every page
FIX: Task 10.3 will address this — add hover lift effects and better card styling to "Continue" sections.
```

### Recommended Implementation Order (Updated)

Given the current state — no regressions, stable build, all 30 pages rendering — the recommended order remains:

1. **Task 8.5.1** — Ghibli theme (changes the entire visual identity)
2. **Task 8.5.2** — Nunito fonts (completes the visual refresh)
3. **Task 8.5.5** — Update extended colour tokens (consistency)
4. **Task 10.1** — Centre page titles + fix double-title (quick win, affects all 30 pages)
5. **Task 10.2** — Fix demo layout to single-column (readability improvement)
6. **Task 8.5.3** — Install premium components (needed for homepage)
7. **Task 8.5.4** — Install base ShadCN components (needed for page enhancements)
8. **Task 9.1** — Homepage redesign (biggest visual impact)
9. **Task 10.0** — Streamline Freehand Colour icons (personality)
10. **Task 10.3** — Global UX polish (scroll reveals, code tabs, copy button)
11. **Tasks 10.4–10.10** — Page enhancements (category by category)
12. **Task 8.5.7** — Clean up legacy files (housekeeping)
13. **Task 8.5.6 / 10.12** — Dark mode audit (after all visual changes)
14. **Task 10.11** — Desktop density tightening
15. **Task 10.13** — Responsive audit
16. **Task 10.14** — Accessibility and final build

---

## Archive Reference

Previous static HTML/CSS/JS implementation (Phases 0-15) completed 25 January - 7 February 2026. Full history in git log on `ralph/UI-Improvement-Test` branch.
