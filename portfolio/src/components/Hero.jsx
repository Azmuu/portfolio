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
  "-left-3 top-[6%] sm:-left-6 animate-float",
  "-right-3 top-[4%] sm:-right-6 animate-float-delayed",
  "-left-5 top-[38%] sm:-left-10 animate-float-delayed",
  "-right-5 top-[36%] sm:-right-10 animate-float",
  "-left-3 bottom-[22%] sm:-left-8 animate-float",
  "-right-3 bottom-[20%] sm:-right-8 animate-float-delayed",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="container-shell section-pad relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Hello, I&apos;m
            </span>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Asma <span className="italic text-accent">Abdirisak</span>
          </h1>

          <p className="text-base font-medium text-gray-200 sm:text-lg">
            {profile.shortTitle}
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            {profile.heroDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Hire Me
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#projects" className="btn-secondary">
              <Github size={16} aria-hidden="true" />
              View My Work
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
              <span className="relative flex h-2.5 w-2.5">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-8 rounded-full bg-radial-glow blur-2xl" />

          <div className="relative px-10 pb-16 pt-6 sm:px-14 lg:px-16">
            <div className="relative z-0 overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900 shadow-card ring-1 ring-accent/25">
              <div className="relative aspect-[3/4]">
                <img
                  src={assetUrl("/profile/asma.png")}
                  alt="Asma Abdirisak"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </div>
            </div>

            <div className="relative z-20 mt-5 text-center">
              <p className="font-display text-xl font-semibold text-white sm:text-2xl">
                Asma Abdirisak
              </p>
              <p className="mt-1 text-sm text-gray-400">Full-Stack Developer</p>
            </div>

            {floatingTech.map((tech, index) => {
              const Icon = iconMap[tech.name];
              return (
                <div
                  key={tech.name}
                  className={`pointer-events-none absolute z-30 ${badgePositions[index]}`}
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
