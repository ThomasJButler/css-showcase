# Medium Priority: Visual Consistency

## Priority: MEDIUM

## Overview

The site has some visual inconsistencies that should be addressed for a polished portfolio presentation.

## Issues to Address

### 1. Card Icon Inconsistency

**Problem**: Some cards have emoji icons, others have CSS-created icons, some have neither.

**Solution**: Standardise the approach:
- Option A: All cards use emoji icons (simpler)
- Option B: All cards use CSS/SVG icons (more professional)
- Option C: Deliberately different icons per category (document the system)

Recommendation: Use consistent emoji icons for personality, or CSS icons for professionalism. Don't mix randomly.

### 2. Hover State Inconsistency

**Problem**: Cards have nice hover effects, but links within cards don't always have obvious hover states.

**Solution**:
- Ensure all interactive elements have clear hover states
- Arrow icons on links should animate consistently
- Use consistent timing and easing for transitions

### 3. Layout Techniques Page Visibility

**Problem**: Sidebar shows "Layout Techniques" but it doesn't appear in homepage cards under the Layout section.

**Solution**: Either:
- Add Layout Techniques to homepage Layout section
- OR explain why it's sidebar-only

### 4. Code Block Styling

**Problem**: Some code blocks look slightly awkward with horizontal scrollbars.

**Solution**:
- Consistent code block styling across all pages
- Proper overflow handling
- Consider syntax highlighting improvements
- Consistent background colours in both themes

## Design System Audit Checklist

- [ ] All cards use consistent icon approach
- [ ] All links have hover states
- [ ] All buttons have hover/active states
- [ ] Transition timing is consistent (e.g., 0.2s ease)
- [ ] Code blocks styled consistently
- [ ] Spacing/padding consistent across sections
- [ ] Typography hierarchy consistent

## Acceptance Criteria

- [ ] Card icons follow a single consistent approach
- [ ] All interactive elements have visible hover states
- [ ] Arrow icons animate consistently across the site
- [ ] Code blocks look polished and consistent
- [ ] No visual "odd ones out" across the site
