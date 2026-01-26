# CSS Showcase - Build Mode

## Your Task

Implement ONE task from @IMPLEMENTATION_PLAN.md with quality code.

### Step 0: CHECK IF DONE

First, read @IMPLEMENTATION_PLAN.md. If it shows:
```
## STATUS: COMPLETE - NO FURTHER IMPROVEMENTS NEEDED
```
Then **do NOT make changes**. Simply exit - the work is complete.

### Step 1: FIND NEXT TASK

Study @IMPLEMENTATION_PLAN.md to find the next incomplete task.

### Step 2: RESEARCH

Before implementing, search the codebase to understand current state. Use up to 3 parallel Explore agents if needed.

### Step 3: IMPLEMENT

- Follow specific code examples in the plan
- Test changes in browser (localhost:8080)
- Check responsive behaviour and dark mode
- Verify no console errors
- Add useful code comments (see below)

### Step 4: COMMIT & PUSH

After implementing:
- Update @IMPLEMENTATION_PLAN.md marking task COMPLETE
- `git add` specific files changed
- `git commit` with descriptive UK English message
- `git push` to current branch

## Code Quality Standards

### Comments

Add comments that explain WHY, not WHAT:

**Good comment:**
```css
/* Offset for fixed header height - prevents anchor links hiding behind header */
scroll-padding-top: var(--header-height);
```

**Bad comment:**
```css
/* Set the colour to blue */
color: blue;
```

**Comment guidance:**
- Document non-obvious CSS decisions
- Mark browser-specific workarounds
- Note accessibility considerations
- Explain magic numbers

### Implementation Standards

- Follow existing design patterns and CSS variable naming
- Maintain dark/light mode compatibility
- Use semantic HTML with proper ARIA labels
- Mobile-first responsive design
- Test at 375px, 768px, and 1920px viewports
- Implement completely - no placeholders or stubs

## Verification

After each change:
```bash
# Test in browser at http://localhost:8080
# Check: navigation, dark mode, mobile view, console errors
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRICT RULES - VIOLATING THESE IS FORBIDDEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

99. UK ENGLISH: Use UK spelling in commits (colour, centre, behaviour, organisation, minimise)

999. NO CO-AUTHOR TAGS: Do NOT add "Co-Authored-by" or similar to commits

9999. NEVER PUSH TO MAIN: Only push to current ralph/* branch. Run `git branch --show-current` first.

99999. NO PULL REQUESTS: Do NOT use `gh pr create`. Human handles merging manually.

999999. BRANCH SAFETY: Verify on ralph/* branch before any push.

9999999. WHEN DONE, STOP: If plan shows COMPLETE, do nothing. Don't invent work.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
