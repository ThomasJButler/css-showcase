# CSS Showcase - Visual Review (Phase 14: Dark Mode & Consistency Fix)

## Design Philosophy

**Goal:** A CSS reference that's visually consistent across all viewports, themes, and pages.

**Aesthetic:** Minimalism that guides through elegance, not emptiness.

> "The details are not the details. They make the design." - Charles Eames

---

## Your Task

Review screenshots and assess whether Phase 14 dark mode and consistency issues have been fixed.

### Step 1: Study Screenshots

Examine `docs/visual-testing/screenshots/`:

- **Desktop** (1920x1080): `desktop/*.png`
- **Mobile** (375x667): `mobile/*.png`
- **Dark mode**: `dark-mode/*.png`

---

### Step 2: Review Checklist

Check each issue from Phase 14:

```text
HIGH PRIORITY
  [ ] 14.1 Layout page demo sections have dark backgrounds in dark mode (no white blocks)
  [ ] 14.2 Advanced CSS page demo sections are properly themed in dark mode
  [ ] 14.3 Transitions timing bars and Custom Properties demo panels are themed
  [ ] 14.4 Warning/info boxes use muted colours in dark mode (no bright yellow)
  [ ] 14.4 Blend Modes and Color Spaces demo panels have dark backgrounds
  [ ] 14.5 All content pages have consistent sidebar navigation

MEDIUM PRIORITY
  [ ] 14.6 On This Page nav does not overlap footer on any page
  [ ] 14.7 Homepage section spacing is compact on mobile, pills have 44px touch targets
  [ ] 14.8 Form input borders, table row borders visible in dark mode
  [ ] 14.9 Code blocks not truncated on desktop, scroll indicators visible on mobile

LOW PRIORITY
  [ ] 14.10 Tables page tables don't overflow at 375px, badges readable

ISSUES FIXED: __/10
```

**Threshold:** 8/10+ = Ready for final review | Below 8 = Continue Phase 14

---

### Step 3: The Dark Mode Test

Ask yourself:

1. Are there ANY white/light-background blocks visible on dark mode screenshots?
2. Do all pages have the same navigation structure (sidebar + top nav)?
3. Are warning/info boxes appropriately muted in dark mode?
4. Can you clearly see form inputs, table borders, and interactive controls in dark mode?
5. Does the On This Page nav stay clear of the footer?

---

### Step 4: Identify Remaining Issues

If any items remain unchecked, note specific details:

**Format:**

```text
PAGE: [page name]
ISSUE: [which checklist item - e.g. 14.1]
SCREENSHOT: [which file shows it]
FIX: [specific CSS/JS suggestion]
```

**Example:**

```text
PAGE: layout.html
ISSUE: 14.1 White demo blocks still visible in dark mode
SCREENSHOT: dark-mode/layout.png
FIX: Add [data-theme="dark"] .grid-demo { background: var(--surface-secondary); }
```

---

### Step 5: Update Plan

If improvements needed:

- Update @IMPLEMENTATION_PLAN.md marking tasks COMPLETE as fixed
- Add specific notes for remaining issues

If 8+ of 10 improvements implemented:

- Mark Phase 14 as COMPLETE
- Note any remaining minor issues for future consideration

---

## Issue Reference

| #     | Issue                                    | Priority |
|-------|------------------------------------------|----------|
| 14.1  | Dark mode: Layout page demo sections     | HIGH     |
| 14.2  | Dark mode: Advanced CSS page demos       | HIGH     |
| 14.3  | Dark mode: Transitions & Custom Props    | HIGH     |
| 14.4  | Dark mode: Warning boxes & info panels   | HIGH     |
| 14.5  | Sidebar navigation consistency           | HIGH     |
| 14.6  | On This Page nav footer overlap          | MEDIUM   |
| 14.7  | Homepage section spacing & density       | MEDIUM   |
| 14.8  | Dark mode: Form/table/box-model borders  | MEDIUM   |
| 14.9  | Code block width & overflow              | MEDIUM   |
| 14.10 | Mobile table overflow refinement         | LOW      |

---

## Rules

- UK ENGLISH in all documentation
- PLAN ONLY - do not implement
- NO COMMITS in planning mode
- CHECK EACH ISSUE systematically
- DON'T INVENT WORK - if 8+ are fixed, stop
- When implementation is needed, ensure build prompts use `/frontend-design` skill for all frontend work
