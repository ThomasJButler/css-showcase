# CSS Showcase - Implementation Plan

**Last Updated:** 26 January 2026
**Status:** Phase 11 IN PROGRESS - Review Feedback & Polish

## Phase 9 Visual Review: PASSED (46/50)

Visual assessment completed 26 January 2026. Score breakdown:
- Visual Impact: 10/10
- Depth & Dimension: 8/10
- Motion & Delight: 8/10
- Typography & Space: 10/10
- Polish & Consistency: 10/10

The showcase achieves "stunning minimalism" - elegant, polished, and premium across all pages and both themes.

---

Visual testing file is now tools/visual-test.js

## Phase 11: Review Feedback & Polish

Comprehensive review identified 18 issues to address. Tasks organised by priority.

### Critical Priority

#### Task 11.1: Fix Hide Code Button Functionality
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `styles/bundle.css`

**Issue:** The "View Code" / "Hide Code" toggle button changes text but does NOT actually hide the code block.

**Root Cause:** `code-examples.css` (containing `.code-example.collapsed { display: none; }`) was not imported into `bundle.css`, so the CSS rule was never loaded.

**Fix:** Added `@import "code-examples.css";` to `styles/bundle.css`. Now all pages load the collapsible code functionality CSS.

---

#### Task 11.2: Increase Header Height & Visual Weight
**Status:** COMPLETE
**Priority:** CRITICAL
**Files:** `styles/main.css`

**Issue:** Header is too small/minimal (currently ~45px). Only shows "CSS Showcase" text + theme toggle.

**Fix Applied:**
- Increased header height from 56px to 64px
- Added `{ }` CSS icon before logo text (using ::before pseudo-element)
- Increased logo font size from `--text-lg` to `--text-xl`
- Changed font weight from `--font-semibold` to `--font-bold`
- Added subtle letter-spacing for better readability

---

### High Priority

#### Task 11.3: Add Section Dividers on Homepage
**Status:** PENDING
**Priority:** HIGH
**Files:** `index.html`, `styles/improvements.css`

**Issue:** No visual dividers between major content sections. Transitions between "Fundamentals," "Layout Mastery," "Advanced Techniques," and "Modern CSS" feel abrupt.

**Fix:** Add horizontal rules, subtle gradient separators, or increased whitespace (80-100px margin) between major sections.

---

#### Task 11.4: Fix Code Block Truncation in Card Layouts
**Status:** PENDING
**Priority:** HIGH
**Files:** `styles/code-examples.css`, `cards.html`

**Issue:** On the Cards page, code blocks display side-by-side and code is horizontally cut off (visible truncation of CSS property text).

**Fix:** Either ensure container is wide enough, add horizontal scrolling, or reduce columns for code blocks.

---

#### Task 11.5: Consistent Section Spacing
**Status:** PENDING
**Priority:** HIGH
**Files:** `styles/improvements.css`

**Issue:** Hero section flows directly into "Fundamentals" with no clear break. Spacing between section header and content varies across pages.

**Fix:** Add consistent spacing after hero and between all major sections.

---

### Medium Priority

#### Task 11.6: Copy Button on All Code Blocks
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `scripts/code-examples.js`, `styles/code-examples.css`

**Issue:** Some code blocks have a "Copy" button but placement is inconsistent.

**Fix:** Ensure every code block has:
- A "View Code" toggle
- A "Copy" button
- A language label (CSS/HTML)

---

#### Task 11.7: Standardise Emoji Usage
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `index.html`

**Issue:** "Advanced Techniques" button has a 🚀 emoji, other CTA buttons don't.

**Fix:** Either use emojis consistently across all major CTAs or remove them entirely.

---

#### Task 11.8: Move Back to Top Button
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `styles/improvements.css`

**Issue:** Back to Top button appears in bottom-left corner.

**Fix:**
- Move to bottom-right (more conventional)
- Add smooth scroll animation
- Ensure it doesn't overlap sidebar on smaller viewports

---

#### Task 11.9: Sidebar Active State Enhancement
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `styles/03-core.css`

**Issue:** Active page has blue background but could have stronger visual feedback.

**Fix:** Add left-border accent for the active item.

---

#### Task 11.10: Fix Hero Gradient Bleed
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `styles/improvements.css`

**Issue:** Hero gradient bleeds slightly into sidebar area (visible at left edge).

**Fix:** Add proper left boundary to contain the gradient.

---

### Low Priority

#### Task 11.11: Standardise Card Shadows
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/improvements.css`

**Issue:** Some cards have shadows, others appear flat.

**Fix:** Standardise shadow treatment across all cards.

---

#### Task 11.12: Theme Toggle Animation
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/improvements.css`

**Issue:** Sun/moon icon toggle works but lacks smooth rotation or transition animation.

**Fix:** Add rotation/fade transition to theme toggle.

---

