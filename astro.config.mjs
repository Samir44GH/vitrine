import { defineConfig } from 'astro/config';

// Adresse de publication. Pour un dépôt nommé « vitrine » :
//   https://samir44gh.github.io/vitrine/
// Pour le dépôt spécial « samir44gh.github.io » : mettre BASE_PATH="/" (voir README).
const site = process.env.SITE_URL ?? 'https://samir44gh.github.io';
const base = process.env.BASE_PATH ?? '/vitrine';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
