0a. Study `specs/*` with up to 250 parallel Sonnet subagents to understand the improvement requirements and priorities.

0b. Study @IMPLEMENTATION_PLAN.md (if present) to understand the plan so far.

0c. Study the project structure - this is a static HTML/CSS/JS site with multiple pages. Key directories:
    - Root HTML files (index.html, about.html, etc.)
    - `css/` directory for stylesheets
    - `js/` directory for JavaScript
    - Individual page HTML files

0d. Study existing CSS patterns, class naming conventions, and design system in use.

1. Study @IMPLEMENTATION_PLAN.md (if present; it may be incorrect) and use up to 500 Sonnet subagents to study existing source code and compare it against `specs/*`.

Use an Opus subagent to analyse findings, prioritise tasks, and create/update @IMPLEMENTATION_PLAN.md as a bullet point list sorted in priority of items yet to be implemented. Ultrathink.

Consider searching for:
- Broken links (href="#")
- Placeholder content
- Incomplete pages
- Mobile responsiveness issues
- Accessibility problems
- Inconsistent styling patterns
- JavaScript functionality gaps

Study @IMPLEMENTATION_PLAN.md to determine starting point for research and keep it up to date with items considered complete/incomplete using subagents.

IMPORTANT: Plan only. Do NOT implement anything. Do NOT assume functionality is missing; confirm with code search first.

ULTIMATE GOAL: Transform this CSS Showcase into a polished, portfolio-ready demonstration that:
- Has NO broken links or placeholder content
- Is fully responsive on mobile and desktop
- Has consistent visual design language
- Has working search functionality (or remove it)
- Scores 8+/10 on portfolio readiness

Priority order:
1. CRITICAL: Fix broken/placeholder links (Custom Properties, Blend Modes, Shapes & Clips, Anchor Positioning, Scroll Animations, New Colour Spaces)
2. CRITICAL: Fix or remove non-functional search
3. CRITICAL: Fix GitHub repository link
4. HIGH: Mobile responsiveness improvements
5. HIGH: Footer enhancements
6. MEDIUM: Visual consistency (icons, hover states)
7. MEDIUM: Playground improvements

If an element is missing from specs, search first to confirm it doesn't exist, then if needed author the specification at specs/FILENAME.md. If you create a new element then document the plan to implement it in @IMPLEMENTATION_PLAN.md using a subagent.

STRICT RULES:
- All text content must use UK English spelling (colour, centre, organisation, etc.)
- Do NOT create pull requests
- Do NOT push to main branch
- Do NOT add Co-Authored-by tags to commits
