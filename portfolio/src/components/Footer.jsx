import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import { assetUrl } from "../utils/assetUrl";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-navy-900/60">
      <div className="container-shell section-pad py-10 sm:py-12">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_1fr_auto]">
          <div className="min-w-0">
            <a href="#home" className="mb-4 inline-flex max-w-full items-center gap-3">
              <span className="flex h-11 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-16">
                <img
                  src={assetUrl("/brand/asmo-icon.png")}
                  alt="ASMO"
                  className="h-9 w-auto max-w-full object-contain sm:h-12"
                />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-base font-bold tracking-wide text-white sm:text-lg">
                  ASMA
                </span>
                <span className="block text-[11px] text-gray-400 sm:text-xs">
                  Developer • Data Analyst • Designer
                </span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Building modern digital solutions with clean engineering, useful data
              insights, and creative design.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.25em]">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg py-2.5 text-sm text-gray-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href="#home"
              className="inline-flex min-h-[2.75rem] items-center gap-2 text-sm text-gray-400 transition hover:text-accent"
            >
              Back to top
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:mt-10 sm:flex-row sm:gap-4 sm:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.28em]">
            Code • Analyze • Create • Build
          </p>
          <p className="text-xs text-gray-500">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
