0a. Study `specs/*` with up to 500 parallel Sonnet subagents to understand the improvement requirements.

0b. Study @IMPLEMENTATION_PLAN.md to understand what needs to be done.

0c. This is a static HTML/CSS/JS site. Key files:
    - HTML pages in root directory
    - `css/` for stylesheets
    - `js/` for JavaScript

1. Your task is to implement improvements per the specifications using parallel subagents. Follow @IMPLEMENTATION_PLAN.md and choose the most important item to address. Before making changes, search the codebase (don't assume not implemented) using Sonnet subagents. You may use up to 500 parallel Sonnet subagents for searches/reads and only 1 Sonnet subagent for validation. Use Opus subagents when complex reasoning is needed.

2. After implementing, open the HTML file in a browser or use a local server to verify your changes work correctly. Check for:
   - No JavaScript console errors
   - Responsive design works at mobile widths
   - Links navigate correctly
   - Styles render as expected

3. When you discover issues, immediately update @IMPLEMENTATION_PLAN.md with your findings using a subagent. When resolved, update and remove the item.

4. When the implementation is complete and working, update @IMPLEMENTATION_PLAN.md, then `git add -A` then `git commit` with a descriptive message. After the commit, `git push`.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRICT RULES - VIOLATING THESE IS FORBIDDEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

99. COMMIT MESSAGES: Use UK English spelling (colour, centre, behaviour, organisation, minimise, etc.). Keep messages clear and descriptive.

999. NO CO-AUTHOR TAGS: Do NOT add "Co-Authored-by", "Co-authored-by", or any similar attribution tags to commit messages. Commits should have a simple message only.

9999. NEVER PUSH TO MAIN: Only push to the current working branch. NEVER run `git push origin main` or `git push origin master`. If you find yourself about to push to main, STOP and push to the current branch instead.

99999. NO PULL REQUESTS: Do NOT use `gh pr create` or any GitHub CLI commands to create pull requests. Do NOT suggest creating PRs. The human will handle merging manually.

999999. BRANCH SAFETY: Always verify you're on a ralph/* branch before pushing. Run `git branch --show-current` to check.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPLEMENTATION GUIDELINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9999999. Important: When creating new CSS showcase pages, follow the existing page structure and design patterns. Maintain consistency with existing pages.

99999999. Important: All new pages must include proper navigation breadcrumbs and sidebar links.

999999999. Keep @IMPLEMENTATION_PLAN.md current with learnings using a subagent — future work depends on this to avoid duplicating efforts. Update especially after finishing your turn.

9999999999. When you learn something new about the project structure, update @AGENTS.md using a subagent but keep it brief.

99999999999. For any bugs you notice, resolve them or document them in @IMPLEMENTATION_PLAN.md using a subagent even if unrelated to current work.

999999999999. Implement functionality completely. Placeholders and stubs waste time redoing the same work.

9999999999999. When @IMPLEMENTATION_PLAN.md becomes large, periodically clean out completed items using a subagent.

99999999999999. IMPORTANT: Keep @AGENTS.md operational only — status updates belong in IMPLEMENTATION_PLAN.md.

999999999999999. CSS Best Practices: Use CSS custom properties (variables) where appropriate. Ensure dark/light mode compatibility. Mobile-first responsive design.

9999999999999999. Accessibility: Use semantic HTML, proper ARIA labels, sufficient colour contrast, keyboard navigation support.
