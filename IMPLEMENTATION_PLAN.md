# CSS Showcase - Ultimate Overhaul Implementation Plan

**Last Updated:** 25 January 2026 (Research re-verified with 3 parallel explore agents)
**Status:** Phase 1 - CSS Architecture Foundation (Phase 0 Complete)

---

## Executive Summary

Transform the CSS Showcase from "portfolio-ready" (10/10) to "industry-leading" with:
- Sidebar-only navigation (minimal header)
- Component injection (eliminate 5,700+ lines of duplicated HTML)
- Polished code boxes (WCAG-compliant)
- Cutting-edge CSS (layers, container queries, view transitions, scroll animations)
- Consolidated architecture (35 → ~12 CSS files)
- New Tools & Frameworks pages

---

## Phase 0: Housekeeping

### Task 0.1: Delete Old Completed Plan Files
**Status:** COMPLETE ✓
**Files deleted:**
- [x] `01-critical-broken-links.md`
- [x] `02-critical-search-fix.md`
- [x] `03-critical-github-link.md`
- [x] `04-high-mobile-responsive.md`
- [x] `05-high-footer-enhancement.md`
- [x] `06-medium-visual-consistency.md`
- [x] `07-medium-playground-improvements.md`
- [x] `VERIFICATION_SUMMARY.md`

### Task 0.2: Archive Previous Implementation History
**Status:** COMPLETE ✓
**Action:** History archived to `docs/IMPLEMENTATION_HISTORY.md`

---

## Phase 1: CSS Architecture Foundation

### Task 1.1: Create CSS Layers System
**Status:** COMPLETE ✓
**File:** Created `styles/00-layers.css`

```css
/* CSS Cascade Layers - defines precedence order */
@layer reset, tokens, base, layout, components, utilities, features, overrides;
```

### Task 1.2: Consolidate Design Tokens
**Status:** COMPLETE ✓
**Files:**
- Create: `styles/01-design-tokens.css`
- Modify: `styles/main.css` (extract variables to new file)
- Modify: `styles/improvements.css` (remove duplicate variables lines 4-32)

**Z-index standardisation (revised based on actual codebase audit):**

Current codebase has **52 z-index values across 17 files** - only 2 files use CSS variables (main.css, playground.css).

Hardcoded values found: -2, -1, 1, 2, 3, 10, 11, 50, 80, 90, 110, 998, 999, 1000, 1001, 1002, 1003, 9999, 10000

```css
:root {
  /* Base & Content */
  --z-behind: -2;
  --z-negative: -1;
  --z-base: 0;
  --z-content: 1;
  --z-elevated: 10;

  /* Navigation (preserves current sidebar values) */
  --z-back-to-top: 80;
  --z-sidebar: 90;
  --z-sidebar-toggle: 110;

  /* Overlays (preserves main.css scale) */
  --z-backdrop-alt: 998;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-overlay: 9999;
  --z-critical: 10000;
}
```

**Files requiring z-index migration (15 files):**
- accessibility.css (2 values: 10000, 9999)
- sidebar.css (3 values: 90, 110, 80)
- code-examples.css (2 values: 10, 11)
- improvements.css (1 value: 1000)
- playground.css (6 values: 1002, 1001, 1000, 1003, 999, 10)
- layout.css (5 values: 50, 10, 1, 2, 3)
- scroll-animations.css (1 value: 1000)
- search.css (1 value: 9999)
- tables.css (1 value: 10)

**Shadow format conflict to resolve:**
- main.css: Uses modern `rgb(0 0 0 / 0.05)` syntax
- improvements.css: Uses legacy `rgba(0, 0, 0, 0.05)` syntax
- **Action:** Standardise on modern rgb() syntax

---

## Phase 2: Header & Sidebar Redesign

### Task 2.1: Create Component Directory
**Status:** PENDING
**Action:** Create `components/` directory

### Task 2.2: Create Sidebar Component
**Status:** PENDING
**File:** Create `components/sidebar.html`
**Content:** Extract sidebar HTML from any page, add Resources section

