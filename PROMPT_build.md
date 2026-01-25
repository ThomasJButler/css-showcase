# CSS Showcase - Ultimate Overhaul (Build Mode)

## Overview

Transform the CSS Showcase from "portfolio-ready" to "industry-leading". This is a 7-phase overhaul covering navigation, code boxes, advanced CSS, file consolidation, and new pages.

## Build Tasks

0. **START HERE**: Study @IMPLEMENTATION_PLAN.md to find the current phase and next task.

0a. The plan has 8 phases. Work through ONE TASK at a time:
    - Phase 1: CSS Architecture Foundation (layers, tokens, z-index)
    - Phase 2: Header & Sidebar Redesign (component injection)
    - Phase 3: Code Box Polish (accessibility, visual separator)
    - Phase 4: Advanced CSS (view transitions, scroll animations, nesting)
    - Phase 5: File Consolidation (35 → ~12 CSS files)
    - Phase 6: New Content Pages (tools.html, frameworks.html)
    - Phase 7: Final Polish (audits, testing)
    - Phase 8: Final 5% UX/UI Polish (COMPLETED)

0b. Before implementing, search the codebase to understand current state. Use up to 3 parallel agents for research.

1. Implement the NEXT INCOMPLETE TASK from @IMPLEMENTATION_PLAN.md:
   - Follow the specific code examples in the plan
   - Test changes in browser (localhost:8080)
   - Check responsive behaviour and dark mode
   - Verify no console errors

2. After implementing each task:
   - Update @IMPLEMENTATION_PLAN.md marking task COMPLETE
   - `git add` specific files changed
   - `git commit` with descriptive UK English message
   - `git push` to current branch

3. Move to the next task. Repeat until phase complete.

## Key Decisions (Already Made)

- **Navigation**: Sidebar-only (remove header nav, minimal header)
- **Tools page**: Curated external links (not detailed tutorials)
- **Component loading**: Immediate with CSS skeleton

## Critical Files

| File | Action | Phase |
|------|--------|-------|
| `styles/00-layers.css` | CREATE | 1 |
| `styles/01-design-tokens.css` | CREATE | 1 |
| `styles/main.css` | REFACTOR | 1 |
| `components/header.html` | CREATE | 2 |
| `components/sidebar.html` | CREATE | 2 |
| `scripts/component-loader.js` | CREATE | 2 |
| `styles/code-examples.css` | MODIFY | 3 |
| `tools.html` | CREATE | 6 |
| `frameworks.html` | CREATE | 6 |

## Verification

After each change:
```bash
# Start local server
python -m http.server 8080

# Test in browser at http://localhost:8080
# Check: navigation, dark mode, mobile view, console errors

# Capture screenshots (optional)
node visual-test.js
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRICT RULES - VIOLATING THESE IS FORBIDDEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

99. UK ENGLISH: Use UK spelling in commits (colour, centre, behaviour, organisation, minimise)

999. NO CO-AUTHOR TAGS: Do NOT add "Co-Authored-by" or similar to commits

9999. NEVER PUSH TO MAIN: Only push to current ralph/* branch. Run `git branch --show-current` first.

99999. NO PULL REQUESTS: Do NOT use `gh pr create`. Human handles merging manually.

999999. BRANCH SAFETY: Verify on ralph/* branch before any push.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPLEMENTATION GUIDELINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Follow existing design patterns and CSS variable naming
- Maintain dark/light mode compatibility
- Use semantic HTML with proper ARIA labels
- Mobile-first responsive design
- Test at 375px, 768px, and 1920px viewports
- Update @IMPLEMENTATION_PLAN.md after EACH task completion
- Implement completely - no placeholders or stubs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
