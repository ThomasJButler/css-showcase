# CSS Showcase - Ultimate Overhaul (Planning Mode)

## Overview

Transform the CSS Showcase from "portfolio-ready" to "industry-leading" with:
- Simplified sidebar-only navigation (remove header nav)
- Polished code boxes with WCAG-compliant sizing
- Cutting-edge CSS (layers, container queries, view transitions, scroll animations)
- Consolidated file structure (35 → ~12 CSS files)
- Component injection to eliminate HTML duplication
- New Tools & Frameworks pages

## Planning Tasks

0. **START HERE**: Study @IMPLEMENTATION_PLAN.md to understand the 7-phase overhaul plan.

0a. Study `docs/visual-testing/summary.md` and screenshots in `docs/visual-testing/screenshots/` for current visual state.

0b. Study the current architecture:
    - 30 HTML pages in root directory
    - `styles/` for CSS (35 files, ~18,800 lines)
    - `scripts/` for JavaScript (19 files)
    - Variable duplication between main.css and improvements.css
    - Sidebar HTML duplicated in every page (~190 lines × 30 = ~5,700 lines)

1. Use up to 3 parallel Explore agents to research specific aspects:
   - Current header/sidebar implementation (sidebar.css, main.js, sidebar.js)
   - Code box styling (code-examples.css, syntax-highlight.css)
   - CSS architecture patterns (main.css variables, z-index usage)

2. Verify findings against @IMPLEMENTATION_PLAN.md phases. Update the plan with any new discoveries.

3. When planning is complete, update @IMPLEMENTATION_PLAN.md with refined task details.

## Key Decisions (Already Made)

- **Navigation**: Sidebar-only (remove header nav, minimal header with logo + theme + hamburger)
- **Tools page**: Curated links to external resources (not tutorials)
- **Component loading**: Immediate with CSS skeleton (smooth UX)

## Critical Files to Study

| File | Purpose | Lines |
|------|---------|-------|
| `styles/main.css` | Design tokens, needs refactor | 888 |
| `styles/improvements.css` | Duplicate variables to merge | 866 |
| `styles/sidebar.css` | Navigation to simplify | 536 |
| `styles/code-examples.css` | Code display to enhance | 347 |
| `scripts/sidebar.js` | Scroll handling to unify | 354 |
| `scripts/main.js` | Duplicate scroll to remove | 202 |

## Phase 8: Final 5% UX/UI Polish (Completed)

### Tasks Completed:
- Fixed mobile sidebar class mismatch bug (JS used `.open`, CSS expected `.active`)
- Fixed stuck "Fixed (viewport-relative)" positioning demo element
- Redesigned header with SVG icons (removed emojis)
- Replaced all emojis with Lucide SVG icons throughout sidebar
- Removed CSS Playground page completely
- Added mobile padding improvements for better touch targets
- Added section dividers for visual hierarchy

### Plan Reference:
See `/Users/tombutler/.claude/plans/logical-splashing-candy.md` for full details

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRICT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- PLAN ONLY: Do NOT implement anything. Research and document only.
- UK ENGLISH: All documentation uses UK spelling (colour, centre, behaviour)
- NO COMMITS: Planning mode does not commit changes
- UPDATE PLAN: Keep @IMPLEMENTATION_PLAN.md current with findings

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
