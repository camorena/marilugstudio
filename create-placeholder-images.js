// create-favicons.js
// Run this with Node.js: node create-favicons.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create favicons directory in public if it doesn't exist
const publicDir = path.join(__dirname, 'public');

// SVG template for favicon
const createFaviconSVG = (size) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8D1EC3;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#EC47A0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#bg-gradient)"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".35em" 
        font-family="Inter, Arial" font-size="${size * 0.5}" font-weight="bold" fill="#FFFFFF">
    M
  </text>
</svg>
`;

// Define favicons to create
const favicons = [
  { name: 'favicon.svg', size: 32 },
  { name: 'favicon-16x16.svg', size: 16 },
  { name: 'favicon-32x32.svg', size: 32 },
  { name: 'favicon-192x192.svg', size: 192 },
  { name: 'favicon-512x512.svg', size: 512 },
  { name: 'apple-touch-icon.svg', size: 180 },
];

// Create each favicon
favicons.forEach(({ name, size }) => {
  const svg = createFaviconSVG(size);
  const filePath = path.join(publicDir, name);

  // Write SVG file
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Created ${name}`);

  // For the manifest, we need PNG versions
  // Create placeholder PNG instructions
  if (name.includes('192') || name.includes('512')) {
    const pngName = name.replace('.svg', '.png');
    console.log(`  ⚠️  Note: You'll need to convert ${name} to ${pngName} for the manifest`);
  }
});

// Also create the main favicon.svg if it doesn't exist
const mainFaviconPath = path.join(publicDir, 'favicon.svg');
if (!fs.existsSync(mainFaviconPath)) {
  fs.writeFileSync(mainFaviconPath, createFaviconSVG(32));
  console.log('✓ Created main favicon.svg');
}

console.log(`\n✨ Created ${favicons.length} favicon files!`);
console.log(
  '\n⚠️  Important: The manifest requires PNG files for favicon-192x192.png and favicon-512x512.png'
);
console.log('You can either:');
console.log('1. Convert the SVG files to PNG using an online converter');
console.log('2. Update the manifest to use SVG files instead');
console.log('3. Use a tool like sharp or canvas to generate PNGs automatically\n');
