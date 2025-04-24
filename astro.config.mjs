import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://cybernest-project.github.io",
  integrations: [tailwind()],
  base: 'cybernest-website',
});