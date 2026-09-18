import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFlutter,
  SiJavascript,
} from "react-icons/si";
import { profile } from "../data/profile";
import { assetUrl } from "../utils/assetUrl";

const iconMap = {
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Python: SiPython,
  Flutter: SiFlutter,
  JavaScript: SiJavascript,
};

/** Flutter + JS animate into the top corners; others sit mid/bottom */
const desktopBadges = [
  {
    name: "Flutter",
    color: "#02569B",
    className: "-left-2 top-[6%]",
    initial: { opacity: 0, y: 70, x: -12 },
    delay: 0.25,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    className: "-right-2 top-[4%]",
    initial: { opacity: 0, y: 70, x: 12 },
    delay: 0.4,
  },
  {
    name: "MongoDB",
    color: "#4DB33D",
    className: "-left-4 top-[40%]",
    initial: { opacity: 0, x: -20 },
    delay: 0.15,
  },
  {
    name: "Python",
    color: "#3776AB",
    className: "-right-4 top-[38%]",
    initial: { opacity: 0, x: 20 },
    delay: 0.2,
  },
  {
    name: "React.js",
    color: "#61DAFB",
    className: "-left-2 bottom-[14%]",
    initial: { opacity: 0, y: 16 },
    delay: 0.45,
  },
  {
    name: "Node.js",
    color: "#68A063",
    className: "-right-2 bottom-[12%]",
    initial: { opacity: 0, y: 16 },
    delay: 0.55,
  },
];

const mobileChips = ["React.js", "Node.js", "MongoDB", "Python", "Flutter", "JavaScript"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden section-y pt-24 sm:pt-28 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="container-shell section-pad relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-4 xl:gap-6">
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

        <div className="relative mx-auto w-full max-w-[360px] justify-self-center sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] lg:-translate-x-6 lg:justify-self-start xl:max-w-[520px] xl:-translate-x-10">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-radial-glow blur-2xl opacity-90" />

          <div className="relative px-12 sm:px-14 lg:px-16">
            <div className="relative z-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card ring-1 ring-accent/20 sm:rounded-3xl">
              <div className="relative aspect-[3/4] w-full bg-white">
                <img
                  src={`${assetUrl("/profile/asma.png")}?v=6`}
                  alt="Asma Abdirisak"
                  className="absolute inset-0 h-full w-full object-cover object-[center_8%]"
                />
              </div>
            </div>

            <div className="relative z-20 mt-4 text-center sm:mt-5">
              <p className="font-display text-lg font-semibold text-white sm:text-xl md:text-2xl">
                Asma Abdirisak
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">Full-Stack Developer</p>
            </div>

            {/* Mobile: tech chips */}
            <div className="relative z-20 mt-3 flex flex-wrap justify-center gap-2 lg:hidden">
              {mobileChips.map((name) => {
                const Icon = iconMap[name];
                const color = desktopBadges.find((b) => b.name === name)?.color;
                return (
                  <span
                    key={name}
                    className="glass-strong inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-medium text-white"
                  >
                    {Icon ? (
                      <Icon style={{ color }} className="h-3 w-3" aria-hidden="true" />
                    ) : null}
                    {name}
                  </span>
                );
              })}
            </div>

            {/* Desktop: floating badges — Flutter & JS animate into top corners */}
            {desktopBadges.map((badge) => {
              const Icon = iconMap[badge.name];
              return (
                <motion.div
                  key={badge.name}
                  className={`pointer-events-none absolute z-30 hidden lg:block ${badge.className}`}
                  initial={badge.initial}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: badge.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="glass-strong flex animate-float items-center gap-2 rounded-full px-3 py-2 shadow-glow-sm">
                    {Icon ? (
                      <Icon style={{ color: badge.color }} className="h-4 w-4" aria-hidden="true" />
                    ) : null}
                    <span className="text-xs font-medium text-white">{badge.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
