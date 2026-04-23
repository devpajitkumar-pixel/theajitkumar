"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { projects } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Image from "next/image";

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Systems built for real operational impact">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedReveal key={project.title} delay={index * 0.07}>
            <article className="h-full rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-alt)] to-[var(--surface)] p-6">
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="relative mb-5 overflow-hidden rounded-xl border border-[var(--border)]"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={700}
                    className="h-48 w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_55%)]"
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-[var(--accent-soft)] to-transparent"
                  animate={{ x: ["-120%", "620%"] }}
                  transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.3, ease: "easeInOut" }}
                />
              </motion.div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">{project.tagline}</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--heading)] sm:text-2xl">{project.title}</h3>
              <p className="mt-4 text-sm text-[var(--muted)] sm:text-base">{project.description}</p>
              <p className="mt-4 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-2 text-xs text-[var(--accent-strong)] sm:text-sm">
                Impact: {project.impact}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--foreground)]">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-xs text-[var(--foreground)] sm:text-sm">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