### Task 2.3: Create Header Component
**Status:** PENDING
**File:** Create `components/header.html`
**Content:** Minimal header (logo + theme toggle + hamburger)

```html
<header class="site-header">
  <a href="/" class="logo">
    <span class="logo-css">CSS</span>
    <span class="logo-showcase">Showcase</span>
  </a>
  <div class="header-actions">
    <button class="theme-toggle" aria-label="Toggle theme">
      <svg class="icon-sun">...</svg>
      <svg class="icon-moon">...</svg>
    </button>
    <button class="sidebar-toggle" aria-label="Open navigation menu">
      <span class="hamburger"></span>
    </button>
  </div>
</header>
```

### Task 2.4: Create Skeleton Component
**Status:** PENDING
**File:** Create `components/sidebar-skeleton.html`
**Content:** CSS-only loading skeleton shown during component fetch

### Task 2.5: Create Component Loader
**Status:** PENDING
**File:** Create `scripts/component-loader.js`

```javascript
class ComponentLoader {
  async init() {
    await Promise.all([
      this.loadComponent('header'),
      this.loadComponent('sidebar')
    ]);
    this.highlightCurrentPage();
  }

  async loadComponent(name) {
    const response = await fetch(`/components/${name}.html`);
    const html = await response.text();
    document.getElementById(name).innerHTML = html;
  }

  highlightCurrentPage() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const link = document.querySelector(`.sidebar-nav-link[href="${current}"]`);
    if (link) link.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => new ComponentLoader().init());
```

### Task 2.6: Update All 30 HTML Files
**Status:** PENDING
**Action:** Replace inline sidebar/header with placeholders

```html
<!-- Replace ~190 lines of sidebar HTML with: -->
<div class="sidebar-skeleton" aria-hidden="true">
  <div class="skeleton-logo"></div>
  <div class="skeleton-nav"></div>
</div>
<header id="header"></header>
<aside class="sidebar" id="sidebar"></aside>
```

### Task 2.7: Unify Scroll Management
**Status:** PENDING
**Files:**
- Modify: `scripts/sidebar.js`
- Modify: `scripts/main.js`
**Action:** Merge competing auto-hide systems into single scroll observer

**Current scroll handlers (3 separate listeners) - VERIFIED:**
1. **main.js (lines 160-202)**: Header auto-hide with 500ms setTimeout debounce
   - Uses `setTimeout` (not RAF) - causes timing mismatch with sidebar
   - Threshold: 200px scroll depth
   - Mobile-specific: only affects header on ≤768px
   - Reveals header after scroll stops (500ms timeout)

2. **sidebar.js (lines 267-297)**: Sidebar auto-hide with RAF throttling
   - Uses `requestAnimationFrame` with `ticking` flag
   - Threshold: 200px scroll depth
   - Desktop only: width ≥1024px
   - Does NOT reveal after scroll stops

3. **sidebar.js (lines 303-344)**: Floating back-to-top with RAF throttling
   - Creates button dynamically if missing
   - Updates `--scroll-progress` CSS variable for progress ring
   - Threshold: 400px to show button

**Issues identified:**
- **Timing mismatch:** RAF-based sidebar vs setTimeout-based header
- **Three separate scroll listeners** on window (performance impact)
- **Inconsistent debounce patterns:** per-frame (sidebar) vs time-based (header)

**Recommended unified approach:**
```javascript
// Single scroll manager with RAF throttling
class ScrollManager {
  constructor() {
    this.lastScroll = 0;
    this.ticking = false;
  }

  init() {
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        this.updateHeader(scrollY);
        this.updateSidebar(scrollY);
        this.updateBackToTop(scrollY);
        this.lastScroll = scrollY;
        this.ticking = false;
      });
      this.ticking = true;
    }
  }
}
```

### Task 2.8: Remove CSS Injected via JavaScript
**Status:** PENDING
**File:** `scripts/main.js` (lines 204-232)
**Action:** Move dynamically injected header styles to CSS file

