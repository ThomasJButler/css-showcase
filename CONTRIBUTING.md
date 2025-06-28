# Contributing to CSS Showcase

First off, thank you for considering contributing to CSS Showcase! It's people like you that make CSS Showcase such a great learning resource.

## 🤝 Code of Conduct

This project and everyone participating in it is governed by the principle of being kind and respectful. By participating, you are expected to uphold this principle.

## 🎯 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behaviour you observed** and what behaviour you expected to see
- **Include screenshots** if possible
- **Include browser information** (Chrome, Firefox, Safari, version numbers)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title** for the issue
- **Provide a detailed description** of the suggested enhancement
- **Provide specific examples** to demonstrate how it would work
- **Explain why this enhancement would be useful** to most CSS Showcase users

### Pull Requests

1. Fork the repo and create your branch from `main`
2. Make your changes following the style guides below
3. Test your changes in multiple browsers if possible
4. Update the README.md with details of changes if applicable
5. Make sure your code follows the existing code style
6. Issue that pull request!

## 💻 Style Guides

### Git Commit Messages

- Use UK English
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Keep the first line under 72 characters
- Reference issues and pull requests after the first line

Example:
```
Add pure CSS tooltip component

- Create tooltip.html demo page
- Add hover and focus states
- Include accessibility attributes
- Support multiple positions (top, bottom, left, right)
```

### HTML Style Guide

- Use semantic HTML5 elements
- Maintain consistent 2-space indentation
- Use descriptive class names with kebab-case
- Include proper ARIA labels for accessibility
- Add comments for complex structures

Example:
```html
<section class="demo-section" aria-labelledby="section-title">
  <div class="container">
    <h2 id="section-title" class="section-title">Demo Title</h2>
    <p class="section-intro">
      Introduction text here...
    </p>
  </div>
</section>
```

### CSS Style Guide

- Use CSS custom properties for theming
- Follow mobile-first approach
- Group related properties together
- Use meaningful class names (BEM-inspired)
- Add comments for complex selectors or calculations
- Use UK English in comments (colour not color)

Example:
```css
/* Button component with hover state */
.btn-primary {
  /* Positioning */
  display: inline-block;
  
  /* Box model */
  padding: var(--space-3) var(--space-6);
  margin: 0;
  
  /* Typography */
  font-weight: var(--font-medium);
  text-decoration: none;
  
  /* Visual */
  background: var(--colour-primary);
  color: white;
  border-radius: var(--radius-md);
  
  /* Behaviour */
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-primary:hover {
  background: var(--colour-primary-dark);
  transform: translateY(-2px);
}
```

### JavaScript Style Guide

- Use ES6+ syntax
- Prefer const over let, avoid var
- Use meaningful variable names
- Add JSDoc comments for functions
- Handle errors gracefully
- Keep it minimal - this is a CSS showcase!

Example:
```javascript
/**
 * Copies code snippet to clipboard
 * @param {string} code - The code to copy
 * @returns {Promise<void>}
 */
const copyToClipboard = async (code) => {
  try {
    await navigator.clipboard.writeText(code);
    showNotification('Copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy:', err);
    showNotification('Failed to copy code');
  }
};
```

## 🎨 Design Principles

1. **Pure CSS First** - Prioritise CSS solutions over JavaScript
2. **Progressive Enhancement** - Ensure basic functionality works everywhere
3. **Accessibility** - Make it usable for everyone
4. **Performance** - Keep it fast and lightweight
5. **Educational** - Code should be clear and learnable

## 📝 Adding a New Demo Page

When adding a new CSS demo page:

1. Create the HTML file following the existing structure
2. Create a corresponding CSS file in `styles/`
3. Add navigation links to all existing pages
4. Include proper meta tags and descriptions
5. Add browser support information where relevant
6. Update the README.md if it's a significant addition

## 🐛 Testing

Before submitting a pull request:

1. Test in multiple browsers (Chrome, Firefox, Safari minimum)
2. Check responsive behaviour on mobile and desktop
3. Verify dark/light mode works correctly
4. Test keyboard navigation
5. Run through with a screen reader if possible

## 📚 Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Can I Use](https://caniuse.com/) - Browser support tables
- [CSS Tricks](https://css-tricks.com/) - CSS techniques and guides
- [A11y Project](https://www.a11yproject.com/) - Accessibility resources

## 🎉 Recognition

Contributors will be acknowledged in the project! We value every contribution, no matter how small.

## ❓ Questions?

Feel free to open an issue with your question or reach out to the maintainer.

---

Thank you again for your interest in contributing to CSS Showcase! 🙌