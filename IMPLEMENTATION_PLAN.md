# CSS Showcase - Implementation Plan

**Last Updated:** 26 January 2026
**Status:** Phase 10 COMPLETE

---

## Phase 10: Project Organisation & Readability

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
| **Phase 10** | **COMPLETE** | **6 tasks** |

---

## Design Principles for Phase 10

### Readability First

> "Don't make me think." - Steve Krug

- Users should understand a demo in 3 seconds
- Code is secondary to the visual result
- Hide complexity until requested

### Scannable Content

- Bold headings that describe the demo
- One-sentence descriptions maximum
- Visual grouping over text grouping
- White space guides the eye

### Beautiful in Both Themes

- Neither theme should feel like an afterthought
- Dark mode for extended use (coding)
- Light mode for quick reference
- Both should feel premium

---

## Archive Reference

Previous phases completed 25-26 January 2026:
- Phases 0-8: Core implementation (38 tasks)
- Phase 9: Visual review (no changes needed)
- Phase 10: Organisation & readability (6 tasks) - 26 January 2026

Full history: `docs/IMPLEMENTATION_HISTORY.md`
