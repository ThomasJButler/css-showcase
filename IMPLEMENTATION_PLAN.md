# CSS Showcase - Implementation Plan

**Last Updated:** 7 February 2026
**Status:** Phase 15 - Site-Wide Polish Complete

### Implementation Note

All frontend implementation (HTML/CSS/JS) must use the `/frontend-design` skill. Invoke it before writing any frontend code to ensure production-grade, distinctive design output.

---

## Phase 14: Dark Mode & Consistency Fix

**Goal:** Fix critical dark mode failures (white-background demo sections on multiple pages) and address cross-page consistency issues identified through a thorough desktop/mobile/dark-mode screenshot audit.

### Task 14.1: Dark Mode — Layout Page Demo Sections
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `layout.html`, `styles/improvements.css`

**Issue:** The Layout Techniques page has multiple large demo sections with stark white backgrounds that are completely unthemed in dark mode. At least 4-5 demo blocks (Grid-ish, Centering, Fixed Layout, Multi-Column, Stacking Context) render as bright white rectangles against the dark page background. This is the worst dark mode offender.

**Fix:** Add `[data-theme="dark"]` overrides for all demo containers on the Layout page. Set backgrounds to `var(--surface-secondary)` or similar dark surface colour. Ensure text and borders within demos are also properly themed.

---

### Task 14.2: Dark Mode — Advanced CSS Page Demo Sections
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `advanced.html`, `styles/advanced-page.css`, `styles/improvements.css`

**Issue:** Nearly every interactive demo section on the Advanced CSS page retains a white/light-grey background in dark mode. Affected sections: Modern Complex Selectors, Pseudo-elements Deep Dive, Attribute Selectors, Combinators & Relationship Selectors, Understanding & Managing Specificity. It is essentially a light-mode page inside a dark shell.

**Fix:** Add dark mode backgrounds to all `.demo-*` containers on this page. Ensure code examples, coloured badges, and social media icon demos are all visible against dark backgrounds.

---

### Task 14.3: Dark Mode — Transitions & Custom Properties Demos
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `transitions.html`, `custom-properties.html`, `styles/improvements.css`

**Issue:** Transitions page has white timing function demo bars/strips. Custom Properties page has white demo panels in the Theming Use Case, Advanced Patterns (colour swatches), and Browser Support sections. Both pages have demo containers that were never given dark mode styles.

**Fix:** Add `[data-theme="dark"]` backgrounds to demo containers on both pages. Ensure timing function visualisations, colour swatch panels, and browser support tables are properly themed.

---

### Task 14.4: Dark Mode — Warning Boxes & Info Panels
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `styles/improvements.css`, affected pages (responsive.html, anchor-positioning.html, blend-modes.html, color-spaces.html)

**Issue:** Several pages have bright yellow/amber warning boxes and white info panels that are extremely jarring in dark mode. The Responsive page has a bright yellow "Resize your browser" banner. The Anchor Positioning page has a bright yellow "Cutting Edge Feature" box. Blend Modes and Color Spaces pages have white panels for logo compositing and colour swatch demos.

**Fix:** Create dark mode variants for all warning/info box styles. Replace bright yellow with a muted amber/dark gold. Give swatch and logo demo panels dark backgrounds. Ensure all info panels have appropriate dark mode contrast.

---

### Task 14.5: Sidebar Navigation Consistency
**Status:** COMPLETE (verified: all 31 pages use dynamic sidebar via component-loader.js)
**Priority:** HIGH
**Files:** Content pages (HTML), `styles/04-layout.css`, `styles/improvements.css`

**Issue:** Roughly half the pages have a left sidebar navigation (index, basic, flexbox, grid, cards, icons, animations, etc.) while the other half use only a top horizontal navigation bar (layout, responsive, transitions, advanced, custom-properties, blend-modes, color-spaces, shapes-clips, filters). This creates an inconsistent navigation experience and different content widths across pages.

**Fix:** Ensure all content pages include the sidebar navigation component. This may require adding the sidebar include to pages that currently lack it, and adjusting the main content area width to be consistent.

---

### Task 14.6: On This Page Nav — Footer Overlap
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `scripts/page-nav.js`, `styles/improvements.css`

**Issue:** Despite Phase 13 fix, the "On This Page" floating navigation still appears at the bottom of multiple pages overlapping or sitting below the footer. Visible on desktop (flexbox, grid, frameworks, gradients) and on mobile (grid page, despite being hidden via CSS media query — suggesting JS renders it in a way that bypasses the CSS).

**Fix:** Add an IntersectionObserver for the footer element that hides the page-nav when the footer is visible. Ensure the JS-rendered element respects the CSS `display: none` at mobile widths. Verify on all affected pages.

---

