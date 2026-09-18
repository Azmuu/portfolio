import { Sparkles } from "lucide-react";
import { learningTopics } from "../data/skills";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Learning() {
  return (
    <section id="learning" className="relative py-16 sm:py-20">
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
          <div className="glass mx-auto flex max-w-5xl flex-wrap justify-center gap-3 rounded-3xl p-6 sm:p-8">
            {learningTopics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-navy-950/70 px-4 py-2.5 text-sm text-gray-200 transition hover:border-accent/40 hover:text-white"
              >
                <Sparkles size={14} className="text-accent" aria-hidden="true" />
                {topic}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
