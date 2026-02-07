# CSS Showcase - Build Mode (Phase 14: Dark Mode & Consistency Fix)

## Design Philosophy

**Goal:** Fix critical dark mode failures and cross-page consistency issues identified through a thorough screenshot audit.

**Approach:** Systematically theme all unthemed demo sections in dark mode, then fix navigation and layout consistency issues.

> "The details are not the details. They make the design." - Charles Eames


9999. IMPORTANT - Use the FRONTEND DESIGN SKILL for all frontend implementation by invoking `/frontend-design`. This skill produces distinctive, production-grade HTML/CSS/JS with high design quality. Always summon it before writing frontend code.

---

## Your Task

Implement ONE task from @IMPLEMENTATION_PLAN.md Phase 14, prioritising by severity.

### Phase 14 Tasks (Priority Order)

**HIGH (Implement First)**

1. **14.1 Dark Mode: Layout Page Demos** - Multiple large white-background demo sections completely unthemed
2. **14.2 Dark Mode: Advanced CSS Page Demos** - Nearly every demo section retains white background
3. **14.3 Dark Mode: Transitions & Custom Properties Demos** - White timing bars and demo panels
4. **14.4 Dark Mode: Warning Boxes & Info Panels** - Bright yellow boxes on Responsive, Anchor Positioning; white panels on Blend Modes, Color Spaces
5. **14.5 Sidebar Navigation Consistency** - Half the pages lack the left sidebar nav

**MEDIUM (Then These)**

6. **14.6 On This Page Nav Footer Overlap** - Still overlapping footer on multiple pages
7. **14.7 Homepage Section Spacing & Density** - Excessive whitespace, small pill links
8. **14.8 Dark Mode: Form/Table/Box-Model Borders** - Borders nearly invisible in dark mode
9. **14.9 Code Block Width & Overflow** - Truncated on desktop, subtle scroll indicators on mobile

**LOW (Final Polish)**

10. **14.10 Mobile Table Overflow Refinement** - Tables still overflow, badges too small

---

## Implementation Guidelines

### Task 14.1: Dark Mode — Layout Page Demo Sections

The core problem: demo containers on the Layout page use default white backgrounds and were never given dark mode overrides.

```css
/* styles/improvements.css — add dark mode for layout demo containers */
[data-theme="dark"] .layout-demo,
[data-theme="dark"] .demo-container,
[data-theme="dark"] .position-demo,
[data-theme="dark"] .display-demo,
[data-theme="dark"] .stacking-demo {
  background: var(--surface-secondary);
  color: var(--text-primary);
  border-color: var(--border);
}

[data-theme="dark"] .layout-demo * {
  /* Ensure child elements also inherit dark colours where needed */
  border-color: var(--border);
}
```

Inspect `layout.html` for all demo container class names and ensure each has a dark mode override.

### Task 14.2: Dark Mode — Advanced CSS Page Demo Sections

Same pattern as 14.1, but for the Advanced CSS page. Nearly all `.demo-*` containers need dark theming.

```css
/* styles/advanced-page.css or styles/improvements.css */
[data-theme="dark"] .selector-demo,
[data-theme="dark"] .pseudo-demo,
[data-theme="dark"] .counter-demo,
[data-theme="dark"] .specificity-demo,
[data-theme="dark"] .combinator-demo {
  background: var(--surface-secondary);
  color: var(--text-primary);
  border-color: var(--border);
}
```

Check `advanced.html` for exact class names. Ensure social media icon demos, coloured badges, and code blocks all have appropriate contrast.

### Task 14.3: Dark Mode — Transitions & Custom Properties Demos

```css
/* Transitions page */
[data-theme="dark"] .timing-demo,
[data-theme="dark"] .transition-bar,
[data-theme="dark"] .timing-comparison {
  background: var(--surface-secondary);
  border-color: var(--border);
}

/* Custom Properties page */
[data-theme="dark"] .theme-demo,
[data-theme="dark"] .swatch-panel,
[data-theme="dark"] .browser-support-table {
  background: var(--surface-secondary);
  color: var(--text-primary);
}
```

Check both pages for exact container class names.

### Task 14.4: Dark Mode — Warning Boxes & Info Panels

```css
/* Dark mode for warning/info boxes */
[data-theme="dark"] .warning-box,
[data-theme="dark"] .info-banner,
[data-theme="dark"] .browser-support-warning {
  background: rgba(217, 119, 6, 0.15); /* Muted amber */
  border: 1px solid rgba(217, 119, 6, 0.3);
  color: var(--text-primary);
}

/* Blend modes / Color spaces demo panels */
[data-theme="dark"] .logo-demo,
[data-theme="dark"] .swatch-container,
[data-theme="dark"] .blend-demo-panel {
  background: var(--surface-secondary);
}
```

### Task 14.5: Sidebar Navigation Consistency

Audit all content pages. Pages with sidebar use `components/sidebar.html` via the component loader. Pages missing it need the sidebar added to their HTML structure.

