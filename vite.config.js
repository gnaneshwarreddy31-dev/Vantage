import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works when GitHub Pages serves it from
  // https://<you>.github.io/<repo-name>/ instead of the domain root.
  base: "./",
});
