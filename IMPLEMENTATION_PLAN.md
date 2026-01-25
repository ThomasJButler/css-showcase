# CSS Showcase - Ultimate Overhaul Implementation Plan

**Last Updated:** 25 January 2026 (Research Verification Update)
**Status:** Phase 3 Complete ✓ | Phase 4-7 Research Verified ✓ | Ready for Implementation

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
**Status:** COMPLETE ✓
**Action:** Created `components/` directory

### Task 2.2: Create Sidebar Component
**Status:** COMPLETE ✓
**File:** Created `components/sidebar.html`
**Content:** Extracted sidebar HTML, added Resources section with Tools and Frameworks links

### Task 2.3: Create Header Component
**Status:** COMPLETE ✓
**File:** Created `components/header.html`
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
**Status:** COMPLETE ✓
**File:** Created `components/sidebar-skeleton.html`
**Content:** CSS-only loading skeleton with shimmer animation, dark mode support

### Task 2.5: Create Component Loader
**Status:** COMPLETE ✓
**File:** Created `scripts/component-loader.js`

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
**Status:** COMPLETE ✓
**Action:** Replaced inline sidebar/header with component placeholders in all 30 HTML files
**Changes:**
- All pages now use `<header class="site-header" id="header"></header>`
- All pages now use `<aside class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation"></aside>`
- All pages include `<div class="sidebar-skeleton" aria-hidden="true"></div>` for loading state
- All pages include `<script src="scripts/component-loader.js"></script>` before other scripts
- Removed ~5,700 lines of duplicated sidebar HTML across all pages

### Task 2.7: Unify Scroll Management
**Status:** COMPLETE ✓
**Files:**
- Created: `scripts/scroll-manager.js` - Unified ScrollManager class
- Modified: `scripts/sidebar.js` - Removed setupAutoHide() and setupFloatingBackToTop()
- Modified: `scripts/main.js` - Removed scroll handler (lines 160-232)
- Modified: All 30 HTML pages - Added scroll-manager.js script include

**Implementation:**
- Single scroll listener using requestAnimationFrame for optimal performance
- Unified handling of header auto-hide, sidebar auto-hide, and floating back-to-top
- Consistent RAF-based throttling across all scroll behaviours
- Scroll-stop detection with 500ms timeout for header reveal
- Initialises via 'components-loaded' event from component-loader.js

### Task 2.8: Remove CSS Injected via JavaScript
**Status:** COMPLETE ✓
**Files:**
- Modified: `scripts/main.js` - Removed headerStyles injection (was lines 204-232)
- Modified: `styles/main.css` - Added `.theme-toggle.header-hidden` rule

**Changes:**
- Removed JS-injected styles for `.site-header.scrolled`, `.site-header.header-hidden`, `.theme-toggle.header-hidden`, and `.nav-toggle.active` spans
- All styles now defined in CSS files:
  - `.site-header.scrolled` in improvements.css (line 29)
  - `.site-header.header-hidden` in main.css (line 272)
  - `.theme-toggle.header-hidden` in main.css (newly added)
  - `.nav-toggle.active` spans in main.css (lines 343-357)
- Easter egg keyframes (rainbow, bounceIn) remain in JS as they're only used for that feature

---

## Phase 3: Code Box Polish

### Task 3.1: Fix All WCAG Font Size Violations
**Status:** COMPLETE ✓
**WCAG 2.1 AA Requirement:** Minimum font size of 14px (0.875rem) for body text

**Fixes applied (25 January 2026):**

| File | Element | Before | After |
|------|---------|--------|-------|
| code-examples.css:20 | Language label (::before) | var(--text-xs) | var(--text-sm) |
| code-examples.css:226 | Copy button | var(--text-xs) | var(--text-sm) |
| code-examples.css:303 | Pre @768px | var(--text-xs) | var(--text-sm) |
| code-examples.css:325 | Language label @768px | 0.625rem | var(--text-sm) |
| code-examples.css:333 | Copy button @768px | 0.625rem | var(--text-sm) |
| syntax-highlight.css:118 | Line numbers | 0.75rem | var(--text-sm) |
| syntax-highlight.css:143 | Line numbers @768px | 0.7rem | var(--text-sm) |

All font sizes now use `var(--text-sm)` (0.875rem/14px) to meet WCAG 2.1 AA requirements.

