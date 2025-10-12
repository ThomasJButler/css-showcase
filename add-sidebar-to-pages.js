/**
 * Script to add sidebar navigation to all HTML pages
 * This automates the process of adding sidebar markup and links to all pages
 */

const fs = require('fs');
const path = require('path');

// List of all HTML pages (excluding index.html which already has sidebar)
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
    'filters.html',
    'buttons.html',
    'forms.html',
    'tables.html',
    'cards.html',
    'icons.html',
    'advanced.html',
    'has-selector.html',
    'container-queries.html',
    'css-nesting.html'
];

// Read the sidebar snippet
const sidebarSnippet = fs.readFileSync('sidebar-snippet.html', 'utf8');

// Process each page
pages.forEach(page => {
    const filePath = path.join(__dirname, page);

    try {
        let html = fs.readFileSync(filePath, 'utf8');

        // 1. Add sidebar.css to head if not already present
        if (!html.includes('styles/sidebar.css')) {
            html = html.replace(
                /<link rel="stylesheet" href="styles\/search\.css">/,
                `<link rel="stylesheet" href="styles/search.css">
    <link rel="stylesheet" href="styles/sidebar.css">`
            );
        }

        // 2. Add sidebar HTML after <body> tag if not already present
        if (!html.includes('class="sidebar"')) {
            html = html.replace(
                /<body>\s*<a href="#main" class="skip-link">/,
                `<body>
    ${sidebarSnippet}

    <a href="#main" class="skip-link">`
            );
        }

        // 3. Add sidebar.js script before </body> if not already present
        if (!html.includes('scripts/sidebar.js')) {
            html = html.replace(
                /<script src="scripts\/main\.js"><\/script>/,
                `<script src="scripts/main.js"></script>
    <script src="scripts/sidebar.js"></script>`
            );
        }

        // Write the modified HTML back to the file
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`✅ Updated: ${page}`);

    } catch (error) {
        console.error(`❌ Error processing ${page}:`, error.message);
    }
});

console.log(`\n🎉 Sidebar added to ${pages.length} pages!`);
console.log('\n📝 Next steps:');
console.log('1. Test a few pages in the browser');
console.log('2. Check mobile responsiveness');
console.log('3. Verify current page highlighting works');
console.log('4. Test keyboard navigation');
