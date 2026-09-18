import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, LayoutTemplate } from "lucide-react";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { assetUrl } from "../utils/assetUrl";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

function ProjectMedia({ project }) {
  const images = project.images || [];
  const [active, setActive] = useState(0);
  const hasImages = images.length > 0;

  if (!hasImages) {
    return (
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10"
        style={{
          background: `linear-gradient(145deg, ${project.accent}33, rgba(8,11,20,0.95) 55%, rgba(12,18,32,1))`,
        }}
      >
        <div className="absolute inset-0 bg-grid-fade bg-[size:28px_28px] opacity-30" />
        <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center sm:px-6">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/30 text-white backdrop-blur sm:h-14 sm:w-14"
            style={{ boxShadow: `0 0 30px ${project.accent}55` }}
          >
            <LayoutTemplate size={22} aria-hidden="true" />
          </span>
          <p className="max-w-xs font-display text-sm font-semibold text-white/90">
            {project.title}
          </p>
        </div>
      </div>
    );
  }

  const current = images[active];

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[16/11] overflow-hidden border-b border-white/10 bg-navy-950/80">
      <img
        src={assetUrl(current.src)}
        alt={current.alt}
        className="h-full w-full object-contain object-center p-1.5 transition duration-300 sm:p-2"
      />

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous project screenshot"
            className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:bg-accent sm:left-3 sm:h-9 sm:w-9"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next project screenshot"
            className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:bg-accent sm:right-3 sm:h-9 sm:w-9"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show screenshot ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition ${
                  index === active ? "w-5 bg-accent" : "w-2 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-y">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-shell section-pad">
        <div className="mb-2 flex flex-col gap-4 sm:mb-0 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <ScrollReveal className="min-w-0 flex-1">
            <SectionHeading
              label="Featured Projects"
              title="My Recent Work"
              description="Selected full-stack systems focused on real workflows, clean architecture, and practical user needs."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="shrink-0 sm:mb-12">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full whitespace-nowrap sm:w-auto"
            >
              View All Projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </ScrollReveal>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow-sm sm:rounded-3xl">
                <ProjectMedia project={project} />

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="mb-2 font-display text-lg font-semibold text-white sm:mb-3 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400 sm:mb-5">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-300 sm:px-3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2.5 xs:flex-row xs:flex-wrap">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !min-h-[2.75rem] flex-1 !px-4 !py-2.5 text-xs xs:flex-none"
                      >
                        View Project
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !min-h-[2.75rem] flex-1 !px-4 !py-2.5 text-xs xs:flex-none"
                      >
                        View on GitHub
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !min-h-[2.75rem] flex-1 !px-4 !py-2.5 text-xs xs:flex-none"
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <Github size={14} aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
