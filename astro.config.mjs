import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  srcDir: './astro',
  site: 'https://garymckeever.us',
  output: 'static',
  integrations: [sitemap()]
});
