import {
  GraduationCap,
  Mail,
  MapPin,
  User,
  Briefcase,
  Layers,
  Award,
  BookOpen,
} from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { certificates } from "../data/certificates";
import { skillCategories } from "../data/skills";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const techCount = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

const stats = [
  {
    label: "Featured Projects",
    value: `${projects.length}`,
    icon: Briefcase,
  },
  {
    label: "Technologies",
    value: `${techCount}+`,
    icon: Layers,
  },
  {
    label: "Certificates",
    value: `${certificates.length}`,
    icon: Award,
  },
  {
    label: "Bachelor's Degree",
    value: "IT",
    icon: BookOpen,
  },
];

const infoItems = [
  { label: "Name", value: profile.name, icon: User },
  { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: "Location", value: profile.location, icon: MapPin },
  {
    label: "Education",
    value: profile.education.degree,
    icon: GraduationCap,
  },
  {
    label: "University",
    value: profile.education.university,
    icon: BookOpen,
  },
  {
    label: "Availability",
    value: "Open to opportunities",
    icon: Briefcase,
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-y">
      <div className="container-shell section-pad">
        <ScrollReveal>
          <SectionHeading
            label="About Me"
            title="Turning Ideas into Digital Solutions"
            description="I combine full-stack engineering, data analysis, mobile development, and design to craft practical digital products that solve real problems."
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <ScrollReveal className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7">
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              {profile.intro}
            </p>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              Based in {profile.location}, I focus on building modern web systems,
              cross-platform mobile experiences, and data-informed solutions — while
              bringing a designer&apos;s eye for clarity and polish.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass group rounded-xl p-3.5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm sm:rounded-2xl sm:p-4"
                  >
                    <Icon className="mb-2.5 h-4 w-4 text-accent sm:mb-3 sm:h-5 sm:w-5" aria-hidden="true" />
                    <p className="font-display text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-snug text-gray-400 sm:text-xs">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="min-w-0 lg:col-span-5">
            <div className="glass-strong relative overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <h3 className="mb-5 font-display text-lg font-semibold text-white sm:mb-6 sm:text-xl">
                Profile Details
              </h3>
              <ul className="space-y-4">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-wider text-gray-500">
                          {item.label}
                        </span>
                        <span className="block break-words text-sm font-medium text-gray-100">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-start gap-3 transition hover:text-accent"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-3">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 font-display text-xl font-semibold italic text-accent sm:mt-8 sm:text-2xl">
                Asma Abdirisak
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
