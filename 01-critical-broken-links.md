# Critical: Fix Broken/Placeholder Links

## Priority: CRITICAL (Must fix first)

## Overview

Several homepage cards link to "#" instead of actual pages. This undermines the "comprehensive showcase" claim and creates a broken user experience.

## Broken Links to Fix

### Advanced Techniques Section
1. **Custom Properties** → currently links to `#`
   - Create: `custom-properties.html`
   - Content: CSS custom properties (variables), inheritance, fallbacks, dynamic theming
   
2. **Blend Modes** → currently links to `#`
   - Create: `blend-modes.html`
   - Content: mix-blend-mode, background-blend-mode, examples with images
   
3. **Shapes & Clips** → currently links to `#`
   - Create: `shapes-clips.html`
   - Content: clip-path, shape-outside, polygon(), circle(), ellipse()

### Modern CSS Section
4. **Anchor Positioning** → currently links to `#`
   - Create: `anchor-positioning.html`
   - Content: CSS anchor positioning, anchor(), position-anchor, browser support
   
5. **Scroll Animations** → currently links to `#`
   - Create: `scroll-animations.html`
   - Content: scroll-timeline, view-timeline, animation-timeline, scroll-driven animations
   
6. **New Colour Spaces** → currently links to `#`
   - Create: `colour-spaces.html`
   - Content: oklch(), oklab(), display-p3, color-mix(), relative colour syntax

## Requirements for Each New Page

Each page must include:
- [ ] Proper HTML structure matching existing pages
- [ ] Sidebar navigation with correct active state
- [ ] Breadcrumb navigation
- [ ] Hero section with gradient (for Modern CSS pages)
- [ ] Browser support badges (for Modern CSS features)
- [ ] Live interactive demos where possible
- [ ] Code examples with syntax highlighting
- [ ] Dark/light mode compatibility
- [ ] Mobile responsive layout
- [ ] Back-to-top button

## Page Template Structure

Follow the existing page patterns:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta, title, stylesheets -->
</head>
<body>
    <header><!-- Navigation --></header>
    <aside><!-- Sidebar --></aside>
    <main>
        <nav class="breadcrumb"><!-- Breadcrumbs --></nav>
        <section class="hero"><!-- Page hero --></section>
        <section class="content"><!-- Main content --></section>
    </main>
    <footer><!-- Footer --></footer>
    <!-- Scripts -->
</body>
</html>
```

## Acceptance Criteria

- [ ] All 6 placeholder links now navigate to real pages
- [ ] Each new page has substantial, educational content
- [ ] Each new page includes working code demos
- [ ] All pages work in dark and light mode
- [ ] All pages are mobile responsive
- [ ] Sidebar navigation updated with new pages
- [ ] No JavaScript console errors on any new page
