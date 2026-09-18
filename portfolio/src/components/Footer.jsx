import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import { assetUrl } from "../utils/assetUrl";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-navy-900/60">
      <div className="container-shell section-pad py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <a href="#home" className="mb-4 inline-flex items-center gap-3">
              <span className="flex h-12 w-14 shrink-0 items-center justify-center sm:h-14 sm:w-16">
                <img
                  src={assetUrl("/brand/asmo-icon.png")}
                  alt="ASMO"
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </span>
              <span>
                <span className="block font-display text-lg font-bold tracking-wide text-white">
                  ASMA
                </span>
                <span className="block text-xs text-gray-400">
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-white"
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-accent"
            >
              Back to top
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs uppercase tracking-[0.28em] text-gray-500">
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
