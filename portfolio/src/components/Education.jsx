import { ExternalLink, GraduationCap, Building2, BookOpen } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const { education } = profile;

  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-shell section-pad">
        <ScrollReveal>
          <SectionHeading
            label="Education"
            title="Academic Background"
            description="Formal education that anchors my work in information technology and applied computing."
          />
        </ScrollReveal>

        <ScrollReveal>
          <article className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-white shadow-glow">
                <GraduationCap size={30} aria-hidden="true" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    Bachelor Degree
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {education.degree}
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
                      <Building2 size={14} className="text-accent" aria-hidden="true" />
                      University
                    </p>
                    <p className="text-sm font-medium text-gray-100">{education.university}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
                      <BookOpen size={14} className="text-accent" aria-hidden="true" />
                      Specialization
                    </p>
                    <p className="text-sm font-medium text-gray-100">
                      {education.specialization}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-400">
                  Department: <span className="text-gray-200">{education.department}</span>
                </p>
              </div>

              <a
                href={education.universityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-fit"
              >
                University Website
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
