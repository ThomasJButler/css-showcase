const fs = require('fs');
const path = require('path');

const pages = [
    'playground.html',
    'basic.html',
    'box-model.html',
    'typography.html',
    'flexbox.html',
    'grid.html',
    'layout.html',
    'responsive.html',
    'gradients.html',
    'transitions.html',
    'animations.html',
    'buttons.html',
    'filters.html',
    'forms.html',
    'tables.html',
    'cards.html',
    'icons.html',
    'advanced.html',
    'has-selector.html',
    'container-queries.html',
    'css-nesting.html'
];

const oldPattern = `<!-- Sidebar Navigation -->
<aside class="sidebar" role="navigation" aria-label="Main navigation">
    <!-- Collapse button (desktop only) -->
    <button class="sidebar-collapse-btn" aria-label="Collapse sidebar">
        <span class="sidebar-collapse-icon">◀</span>
    </button>

    <div class="sidebar-content">
        <!-- Home Link -->
        <div class="sidebar-header">
            <a href="index.html" class="sidebar-home-link">
                <span class="icon">🏠</span>
                <span>Home</span>
            </a>
        </div>`;

const newPattern = `<!-- Sidebar Navigation -->
<aside class="sidebar" role="navigation" aria-label="Main navigation">
    <div class="sidebar-content">
        <!-- Home Link with Collapse Button -->
        <div class="sidebar-header">
            <a href="index.html" class="sidebar-home-link">
                <span class="icon">🏠</span>
                <span>Home</span>
            </a>
            <!-- Collapse button (desktop only) -->
            <button class="sidebar-collapse-btn" aria-label="Collapse sidebar">
                <span class="sidebar-collapse-icon">✕</span>
            </button>
        </div>`;

let updatedCount = 0;
let errorCount = 0;

pages.forEach(page => {
    const filePath = path.join(__dirname, page);

    try {
        let content = fs.readFileSync(filePath, 'utf8');

        if (content.includes(oldPattern)) {
            content = content.replace(oldPattern, newPattern);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Updated ${page}`);
            updatedCount++;
        } else {
            console.log(`⚠ Pattern not found in ${page} (might already be updated or have different structure)`);
        }
    } catch (error) {
        console.error(`✗ Error updating ${page}:`, error.message);
        errorCount++;
    }
});

console.log(`\n📊 Summary:`);
console.log(`   Updated: ${updatedCount} pages`);
console.log(`   Errors: ${errorCount} pages`);
console.log(`   Total: ${pages.length} pages`);
