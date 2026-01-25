const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:8080';
const SCREENSHOT_DIR = './docs/visual-testing/screenshots';

const pages = [
  // Index
  { name: 'index', path: '/' },
  // Fundamentals
  { name: 'basic', path: '/basic.html' },
  { name: 'box-model', path: '/box-model.html' },
  { name: 'typography', path: '/typography.html' },
  // Layout
  { name: 'flexbox', path: '/flexbox.html' },
  { name: 'flexbox-patterns', path: '/flexbox-patterns.html' },
  { name: 'grid', path: '/grid.html' },
  { name: 'layout', path: '/layout.html' },
  { name: 'responsive', path: '/responsive.html' },
  // Visual Effects
  { name: 'gradients', path: '/gradients.html' },
  { name: 'gradient-patterns', path: '/gradient-patterns.html' },
  { name: 'transitions', path: '/transitions.html' },
  { name: 'animations', path: '/animations.html' },
  // animations-advanced.html merged into animations.html
  { name: 'filters', path: '/filters.html' },
  // Components
  { name: 'buttons', path: '/buttons.html' },
  { name: 'forms', path: '/forms.html' },
  { name: 'tables', path: '/tables.html' },
  // tables-advanced.html merged into tables.html
  { name: 'cards', path: '/cards.html' },
  { name: 'icons', path: '/icons.html' },
  // Advanced
  { name: 'advanced', path: '/advanced.html' },
  { name: 'custom-properties', path: '/custom-properties.html' },
  { name: 'blend-modes', path: '/blend-modes.html' },
  { name: 'shapes-clips', path: '/shapes-clips.html' },
  // Modern CSS
  { name: 'has-selector', path: '/has-selector.html' },
  { name: 'container-queries', path: '/container-queries.html' },
  { name: 'css-nesting', path: '/css-nesting.html' },
  { name: 'anchor-positioning', path: '/anchor-positioning.html' },
  { name: 'scroll-animations', path: '/scroll-animations.html' },
  { name: 'color-spaces', path: '/color-spaces.html' },
  // Other
  { name: 'playground', path: '/playground.html' },
  // Resources
  { name: 'tools', path: '/tools.html' },
  { name: 'frameworks', path: '/frameworks.html' },
];

async function captureScreenshots() {
  // Ensure directories exist
  ['desktop', 'mobile', 'dark-mode'].forEach(dir => {
    const fullPath = path.join(SCREENSHOT_DIR, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });

  const browser = await chromium.launch();

  for (const page of pages) {
    console.log(`Testing: ${page.name}`);

    // Desktop screenshot (light mode)
    const desktopContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });
    await desktopPage.screenshot({
      path: `${SCREENSHOT_DIR}/desktop/${page.name}.png`,
      fullPage: true
    });
    await desktopContext.close();

    // Mobile screenshot
    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 667 },
      isMobile: true
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });
    await mobilePage.screenshot({
      path: `${SCREENSHOT_DIR}/mobile/${page.name}.png`,
      fullPage: true
    });
    await mobileContext.close();

    // Dark mode screenshot
    const darkContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      colorScheme: 'dark'
    });
    const darkPage = await darkContext.newPage();
    await darkPage.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });
    // Also try to toggle via localStorage or data attribute
    await darkPage.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    await darkPage.waitForTimeout(500); // Wait for theme transition
    await darkPage.screenshot({
      path: `${SCREENSHOT_DIR}/dark-mode/${page.name}.png`,
      fullPage: true
    });
    await darkContext.close();

    console.log(`  ✓ ${page.name} captured`);
  }

  await browser.close();
  console.log('\nAll screenshots captured!');
}

captureScreenshots().catch(console.error);
