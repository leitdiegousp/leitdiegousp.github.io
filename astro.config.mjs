import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://leitdiegousp.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    metaTags(),
    sitemap(),
  ],
  image: {
    domains: ["media.graphassets.com"],
  },
});