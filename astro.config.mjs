// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});

/*
export default defineConfig({
  integrations: [
    react(),
    {
      name: "importmap-externals",
      hooks: {
        "astro:build:setup": ({ vite, target }) => {
          if (target === "client") {
            vite.build.rollupOptions["external"] = ["react", "react-dom"];
          }
        },
      },
    },
  ],
});
*/
