# Medium Priority: Playground Improvements

## Priority: MEDIUM

## Overview

The Playground page works but feels basic. It could be enhanced to be a more valuable interactive tool.

## Current State

- Basic HTML/CSS editor
- Preview panel
- Toggle between HTML/CSS views
- Functional but minimal

## Proposed Improvements

### 1. Pre-built Examples

Add a library of pre-built examples users can load and experiment with:
- Flexbox layouts
- Grid patterns
- Animation examples
- Button styles
- Card designs
- Form styling

Implementation:
- Dropdown or sidebar to select examples
- Load example code into editor
- Preview updates automatically

### 2. Editor Polish

- Syntax highlighting (if not already present)
- Line numbers
- Auto-indentation
- Better font (monospace, readable)

### 3. Preview Enhancements

- Responsive preview (mobile/tablet/desktop toggles)
- Zoom controls
- Background colour toggle (for testing transparent elements)

### 4. Save/Share (Optional, Advanced)

- Save to localStorage
- Generate shareable URL with encoded code
- Reset button to clear editor

## Example Templates to Include

```javascript
const examples = [
  {
    name: "Flexbox Centre",
    html: '<div class="container"><div class="item">Centred</div></div>',
    css: '.container { display: flex; justify-content: center; align-items: center; height: 200px; background: #f0f0f0; }'
  },
  {
    name: "CSS Grid Layout",
    html: '...',
    css: '...'
  },
  // etc.
];
```

## Acceptance Criteria

- [ ] At least 5 pre-built examples available
- [ ] Examples are relevant to CSS showcase topics
- [ ] Editor is pleasant to use
- [ ] Preview updates in real-time
- [ ] Works in both dark and light mode
- [ ] Mobile-friendly (may need different layout on small screens)

## Nice-to-have (Future)

- Console for CSS errors
- CSS property autocomplete
- Undo/redo functionality
- Full-screen mode
