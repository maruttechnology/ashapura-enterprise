import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
import fs from 'node:fs';
import path from 'node:path';

// Automatically ensure public/ favicon files match the brand logo
try {
  const root = process.cwd();
  const logoSrc = path.join(root, 'src', 'assets', 'logo.png');
  const publicDir = path.join(root, 'public');
  if (fs.existsSync(logoSrc)) {
    fs.copyFileSync(logoSrc, path.join(publicDir, 'favicon.png'));
    fs.copyFileSync(logoSrc, path.join(publicDir, 'favicon.ico'));
    fs.copyFileSync(logoSrc, path.join(publicDir, 'logo.png'));
  }
} catch (e) {
  console.error('Favicon copy failed:', e);
}

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()]
});