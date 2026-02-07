# CSS Showcase - Implementation Plan (Next.js Migration)

**Last Updated:** 7 February 2026
**Status:** Phase 1 - Foundation (Starting Fresh)

### Architecture

Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + ShadCN UI

**Working Directory:** `css-showcase/` (the Next.js app)

### Implementation Note

All frontend implementation must use the `/frontend-design` skill. Invoke it before writing any frontend code to ensure production-grade, distinctive design output.

---

999. Do NOT include Claude as co-author when commiting to git.

## Phase 1: Foundation — App Shell and ShadCN Setup

**Goal:** Set up the complete app shell with ShadCN sidebar, header, theme toggle, search, and shared layout — before any content pages.

### Task 1.1: Install ShadCN and Dependencies
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `css-showcase/package.json`, `css-showcase/components.json`

**Steps:**
1. `npx shadcn@latest init` (New York style, Zinc base, CSS variables)
2. `npm install next-themes shiki`
3. Add ShadCN components: sidebar, breadcrumb, card, button, badge, separator, dialog, input, command, accordion, tabs, scroll-area, tooltip, dropdown-menu, sheet, collapsible, navigation-menu

---

### Task 1.2: Design Tokens and Tailwind Configuration
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `css-showcase/app/globals.css`

Port design tokens from `../styles/01-design-tokens.css` into Tailwind v4 `@theme` block:
- Primary blue (#2563eb), secondary purple (#7c3aed), accent amber (#f59e0b)
- Surface/text/border colours for light and dark themes
- Typography scale, spacing scale, radius scale, shadows
- Dark mode via `class` strategy (next-themes)

---

### Task 1.3: Font Setup
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `css-showcase/app/layout.tsx`

Configure via `next/font/google`:
- Inter (body text)
- JetBrains Mono (code blocks)
- Satoshi (display headings)

---

### Task 1.4: Root Layout with Theme Provider
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `css-showcase/app/layout.tsx`

- ThemeProvider from next-themes wrapping everything
- SidebarProvider from ShadCN
- AppSidebar, SiteHeader, SiteFooter components
- `<html lang="en-GB" suppressHydrationWarning>`

---

### Task 1.5: Sidebar Navigation Component
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `css-showcase/components/app-sidebar.tsx`, `css-showcase/lib/navigation.ts`

ShadCN Sidebar with 7 collapsible sections (30 links):
1. Fundamentals (3): basic, box-model, typography
2. Layout (5): flexbox, flexbox-patterns, grid, layout-techniques, responsive
3. Visual Effects (5): gradients, gradient-patterns, transitions, animations, filters
4. Components (5): buttons, forms, tables, cards, icons
5. Advanced (4): advanced, custom-properties, blend-modes, shapes-clips
6. Modern CSS (6): has-selector, container-queries, css-nesting, anchor-positioning, scroll-animations, color-spaces
7. Resources (2): tools, frameworks

---

### Task 1.6: Site Header
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `css-showcase/components/site-header.tsx`, `css-showcase/components/theme-toggle.tsx`

- SidebarTrigger (hamburger) for mobile
- Dynamic breadcrumbs from navigation data
- Theme toggle (sun/moon via next-themes) with icon morph animation
- Search trigger (Cmd+K) with keyboard shortcut badge
- Sticky header with backdrop blur

---

### Task 1.7: Search Dialog
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/components/search-dialog.tsx`

ShadCN Command (cmdk) dialog with Cmd+K / Ctrl+K shortcut. Indexes all 30 pages.

---

### Task 1.8: Site Footer
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `css-showcase/components/site-footer.tsx`

Minimal footer with project info and links.

---

### Task 1.9: Shared Content Components
**Status:** PENDING
**Priority:** HIGH
**Files:** `css-showcase/components/demo-card.tsx`, `css-showcase/components/code-block.tsx`, `css-showcase/components/page-hero.tsx`, `css-showcase/components/feature-hero.tsx`, `css-showcase/components/demo-grid.tsx`, `css-showcase/components/section.tsx`, `css-showcase/components/feature-comparison.tsx`, `css-showcase/components/browser-support.tsx`

Build all reusable content components:
- **DemoCard**: ShadCN Card wrapping live demo + code block
- **CodeBlock**: Syntax highlighting (shiki), copy button, collapsible (ShadCN Collapsible)
- **PageHero**: Standard page header with title + subtitle
- **FeatureHero**: Modern CSS pages with gradient, badge, browser support
- **DemoGrid**: Responsive grid wrapper
- **Section**: Content section with title + intro
- **FeatureComparison**: "Old Way" vs "New Way" side-by-side
- **BrowserSupport**: Browser compatibility badges

---

### Task 1.10: Verify Shell
**Status:** PENDING
**Priority:** HIGH

Run `npm run dev` and verify:
- Shell renders with sidebar, header, theme toggle, search
- All 30 nav links present (404 pages fine)
- Theme toggles correctly
- Search dialog opens with Cmd+K
- Mobile sidebar works

---

## Phase 2: Content Migration — Fundamentals (3 pages)

**Goal:** Migrate the 3 simplest content pages to establish the pattern for all remaining pages.

### Task 2.1: Basic CSS Page
**Status:** PENDING
**Files:** `css-showcase/app/basic/page.tsx`, `css-showcase/app/basic/page.module.css`
**Source:** `../basic.html`, `../styles/basic.css`

### Task 2.2: Box Model Page
**Status:** PENDING
**Files:** `css-showcase/app/box-model/page.tsx`, `css-showcase/app/box-model/page.module.css`
**Source:** `../box-model.html`, `../styles/box-model.css`

### Task 2.3: Typography Page
**Status:** PENDING
**Files:** `css-showcase/app/typography/page.tsx`, `css-showcase/app/typography/page.module.css`
**Source:** `../typography.html`

---

## Phase 3: Content Migration — Layout (5 pages)

### Task 3.1: Flexbox Page
**Status:** PENDING
**Source:** `../flexbox.html`, `../styles/flexbox.css`

### Task 3.2: Flexbox Patterns Page
**Status:** PENDING
**Source:** `../flexbox-patterns.html`

### Task 3.3: Grid Page
**Status:** PENDING
**Source:** `../grid.html`

### Task 3.4: Layout Techniques Page
**Status:** PENDING
**Source:** `../layout.html`, `../styles/layout.css`

### Task 3.5: Responsive Design Page
**Status:** PENDING
**Source:** `../responsive.html`, `../styles/responsive-page.css`

---

## Phase 4: Content Migration — Visual Effects (5 pages)

### Task 4.1: Gradients Page
**Status:** PENDING
**Source:** `../gradients.html`

### Task 4.2: Gradient Patterns Page
**Status:** PENDING
**Source:** `../gradient-patterns.html`

### Task 4.3: Transitions Page
**Status:** PENDING
**Source:** `../transitions.html`, `../styles/transitions.css`

### Task 4.4: Animations Page
**Status:** PENDING
**Source:** `../animations.html`

### Task 4.5: Filters and Effects Page
**Status:** PENDING
**Source:** `../filters.html`

---

## Phase 5: Content Migration — Components (5 pages)

### Task 5.1: Buttons Page
**Status:** PENDING
**Source:** `../buttons.html`

### Task 5.2: Forms Page
**Status:** PENDING
**Source:** `../forms.html`, `../styles/forms.css`

### Task 5.3: Tables Page
**Status:** PENDING
**Source:** `../tables.html`, `../styles/tables.css`

### Task 5.4: Cards Page
**Status:** PENDING
**Source:** `../cards.html`

### Task 5.5: Icons Page
**Status:** PENDING
**Source:** `../icons.html`

---

## Phase 6: Content Migration — Advanced (4 pages)

### Task 6.1: Advanced CSS Page
**Status:** PENDING
**Source:** `../advanced.html`, `../styles/advanced-page.css`

### Task 6.2: Custom Properties Page
**Status:** PENDING
**Source:** `../custom-properties.html`, `../styles/custom-properties.css`

### Task 6.3: Blend Modes Page
**Status:** PENDING
**Source:** `../blend-modes.html`, `../styles/blend-modes.css`

### Task 6.4: Shapes and Clips Page
**Status:** PENDING
**Source:** `../shapes-clips.html`, `../styles/shapes-clips.css`

---

## Phase 7: Content Migration — Modern CSS (6 pages)

### Task 7.1: :has() Selector Page
**Status:** PENDING
**Source:** `../has-selector.html`

### Task 7.2: Container Queries Page
**Status:** PENDING
**Source:** `../container-queries.html`

### Task 7.3: CSS Nesting Page
**Status:** PENDING
**Source:** `../css-nesting.html`

### Task 7.4: Anchor Positioning Page
**Status:** PENDING
**Source:** `../anchor-positioning.html`, `../styles/anchor-positioning.css`

### Task 7.5: Scroll Animations Page
**Status:** PENDING
**Source:** `../scroll-animations.html`, `../styles/scroll-animations.css`

### Task 7.6: Colour Spaces Page
**Status:** PENDING
**Source:** `../color-spaces.html`, `../styles/color-spaces.css`

---

## Phase 8: Content Migration — Resources (2 pages)

### Task 8.1: CSS Tools Page
**Status:** PENDING
**Source:** `../tools.html`

### Task 8.2: Frameworks Page
**Status:** PENDING
**Source:** `../frameworks.html`

---

## Phase 9: Homepage

### Task 9.1: Build Homepage
**Status:** PENDING
**Files:** `css-showcase/app/page.tsx`
**Source:** `../index.html`

Hero section, category cards, CTAs, animated elements.

---

## Phase 10: Polish and Visual Testing

### Task 10.1: Visual Test Run
**Status:** PENDING
Run `node visual-test.js` and review all screenshots.

### Task 10.2: Responsive Audit
**Status:** PENDING
Check all pages at 375px, 768px, 1024px, 1920px.

### Task 10.3: Dark Mode Audit
**Status:** PENDING
Verify no white blocks, proper contrast in dark mode.

### Task 10.4: Accessibility Audit
**Status:** PENDING
Skip links, keyboard nav, focus management, landmarks.

### Task 10.5: Build Verification
**Status:** PENDING
`npm run build` succeeds with no errors.

---

## Progress Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phase 1: Foundation | IN PROGRESS | 6/10 |
| Phase 2: Fundamentals | PENDING | 0/3 |
| Phase 3: Layout | PENDING | 0/5 |
| Phase 4: Visual Effects | PENDING | 0/5 |
| Phase 5: Components | PENDING | 0/5 |
| Phase 6: Advanced | PENDING | 0/4 |
| Phase 7: Modern CSS | PENDING | 0/6 |
| Phase 8: Resources | PENDING | 0/2 |
| Phase 9: Homepage | PENDING | 0/1 |
| Phase 10: Polish | PENDING | 0/5 |

---

## Archive Reference

Previous static HTML/CSS/JS implementation (Phases 0-15) completed 25 January - 7 February 2026. Full history available in git commit log on the `ralph/UI-Improvement-Test` branch.
