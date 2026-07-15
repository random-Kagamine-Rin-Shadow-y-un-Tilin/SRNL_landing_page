// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
 enabled: false,
},

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
   site: "https://random-Kagamine-Rin-Shadow-y-un-Tilin.github.io",
  base: "/SRNL_landing_page",
});