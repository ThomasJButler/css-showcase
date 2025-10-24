# The Ultimate CSS Showcase

Interactive showcase of CSS capabilities from fundamentals to cutting-edge features. Pure CSS, no frameworks.

**Live:** https://thomasjbutler.github.io/css-showcase/

## What It Is

A comprehensive CSS learning resource with live demos, interactive playgrounds, and real code examples. Everything from basic selectors to modern features like container queries and the :has() selector. Built with pure HTML, CSS, and vanilla JavaScript.

## Installation

```bash
git clone https://github.com/ThomasJButler/css-showcase.git
cd css-showcase
```

Open index.html in your browser or serve it:

```bash
python -m http.server 8000
# Visit http://localhost:8000
```

No build process. No dependencies. Just open and go.

## What's Included

### Fundamentals
- Selectors, cascade, specificity, units
- Box model with visual playground
- Typography and text styling
- Flexbox and Grid with interactive controls

### Visual Effects
- Gradients (linear, radial, conic)
- Transitions and keyframe animations
- Filters and blend modes
- 3D transforms

### Modern CSS (2024-2025)
- :has() selector - parent selection finally works
- Container queries - responsive components
- CSS nesting - no preprocessor needed
- Scroll animations - effects driven by scroll position
- Anchor positioning - position relative to other elements
- New colour spaces - OKLCH, LAB
- Subgrid - nested grid alignment

### Components
- 50+ button styles
- Form designs
- Pure CSS icons (no icon fonts)
- Card layouts
- Data tables

### Interactive Playgrounds
- Flexbox - adjust container and item properties live
- Grid - build grid layouts visually
- Filters - Instagram-style effects
- Box Model - see padding/border/margin calculations

## Key Features

- Dark/light mode with system preference detection
- Global search (Cmd/Ctrl + K)
- Fully responsive mobile-first design
- WCAG AA compliant accessibility
- Copy-to-clipboard for all code examples
- Syntax highlighting
- British English throughout (proper spelling)

## Tech Stack

- Pure HTML, CSS, JavaScript
- No frameworks or libraries
- No build process
- No runtime dependencies
- CSS custom properties for theming
- BEM-inspired naming
- Progressive enhancement

## Browser Support

- Chrome/Edge 106+
- Firefox 110+
- Safari 16+
- Graceful fallbacks for older browsers

## Project Structure

```
css-showcase/
├── index.html
├── playground.html
├── *.html (feature pages)
├── styles/
│   ├── main.css (theming and design system)
│   └── *.css (page-specific styles)
└── scripts/
    ├── main.js (core functionality)
    └── *.js (page-specific scripts)
```

## Contributing

Pull requests welcome. For major changes, open an issue first.

## License

MIT License - use anything you want from this project.

## Notes

- Contains Konami code easter egg (↑↑↓↓←→←→BA)
- All CSS properties use British spelling (colour not color)
- Designed for learning, not production use
- No tracking or analytics

---

Built by Thomas Butler