#### Task 11.13: Form Input Focus States
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/03-core.css`

**Issue:** Forms page looks excellent but ensure all inputs across site have consistent focus ring styling.

**Fix:** Standardise outline or box-shadow focus states.

---

#### Task 11.14: Link Underline Consistency
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/03-core.css`

**Issue:** Some text links have underlines on hover, others don't.

**Fix:** Pick a pattern and apply consistently.

---

#### Task 11.15: Light Mode Contrast Check
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/01-design-tokens.css`

**Issue:** In light mode, some muted descriptions appear low-contrast.

**Fix:** Bump up darkness of grey text.

---

#### Task 11.16: Verify Playground Link
**Status:** PENDING
**Priority:** LOW
**Files:** `index.html`, footer on all pages

**Issue:** "Playground" link in footer Quick Links - does that page exist?

**Fix:** Verify link works or remove if page doesn't exist.

---

#### Task 11.17: Page Title Tags
**Status:** PENDING
**Priority:** LOW
**Files:** All HTML files

**Issue:** Some pages showed as "localhost:8080/gradients.html" before loading.

**Fix:** Ensure all pages have proper `<title>` tags.

---

#### Task 11.18: Breadcrumb Visual Transition
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/03-core.css`

**Issue:** Homepage has no breadcrumb, subpages do. Transition is abrupt.

**Fix:** Improve visual transition consistency.

---

## Phase 10: Project Organisation & Readability (COMPLETE)

Focus on making the showcase easy to scan, absorb, and learn from. Both themes should be beautiful and functional.

### Task 10.1: Collapsible Code Blocks
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `styles/code-examples.css`, `scripts/code-examples.js`

**Goal:** Hide code by default, show "View Code" button. Users click to expand.

**Implementation:**
- Added `.code-toggle` button styling with hover states and focus-visible
- Added `.collapsed` state for code examples
- JavaScript dynamically adds toggle buttons to all demo cards
- Toggle buttons include accessible `aria-expanded` and `aria-controls` attributes
- Light and dark theme support for toggle button

---

### Task 10.2: Theme Readability Audit
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `styles/01-design-tokens.css`

**Goal:** Ensure both light and dark themes are beautiful and easy to read.

**Changes Made:**
- Light theme background: `#fafafa` (softer than pure white)
- Light theme text: `#1f2937` (softer than pure black)
- Light theme text-secondary: `#4b5563` (improved contrast)
- Dark theme text: `#e2e8f0` (reduced eye strain)
- Dark theme text-secondary: `#cbd5e1` (better contrast)
- All colours meet WCAG AA 4.5:1 contrast ratio

---

### Task 10.3: Information Hierarchy
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `styles/improvements.css`

**Goal:** Make content easy to scan and absorb quickly.

**Improvements:**
- Section titles now have gradient underline accent
- Visual separator between demo sections (border + spacing)
- Improved demo grid spacing
- Demo card title and description hierarchy styles

---

### Task 10.4: Project File Organisation
**Status:** COMPLETE
**Priority:** MEDIUM

**Changes Made:**
- Created `tools/` directory for build/dev utilities
- Moved `visual-test.js` to `tools/`
- Moved `measure-heights.js` to `tools/`
- Moved `loop.sh` to `tools/`
- Moved `loop-full.sh` to `tools/`

---

### Task 10.5: Consistent Demo Card Layout
**Status:** COMPLETE
**Priority:** MEDIUM
**Files:** `styles/03-core.css`

**Goal:** Every demo card should follow the same pattern.

**Changes Made:**
- Updated `.demo-card` with design token spacing
- Added `.demo-header` styling for title/description wrapper
- Updated `.demo-title` with proper typography tokens
- Added `.demo-description` styling with muted text
- Improved `.demo-example` styling with proper spacing

---

### Task 10.6: Reading Flow Optimisation
**Status:** COMPLETE
**Priority:** LOW
**Files:** `styles/improvements.css`

**Goal:** Optimise for comfortable reading and scanning.

**Changes Made:**
- Descriptions limited to `max-width: 65ch` for optimal reading
- Body line-height set to 1.6 for comfortable reading
- Headings use tighter 1.2 line-height
- Lead paragraphs styled with larger size and relaxed spacing
- Demo sections have generous `margin-top: var(--space-12)` between them

---

## Progress Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phases 0-8 | COMPLETE | 38 tasks |
| Phase 9 | COMPLETE | Visual review passed |
| Phase 10 | COMPLETE | 6 tasks |
| **Phase 11** | **IN PROGRESS** | **18 tasks** |

---

## Archive Reference

Previous phases completed 25-26 January 2026:
- Phases 0-8: Core implementation (38 tasks)
- Phase 9: Visual review (no changes needed)
- Phase 10: Organisation & readability (6 tasks) - 26 January 2026

Full history: `docs/IMPLEMENTATION_HISTORY.md`
