import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDart,
  SiPython,
  SiPandas,
  SiGit,
  SiGithub,
  SiDocker,
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";
import {
  Database,
  Server,
  FileSpreadsheet,
  BarChart3,
  Sparkles,
  MessageCircle,
  Headphones,
  Keyboard,
  PenTool,
  Share2,
  Layers,
  ChartPie,
  Code2,
} from "lucide-react";
import { skillCategories } from "../data/skills";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const skillIcons = {
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { Icon: SiNodedotjs, color: "#68A063" },
  "Express.js": { Icon: SiExpress, color: "#FFFFFF" },
  "Java Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss3, color: "#1572B6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  MongoDB: { Icon: SiMongodb, color: "#4DB33D" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  SQL: { Icon: Database, color: "#FF6B00" },
  "REST APIs": { Icon: Server, color: "#FF6B00" },
  "Database Design": { Icon: Layers, color: "#FF6B00" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  Dart: { Icon: SiDart, color: "#0175C2" },
  "Microsoft Excel": { Icon: FileSpreadsheet, color: "#217346" },
  "Data Analysis": { Icon: BarChart3, color: "#FF6B00" },
  "Data Cleaning": { Icon: Sparkles, color: "#FF6B00" },
  "Data Visualization": { Icon: BarChart3, color: "#F59E0B" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Pandas: { Icon: SiPandas, color: "#150458" },
  "Power BI": { Icon: ChartPie, color: "#F2C811" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "VS Code": { Icon: Code2, color: "#007ACC" },
  "Graphic Design": { Icon: PenTool, color: "#FF6B00" },
  "Content Creation": { Icon: Share2, color: "#FF6B00" },
  "Social Marketing": { Icon: Share2, color: "#FF6B00" },
  Communication: { Icon: MessageCircle, color: "#FF6B00" },
  "Customer Service": { Icon: Headphones, color: "#FF6B00" },
  "Data Entry": { Icon: Keyboard, color: "#FF6B00" },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="container-shell section-pad">
        <ScrollReveal>
          <SectionHeading
            label="My Skills"
            title="Technical Skills"
            description="A practical toolkit spanning development, databases, mobile, data analysis, and creative work."
            align="center"
          />
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.04}>
              <article className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {category.skills.length}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const meta = skillIcons[skill];
                    const Icon = meta?.Icon;
                    return (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-navy-950/60 px-3 py-2 text-xs text-gray-200 transition hover:border-accent/30"
                      >
                        {Icon ? (
                          <Icon
                            className="h-3.5 w-3.5 shrink-0"
                            style={meta.color ? { color: meta.color } : undefined}
                            aria-hidden="true"
                          />
                        ) : null}
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