### Task 14.7: Homepage Section Spacing & Density
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `index.html`, `styles/improvements.css`

**Issue:** On both desktop (1920px) and mobile (375px), the homepage has excessive vertical whitespace between category sections. The hero section alone consumes the full mobile viewport. Category link pills have very small text that is hard to scan on desktop and may have touch targets below 44px on mobile.

**Fix:** Reduce section padding/margin on mobile. Compact the hero section height on small screens. Increase pill link font size and add `min-height: 44px` for mobile touch targets. Reduce vertical gaps between Fundamentals, Layout Mastery, Advanced Techniques, and Modern CSS sections.

---

### Task 14.8: Dark Mode — Form, Table & Box-Model Borders
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `styles/improvements.css`, `styles/tables.css`, `styles/forms.css`

**Issue:** In dark mode, form input field borders are nearly invisible (blend into dark background), table row separator borders are too faint, and interactive controls on the Box Model page have very low-contrast borders. Users struggle to identify where input fields are.

**Fix:** Increase border opacity/lightness in dark mode. Use `var(--border)` values that are at least `#475569` (slate-600) or lighter. Ensure table row borders, form input borders, and range slider tracks are clearly visible in dark mode.

---

### Task 14.9: Code Block Width & Overflow
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `styles/code-examples.css`, `styles/improvements.css`

**Issue:** On desktop, code blocks in multi-column layouts have text that is truncated/clipped at the right edge (visible on Basic CSS page). On mobile, many pages have extremely long code blocks that extend far past 375px with only a subtle fade gradient as a scroll indicator. The gradient is too subtle to indicate scrollability.

**Fix:** Ensure code blocks in multi-column layouts have proper `overflow-x: auto` with visible scroll indicators. On mobile, add a more prominent scroll shadow/gradient indicator (wider, more opaque) or a "scroll for more" hint. Consider reducing code font size or wrapping on narrow viewports.

---

### Task 14.10: Mobile Table Overflow Refinement
**Status:** COMPLETE
**Priority:** LOW
**Files:** `styles/tables.css`, `styles/improvements.css`

**Issue:** Despite Phase 13 table overflow fix, the Tables page still shows tables extending beyond 375px mobile width. Table headers are cramped and it is not obvious the table scrolls horizontally. Status badges ("Active", "Inactive") are very small on mobile.

**Fix:** Ensure all tables on the Tables page are wrapped in a `.table-wrapper` with `overflow-x: auto`. Add a visible scroll shadow indicator on the right edge. Increase status badge minimum size. Consider converting some tables to a stacked card layout on mobile for better readability.

---

## Phase 15: Site-Wide Polish — Theme Toggle, Back-to-Top, Header/Footer Consistency

**Goal:** Fix theme toggle visibility in dark mode, correct back-to-top button selector, and polish header/footer dark mode consistency.

### Task 15.1: Fix Theme Toggle Icon Visibility
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `styles/main.css`

**Fix:** Added explicit `color: var(--colour-text)` to `.theme-toggle` so SVG `stroke="currentColor"` inherits the correct colour. Added `[data-theme="dark"]` override with visible border colour (`#475569`).

---

### Task 15.2: Fix Back-to-Top Button Dark Mode Selector
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `styles/sidebar.css`

**Fix:** Changed `.dark .floating-back-to-top` to `[data-theme="dark"] .floating-back-to-top` to match the site's theme attribute convention.

---

### Task 15.3: Header Polish
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `styles/improvements.css`, `styles/03-core.css`, `styles/04-layout.css`

**Fix:** Increased dark mode header bottom border opacity from `0.08` to `0.12`. Added `[data-theme="dark"] .sidebar-toggle` border override (`#475569`) for visible hamburger button border.

---

### Task 15.4: Footer Polish
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `styles/improvements.css`

**Fix:** Added `[data-theme="dark"] .site-footer { border-top-color: #475569; }` for visible footer separation. Brightened `.footer-copyright` text in dark mode to `#b0b8c4`.

---

## Progress Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phases 0-11 | COMPLETE | 62 tasks |
| Phase 12 | COMPLETE | 5/5 complete |
| Phase 13 | COMPLETE | 10/10 complete |
| Phase 14 | COMPLETE | 10/10 complete |
| **Phase 15** | **COMPLETE** | **4/4 complete** |

---

## Archive Reference

Previous phases completed 25 January - 7 February 2026:
- Phases 0-8: Core implementation (38 tasks)
- Phase 9: Visual review passed (46/50 score)
- Phase 10: Organisation & readability (6 tasks)
- Phase 11: Review feedback & polish (18 tasks)
- Phase 12: Final UX polish (5 tasks)
- Phase 13: Visual audit polish (10 tasks)
- Phase 14: Dark mode & consistency fix (10 tasks)

Full history available in git commit log.
