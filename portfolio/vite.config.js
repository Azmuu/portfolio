import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Required for https://azmuu.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
