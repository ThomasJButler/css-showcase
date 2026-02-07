# CSS Showcase - Operations Guide

## Project Type

Static HTML/CSS/JS website hosted on GitHub Pages.

## Local Development

```bash
# Option 1: Python simple server
python3 -m http.server 8000
# Then open http://localhost:8000

# Option 2: VS Code Live Server extension
# Right-click index.html → Open with Live Server

# Option 3: Just open HTML files directly in browser
open index.html
```

## Validation

After making changes:
1. Open the modified HTML file in browser
2. Check browser console for JavaScript errors (F12 → Console)
3. Test at mobile width (375px) and desktop (1200px+)
4. Verify dark/light mode toggle works
5. Click all links to ensure they navigate correctly

## Project Structure

```
css-showcase/
├── index.html              # Homepage with category cards
├── about.html              # About page
├── playground.html         # Interactive CSS playground
├── basic-css.html          # Basic CSS tutorial
├── box-model.html          # Box model explanation
├── typography.html         # Typography examples
├── flexbox.html            # Flexbox layouts
├── grid.html               # CSS Grid layouts
├── forms.html              # Form styling
├── tables.html             # Table styling
├── cards.html              # Card components
├── buttons.html            # Button styles
├── icons.html              # Icon implementations
├── has-selector.html       # :has() selector (Modern CSS)
├── container-queries.html  # Container queries (Modern CSS)
├── css-nesting.html        # CSS Nesting (Modern CSS)
├── layout-techniques.html  # Layout techniques
├── css/
│   ├── styles.css          # Main stylesheet
│   └── [other CSS files]
└── js/
    └── [JavaScript files]
```

## Design System

- **Colour Scheme**: Blues with gradient accents
- **Dark/Light Mode**: Toggle in header (moon/sun icon)
- **Typography**: System fonts
- **Cards**: Hover effects with shadows
- **Icons**: Mix of emoji and CSS-created icons

## Pages That Need Creating

No additions, just UX and UI refinement.

Tweaking theme and making sure things are perfect, symmetrical, minamislic, easy to read and learn from and most imporatntly they are worthy of public display in a nice portfolio. Project structure needs amending and more constistency across the board. Use font awesome logos and not any emojis. 

Make it epic and a lovely showcase of CSS, and use the latest modern CSS sttles and techniques. Make it accessible and responsive, and simple.

## Styling Patterns

- Use existing CSS custom properties (variables)
- Follow BEM-ish naming conventions
- Ensure all new styles work in both dark and light modes
- Mobile-first: base styles for mobile, media queries for larger screens

## UK English Reminder

Use British spelling in all content:
- colour (not color)
- centre (not center)
- behaviour (not behavior)
- organisation (not organization)
- minimise (not minimize)
- optimise (not optimize)

## Frontend Implementation

- Always use the `/frontend-design` skill when implementing frontend changes (HTML/CSS/JS)
- This skill produces distinctive, production-grade interfaces with high design quality
- Summon it before writing any frontend code to ensure polished, non-generic output

## Git Rules

- ONLY push to current branch (ralph/*)
- NEVER push to main
- NO Co-Authored-by tags
- NO pull request creation
