import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Local: http://localhost:5173/
// GitHub Pages: https://azmuu.github.io/portfolio/
const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  plugins: [react()],
  base,
});
