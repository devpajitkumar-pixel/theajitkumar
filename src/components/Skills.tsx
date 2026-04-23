"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { skillCategories } from "@/data/portfolioData";
import { motion } from "framer-motion";

function categoryIcon(title: string) {
  if (title === "Frontend") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 6L10 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (title === "Backend") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3.5" y="14" width="17" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 7.5H7.01M7 16.5H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (title === "Database") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 6V12C4.5 13.7 7.86 15 12 15C16.14 15 19.5 13.7 19.5 12V6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 12V18C4.5 19.7 7.86 21 12 21C16.14 21 19.5 19.7 19.5 18V12" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (title === "DevOps") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L14.2 7.5L19 8.2L15.5 11.5L16.3 16.2L12 14L7.7 16.2L8.5 11.5L5 8.2L9.8 7.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Engineering capabilities across the full stack">
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <AnimatedReveal key={category.title} delay={index * 0.06}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 4, 0, -4, 0] }}
                  transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                >
                  {categoryIcon(category.title)}
                </motion.span>
                <h3 className="text-base font-semibold text-[var(--heading)] sm:text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.15 }}
                    className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--accent-strong)] sm:text-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
