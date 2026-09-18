import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`theme-toggle inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 hover:border-accent/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
