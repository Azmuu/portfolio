import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFlutter,
  SiJavascript,
} from "react-icons/si";
import { floatingTech, profile } from "../data/profile";
import { assetUrl } from "../utils/assetUrl";

const iconMap = {
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Python: SiPython,
  Flutter: SiFlutter,
  JavaScript: SiJavascript,
};

const badgePositions = [
  "left-0 top-[6%] animate-float",
  "right-0 top-[4%] animate-float-delayed",
  "left-0 top-[38%] animate-float-delayed",
  "right-0 top-[36%] animate-float",
  "left-1 bottom-[16%] animate-float",
  "right-1 bottom-[14%] animate-float-delayed",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden section-y pt-24 sm:pt-28 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="container-shell section-pad relative grid items-center gap-10 lg:grid-cols-2 lg:gap-6 xl:gap-8">
        <div className="min-w-0 space-y-5 sm:space-y-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs sm:tracking-[0.3em]">
              Hello, I&apos;m
            </span>
          </div>

          <h1 className="font-display text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Asma{" "}
            <span className="italic text-accent">Abdirisak</span>
          </h1>

          <p className="text-sm font-medium leading-relaxed text-gray-200 sm:text-base md:text-lg">
            {profile.shortTitle}
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            {profile.heroDescription}
          </p>

          <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <a href="#contact" className="btn-primary w-full xs:w-auto">
              Hire Me
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#projects" className="btn-secondary w-full xs:w-auto">
              <Github size={16} aria-hidden="true" />
              View My Work
            </a>
          </div>

          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-gray-300 sm:px-4 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 animate-pulse-dot rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] justify-self-center sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] lg:justify-self-start xl:max-w-[400px]">
          <div className="pointer-events-none absolute inset-6 rounded-full bg-radial-glow blur-2xl opacity-90" />

          <div className="relative px-8 sm:px-10 lg:px-12">
            <div className="relative z-0 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-card ring-1 ring-accent/25 sm:rounded-3xl">
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={assetUrl("/profile/asma.png")}
                  alt="Asma Abdirisak"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="relative z-20 mt-4 text-center sm:mt-5">
              <p className="font-display text-lg font-semibold text-white sm:text-xl">
                Asma Abdirisak
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">Full-Stack Developer</p>
            </div>

            {/* Mobile: tech chips */}
            <div className="relative z-20 mt-3 flex flex-wrap justify-center gap-2 lg:hidden">
              {floatingTech.map((tech) => {
                const Icon = iconMap[tech.name];
                return (
                  <span
                    key={tech.name}
                    className="glass-strong inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-medium text-white"
                  >
                    {Icon ? (
                      <Icon style={{ color: tech.color }} className="h-3 w-3" aria-hidden="true" />
                    ) : null}
                    {tech.name}
                  </span>
                );
              })}
            </div>

            {/* Desktop: floating badges */}
            {floatingTech.map((tech, index) => {
              const Icon = iconMap[tech.name];
              return (
                <div
                  key={tech.name}
                  className={`pointer-events-none absolute z-30 hidden lg:block ${badgePositions[index]}`}
                >
                  <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-2 shadow-glow-sm">
                    {Icon ? (
                      <Icon style={{ color: tech.color }} className="h-4 w-4" aria-hidden="true" />
                    ) : null}
                    <span className="text-xs font-medium text-white">{tech.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
