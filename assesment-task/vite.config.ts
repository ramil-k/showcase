import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => ({
  base: mode === "pages" ? "/showcase" : undefined,
  build: mode === "pages" ? { outDir: "../docs" } : undefined,
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
}));
