const fs = require('fs');

function getPNGDimensions(filepath) {
  const buffer = fs.readFileSync(filepath);
  if (buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a') {
    throw new Error('Not a valid PNG');
  }
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

console.log('\n=== BEFORE Improvements (Jan 24, 2026 23:43 UTC) ===\n');
const oldGrid = getPNGDimensions('docs/visual-testing/screenshots-backup/desktop/grid.png');
const oldIndex = getPNGDimensions('docs/visual-testing/screenshots-backup/mobile/index.png');
console.log('grid.html (desktop):', oldGrid.height + 'px');
console.log('index.html (mobile):', oldIndex.height + 'px');

console.log('\n=== AFTER Improvements (Jan 25, 2026) ===\n');
const newGrid = getPNGDimensions('docs/visual-testing/screenshots/desktop/grid.png');
const newIndex = getPNGDimensions('docs/visual-testing/screenshots/mobile/index.png');
console.log('grid.html (desktop):', newGrid.height + 'px');
console.log('index.html (mobile):', newIndex.height + 'px');

console.log('\n=== Reduction ===\n');
console.log('grid.html:', (oldGrid.height - newGrid.height) + 'px reduction (' + Math.round((oldGrid.height - newGrid.height) / oldGrid.height * 100) + '%)');
console.log('index.html:', (oldIndex.height - newIndex.height) + 'px reduction (' + Math.round((oldIndex.height - newIndex.height) / oldIndex.height * 100) + '%)');

console.log('\n=== Targets ===\n');
console.log('grid.html (desktop): Target < 6,000px, Current:', newGrid.height + 'px', newGrid.height < 6000 ? '✅' : '❌ (' + (newGrid.height - 6000) + 'px over)');
console.log('index.html (mobile): Target < 4,000px, Current:', newIndex.height + 'px', newIndex.height < 4000 ? '✅' : '❌ (' + (newIndex.height - 4000) + 'px over)');
console.log('');
