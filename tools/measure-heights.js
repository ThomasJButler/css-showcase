const { chromium } = require('playwright');

async function measureAllPages() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const pages = [
    'index', 'basic', 'box-model', 'typography', 'flexbox', 'flexbox-patterns',
    'grid', 'layout', 'responsive', 'gradients', 'gradient-patterns', 'transitions',
    'animations', 'filters', 'buttons', 'forms', 'tables', 'cards', 'icons',
    'advanced', 'custom-properties', 'blend-modes', 'shapes-clips', 'has-selector',
    'container-queries', 'css-nesting', 'anchor-positioning', 'scroll-animations',
    'color-spaces', 'playground'
  ];

  console.log('\n=== PAGE HEIGHTS (DESKTOP 1920x1080) ===\n');

  let overTargetCount = 0;
  const overTargetPages = [];
  const allResults = [];

  for (const pageName of pages) {
    try {
      await page.goto(`http://localhost:8080/${pageName}.html`);
      await page.waitForLoadState('networkidle');

      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      const status = height > 6000 ? '❌' : '✅';

      if (height > 6000) {
        overTargetCount++;
        overTargetPages.push({ name: pageName, height });
      }

      allResults.push({ name: pageName, height, status });

      console.log(`${status} ${pageName}.html: ${height.toLocaleString()}px ${height > 6000 ? `(${height - 6000}px over target)` : ''}`);
    } catch (error) {
      console.log(`⚠️  ${pageName}.html: Error - ${error.message}`);
    }
  }

  console.log('\n=== SUMMARY ===\n');
  console.log(`Total pages: ${pages.length}`);
  console.log(`Pages > 6,000px: ${overTargetCount}`);
  console.log(`Pages ≤ 6,000px: ${pages.length - overTargetCount}`);

  if (overTargetPages.length > 0) {
    console.log('\nPages exceeding 6,000px target:');
    overTargetPages.forEach(({ name, height }) => {
      console.log(`  - ${name}.html: ${height.toLocaleString()}px (${height - 6000}px over)`);
    });
  } else {
    console.log('\n✅ All pages meet the 6,000px target!');
  }

  await browser.close();
}

measureAllPages().catch(console.error);