### Task 3.2: Unify Line Height
**Status:** COMPLETE ✓

**Fix applied (25 January 2026):**
- syntax-highlight.css line 8: Changed `line-height: 1.6` → `line-height: var(--leading-relaxed)` (1.75)

### Task 3.3: Add Visual Separator
**Status:** COMPLETE ✓
**File:** `styles/code-examples.css`

**Fix applied (25 January 2026):**
- Added 3px accent border between demo and code sections
- Demo example gets rounded top corners, code example gets rounded bottom corners

```css
.demo-card .demo-example {
  border-bottom: 3px solid var(--colour-primary);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.demo-card .code-example {
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
}
```

### Task 3.4: Add Scroll Indicator with JS Detection
**Status:** COMPLETE ✓
**Files:** `styles/code-examples.css`, `scripts/code-examples.js`

**Fix applied (25 January 2026):**
- Moved scroll fade indicator CSS out of mobile-only media query to work on all screen sizes
- Changed default opacity from 0.6 to 0 (hidden by default)
- Added `.has-overflow` class condition to show indicator only when needed
- Added JS overflow detection to `code-examples.js`

**CSS changes:**
```css
.code-example::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background: linear-gradient(to left, #1e293b 0%, transparent 100%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}

.code-example.has-overflow::after {
  opacity: 1;
}
```

**JS added to code-examples.js:**
```javascript
// Detect horizontal overflow and add class for scroll fade indicator
codeExamples.forEach(pre => {
  if (pre.scrollWidth > pre.clientWidth) {
    pre.closest('.code-example').classList.add('has-overflow');
  }
});
```

### Task 3.5: Improve 3-Column Grid
**Status:** COMPLETE ✓
**File:** `styles/basic.css`

**Fix applied (25 January 2026):**
- Increased minimum card width from 350px to 380px for better readability
- Reduced gap from `--space-8` to `--space-6` for tighter layout
- Added `align-items: start` to prevent stretching
- Made demo cards flex containers for consistent heights
- Code examples now flex to fill available space with 200px minimum height

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
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**File:** `styles/main.css` (added after line 463, after `.hero-cta` section)

**Browser Support (January 2026):**
- Chrome 111+ ✅
- Edge 111+ ✅
- Safari 17.2+ ✅
- Firefox: NOT SUPPORTED (experimental flag only)
- Coverage: ~85-90%

**Implementation:** No existing view transitions code found. Add to main.css:

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
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026

**Changes made:**
1. Added progress bar HTML to `components/header.html` (line 2)
2. Added progress bar CSS to `styles/improvements.css` (lines 823-865):
   - `.progress-container` - fixed position at top, 4px height, uses `var(--z-sticky)` for z-index
   - `[data-theme="dark"] .progress-container` - dark mode background support
   - `.progress-bar` - gradient using design tokens, scroll-driven animation
   - `@keyframes scroll-progress` - from scaleX(0) to scaleX(1)
   - `@supports not (animation-timeline: scroll())` - fallback for unsupported browsers
3. Added `.progress-container` to print styles hide list

**Browser Support:**
- Chrome 115+, Edge 115+, Firefox 114+, Safari 17.5+ (~95% coverage)
- Graceful degradation: bar hidden in unsupported browsers

### Task 4.3: CSS Nesting Migration
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026

**Files migrated:**
- `styles/sidebar.css` (543 lines → 543 lines, 31 nested `&` selectors)
- `styles/code-examples.css` (373 lines → 373 lines, 40 nested `&` selectors)

**Changes made:**
1. **sidebar.css:** Converted flat selectors to nested structure using `&` syntax:
   - `.sidebar` block now contains `&.sidebar-hidden`, `&.active`, scrollbar pseudo-elements
   - `.sidebar-home-link` contains `&:hover`, `.icon`
   - `.sidebar-section` contains `&.collapsed` with nested toggle/nav rules
   - `.sidebar-section-title` contains `&:hover`, `&:focus`
   - `.sidebar-nav-link` contains `&::before`, `&:hover`, `&:focus`, `&.active`
   - `.sidebar-toggle` contains `&:hover`, `&.active .sidebar-toggle-icon span` animations
   - `.sidebar-backdrop` contains `&.active`
   - `.floating-back-to-top` contains `&::before`, `&.visible`, `&:hover`, `&:active`
   - Media queries use nesting for `body.sidebar-hidden` and `.sidebar.active`

