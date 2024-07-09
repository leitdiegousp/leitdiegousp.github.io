import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://leitdiegousp.github.io/cosmetic_page",
  base: '/cosmetic_page/', // Substitua "cosmetic_page" pelo nome do seu repositório
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    metaTags(),
    sitemap(),
  ],
  image: {
    domains: ["https://media.graphassets.com"],
  },
});