Currently main.js injects these styles into DOM:
```javascript
const headerStyles = document.createElement('style');
headerStyles.textContent = `
    .site-header.scrolled { ... }
    .site-header.header-hidden { ... }  // DUPLICATE of main.css
    .theme-toggle.header-hidden { ... }
    .nav-toggle.active span:nth-child(...) { ... }
`;
```
**Issue:** Duplicates `.site-header.header-hidden` from main.css line 272

---

## Phase 3: Code Box Polish

### Task 3.1: Fix All WCAG Font Size Violations
**Status:** PENDING
**WCAG 2.1 AA Requirement:** Minimum font size of 14px (0.875rem) for body text

**Complete list of violations found (6 total):**

| File | Line | Current | Element | Severity |
|------|------|---------|---------|----------|
| code-examples.css | 20 | 0.75rem (12px) | Language label (::before) | Medium |
| code-examples.css | 325 | **0.625rem (10px)** | Language label @768px | Critical |
| code-examples.css | 333 | **0.625rem (10px)** | Copy button @768px | Critical |
| syntax-highlight.css | 118 | 0.75rem (12px) | Line numbers | Medium |
| syntax-highlight.css | 143 | **0.7rem (11.2px)** | Line numbers @768px | Critical |
| improvements.css | 773 | 0.75rem (12px) | Code pre @375px | Medium |

**Fixes required:**

```css
/* code-examples.css line 20 */
.code-example::before {
  font-size: var(--text-sm); /* 0.875rem instead of var(--text-xs) */
}

/* code-examples.css line 325 - mobile language label */
@media (max-width: 768px) {
  .code-example::before {
    font-size: var(--text-xs); /* 0.75rem minimum, was 0.625rem */
  }
}

/* code-examples.css line 333 - mobile copy button */
@media (max-width: 768px) {
  .copy-button {
    font-size: var(--text-xs); /* 0.75rem minimum, was 0.625rem */
  }
}

/* syntax-highlight.css line 118 */
.line-number {
  font-size: var(--text-xs); /* Use variable instead of hardcoded 0.75rem */
}

/* syntax-highlight.css line 143 - mobile line numbers */
@media (max-width: 768px) {
  .line-number {
    font-size: var(--text-xs); /* 0.75rem minimum, was 0.7rem */
  }
}

/* improvements.css line 773 - REMOVE this override entirely */
/* @media (max-width: 375px) { .code-example pre { font-size: 0.75rem; } } */
```

### Task 3.2: Unify Line Height
**Status:** PENDING
**Issue:** syntax-highlight.css uses hardcoded `line-height: 1.6` (line 8) instead of `var(--leading-relaxed)` (1.75)

**Files to update:**
- syntax-highlight.css line 8: Change `line-height: 1.6` → `line-height: var(--leading-relaxed)`

### Task 3.3: Add Visual Separator
**Status:** PENDING
**File:** `styles/code-examples.css`
**Change:** Add 3px accent border between demo and code

```css
.demo-card .demo-example {
  border-bottom: 3px solid var(--colour-primary);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.demo-card .code-example {
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}
```

### Task 3.4: Add Scroll Indicator with JS Detection
**Status:** PENDING
**Files:** `styles/code-examples.css`, `scripts/code-examples.js`

**Current state:** Scroll indicator CSS exists (lines 308-322) but always visible. Missing JS overflow detection.

**CSS already implemented:**
```css
.code-example::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background: linear-gradient(to left, var(--code-bg) 0%, transparent 100%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}

.code-example.has-overflow::after {
  opacity: 1;
}
```

**JS to add (new file or add to existing):**
```javascript
// Detect horizontal overflow and add class
document.querySelectorAll('.code-example pre').forEach(pre => {
  if (pre.scrollWidth > pre.clientWidth) {
    pre.closest('.code-example').classList.add('has-overflow');
  }
});
```

### Task 3.5: Improve 3-Column Grid
**Status:** PENDING
**File:** `styles/basic.css`
**Change:** Better alignment for vertically stacked cards