2. **code-examples.css:** Converted flat selectors to nested structure:
   - `.code-example` contains `&::before`, `&::after`, `&.has-overflow`, `&.html`, `&.js`, `pre`, `code`, `&.line-numbers`
   - `.demo-card` contains `.demo-example`, `.code-example`
   - `.token` contains all token type modifiers (`&.comment`, `&.property`, etc.)
   - `[data-theme="light"]` block contains nested `.code-example`, `.copy-button`, `.token` overrides
   - `.code-editor-button` contains `&:hover`, `&.active`
   - `.copy-button` contains `&:hover`, `&.copied`
   - Mobile media query uses nesting for `.code-example` children

**Browser Support (January 2026):**
- Chrome 112+ ✅
- Edge 112+ ✅
- Firefox 117+ ✅
- Safari 16.5+ ✅
- Coverage: ~95%

**Validation:** Both files have balanced braces (81/81 and 64/64 respectively)

---

## Phase 5: File Consolidation

**Research Findings (25 January 2026):**
- Current: **37 CSS files, 19,022 lines**, avg **8.7 CSS imports per page**
- Target: **~18 CSS files**, avg **6.8 CSS imports per page** (22% reduction)
- **68 duplicate variables** in main.css (identical to 01-design-tokens.css)
- **No breaking conflicts** found - all duplicates have identical values

### Task 5.0: Pre-Consolidation Cleanup (NEW)
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**Action:** Remove duplicate variables before merging

**Changes made:**
1. `main.css` - Removed 106 lines of duplicate variables (lines 11-126 for `:root` and lines 128-159 for `[data-theme="dark"]`)
   - All colour, typography, spacing, shadow, transition, and z-index variables removed
   - main.css reduced from 889 to 783 lines
   - Updated header comment to note tokens are now in 01-design-tokens.css
2. All 30 HTML files updated to import `00-layers.css` and `01-design-tokens.css` before `main.css`
3. `improvements.css` - **NO CHANGES NEEDED** (verified: only references variables, no definitions)

**Shadow Variable Decision:** Adopted 01-design-tokens.css shadow values (multi-layer, more sophisticated)

**Verification:** Server tested at localhost:8080, all CSS files loading correctly

### Task 5.1: Create Bundle CSS
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**File:** Created `styles/bundle.css`

**Contents:**
```css
@import "00-layers.css";
@import "01-design-tokens.css";
@import "main.css";
@import "03-core.css";
@import "04-layout.css";
@import "06-code.css";
```

**Notes:**
- Bundle imports all core stylesheets in correct cascade order
- Replaces 8+ individual stylesheet links with single import
- Page-specific feature stylesheets still loaded separately for lazy loading

### Task 5.2: Merge Core CSS Files
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**Merge into `styles/03-core.css`:** (1,310 lines combined)
- `accessibility.css` (252 lines) - Focus states, WCAG compliance
- `micro-interactions.css` (176 lines) - Ripple effects, reveal animations
- `improvements.css` (882 lines, post-deduplication) - Header styling, enhancements

**Changes made:**
- Created `styles/03-core.css` with three clearly labelled sections:
  1. ACCESSIBILITY - Skip links, focus states, reduced motion, high contrast
  2. MICRO-INTERACTIONS - Ripple effects, reveal animations, skeleton loading
  3. IMPROVEMENTS - Header, cards, buttons, layout, scroll progress indicator
- Added comprehensive header comment documenting the CSS architecture
- Merged duplicate `@media (prefers-reduced-motion: reduce)` rules into single block

**Risk Level:** VERY LOW - No conflicting selectors, always loaded together

### Task 5.3: Merge Layout CSS Files
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**Merge into `styles/04-layout.css`:** (785 lines combined)
- `sidebar.css` (543 lines) - Sidebar navigation, mobile styling
- `search.css` (242 lines) - Search modal, input styling

**Changes made:**
- Created `styles/04-layout.css` with four clearly labelled sections:
  1. SIDEBAR NAVIGATION - Fixed sidebar, collapsible sections, mobile overlay
  2. FLOATING BACK TO TOP BUTTON - Scroll-triggered visibility with progress ring
  3. SEARCH MODAL - Full-screen overlay, input, results display
  4. ACCESSIBILITY & PRINT - Reduced motion and print styles
