import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Vibra-Web/",   // IMPORTANT: repo name
  build: {
    outDir: "docs"       // 👈 change from dist to docs
  }
});