# CSS Showcase - Build Mode (Phase 12: Final UX Polish)

## Design Philosophy

**Goal:** Improve readability and ease of use as the final polish pass.

**Approach:** Enhance navigation and scanability without changing the core design.

> "Good design is as little design as possible." - Dieter Rams

---

## Your Task

Implement ONE task from @IMPLEMENTATION_PLAN.md Phase 12, prioritising by severity.

### Phase 12 Tasks (Priority Order)

**HIGH (Implement First)**

1. **12.1 Homepage Page Links** - Add clickable links within each category section
2. **12.2 On This Page Nav** - Floating section navigation for long pages

**MEDIUM (Then These)**

3. **12.3 Mobile Code Readability** - Larger font and padding on mobile
4. **12.4 Section Hierarchy** - Stronger visual distinction between sections

**LOW (Final Polish)**

5. **12.5 Code Expansion Hint** - Subtle visual cue for "View Code" buttons

---

## Implementation Guidelines

### Task 12.1: Homepage Page Links

```html
<!-- Add within each .showcase-section on index.html -->
<div class="section-links">
  <a href="basic.html" class="section-link">Basic CSS</a>
  <a href="box-model.html" class="section-link">Box Model</a>
  <a href="typography.html" class="section-link">Typography</a>
</div>
```

```css
/* styles/improvements.css */
.section-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.section-link {
  padding: var(--space-1) var(--space-3);
  background: var(--surface-secondary);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.section-link:hover {
  background: var(--accent);
  color: white;
}
```

### Task 12.2: On This Page Navigation

```javascript
// scripts/page-nav.js
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.demo-section[id]');
  if (sections.length < 3) return; // Only show for pages with 3+ sections

  const nav = createPageNav(sections);
  document.body.appendChild(nav);

  // Highlight current section on scroll
  observeSections(sections, nav);
});
```

```css
/* styles/improvements.css */
.page-nav {
  position: fixed;
  right: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  background: var(--surface);
  padding: var(--space-3);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 100;
  max-height: 60vh;
  overflow-y: auto;
}

@media (max-width: 1200px) {
  .page-nav { display: none; } /* Hide on smaller screens */
}
```

### Task 12.3: Mobile Code Readability

```css
/* styles/code-examples.css */
@media (max-width: 768px) {
  .code-example pre {
    font-size: 14px; /* Up from 12-13px */
    padding: var(--space-4);
  }

  .code-example code {
    line-height: 1.6;
  }
}
```

### Task 12.4: Section Visual Hierarchy

```css
/* styles/improvements.css */
.demo-section:nth-child(even) {
  background: var(--surface-secondary);
  margin-left: calc(-1 * var(--space-6));
  margin-right: calc(-1 * var(--space-6));
  padding: var(--space-8) var(--space-6);
}

/* Or stronger section headings */
.section-title {
  font-size: var(--text-2xl);
  border-bottom: 2px solid var(--accent);
  padding-bottom: var(--space-2);
}
```

### Task 12.5: Code Expansion Hint

```css
/* styles/code-examples.css */
.code-toggle:not(.seen) {
  animation: pulse 2s ease-in-out;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(var(--accent-rgb), 0); }
}
```

```javascript
// Mark as seen after first interaction
if (!localStorage.getItem('codeToggleSeen')) {
  toggleButtons.forEach(btn => btn.classList.add('not-seen'));
  toggleButtons[0]?.addEventListener('click', () => {
    localStorage.setItem('codeToggleSeen', 'true');
    toggleButtons.forEach(btn => btn.classList.remove('not-seen'));
  }, { once: true });
}
```

---

## Implementation Checklist

Before marking a task complete, verify:

- [ ] Does the fix improve readability/navigation as intended?
- [ ] Does it work in both light and dark mode?
- [ ] Does it work on desktop AND mobile viewports?
- [ ] Does it maintain the minimalist aesthetic?
- [ ] Is the implementation minimal - not over-engineered?

---

## Key Files

```text
index.html                    # 12.1 Homepage links
scripts/page-nav.js           # 12.2 On This Page nav (new file)
styles/improvements.css       # 12.1, 12.2, 12.4 Styling
styles/code-examples.css      # 12.3, 12.5 Code block styles
scripts/code-examples.js      # 12.5 Expansion hint logic
```

---

## Commit Standards

After implementing each task:

1. Update @IMPLEMENTATION_PLAN.md marking task COMPLETE
2. `git add` specific files changed
3. `git commit` with UK English message describing the fix
4. `git push` to current branch

**Example commit messages:**

- "Add page links within homepage category sections"
- "Add floating On This Page navigation for long pages"
- "Improve mobile code block readability with larger font"
- "Enhance section visual hierarchy with alternating backgrounds"
- "Add subtle pulse animation to View Code buttons"

---

## Rules

- UK ENGLISH: colour, centre, behaviour
- NO CO-AUTHOR TAGS in commits
- NEVER PUSH TO MAIN
- NO PULL REQUESTS
- ONE TASK PER COMMIT - keep changes focused
- WHEN DONE WITH ALL 5, STOP - don't invent work
