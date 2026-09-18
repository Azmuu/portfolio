import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const projectTypes = [
  "Web Development",
  "Mobile App",
  "Backend / API",
  "Data Analysis",
  "Graphic Design",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry${form.projectType ? ` — ${form.projectType}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType || "N/A"}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-shell section-pad">
        <div className="grid gap-10 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-5">
            <SectionHeading
              label="Get In Touch"
              title="Let's Build Something Amazing Together"
              description="Have a project in mind? Let's discuss how we can turn your ideas into a modern digital solution."
            />

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-accent/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </span>
                  <span className="text-sm font-medium text-white">{profile.email}</span>
                </span>
              </a>

              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">
                    Location
                  </span>
                  <span className="text-sm font-medium text-white">{profile.location}</span>
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-accent/40 hover:text-accent"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-3xl p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="input-field resize-none"
                />
              </div>

              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Send Message
                <Send size={16} aria-hidden="true" />
              </button>

              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                This form opens your email client with a pre-filled message. No messages
                are stored on this website until an email service is connected.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
