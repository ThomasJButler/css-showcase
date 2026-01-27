# CSS Showcase - Implementation Plan

**Last Updated:** 27 January 2026
**Status:** Phase 12 - Final UX Polish

---

## Phase 12: Final UX Polish

**Goal:** Improve readability and ease of use as the final round of polish.

### Task 12.1: Add Page Links to Homepage Sections
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `index.html`, `styles/improvements.css`

**Issue:** Homepage category sections (Fundamentals, Layout Mastery, etc.) show only headings and descriptions. Users must use the sidebar to navigate to specific pages.

**Fix:** Add clickable page links within each category section:
- Fundamentals: Basic CSS, Box Model, Typography
- Layout Mastery: Flexbox, Flexbox Patterns, Grid, Layout Techniques, Responsive Design
- Advanced Techniques: Gradients, Gradient Patterns, Transitions, Animations, Filters & Effects
- Modern CSS: Custom Properties, Blend Modes, Shapes & Clips, :has() Selector, Container Queries, CSS Nesting, Anchor Positioning, Scroll Animations, Color Spaces

Style as subtle pill/chip links or a compact grid.

---

### Task 12.2: Add "On This Page" Navigation for Long Pages
**Status:** COMPLETE
**Priority:** HIGH
**Files:** `scripts/page-nav.js` (new), `styles/improvements.css`, long content pages

**Issue:** Pages like Basic CSS, Flexbox, and Typography are very long. Users scroll extensively without knowing their position or being able to jump to sections.

**Fix:** Create a floating or sticky mini-table-of-contents:
- Appears on pages with 3+ major sections
- Highlights current section as user scrolls
- Allows quick jumps to any section
- Collapses on mobile to save space

---

### Task 12.3: Improve Mobile Code Block Readability
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `styles/code-examples.css`

**Issue:** On mobile, code examples feel cramped and hard to read.

**Fix:**
- Increase `font-size` to ~14px on mobile
- Add more padding inside code blocks on small screens
- Ensure horizontal scroll indicator is clearly visible

---

### Task 12.4: Enhance Section Visual Hierarchy
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `styles/improvements.css`

**Issue:** Some section titles blend together on content-heavy pages.

**Fix:**
- Add subtle alternating background tints to major page sections
- Or add stronger top borders/spacing between major sections
- Make section headings more prominent with larger font or accent styling

---

### Task 12.5: Subtle Code Block Expansion Hint
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/code-examples.css`, `scripts/code-examples.js`

**Issue:** "View Code" buttons are functional but could be more discoverable.

**Fix:**
- Add a subtle pulse or glow animation to "View Code" button on first page load
- Or add a small "(click to expand)" hint text
- Only show hint once per session (localStorage flag)

---

## Progress Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phases 0-11 | COMPLETE | 62 tasks |
| **Phase 12** | **IN PROGRESS** | **2/5 complete** |

---

## Archive Reference

Previous phases completed 25-27 January 2026:
- Phases 0-8: Core implementation (38 tasks)
- Phase 9: Visual review passed (46/50 score)
- Phase 10: Organisation & readability (6 tasks)
- Phase 11: Review feedback & polish (18 tasks)

Full history available in git commit log.
