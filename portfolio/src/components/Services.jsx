import {
  Code2,
  Smartphone,
  Server,
  BarChart3,
  Palette,
  PenLine,
  ArrowUpRight,
} from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const icons = {
  Code2,
  Smartphone,
  Server,
  BarChart3,
  Palette,
  PenLine,
};

export default function Services() {
  return (
    <section id="services" className="relative section-y">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-shell section-pad">
        <ScrollReveal>
          <SectionHeading
            label="My Services"
            title="What I Do"
            description="From web and mobile products to backend systems, data insights, and creative design — I help turn ideas into polished digital experiences."
            align="center"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon] || Code2;
            return (
              <ScrollReveal key={service.id} delay={index * 0.05}>
                <article className="glass group relative flex h-full flex-col rounded-2xl p-5 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow-sm sm:p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition group-hover:bg-accent group-hover:text-white sm:mb-5 sm:h-12 sm:w-12">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-white sm:mb-3 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400 sm:mb-6">
                    {service.description}
                  </p>
                  <div className="flex justify-end">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-accent transition group-hover:border-accent/40 group-hover:bg-accent/10 sm:h-9 sm:w-9">
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
