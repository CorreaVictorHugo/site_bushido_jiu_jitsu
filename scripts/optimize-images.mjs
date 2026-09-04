import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'assets/hero-bushido.png';
const outputDir = 'assets';

const widths = [480, 800, 1200, 1600, 2000];

async function optimize() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);

  // WebP
  for (const w of widths) {
    if (w > metadata.width) continue;
    await image
      .resize(w, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(outputDir, `hero-bushido-${w}w.webp`));
    console.log(`✓ WebP ${w}w`);
  }

  // AVIF
  for (const w of widths) {
    if (w > metadata.width) continue;
    await image
      .resize(w, null, { withoutEnlargement: true })
      .avif({ quality: 55, speed: 4 })
      .toFile(path.join(outputDir, `hero-bushido-${w}w.avif`));
    console.log(`✓ AVIF ${w}w`);
  }

  // Full-size WebP (for preload)
  await image.webp({ quality: 85, effort: 6 }).toFile(path.join(outputDir, 'hero-bushido.webp'));
  console.log('✓ Full WebP');

  // Full-size AVIF
  await image.avif({ quality: 60, speed: 4 }).toFile(path.join(outputDir, 'hero-bushido.avif'));
  console.log('✓ Full AVIF');

  // OG image (1200x630)
  await sharp(inputPath)
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, 'og-bushido.webp'));
  console.log('✓ OG image');

  console.log('\nDone!');
}

optimize().catch(console.error);