```css
.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: var(--space-6);
  align-items: start;
}

.demo-card {
  display: flex;
  flex-direction: column;
}

.demo-card .code-example {
  flex: 1;
  min-height: 200px;
}
```

---

## Phase 4: Advanced CSS Implementation

### Task 4.1: View Transitions
**Status:** PENDING
**File:** Add to core CSS

```css
@view-transition {
  navigation: auto;
}

main {
  view-transition-name: page-content;
}

::view-transition-old(page-content) {
  animation: fade-slide-out 0.15s ease-out;
}

::view-transition-new(page-content) {
  animation: fade-slide-in 0.15s ease-in;
}

@keyframes fade-slide-out {
  to { opacity: 0; transform: translateX(-10px); }
}

@keyframes fade-slide-in {
  from { opacity: 0; transform: translateX(10px); }
}
```

### Task 4.2: Scroll-Driven Progress Indicator
**Status:** PENDING
**Action:** Add reading progress bar at top of page

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform-origin: left;
  animation: grow-x linear;
  animation-timeline: scroll();
  z-index: var(--z-header);
}

@keyframes grow-x {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
```

### Task 4.3: CSS Nesting Migration
**Status:** PENDING
**Files:** sidebar.css, code-examples.css
**Action:** Convert to native CSS nesting syntax

---

## Phase 5: File Consolidation

### Task 5.1: Create Bundle CSS
**Status:** PENDING
**File:** Create `styles/bundle.css`

```css
@import "00-layers.css";
@import "01-tokens.css";
@import "02-reset.css";
@import "03-core.css";
@import "04-layout.css";
@import "05-components.css";
@import "06-code.css";
```

### Task 5.2: Merge Core CSS Files
**Status:** PENDING
**Merge into `styles/03-core.css`:**
- main.css (without variables)
- accessibility.css
- micro-interactions.css

### Task 5.3: Merge Layout CSS Files
**Status:** PENDING
**Merge into `styles/04-layout.css`:**
- sidebar.css
- search.css

### Task 5.4: Merge Code CSS Files
**Status:** PENDING
**Merge into `styles/06-code.css`:**
- code-examples.css
- syntax-highlight.css

### Task 5.5: Update HTML Imports
**Status:** PENDING
**Action:** Replace multiple link tags with single bundle import

```html
<!-- Before: 8 link tags -->
<!-- After: -->
<link rel="stylesheet" href="styles/bundle.css">
<link rel="stylesheet" href="styles/features/flexbox.css">
```

### Task 5.6: Add Code Comments
**Status:** PENDING
**Action:** Add comprehensive header comments to all CSS files

---

## Phase 6: New Content Pages

### Task 6.1: Create CSS Tools Page
**Status:** PENDING
**File:** Create `tools.html`
**Content:** Curated resource cards (Chrome DevTools, Tailwind, Bootstrap, Sass, Stylelint, CSS-Tricks)

### Task 6.2: Create Frameworks Page
**Status:** PENDING
**File:** Create `frameworks.html`
**Content:** Overview of when to use frameworks vs vanilla CSS

### Task 6.3: Update Sidebar Navigation
**Status:** PENDING
**File:** `components/sidebar.html`
**Action:** Add Resources section with Tools and Frameworks links

---

## Phase 7: Final Polish

### Task 7.1: Visual Consistency Pass
**Status:** PENDING
**Checklist:**
- [ ] All pages use consistent spacing variables
- [ ] Dark mode works on all new components
- [ ] Smooth transitions everywhere
- [ ] No layout shifts on page load

### Task 7.2: Performance Audit
**Status:** PENDING
**Targets:**
- [ ] Lighthouse Performance 90+
- [ ] CLS = 0
- [ ] No render-blocking CSS

### Task 7.3: Accessibility Audit
**Status:** PENDING
**Checklist:**
- [ ] Keyboard navigation through sidebar
- [ ] Screen reader announces correctly
- [ ] Focus visible states
- [ ] WCAG AA colour contrast

### Task 7.4: Final Screenshots
**Status:** PENDING
**Action:** Run `node visual-test.js` to capture final state

---

## Progress Summary

| Phase | Status | Tasks | Complete |
|-------|--------|-------|----------|
| Phase 0: Housekeeping | COMPLETE ✓ | 2 | 2 |
| Phase 1: CSS Architecture | COMPLETE ✓ | 2 | 2 |
| Phase 2: Header & Sidebar | PENDING | 8 | 0 |
| Phase 3: Code Box Polish | PENDING | 5 | 0 |
| Phase 4: Advanced CSS | PENDING | 3 | 0 |
| Phase 5: File Consolidation | PENDING | 6 | 0 |
| Phase 6: New Content | PENDING | 3 | 0 |
| Phase 7: Final Polish | PENDING | 4 | 0 |
| **TOTAL** | | **33** | **0** |

---

## Research Verification (25 January 2026)

**Research conducted using 3 parallel explore agents:**
1. Header/Sidebar Implementation Analysis
2. Code Box Styling Analysis
3. CSS Architecture Patterns Analysis

**All findings verified against actual codebase.** Key corrections applied to original estimates:
- Sidebar HTML is **189 lines** (not 177) per page
- Modern CSS features **are in use** in modern-features.css (container queries, :has(), CSS nesting, @supports)
- Font size override at 375px is in **improvements.css:773** (not code-examples.css)
- Only **4 locations** use z-index CSS variables; **23 hardcoded values** remain across 10+ files

---

## Research Findings (25 January 2026)

### Header & Sidebar Analysis

**HTML Duplication Confirmed (re-verified):**
- Sidebar toggle button: 7 lines (lines 21-27)
- Sidebar backdrop: 1 line (line 30)
- Main sidebar aside: 176 lines (lines 33-208)
- **Total sidebar markup: 184 lines** × 31 pages = **5,704 lines of duplicate code**
- Includes: 7 collapsible nav sections (Fundamentals, Layout, Visual Effects, Components, Advanced, Modern CSS, Playground)
- **868 sidebar-related DOM elements** across all pages (28 per page × 31 pages)

**CSS Structure:**
| Component | File | Key Classes | Z-Index |
|-----------|------|-------------|---------|
| Sidebar | sidebar.css (537 lines) | `.sidebar`, `.sidebar-hidden` | 90 |
| Sidebar Toggle | sidebar.css | `.sidebar-toggle` | 110 |
| Header | main.css | `.site-header`, `.header-hidden` | 1020 (via --z-sticky) |
| Theme Toggle | main.css | `.theme-toggle` | 1030 (via --z-fixed) |
| Floating Back-to-Top | sidebar.css | `.floating-back-to-top` | 80 |

**Scroll Handling Conflicts Found:**
- **main.js (line 166):** Header auto-hide with 500ms scrollTimer debounce
- **sidebar.js (line 271):** Sidebar auto-hide with requestAnimationFrame + ticking flag
- **sidebar.js (line 316):** Floating button visibility with separate scroll listener
- All use passive: true, no functional conflicts but inefficient (3 separate scroll listeners)
- **Inconsistent patterns:** sidebar.js uses rAF (best practice), main.js uses setTimeout

**Back-to-Top Button Implementations (2 separate):**
- **Static button:** Inside sidebar footer (sidebar.js)
- **Floating button:** Dynamically created, fixed bottom-right position (sidebar.js, lines 303-344)
- Shows when scrolled > 400px with progress ring (--scroll-progress CSS variable)

**Tablet Breakpoint Issue:**
- sidebar.css (lines 355-361) hides header nav with `!important` flags
- Should be refactored to use proper specificity

**!important Overrides Found (4 in tablet media query):**
- Line 355: `.nav-toggle { display: none !important; }`
- Line 360: `.nav-list { display: none !important; }`
- Line 370: `.theme-toggle { top: var(--space-6) !important; left: 4.5rem !important; }`
- Line 376: `.sidebar.active ~ header .logo { opacity: 0 !important; }`

---

### Code Box WCAG Issues

**Critical Font Size Problems:**
| Element | Location | Current | WCAG Min | Status |
|---------|----------|---------|----------|--------|
| Code (desktop) | code-examples.css:48 | 0.875rem | 0.875rem | ✅ PASS |
| Code (768px) | code-examples.css:303 | 0.75rem | 0.875rem | ❌ FAIL |
| Code (375px) | improvements.css:773 | 0.75rem | 0.875rem | ❌ FAIL |
| Copy button (desktop) | code-examples.css:226 | 0.75rem | 0.875rem | ❌ FAIL |
| Copy button (768px) | code-examples.css:333 | **0.625rem** | 0.875rem | ❌ CRITICAL |
| Line numbers | syntax-highlight.css:118 | 0.75rem | 0.875rem | ❌ FAIL |

**Line Height Inconsistency:**
- code-examples.css uses `var(--leading-relaxed)` = 1.75
- syntax-highlight.css uses hardcoded 1.6
- Should be unified

**Scroll Fade Indicator:**
- Already implemented (lines 307-322) but always visible
- Missing: JS overflow detection to conditionally show indicator

---

### CSS Architecture Analysis

**Total: 35 CSS files, 18,781 lines**

**Top 10 Largest Files:**
1. modern-features.css: 1,317 lines (7.0%)
2. buttons.css: 1,200 lines (6.4%)
3. icons.css: 1,101 lines (5.9%)
4. main.css: 889 lines (4.7%)
5. improvements.css: 867 lines (4.6%)
6. forms.css: 798 lines (4.2%)
7. playground.css: 760 lines (4.0%)
8. cards.css: 662 lines (3.5%)
9. advanced-page.css: 648 lines (3.4%)
10. animations.css: 639 lines (3.4%)

**Variable Duplication (main.css vs improvements.css):**
- Spacing scale (--space-0 to --space-24): Duplicated but identical
- Shadow variables (--shadow-sm to --shadow-xl): **CONFLICTING VALUES** - improvements.css has refined values
- Improvements.css adds: --space-7, --space-32, --shadow-xs, --section-spacing, --content-spacing
- **Format inconsistency:** main.css uses `rgb(0 0 0 / 0.05)` syntax; improvements.css uses `rgba(0, 0, 0, 0.05)` syntax
- **Missing in improvements.css:** --shadow-2xl, --shadow-inner (exist only in main.css)

**Z-Index Crisis - Full Audit:**
```
52 total z-index values found across 17 files:
-2, -1, 1, 2, 3, 10, 11, 50, 80, 90, 110,
998, 999, 1000, 1001, 1002, 1003,
9999, 10000
```

**Critical Z-Index Issues:**
- improvements.css line 51: Header uses hardcoded `1000` instead of `var(--z-sticky)` (1020)
- sidebar.css line 14: Sidebar uses hardcoded `90` instead of CSS variable
- sidebar.css line 237: Sidebar toggle uses hardcoded `110` (higher than sidebar itself!)
- accessibility.css line 15: Skip link uses `10000` (highest value in codebase)
- search.css line 7: Search container uses `9999`
- playground.css: 6 hardcoded values (1000, 1001, 1002, 1003, 999, 10)
- layout.css: 5 hardcoded values (50, 10, 1, 2, 3)

**Z-Index CSS Variable Usage (only 4 locations - 7.7%):**
| Location | Variable Used |
|----------|---------------|
| main.css:238 | `.theme-toggle` uses `var(--z-fixed)` (1030) |
| main.css:264 | `.site-header` uses `var(--z-sticky)` (1020) |
| playground.css:421 | `.modal` uses `var(--z-modal)` (1050) |
| playground.css:725 | `.modal-overlay` uses `var(--z-modal)` (1050) |

**Modern CSS Features (Partial - in feature pages only):**
- ❌ No `@layer` declarations found anywhere
- ❌ No `view-transition-name` found anywhere
- ✅ `@supports` used in scroll-animations.css (3 instances, lines 49, 96, 160)
- ✅ `@container` used in modern-features.css (6 instances, lines 625-899)
- ✅ `:has()` selector used extensively in modern-features.css (10+ instances)
- ❌ CSS nesting NOT used (contrary to previous report - modern-features.css uses separate selectors)
- ⚠️ All variables at `:root` only (no component scoping)
- ⚠️ Z-index CSS variables used in only 4 locations; **48 hardcoded values** remain across 15 files (92.3%)

---

### Updated Phase 1 Details

**Task 1.2 - Expanded Variable Consolidation:**

Shadow variables to resolve (keep improvements.css values):
```css
/* DIFFERENT values between files - keep improvements.css */
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgb(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

New variables to add from improvements.css:
```css
--space-7: 1.75rem;
--space-32: 8rem;
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--section-spacing: clamp(1rem, 3vw, 1.5rem);
--content-spacing: clamp(0.5rem, 2vw, 0.75rem);
```

**Revised Z-Index Scale:**
```css
:root {
  /* Base & Content */
  --z-behind: -2;
  --z-negative: -1;
  --z-base: 0;
  --z-content: 1;
  --z-elevated: 10;

  /* Navigation */
  --z-back-to-top: 80;
  --z-sidebar: 90;
  --z-sidebar-toggle: 110;

  /* Overlays */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-overlay: 9999;
  --z-top: 10000;
}
```

---

### Updated Phase 3 Details

**Task 3.1 - Specific Lines to Modify:**
- code-examples.css line 48: Change to `clamp(0.875rem, 2vw, 1rem)`
- code-examples.css line 20: Fix code language label desktop font-size (currently `var(--text-xs)` = 0.75rem)
- code-examples.css line 226: Fix copy button desktop font-size (currently 0.75rem, below WCAG minimum)
- code-examples.css line 303: Remove/update 768px breakpoint font-size (currently uses `var(--text-xs)` = 0.75rem)
- code-examples.css line 325: Fix code language label mobile font-size (currently 0.625rem = 10px, critically small)
- code-examples.css line 333: Fix copy button mobile font-size (currently 0.625rem = 10px, critically small)
- **improvements.css line 773**: Remove 375px breakpoint font-size override (hardcoded 0.75rem)
- syntax-highlight.css line 8: Change line-height from hardcoded 1.6 to `var(--leading-relaxed)` (1.75)
- syntax-highlight.css line 118: Fix line numbers font-size (currently 0.75rem, below WCAG minimum)
- syntax-highlight.css line 143: Fix line numbers mobile font-size (currently 0.7rem = 11.2px, critically small)

**Task 3.3 - Add JS Overflow Detection:**
```javascript
// Add to code-examples.js
document.querySelectorAll('.code-example pre').forEach(pre => {
  if (pre.scrollWidth > pre.clientWidth) {
    pre.closest('.code-example').classList.add('has-overflow');
  }
});
```

---

### File Consolidation Candidates (Phase 5)

**High Priority Merges:**
| Merge | Into | Lines Saved |
|-------|------|-------------|
| accessibility.css + responsive.css | base.css | ~307 |
| micro-interactions.css | animations.css | ~175 |
| advanced.css | advanced-page.css | ~59 |
| syntax-highlight.css | code-examples.css | ~144 |

**Projected Result:**
- Before: 35 CSS files
- After: ~28 CSS files (20% reduction)

---

## Historical Context

This project was previously completed to "portfolio-ready" status (10/10) on 25 January 2026. All critical issues were resolved:
- All 30 sidebar navigation links functional
- Search functionality working (Cmd/Ctrl+K)
- GitHub repository links consistent
- Mobile responsiveness with proper breakpoints
- Visual testing targets met

The previous implementation history has been archived to `docs/IMPLEMENTATION_HISTORY.md`.

This new overhaul takes the project to the next level with modern CSS techniques and improved architecture.
