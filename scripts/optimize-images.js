/**
 * Resizes JPG/PNG images in public/images to max width 1200px and compresses.
 * Run: npm run optimize-images
 * Requires: macOS (sips) or ImageMagick (convert). Backs up originals to *.bak.
 */

import { readdirSync, copyFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1200;
const EXTS = ['.jpg', '.jpeg', '.png'];

function optimize() {
  if (!existsSync(IMAGES_DIR)) {
    console.log('No public/images folder found.');
    return;
  }
  const files = readdirSync(IMAGES_DIR).filter((f) => EXTS.includes(extname(f).toLowerCase()));
  if (files.length === 0) {
    console.log('No images to optimize.');
    return;
  }
  for (const file of files) {
    const path = join(IMAGES_DIR, file);
    const bak = path + '.bak';
    try {
      copyFileSync(path, bak);
      execSync(`sips -Z ${MAX_WIDTH} "${path}"`, { stdio: 'pipe' });
      console.log(`Resized: ${file}`);
    } catch (e) {
      if (e.message && e.message.includes('sips')) {
        console.warn('sips not found (macOS). Install ImageMagick and use: convert -resize 1200x filename.jpg filename.jpg');
      } else {
        console.warn(`Skip ${file}:`, e.message);
      }
    }
  }
}

optimize();
