# CSS Showcase - Implementation Plan

**Last Updated:** 26 January 2026
**Status:** Phase 10 Ready for Implementation

---

## Phase 10: Project Organisation & Readability

Focus on making the showcase easy to scan, absorb, and learn from. Both themes should be beautiful and functional.

### Task 10.1: Collapsible Code Blocks
**Status:** PENDING
**Priority:** HIGH
**Files:** `styles/code-examples.css`, `scripts/code-examples.js`, all demo pages

**Goal:** Hide code by default, show "View Code" button. Users click to expand.

**Benefits:**
- Pages load visually cleaner
- Users focus on the demo first
- Code available on demand
- Reduces visual overwhelm

**Implementation:**

```html
<!-- Before: Code always visible -->
<div class="demo-card">
  <div class="demo-example"><!-- demo --></div>
  <div class="code-example"><pre><!-- code --></pre></div>
</div>

<!-- After: Code collapsed by default -->
<div class="demo-card">
  <div class="demo-example"><!-- demo --></div>
  <button class="code-toggle" aria-expanded="false">
    <span class="toggle-icon">▶</span> View Code
  </button>
  <div class="code-example collapsed"><pre><!-- code --></pre></div>
</div>
```

```css
/* Collapsed state - hidden */
.code-example.collapsed {
  display: none;
}

/* Toggle button styling */
.code-toggle {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--colour-surface-alt);
  border: 1px solid var(--colour-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--text-sm);
  color: var(--colour-text-muted);
  transition: all 0.2s ease;
}

.code-toggle:hover {
  background: var(--colour-surface);
  color: var(--colour-text);
}

.code-toggle[aria-expanded="true"] .toggle-icon {
  transform: rotate(90deg);
}
```

```javascript
// Toggle code visibility
document.querySelectorAll('.code-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.demo-card');
    const code = card.querySelector('.code-example');
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !expanded);
    code.classList.toggle('collapsed');
    btn.innerHTML = expanded
      ? '<span class="toggle-icon">▶</span> View Code'
      : '<span class="toggle-icon">▼</span> Hide Code';
  });
});
```

---

### Task 10.2: Theme Readability Audit
**Status:** PENDING
**Priority:** HIGH
**Files:** `styles/01-design-tokens.css`, `styles/main.css`

**Goal:** Ensure both light and dark themes are beautiful and easy to read.

**Light Theme Checklist:**
- [ ] Text contrast ratio 4.5:1 minimum (WCAG AA)
- [ ] Comfortable reading (not too bright white)
- [ ] Clear visual hierarchy
- [ ] Subtle shadows for depth
- [ ] Links clearly distinguishable

