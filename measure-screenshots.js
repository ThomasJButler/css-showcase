const fs = require('fs');

function getPNGDimensions(filepath) {
  const buffer = fs.readFileSync(filepath);

  // PNG signature
  const signature = buffer.toString('hex', 0, 8);
  if (signature !== '89504e470d0a1a0a') {
    throw new Error('Not a valid PNG file');
  }

  // Read IHDR chunk (always first chunk after signature)
  // Skip 8 bytes (signature) + 4 bytes (chunk length) + 4 bytes (chunk type)
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);

  return { width, height };
}

const files = {
  'grid.html (desktop)': 'docs/visual-testing/screenshots/desktop/grid.png',
  'index.html (mobile)': 'docs/visual-testing/screenshots/mobile/index.png'
};

console.log('\n=== Page Height Measurements ===\n');

for (const [name, path] of Object.entries(files)) {
  try {
    const dims = getPNGDimensions(path);
    console.log(`${name}: ${dims.width}x${dims.height} (${dims.height}px height)`);
  } catch (err) {
    console.error(`Error reading ${name}: ${err.message}`);
  }
}

console.log('\n=== Targets ===');
console.log('grid.html (desktop): Target < 6,000px');
console.log('index.html (mobile): Target < 4,000px');
console.log('');
