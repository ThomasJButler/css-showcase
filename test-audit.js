/**
 * CSS Showcase v1.2 - Audit Script
 *
 * This script:
 * - Screenshots all pages (desktop + mobile)
 * - Checks for console errors
 * - Identifies broken links
 * - Generates an audit report
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// Pages to audit (all 22 existing pages)
const pages = [
  'index.html',
  'playground.html',
  // Fundamentals
  'basic.html',
  'box-model.html',
  'typography.html',
  // Layout
  'flexbox.html',
  'grid.html',
  'layout.html',
  'responsive.html',
  // Visual Effects
  'gradients.html',
  'transitions.html',
  'animations.html',
  'filters.html',
  // Components
  'buttons.html',
  'forms.html',
  'tables.html',
  'cards.html',
  'icons.html',
  // Advanced
  'advanced.html',
  // Modern CSS
  'has-selector.html',
  'container-queries.html',
  'css-nesting.html',
];

const viewports = {
  desktop: { width: 1920, height: 1080 },
  mobile: { width: 375, height: 667 }, // iPhone SE
};

const results = {
  pages: {},
  summary: {
    totalPages: pages.length,
    pagesWithErrors: 0,
    totalConsoleErrors: 0,
    totalConsoleWarnings: 0,
    brokenLinks: [],
  }
};

async function captureScreenshot(page, pageName, viewport, browser) {
  const screenshotDir = path.join(__dirname, 'audit-screenshots', viewport);
  await fs.mkdir(screenshotDir, { recursive: true });

  const screenshotPath = path.join(screenshotDir, pageName.replace('.html', '.png'));
  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  return screenshotPath;
}

async function auditPage(browser, pageName) {
  console.log(`\n📄 Auditing: ${pageName}`);

  const pageResults = {
    name: pageName,
    consoleErrors: [],
    consoleWarnings: [],
    networkErrors: [],
    screenshots: {},
    loadTime: {},
  };

  for (const [viewportName, dimensions] of Object.entries(viewports)) {
    console.log(`  📱 ${viewportName} (${dimensions.width}x${dimensions.height})`);

    const page = await browser.newPage();
    await page.setViewport(dimensions);

    // Capture console messages
    page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();

      if (type === 'error') {
        pageResults.consoleErrors.push({ viewport: viewportName, message: text });
      } else if (type === 'warning') {
        pageResults.consoleWarnings.push({ viewport: viewportName, message: text });
      }
    });

    // Capture network errors
    page.on('requestfailed', request => {
      pageResults.networkErrors.push({
        viewport: viewportName,
        url: request.url(),
        failure: request.failure().errorText
      });
    });

    // Navigate and measure load time
    const url = `file://${path.join(__dirname, pageName)}`;
    const startTime = Date.now();

    try {
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      const loadTime = Date.now() - startTime;
      pageResults.loadTime[viewportName] = loadTime;

      console.log(`    ⏱️  Loaded in ${loadTime}ms`);

      // Wait a bit for any animations/scripts
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Take screenshot
      const screenshotPath = await captureScreenshot(page, pageName, viewportName, browser);
      pageResults.screenshots[viewportName] = screenshotPath;
      console.log(`    📸 Screenshot saved`);

    } catch (error) {
      console.log(`    ❌ Error: ${error.message}`);
      pageResults.consoleErrors.push({
        viewport: viewportName,
        message: `Page load error: ${error.message}`
      });
    }

    await page.close();
  }

  // Update summary
  if (pageResults.consoleErrors.length > 0) {
    results.summary.pagesWithErrors++;
    results.summary.totalConsoleErrors += pageResults.consoleErrors.length;
  }
  if (pageResults.consoleWarnings.length > 0) {
    results.summary.totalConsoleWarnings += pageResults.consoleWarnings.length;
  }

  results.pages[pageName] = pageResults;

  // Log results for this page
  if (pageResults.consoleErrors.length > 0) {
    console.log(`    ⚠️  ${pageResults.consoleErrors.length} console errors`);
  }
  if (pageResults.consoleWarnings.length > 0) {
    console.log(`    ⚠️  ${pageResults.consoleWarnings.length} console warnings`);
  }
  if (pageResults.networkErrors.length > 0) {
    console.log(`    ⚠️  ${pageResults.networkErrors.length} network errors`);
  }
  if (pageResults.consoleErrors.length === 0 &&
      pageResults.consoleWarnings.length === 0 &&
      pageResults.networkErrors.length === 0) {
    console.log(`    ✅ No errors`);
  }
}

async function generateReport() {
  console.log('\n📊 Generating audit report...');

  let markdown = `# CSS Showcase v1.2 - Audit Report\n\n`;
  markdown += `**Generated:** ${new Date().toLocaleString()}\n\n`;
  markdown += `## Summary\n\n`;
  markdown += `- **Total Pages:** ${results.summary.totalPages}\n`;
  markdown += `- **Pages with Errors:** ${results.summary.pagesWithErrors}\n`;
  markdown += `- **Total Console Errors:** ${results.summary.totalConsoleErrors}\n`;
  markdown += `- **Total Console Warnings:** ${results.summary.totalConsoleWarnings}\n\n`;

  markdown += `## Page Details\n\n`;

  for (const [pageName, pageData] of Object.entries(results.pages)) {
    const hasIssues = pageData.consoleErrors.length > 0 ||
                     pageData.consoleWarnings.length > 0 ||
                     pageData.networkErrors.length > 0;

    const status = hasIssues ? '⚠️' : '✅';
    markdown += `### ${status} ${pageName}\n\n`;

    // Load times
    markdown += `**Load Times:**\n`;
    for (const [viewport, time] of Object.entries(pageData.loadTime)) {
      const emoji = time < 2000 ? '🟢' : time < 5000 ? '🟡' : '🔴';
      markdown += `- ${viewport}: ${time}ms ${emoji}\n`;
    }
    markdown += `\n`;

    // Screenshots
    markdown += `**Screenshots:**\n`;
    for (const [viewport, path] of Object.entries(pageData.screenshots)) {
      markdown += `- [${viewport}](${path.replace(__dirname, '.')})\n`;
    }
    markdown += `\n`;

    // Console errors
    if (pageData.consoleErrors.length > 0) {
      markdown += `**Console Errors (${pageData.consoleErrors.length}):**\n`;
      pageData.consoleErrors.forEach((error, i) => {
        markdown += `${i + 1}. [${error.viewport}] ${error.message}\n`;
      });
      markdown += `\n`;
    }

    // Console warnings
    if (pageData.consoleWarnings.length > 0) {
      markdown += `**Console Warnings (${pageData.consoleWarnings.length}):**\n`;
      pageData.consoleWarnings.forEach((warning, i) => {
        markdown += `${i + 1}. [${warning.viewport}] ${warning.message}\n`;
      });
      markdown += `\n`;
    }

    // Network errors
    if (pageData.networkErrors.length > 0) {
      markdown += `**Network Errors (${pageData.networkErrors.length}):**\n`;
      pageData.networkErrors.forEach((error, i) => {
        markdown += `${i + 1}. [${error.viewport}] ${error.url} - ${error.failure}\n`;
      });
      markdown += `\n`;
    }

    markdown += `---\n\n`;
  }

  // Write report
  const reportPath = path.join(__dirname, 'audit-report.md');
  await fs.writeFile(reportPath, markdown);
  console.log(`✅ Report saved to: ${reportPath}`);

  // Also save JSON for programmatic access
  const jsonPath = path.join(__dirname, 'audit-results.json');
  await fs.writeFile(jsonPath, JSON.stringify(results, null, 2));
  console.log(`✅ JSON data saved to: ${jsonPath}`);
}

async function main() {
  console.log('🚀 Starting CSS Showcase Audit...\n');
  console.log(`📦 Auditing ${pages.length} pages`);
  console.log(`📱 Viewports: desktop (${viewports.desktop.width}x${viewports.desktop.height}), mobile (${viewports.mobile.width}x${viewports.mobile.height})\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const pageName of pages) {
    await auditPage(browser, pageName);
  }

  await browser.close();

  await generateReport();

  console.log('\n✨ Audit complete!\n');
  console.log('📁 Screenshots saved to: ./audit-screenshots/');
  console.log('📄 Report saved to: ./audit-report.md');
  console.log('📊 JSON data saved to: ./audit-results.json\n');

  // Exit with error code if there are issues
  if (results.summary.pagesWithErrors > 0) {
    console.log('⚠️  Some pages have errors. Review the audit report for details.\n');
    process.exit(1);
  } else {
    console.log('✅ All pages passed audit!\n');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('❌ Audit failed:', error);
  process.exit(1);
});
