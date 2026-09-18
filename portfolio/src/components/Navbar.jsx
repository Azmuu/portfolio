import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";
import { assetUrl } from "../utils/assetUrl";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell section-pad">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label={`${profile.firstName} home`}
          >
            <span className="flex h-12 w-14 shrink-0 items-center justify-center sm:h-14 sm:w-16">
              <img
                src={assetUrl("/brand/asmo-icon.png")}
                alt="ASMO"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold tracking-wide text-white">
                ASMA
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-gray-400 sm:block">
                Developer • Analyst • Designer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive ? "text-accent" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isActive ? (
                    <span
                      className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  ) : null}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Let&apos;s Talk
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy-950/95 backdrop-blur-xl lg:hidden">
          <nav className="container-shell section-pad flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a href="#contact" onClick={handleNavClick} className="btn-primary mt-3 w-full">
              Let&apos;s Talk
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