**Dark Theme Checklist:**
- [ ] Text not too bright (avoid pure white #fff)
- [ ] Background not too dark (avoid pure black #000)
- [ ] Reduced eye strain for extended reading
- [ ] Code syntax colours vibrant but not harsh
- [ ] Proper contrast for muted text

**Recommended Token Adjustments:**

```css
/* Light theme - softer, easier on eyes */
:root {
  --colour-background: #fafafa;      /* Softer than #fff */
  --colour-surface: #ffffff;
  --colour-text: #1f2937;            /* Not pure black */
  --colour-text-muted: #6b7280;
}

/* Dark theme - balanced, not too harsh */
[data-theme="dark"] {
  --colour-background: #0f172a;      /* Deep blue-black */
  --colour-surface: #1e293b;
  --colour-text: #e2e8f0;            /* Soft white, not #fff */
  --colour-text-muted: #94a3b8;
}
```

---

### Task 10.3: Information Hierarchy
**Status:** PENDING
**Priority:** MEDIUM
**Files:** All demo pages

**Goal:** Make content easy to scan and absorb quickly.

**Improvements:**
1. **Clear section headings** - Bold, with visual separator
2. **Concise descriptions** - One sentence max per demo
3. **Visual grouping** - Related demos grouped together
4. **Progressive disclosure** - Simple first, complex later

**Page Structure Template:**

```
┌─────────────────────────────────────┐
│ Page Title (h1)                     │
│ Brief description (1 line)          │
├─────────────────────────────────────┤
│ Section 1: Basics                   │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │ Demo    │ │ Demo    │ │ Demo    │ │
│ │ [Code]  │ │ [Code]  │ │ [Code]  │ │
│ └─────────┘ └─────────┘ └─────────┘ │
├─────────────────────────────────────┤
│ Section 2: Advanced                 │
│ ...                                 │
└─────────────────────────────────────┘
```

---

### Task 10.4: Project File Organisation
**Status:** PENDING
**Priority:** MEDIUM

**Current Structure Issues:**
- Some utility scripts in root (should be in `scripts/` or `tools/`)
- Screenshot management could be cleaner
- Documentation scattered

**Proposed Structure:**

```
css-showcase/
├── index.html
├── [feature].html           # All 30 demo pages
├── components/              # Reusable HTML components
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
├── styles/                  # CSS (keep as-is, well organised)
│   ├── bundle.css
│   ├── 00-layers.css
│   ├── 01-design-tokens.css
│   └── ...
├── scripts/                 # All JavaScript
│   ├── main.js
│   ├── component-loader.js
│   ├── code-examples.js
│   └── ...
├── docs/                    # Documentation
│   ├── IMPLEMENTATION_HISTORY.md
│   └── visual-testing/
├── specs/                   # Specifications (archive)
└── tools/                   # Build/dev tools (NEW)
    └── visual-test.js
```

**Files to Move:**
- `visual-test.js` → `tools/visual-test.js`
- Update any scripts that reference moved files

---

### Task 10.5: Consistent Demo Card Layout
**Status:** PENDING
**Priority:** MEDIUM
**Files:** `styles/basic.css`, all demo pages

**Goal:** Every demo card should follow the same pattern.

**Standard Demo Card:**

```html
<article class="demo-card">
  <header class="demo-header">
    <h3 class="demo-title">Demo Name</h3>
    <p class="demo-description">One sentence explanation.</p>
  </header>
  <div class="demo-example">
    <!-- Live demo here -->
  </div>
  <button class="code-toggle" aria-expanded="false">View Code</button>
  <div class="code-example collapsed">
    <pre><code>/* CSS code */</code></pre>
  </div>
</article>
```

**Audit Needed:**
- Check all 30 pages use consistent structure
- Remove any redundant wrapper divs
- Ensure demo titles are concise (3-5 words)

---

### Task 10.6: Reading Flow Optimisation
**Status:** PENDING
**Priority:** LOW
**Files:** `styles/typography.css`, `styles/main.css`

**Goal:** Optimise for comfortable reading and scanning.

**Typography Adjustments:**

```css
/* Optimal reading line length */
.demo-description,
.section-description {
  max-width: 65ch;  /* ~65 characters per line */
}

/* Comfortable line height for body text */
body {
  line-height: 1.6;
}

/* Tighter line height for headings */
h1, h2, h3 {
  line-height: 1.2;
}

/* Visual breathing room between sections */
.demo-section + .demo-section {
  margin-top: var(--space-12);
}
```

---

## Progress Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phases 0-8 | COMPLETE | 38 tasks |
| Phase 9 | COMPLETE | Visual review passed |
| **Phase 10** | **PENDING** | **6 tasks** |

### Phase 10 Priority Order

1. **Task 10.1** - Collapsible Code Blocks (HIGH) - Biggest UX improvement
2. **Task 10.2** - Theme Readability Audit (HIGH) - Essential for usability
3. **Task 10.3** - Information Hierarchy (MEDIUM) - Improves scanning
4. **Task 10.4** - Project File Organisation (MEDIUM) - Developer experience
5. **Task 10.5** - Consistent Demo Card Layout (MEDIUM) - Structural cleanup
6. **Task 10.6** - Reading Flow Optimisation (LOW) - Polish

---

## Design Principles for Phase 10

### Readability First

> "Don't make me think." - Steve Krug

- Users should understand a demo in 3 seconds
- Code is secondary to the visual result
- Hide complexity until requested

### Scannable Content

- Bold headings that describe the demo
- One-sentence descriptions maximum
- Visual grouping over text grouping
- White space guides the eye

### Beautiful in Both Themes

- Neither theme should feel like an afterthought
- Dark mode for extended use (coding)
- Light mode for quick reference
- Both should feel premium

---

## Archive Reference

Previous phases completed 25-26 January 2026:
- Phases 0-8: Core implementation (38 tasks)
- Phase 9: Visual review (no changes needed)

Full history: `docs/IMPLEMENTATION_HISTORY.md`