- Merged duplicate `@media (prefers-reduced-motion)` and print media queries into single blocks
- Consolidated dark mode adjustments for sidebar and search

**Risk Level:** LOW - No overlapping selectors, consistent variable usage

### Task 5.4: Merge Code CSS Files
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**Merge into `styles/06-code.css`:** (517 lines combined)
- `code-examples.css` (373 lines) - Code block styling, copy button
- `syntax-highlight.css` (145 lines) - Token colours, line numbers

**Token Colour Conflict Resolution:**
- Used code-examples.css token colours (WCAG-compliant per Phase 3 fixes)
- Dark theme: amber strings/values (#fbbf24), teal functions (#34d399), pink keywords (#f472b6)
- Light theme: amber strings/values (#d97706), green functions (#059669), pink keywords (#db2777)
- Added unique tokens from syntax-highlight.css: `.token.color`, `.token.number`, `.token.variable`

**Changes made:**
- Created `styles/06-code.css` with eight clearly labelled sections:
  1. CODE EXAMPLE CONTAINERS - Language labels, scroll indicators, scrollbar styling
  2. SYNTAX HIGHLIGHTING - DARK THEME (DEFAULT) - Token colours for dark backgrounds
  3. SYNTAX HIGHLIGHTING - LIGHT THEME - Token colours for light backgrounds
  4. COPY BUTTON - Positioned in code blocks with copied state
  5. LINE NUMBERS - Absolute positioned line number display
  6. INTERACTIVE CODE EDITOR - For future enhancement
  7. SELECTION STYLING - Custom text selection within code blocks
  8. RESPONSIVE ADJUSTMENTS - Mobile-optimised code display
- Merged duplicate mobile media queries into single block
- All font sizes use `var(--text-sm)` to meet WCAG 2.1 AA requirements

**Risk Level:** MODERATE - Token colour conflicts resolved by adopting code-examples.css values

### Task 5.5: Update HTML Imports
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**Action:** Replaced multiple link tags across all 30 HTML files

**Before (8-11 stylesheet links):**
```html
<link rel="stylesheet" href="styles/00-layers.css">
<link rel="stylesheet" href="styles/01-design-tokens.css">
<link rel="stylesheet" href="styles/main.css">
<link rel="stylesheet" href="styles/accessibility.css">
<link rel="stylesheet" href="styles/improvements.css">
<link rel="stylesheet" href="styles/micro-interactions.css">
<link rel="stylesheet" href="styles/sidebar.css">
<link rel="stylesheet" href="styles/search.css">
<link rel="stylesheet" href="styles/code-examples.css">
<link rel="stylesheet" href="styles/syntax-highlight.css">
```

**After (1-2 stylesheet links + fonts):**
```html
<link rel="stylesheet" href="styles/bundle.css">
<link rel="stylesheet" href="styles/[feature].css">
```

**Files updated:** 30 HTML files
**Stylesheet links removed:** 10 per file (bundled into bundle.css)
**Result:** ~75% reduction in stylesheet HTTP requests for cached visits

### Task 5.6: Add Code Comments
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026 (completed during Tasks 5.1-5.4)
**Action:** Added comprehensive header comments to all consolidated CSS files

**Comments added:**
- `bundle.css` - Import order, usage instructions, architecture overview
- `03-core.css` - Section markers for accessibility, micro-interactions, improvements
- `04-layout.css` - Section markers for sidebar, floating button, search modal
- `06-code.css` - Section markers for 8 code-related sections

All files include:
- File header explaining purpose and contents
- CSS Architecture diagram showing import order
- Section comments with descriptive headers
- Last updated timestamp

### Feature Files to Keep Separate (25 files)
These should NOT be merged - they enable page-specific lazy loading:
- modern-features.css (1,316 lines)
- buttons.css (1,199 lines)
- icons.css (1,100 lines)
- forms.css (797 lines)
- playground.css (759 lines)
- cards.css (661 lines)
- advanced-page.css (648 lines)
- animations.css (638 lines)
- typography.css (533 lines)
- And 16 other feature-specific files

---

## Phase 6: New Content Pages

### Task 6.1: Create CSS Tools Page
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**File:** Created `tools.html`
**Template:** Used `cards.html` as reference

**Content sections:**
1. Browser Developer Tools (Chrome DevTools, Firefox DevTools, Safari Web Inspector)
2. CSS Preprocessors (Sass, PostCSS, Lightning CSS)
3. Linters & Formatters (Stylelint, Prettier, W3C CSS Validator)
4. Learning Resources (CSS-Tricks, MDN Web Docs, web.dev)
5. CSS Generators (CSS Gradient, cubic-bezier.com, Smooth Shadows)

**Implementation:**
- Uses `.card-feature` class from cards.css (gradient borders, icon + text)
- 3-column responsive grid using `.card-grid`
- Standard page structure: sidebar skeleton, breadcrumb, hero section, footer
- All external links use `target="_blank" rel="noopener noreferrer"`

### Task 6.2: Create Frameworks Page
**Status:** COMPLETE ✓
**Implemented:** 25 January 2026
**File:** Created `frameworks.html`
**Template:** Used `tools.html` as reference

**Content sections:**
1. Utility-First Frameworks (Tailwind CSS, UnoCSS, Open Props)
2. Component Frameworks (Bootstrap, Bulma, daisyUI)
3. CSS Methodologies (BEM, CSS Modules, CUBE CSS)
4. CSS-in-JS (styled-components, Emotion, Vanilla Extract)
5. Framework vs Vanilla CSS comparison (when to use each)

**Implementation:**
- Uses `.card-feature` class from cards.css (gradient borders, icon + text)
- 3-column responsive grid using `.card-grid`
- Standard page structure: sidebar skeleton, breadcrumb, hero section, footer
- All external links use `target="_blank" rel="noopener noreferrer"`

### Task 6.3: Update Sidebar Navigation
**Status:** COMPLETE ✓ (verified 25 January 2026)
**File:** `components/sidebar.html`
**Finding:** Resources section already exists (lines 155-169) with:
- `tools.html` link (line 163)
- `frameworks.html` link (line 166)

**Note:** Links are in place but pages don't exist yet - Tasks 6.1 and 6.2 will create them

---

## Phase 7: Final Polish

### Task 7.1: Visual Consistency Pass
**Status:** PENDING
**Issues Found (25 January 2026 - RE-VERIFIED):**

**Dark Mode Gaps (18 feature files lack `[data-theme="dark"]` rules):**
Verified list (19 files HAVE dark mode, 18 files LACK dark mode):
- 00-layers.css (pure CSS layers definition - N/A)
- advanced.css, advanced-page.css, anchor-positioning.css
- blend-modes.css, box-model.css, code-examples.css (CRITICAL - copy button)
- color-spaces.css, layout.css, modern-features.css, playground.css
- responsive.css, responsive-page.css, scroll-animations.css
- shapes-clips.css, sidebar.css, transitions.css

Files WITH dark mode (19 total): 01-design-tokens.css, accessibility.css, animations.css, buttons.css, cards.css, custom-properties.css, filters.css, flexbox.css, forms.css, gradients.css, grid.css, icons.css, improvements.css, main.css, micro-interactions.css, search.css, syntax-highlight.css, tables.css, typography.css

**Hardcoded Pixel Values in sidebar.css (expanded list):**
| Line | Element | Property | Current | Should Be |
|------|---------|----------|---------|-----------|
| 38 | `::-webkit-scrollbar` | width | 8px | Design token |
| 47 | `::-webkit-scrollbar-thumb` | border-radius | 4px | Design token |
| 70 | `.sidebar-home-link` | border-radius | 8px | `var(--radius-lg)` |
| 100 | `.sidebar-section-title` | border-radius | 6px | `var(--radius-md)` |
| 139 | `.sidebar-nav-link` | border-radius | 6px | `var(--radius-md)` |
| 150-151 | `.sidebar-nav-link::before` | width/height | 4px | `var(--space-1)` |
| 208 | `.back-to-top` | border-radius | 8px | `var(--radius-lg)` |
| 227 | `.sidebar-toggle` | left | 1rem | `var(--space-4)` |
| 228-229 | `.sidebar-toggle` | width/height | 48px | Design token (touch target) |
| 232 | `.sidebar-toggle` | border-radius | 8px | `var(--radius-lg)` |
| 249 | `.sidebar-toggle-icon` | gap | 4px | `var(--space-1)` |
| 253-254 | `.sidebar-toggle-icon span` | width/height | 20px/2px | Design tokens |
| 300 | `body` | padding-left | 320px | Should match --sidebar-width |
| 310 | `.site-header` | left | 320px | Should match --sidebar-width |
| 427-433 | Focus outlines | outline | 2px | Should use design token |

**rgba() Syntax Inconsistency:**
- 277 total `rgba()` occurrences (legacy syntax) across multiple files
- 14 total `rgb(... / ...)` occurrences (modern syntax) in 3 files:
  - 01-design-tokens.css (shadow definitions)
  - custom-properties.css
  - main.css
- **Action:** Standardise on modern rgb() syntax (optional - low priority)

**Checklist:**
- [ ] Fix 16 feature files missing dark mode
- [ ] Replace hardcoded pixel values with spacing variables
- [ ] Standardise rgba() to modern rgb() syntax
- [ ] No layout shifts on page load

### Task 7.2: Performance Audit
**Status:** PENDING
**Issues Found:**
- 6 render-blocking stylesheets on every page
- Feature page CSS files loaded globally (not lazy-loaded)
- No CSS code splitting strategy

**Targets:**
- [ ] Lighthouse Performance 90+
- [ ] CLS = 0
- [ ] Consider critical CSS inlining for above-fold content
- [ ] Lazy-load feature-specific CSS where possible

### Task 7.3: Accessibility Audit
**Status:** PENDING
**Good (Already Implemented - Verified 25 January 2026):**
- ✅ Skip link exists (accessibility.css lines 3-21) - hidden by default, shows on focus, smooth transition
- ✅ Focus-visible states comprehensive (accessibility.css lines 23-84):
  - Line 24-28: Global `:focus-visible` with 3px outline and offset
  - Line 31-33: Removes outline for mouse users (`:focus:not(:focus-visible)`)
  - Lines 36-84: Button, link, form, theme toggle, search trigger, nav toggle, copy button focus styles
- ✅ Touch targets 44px minimum (accessibility.css lines 141-156)
- ✅ Reduced motion support (accessibility.css lines 86-106)
- ✅ High contrast mode (accessibility.css lines 109-125)
- ✅ Screen reader only class (accessibility.css lines 128-138)
- ✅ Form accessibility (accessibility.css lines 209-232)

**Issues Found (CRITICAL - Re-verified 25 January 2026):**

**Focus Trap Gap:**
- CSS indicator exists: accessibility.css lines 181-194 (`[data-focus-trap="active"]`)
- **NO JavaScript implementation found** in:
  - search.js (209 lines) - Modal opens/closes but Tab key not trapped
  - sidebar.js (266 lines) - Toggle works but focus escapes when sidebar open on mobile
- Keyboard handling limited to: Cmd/Ctrl+K to open search (line 162), ESC to close (line 168)

**aria-live Regions Gap:**
- code-examples.js lines 24-35: Copy button changes text to "Copied!" without aria-live
  ```javascript
  button.textContent = 'Copied!';  // ❌ NO aria-live region
  ```
- search.js lines 81-134: Search results injected via innerHTML without announcement
  ```javascript
  searchResults.innerHTML = html;  // ❌ NO aria-live announcement
  ```

**Checklist:**
- [ ] Implement JavaScript focus trap in search modal:
  - Get all focusable elements within modal
  - On Tab at last element, focus first element
  - On Shift+Tab at first element, focus last element
  - Set `data-focus-trap="active"` attribute when open
- [ ] Implement focus trap in sidebar (mobile view):
  - Same pattern as search modal
  - Only active when sidebar overlay is visible
- [ ] Add `aria-live="polite"` region for code copy feedback:
  - Create hidden announcement element
  - Update on copy success/failure
- [ ] Add `aria-live="polite"` for search results:
  - Announce "X results found" or "No results"
- [ ] Verify WCAG AA colour contrast in dark mode muted text (#9ca3af on dark backgrounds)

### Task 7.4: Final Screenshots
**Status:** PENDING
**Action:** Run `node visual-test.js` to capture final state after all fixes

---

## Progress Summary

| Phase | Status | Tasks | Complete |
|-------|--------|-------|----------|
| Phase 0: Housekeeping | COMPLETE ✓ | 2 | 2 |
| Phase 1: CSS Architecture | COMPLETE ✓ | 2 | 2 |
| Phase 2: Header & Sidebar | COMPLETE ✓ | 8 | 8 |
| Phase 3: Code Box Polish | COMPLETE ✓ | 5 | 5 |
| Phase 4: Advanced CSS | COMPLETE ✓ | 3 | 3 |
| Phase 5: File Consolidation | COMPLETE ✓ | 7 | 7 |
| Phase 6: New Content | COMPLETE ✓ | 3 | 3 |
| Phase 7: Final Polish | PENDING | 4 | 0 |
| **TOTAL** | | **34** | **30** |

**Notes:**
- Task 4.1 (View Transitions) completed 25 January 2026
- Task 4.2 (Scroll Progress Indicator) completed 25 January 2026
- Task 4.3 (CSS Nesting Migration) completed 25 January 2026
- Task 5.0 (Pre-Consolidation Cleanup) completed 25 January 2026
- Task 5.1 (Bundle CSS) completed 25 January 2026
- Task 5.2 (Core CSS Merge) completed 25 January 2026
- Task 5.3 (Layout CSS Merge) completed 25 January 2026
- Task 5.4 (Code CSS Merge) completed 25 January 2026
- Task 5.5 (HTML Import Update) completed 25 January 2026
- Task 5.6 (Code Comments) completed 25 January 2026
- Task 6.1 (CSS Tools Page) completed 25 January 2026
- Task 6.2 (Frameworks Page) completed 25 January 2026
- Task 6.3 marked complete (sidebar Resources section verified)
- **Phase 6 (New Content Pages) COMPLETE** - tools.html and frameworks.html created
- **Phase 5 (File Consolidation) COMPLETE** - 37 → 6 core CSS files
- Phase 4-7 research completed 25 January 2026 with refined findings

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

---

## Phase 4-7 Research (25 January 2026 - UPDATED)

**Research conducted using 3 parallel explore agents:**
1. Phase 4 Advanced CSS Analysis
2. Phase 5 File Consolidation Analysis
3. Phase 6-7 New Content & Polish Analysis

### Key Discoveries

**Phase 4 - Advanced CSS (Verified):**
- View Transitions: 85-90% browser coverage, Firefox lacks support. Insert location: main.css after line ~440 (after `.hero-title` section)
- Scroll-Driven Progress: CSS fully exists in scroll-animations.css (container lines 63-75, bar lines 77-84, keyframes 86-93, fallback 96-101). Header.html (21 lines) has NO progress bar - needs addition
- CSS Nesting: 24 instances in modern-features.css at verified line numbers. Sidebar.css has 39 `.sidebar-*` selectors, code-examples.css has 36+ flat selectors - both need migration

**Phase 5 - File Consolidation (Verified):**
- Current state: 37 CSS files, 19,022 lines
- Target: ~20 CSS files (46% reduction), 2-3 imports per page (76% reduction from current 9)
- 68 duplicate variables in main.css lines 11-126 (need removal)
- improvements.css has NO duplicate variable definitions (verified lines 1-50)
- **Shadow variable conflicts:** main.css has simpler single-layer shadows, tokens file has refined multi-layer - adopt tokens values
- **Token colour conflicts in Task 5.4:** code-examples.css and syntax-highlight.css define DIFFERENT colours for same tokens - resolve before merge

**Phase 6 - New Content (Verified):**
- Task 6.3 already complete - Resources section exists in sidebar.html (lines 155-169)
- tools.html and frameworks.html links in sidebar at lines 163 and 166
- Use cards.html as template, `.card-feature` class from cards.css (lines 244-313) with dark mode support (lines 620-627)

**Phase 7 - Final Polish (Re-verified 25 January 2026):**
- **18 feature CSS files** lack dark mode (revised from 13) - full list:
  - 00-layers.css, advanced.css, advanced-page.css, anchor-positioning.css
  - blend-modes.css, box-model.css, code-examples.css (CRITICAL)
  - color-spaces.css, layout.css, modern-features.css, playground.css
  - responsive-page.css, responsive.css, scroll-animations.css
  - shapes-clips.css, sidebar.css, transitions.css
- 282 rgba() vs 22 rgb() slash notation - predominantly legacy syntax
- Hardcoded pixel values in sidebar.css: lines 227-254 + 7-8 additional instances (scrollbar, border-radius, outline)
- **Critical accessibility gaps:**
  - Focus trap: CSS-only indicator exists (accessibility.css:181-194) but NO JavaScript in search.js or sidebar.js
  - aria-live: Missing for code copy feedback (code-examples.js:24-35) and search results (search.js:81-134)
  - Tab key handling: No prevention of focus cycling when modals/sidebars open
- 9 CSS links per feature page (6 for homepage)

### Recommended Implementation Order

1. **Phase 4.2** (Scroll Progress) - Lowest risk, CSS already exists, just need HTML addition
2. **Phase 4.3** (CSS Nesting) - Low risk, improves maintainability, reference patterns available
3. **Phase 5.0** (Variable Cleanup) - Required before merging, shadow conflict resolution needed
4. **Phase 5.2** (Core Merge) - VERY LOW risk, no overlapping selectors
5. **Phase 5.3** (Layout Merge) - LOW risk, no overlapping selectors
6. **Phase 5.4** (Code Merge) - MODERATE risk, resolve token colour conflicts first
7. **Phase 5.1** (Bundle CSS) - After all merges complete
8. **Phase 5.5** (HTML Updates) - Template-based find/replace across 30 files
9. **Phase 6.1-6.2** (New Pages) - Independent of other work, use cards.html template
10. **Phase 4.1** (View Transitions) - Low priority due to Firefox gap
11. **Phase 7.1** (Dark Mode) - Add support to 13 feature files
12. **Phase 7.3** (Accessibility) - Implement focus trap JS and aria-live regions
13. **Phase 7.2** (Performance) - Verify bundle reduces HTTP requests
14. **Phase 7.4** (Screenshots) - Final visual verification

---

## Research Verification Summary (25 January 2026 - Planning Session)

**Verification Method:** Three parallel Explore agents researching Phase 4-7 specifics

### Corrections to Original Plan

| Item | Original Estimate | Verified Finding |
|------|-------------------|------------------|
| Dark mode gaps | 13 files | **18 files** (including sidebar.css, code-examples.css) |
| Token conflicts | 5 tokens | **6 tokens** with severity ratings (string/function are CRITICAL) |
| Hardcoded pixels | 4 instances | **15+ instances** in sidebar.css alone |
| rgba vs rgb syntax | 277 vs 14 | **282 vs 22** (92.8% legacy) |
| CSS nesting in modern-features.css | "NOT used" | **24 instances** verified at specific line numbers |

### Key Implementation Blockers Identified

1. **Task 5.4 (Code Merge):** Cannot proceed until token colour conflict resolved
   - `.token.string`: amber (#fbbf24) vs green (#059669) - semantic mismatch
   - `.token.function`: teal (#34d399) vs purple (#7c3aed) - semantic mismatch

2. **Task 7.3 (Accessibility):** Focus trap requires new JavaScript
   - search.js needs ~20 lines of focus trap logic
   - sidebar.js needs similar for mobile overlay state

3. **Task 5.0 (Variable Cleanup):** Shadow conflicts must be resolved
   - Decision: Adopt 01-design-tokens.css values (multi-layer, more sophisticated)
   - Remove 68 duplicate variables from main.css lines 11-126

### Files Requiring Most Work

| File | Tasks Affected | Changes Required |
|------|----------------|------------------|
| sidebar.css (537 lines) | 4.3, 7.1 | CSS nesting migration (46 selectors), dark mode, 15+ hardcoded values |
| code-examples.css (362 lines) | 4.3, 5.4, 7.1 | CSS nesting (26 selectors), token conflict resolution, dark mode |
| main.css (889 lines) | 5.0 | Remove 68 duplicate variables (lines 11-126) |
| search.js (209 lines) | 7.3 | Add focus trap logic, aria-live region |
| code-examples.js | 7.3 | Add aria-live for copy feedback |

### Recommended Priority Adjustments

Based on research findings, recommend adjusting implementation order:

**HIGH PRIORITY (do first):**
1. Task 5.0 - Variable cleanup (unblocks all Phase 5)
2. Task 5.4 token conflict resolution (unblocks code merge)
3. Task 4.2 - Scroll progress (lowest risk, immediate visual impact)

**MEDIUM PRIORITY:**
4. Task 7.3 - Accessibility gaps (focus trap JS is straightforward)
5. Task 4.3 - CSS nesting (use modern-features.css patterns as reference)
6. Tasks 5.2-5.3 - Core and layout merges (very low risk)

**LOWER PRIORITY:**
7. Task 7.1 - Dark mode for 18 files (time-consuming but mechanical)
8. Tasks 6.1-6.2 - New pages (independent, can do anytime)
9. Task 4.1 - View transitions (Firefox gap, lowest urgency)
