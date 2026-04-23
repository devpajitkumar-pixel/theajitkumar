"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { services } from "@/data/portfolioData";
import { motion } from "framer-motion";

function serviceIcon(title: string) {
  if (title === "Full-Stack Development") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 6L10 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (title === "Business Application Systems") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 9H16M8 13H16M8 17H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (title === "Dashboard Systems") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V9M12 19V5M19 19V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (title === "API Development") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12H20M14 6L20 12L14 18M10 6L4 12L10 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (title === "VPS Deployment") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7V12C4 16.5 7 20.5 12 22C17 20.5 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Services() {
  return (
    <Section id="services" title="What I Do" subtitle="Services focused on business outcomes">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <AnimatedReveal key={service.title} delay={index * 0.05}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                {serviceIcon(service.title)}
              </div>
              <h3 className="text-base font-semibold text-[var(--heading)] sm:text-lg">{service.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">{service.description}</p>
            </motion.div>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