```html
<!-- Pattern: ensure all content pages include -->
<div class="layout-wrapper">
  <aside class="sidebar" id="sidebar">
    <!-- loaded by component-loader.js -->
  </aside>
  <main class="main-content">
    <!-- page content -->
  </main>
</div>
```

Check which pages are missing this wrapper and add it. Affected pages likely include: layout.html, responsive.html, transitions.html, advanced.html, custom-properties.html, blend-modes.html, color-spaces.html, shapes-clips.html, filters.html.

### Task 14.6: On This Page Nav — Footer Overlap

```javascript
// scripts/page-nav.js — add footer collision detection
const footer = document.querySelector('.site-footer');
if (footer && nav) {
  const footerObserver = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('hidden', entry.isIntersecting);
  }, { threshold: 0.1 });
  footerObserver.observe(footer);
}
```

```css
/* styles/improvements.css */
.page-nav.hidden {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
```

Also verify that at mobile widths, `display: none` is applied and the JS does not override it.

### Task 14.7: Homepage Section Spacing & Density

```css
/* styles/improvements.css — mobile homepage adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding: var(--space-8) var(--space-4); /* Reduce from clamp() */
    min-height: auto; /* Don't force full viewport */
  }

  .showcase-section {
    padding: var(--space-4) var(--space-3);
    margin-top: var(--space-4); /* Reduce from --space-8 */
  }

  .section-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    font-size: var(--text-base); /* Up from --text-sm */
  }
}
```

### Task 14.8: Dark Mode — Form/Table/Box-Model Borders

```css
/* styles/improvements.css */
[data-theme="dark"] input,
[data-theme="dark"] select,
[data-theme="dark"] textarea {
  border-color: #475569; /* slate-600 — visible against dark bg */
}

[data-theme="dark"] table td,
[data-theme="dark"] table th {
  border-color: #334155; /* slate-700 */
}

[data-theme="dark"] .box-model-controls input[type="range"] {
  border-color: #475569;
}
```

### Task 14.9: Code Block Width & Overflow

```css
/* Desktop: ensure multi-column code blocks don't clip */
.code-columns .code-example pre {
  overflow-x: auto;
  max-width: 100%;
}

/* Mobile: more prominent scroll indicator */
@media (max-width: 768px) {
  .code-example::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 30px; /* Wider than before */
    background: linear-gradient(to left, var(--surface), transparent);
    pointer-events: none;
    opacity: 0.9;
  }
}
```

### Task 14.10: Mobile Table Overflow Refinement

```css
/* styles/tables.css */
@media (max-width: 480px) {
  .table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
  }

  /* Right-edge scroll shadow */
  .table-wrapper::after {
    content: '';
    position: sticky;
    right: 0;
    top: 0;
    bottom: 0;
    width: 24px;
    background: linear-gradient(to left, var(--surface), transparent);
    pointer-events: none;
  }

  .status-badge {
    min-width: 60px;
    font-size: var(--text-xs);
    padding: var(--space-1) var(--space-2);
  }
}
```

---

## Implementation Checklist

Before marking a task complete, verify:

- [ ] Does the fix address the specific visual issue identified?
- [ ] Does it work in both light and dark mode?
- [ ] Does it work on desktop (1920px) AND mobile (375px) viewports?
- [ ] Does it maintain the minimalist aesthetic?
- [ ] Is the implementation minimal — not over-engineered?

---

## Key Files

```text
styles/improvements.css       # Primary stylesheet for fixes
styles/advanced-page.css      # Advanced page dark mode
styles/tables.css             # Table overflow + dark borders
styles/code-examples.css      # Code block width/overflow
styles/04-layout.css          # Sidebar layout
scripts/page-nav.js           # On This Page nav fixes
layout.html                   # Dark mode demo theming
advanced.html                 # Dark mode demo theming
transitions.html              # Dark mode demo theming
custom-properties.html        # Dark mode demo theming
responsive.html               # Dark mode warning box + sidebar
anchor-positioning.html       # Dark mode warning box
blend-modes.html              # Dark mode panels + sidebar
color-spaces.html             # Dark mode panels + sidebar
index.html                    # Homepage spacing
Content pages (*.html)        # Sidebar consistency
```

---

## Commit Standards

After implementing each task:

1. Update @IMPLEMENTATION_PLAN.md marking task COMPLETE
2. `git add` specific files changed
3. `git commit` with UK English message describing the fix
4. `git push` to current branch

**Example commit messages:**

- "Fix dark mode demo backgrounds on Layout Techniques page"
- "Theme Advanced CSS page demo sections for dark mode"
- "Add dark mode variants for warning boxes and info panels"
- "Add sidebar navigation to pages that were missing it"
- "Fix On This Page nav overlap with footer via IntersectionObserver"

---

## Rules

- UK ENGLISH: colour, centre, behaviour
- NO CO-AUTHOR TAGS in commits
- NEVER PUSH TO MAIN
- NO PULL REQUESTS
- ONE TASK PER COMMIT - keep changes focused
- WHEN DONE WITH ALL 10, STOP - don't invent work
