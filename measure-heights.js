const { chromium } = require('playwright');

async function measurePageHeights() {
  const browser = await chromium.launch();

  const pages = [
    'http://localhost:8080/index.html',
    'http://localhost:8080/grid.html'
  ];

  const viewports = [
    { name: 'Desktop', width: 1920, height: 1080 },
    { name: 'Mobile', width: 375, height: 667 }
  ];

  const results = [];

  for (const pageUrl of pages) {
    const pageName = pageUrl.split('/').pop();

    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height }
      });

      const page = await context.newPage();
      await page.goto(pageUrl, { waitUntil: 'networkidle' });

      // Get the full document height
      const height = await page.evaluate(() => {
        return document.documentElement.scrollHeight;
      });

      results.push({
        page: pageName,
        viewport: viewport.name,
        width: viewport.width,
        height: height
      });

      await context.close();
    }
  }

  await browser.close();

  // Output results in a clear format
  console.log('\n=== Page Height Measurements ===\n');

  for (const result of results) {
    console.log(`Page: ${result.page}`);
    console.log(`Viewport: ${result.viewport} (${result.width}px wide)`);
    console.log(`Height: ${result.height}px`);
    console.log('---');
  }

  console.log('\n=== Summary Table ===\n');
  console.log('Page'.padEnd(20) + 'Viewport'.padEnd(15) + 'Height');
  console.log('-'.repeat(50));

  for (const result of results) {
    console.log(
      result.page.padEnd(20) +
      result.viewport.padEnd(15) +
      result.height + 'px'
    );
  }
}

measurePageHeights().catch(console.error);
