// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config/
export default defineConfig({
  site: 'https://az-la.github.io',
  base: '/world-of-fablea/', // MUST match your repository name exactly
  vite: {
    plugins: [tailwindcss()],
  },
});
