# CSS Showcase

Interactive showcase of CSS capabilities from fundamentals to cutting-edge features. Built with Next.js and shadcn/ui — a quick reference for checking CSS details and implementation patterns.

**Live:** https://thomasjbutler.github.io/css-showcase/

## What It Is

A comprehensive CSS learning resource with 30+ pages of live demos, interactive playgrounds, and real code examples. Everything from basic selectors to modern features like container queries, the :has() selector, scroll-driven animations, and colour spaces. Also built as a practice project for the shadcn/ui component framework.

## Getting Started

```bash
git clone https://github.com/ThomasJButler/css-showcase.git
cd css-showcase/css-showcase
npm install
npm run dev
```

Visit <http://localhost:3000>

## What's Included

### Fundamentals

- Selectors, cascade, specificity, units
- Box model with visual playground
- Typography and text styling

### Layout

- Flexbox and Grid with interactive controls
- Flexbox design patterns
- CSS layout techniques (positioned, absolute, relative)
- Responsive design and media queries

### Visual Effects

- Gradients (linear, radial, conic) with interactive builder
- Gradient composition patterns
- Transitions and keyframe animations
- Filters and blend modes with interactive playground

### Components

- 50+ button styles
- Form designs
- Card layouts
- Data tables
- CSS-based icon systems

### Modern CSS

- :has() selector — parent selection
- Container queries — responsive components
- CSS nesting — no preprocessor needed
- Scroll-driven animations
- Anchor positioning
- Colour spaces — OKLCH, LAB, Display P3

### Interactive Playgrounds
- Flexbox — adjust container and item properties live
- Grid — build grid layouts visually
- Filters — compose filter chains in real time
- Gradients — build and preview gradient combinations

## Key Features

- Dark/light mode with system preference detection
- Global search (Cmd/Ctrl + K)
- Collapsible code snippets with syntax highlighting
- Copy-to-clipboard for all code examples
- Fully responsive mobile-first design
- WCAG AA compliant accessibility
- British English throughout (proper spelling)

## Tech Stack

- **Framework:** Next.js 16 with React 19
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Styling:** Tailwind CSS 4 + CSS Modules for page-specific demos
- **Syntax Highlighting:** Shiki
- **Animations:** Motion (Framer Motion)
- **Theming:** next-themes with CSS custom properties
- **Fonts:** Nunito Sans, Nunito, JetBrains Mono

## Browser Support

- Chrome/Edge 106+
- Firefox 110+
- Safari 16+

## Project Structure

```text
css-showcase/
├── app/                 # Next.js App Router (30+ page routes)
│   ├── basic/           # Example: Basic CSS page
│   ├── buttons/         # Example: Buttons showcase
│   └── ...              # One directory per topic
├── components/          # Shared React components
│   ├── ui/              # shadcn/ui components
│   ├── demo-card.tsx    # Live demo + code block card
│   ├── code-block.tsx   # Syntax-highlighted code display
│   └── page-hero.tsx    # Page header component
├── lib/                 # Utilities and navigation config
└── public/              # Static assets
```

## Contributing

Pull requests welcome. For major changes, open an issue first.

## License

MIT License — use anything you want from this project.

## Notes

- All CSS properties use British spelling (colour not color)
- Designed for learning, not production use
- No tracking or analytics

---

Built by Thomas Butler
