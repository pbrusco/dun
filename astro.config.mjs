import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// When custom domain is ready:
//   1. Create public/CNAME with content: dunarquitectura.ar
//   2. Change site to 'https://dunarquitectura.ar'
//   3. Change base to '/'
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: true }),
  ],
  site: 'https://pbrusco.github.io/dun',
  base: '/dun',
});
