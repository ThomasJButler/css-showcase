const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = './docs/visual-testing/screenshots';

const pages = [
  // Homepage
  { name: 'index', path: '/' },
  // Fundamentals
  { name: 'basic', path: '/basic' },
  { name: 'box-model', path: '/box-model' },
  { name: 'typography', path: '/typography' },
  // Layout
  { name: 'flexbox', path: '/flexbox' },
  { name: 'flexbox-patterns', path: '/flexbox-patterns' },
  { name: 'grid', path: '/grid' },
  { name: 'layout', path: '/layout' },
  { name: 'responsive', path: '/responsive' },
  // Visual Effects
  { name: 'gradients', path: '/gradients' },
  { name: 'gradient-patterns', path: '/gradient-patterns' },
  { name: 'transitions', path: '/transitions' },
  { name: 'animations', path: '/animations' },
  { name: 'filters', path: '/filters' },
  // Components
  { name: 'buttons', path: '/buttons' },
  { name: 'forms', path: '/forms' },
  { name: 'tables', path: '/tables' },
  { name: 'cards', path: '/cards' },
  { name: 'icons', path: '/icons' },
  // Advanced
  { name: 'advanced', path: '/advanced' },
  { name: 'custom-properties', path: '/custom-properties' },
  { name: 'blend-modes', path: '/blend-modes' },
  { name: 'shapes-clips', path: '/shapes-clips' },
  // Modern CSS
  { name: 'has-selector', path: '/has-selector' },
  { name: 'container-queries', path: '/container-queries' },
  { name: 'css-nesting', path: '/css-nesting' },
  { name: 'anchor-positioning', path: '/anchor-positioning' },
  { name: 'scroll-animations', path: '/scroll-animations' },
  { name: 'color-spaces', path: '/color-spaces' },
  // Resources
  { name: 'tools', path: '/tools' },
  { name: 'frameworks', path: '/frameworks' },
];

// CSS to disable scroll-driven animations for fullPage screenshots.
// Without this, elements using animation-timeline: view() start at opacity: 0
// and never reveal because Playwright doesn't simulate scrolling.
const DISABLE_SCROLL_ANIMATIONS_CSS = `
  .animate-on-scroll,
  .animate-on-scroll-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
`;

async function disableScrollAnimations(page) {
  await page.addStyleTag({ content: DISABLE_SCROLL_ANIMATIONS_CSS });
  await page.waitForTimeout(100);
}

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
    try {
      await desktopPage.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      await disableScrollAnimations(desktopPage);
      await desktopPage.waitForTimeout(500);
      await desktopPage.screenshot({
        path: `${SCREENSHOT_DIR}/desktop/${page.name}.png`,
        fullPage: true
      });
    } catch (e) {
      console.log(`  ! Desktop failed for ${page.name}: ${e.message}`);
    }
    await desktopContext.close();

    // Mobile screenshot
    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 667 },
      isMobile: true
    });
    const mobilePage = await mobileContext.newPage();
    try {
      await mobilePage.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      await disableScrollAnimations(mobilePage);
      await mobilePage.waitForTimeout(500);
      await mobilePage.screenshot({
        path: `${SCREENSHOT_DIR}/mobile/${page.name}.png`,
        fullPage: true
      });
    } catch (e) {
      console.log(`  ! Mobile failed for ${page.name}: ${e.message}`);
    }
    await mobileContext.close();

    // Dark mode screenshot
    const darkContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      colorScheme: 'dark'
    });
    const darkPage = await darkContext.newPage();
    try {
      await darkPage.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      // Toggle dark mode via next-themes class strategy
      await darkPage.evaluate(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      });
      await disableScrollAnimations(darkPage);
      await darkPage.waitForTimeout(500);
      await darkPage.screenshot({
        path: `${SCREENSHOT_DIR}/dark-mode/${page.name}.png`,
        fullPage: true
      });
    } catch (e) {
      console.log(`  ! Dark mode failed for ${page.name}: ${e.message}`);
    }
    await darkContext.close();

    console.log(`  ✓ ${page.name} captured`);
  }

  await browser.close();
  console.log('\nAll screenshots captured!');
}

captureScreenshots().catch(console.error);
