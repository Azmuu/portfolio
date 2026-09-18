/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05070d",
          900: "#080b14",
          800: "#0c1220",
          700: "#121a2b",
        },
        accent: {
          DEFAULT: "#FF6B00",
          soft: "#FF8533",
          muted: "rgba(255, 107, 0, 0.15)",
          glow: "rgba(255, 107, 0, 0.35)",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Manrope"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 107, 0, 0.25)",
        "glow-sm": "0 0 20px rgba(255, 107, 0, 0.2)",
        card: "0 20px 50px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(255,107,0,0.18), transparent 65%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1s infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
