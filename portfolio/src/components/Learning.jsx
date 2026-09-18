import { Sparkles } from "lucide-react";
import { learningTopics } from "../data/skills";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Learning() {
  return (
    <section id="learning" className="relative section-y !py-12 sm:!py-16 lg:!py-20">
      <div className="container-shell section-pad">
        <ScrollReveal>
          <SectionHeading
            label="Growth"
            title="Currently Learning"
            description="I continuously expand my skills across data analysis, full-stack development, and modern product technologies."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass mx-auto flex max-w-5xl flex-wrap justify-center gap-2 rounded-2xl p-4 sm:gap-3 sm:rounded-3xl sm:p-8">
            {learningTopics.map((topic) => (
              <span
                key={topic}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-navy-950/70 px-3 py-2 text-xs text-gray-200 transition hover:border-accent/40 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <Sparkles size={14} className="shrink-0 text-accent" aria-hidden="true" />
                <span className="min-w-0 break-words">{topic}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
