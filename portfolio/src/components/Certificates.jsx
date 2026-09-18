import { Award, Building2 } from "lucide-react";
import { certificates } from "../data/certificates";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Certificates() {
  return (
    <section id="certificates" className="relative section-y">
      <div className="container-shell section-pad">
        <ScrollReveal>
          <SectionHeading
            label="Certifications"
            title="My Certificates"
            description="Professional training that strengthens my full-stack, data, design, and AI foundations."
            align="center"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.05}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 sm:mb-5 sm:h-12 sm:w-12">
                  <Award size={22} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-white sm:text-lg">
                  {cert.title}
                </h3>
                <p className="mb-3 inline-flex items-center gap-2 text-sm text-accent">
                  <Building2 size={14} className="shrink-0" aria-hidden="true" />
                  <span className="min-w-0">{cert.issuer}</span>
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-400 sm:mb-5">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-navy-950/50 px-2.5 py-1 text-[11px] text-gray-300 sm:px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
