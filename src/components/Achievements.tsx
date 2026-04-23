"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const confetti = [
  { left: "2%", delay: 0, duration: 7.2, drift: 32, color: "bg-amber-300/80" },
  { left: "9%", delay: 0.7, duration: 8.1, drift: 28, color: "bg-rose-300/80" },
  { left: "16%", delay: 1.4, duration: 7.6, drift: 30, color: "bg-cyan-300/80" },
  { left: "24%", delay: 0.4, duration: 8.4, drift: 34, color: "bg-lime-300/75" },
  { left: "31%", delay: 1.1, duration: 7.9, drift: 26, color: "bg-violet-300/75" },
  { left: "39%", delay: 0.2, duration: 8.6, drift: 36, color: "bg-orange-300/85" },
  { left: "46%", delay: 1.6, duration: 7.4, drift: 24, color: "bg-fuchsia-300/75" },
  { left: "54%", delay: 0.9, duration: 8.2, drift: 30, color: "bg-emerald-300/75" },
  { left: "62%", delay: 1.8, duration: 8.8, drift: 34, color: "bg-sky-300/80" },
  { left: "70%", delay: 0.6, duration: 7.7, drift: 26, color: "bg-yellow-300/80" },
  { left: "78%", delay: 1.3, duration: 8.9, drift: 32, color: "bg-pink-300/80" },
  { left: "86%", delay: 0.1, duration: 7.5, drift: 28, color: "bg-red-300/75" },
  { left: "94%", delay: 1.9, duration: 8.3, drift: 30, color: "bg-teal-300/80" },
];

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Recognition" subtitle="Proof of impact and ownership">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 z-10">
          {confetti.map((piece, index) => (
            <motion.span
              key={`${piece.left}-${piece.delay}`}
              className={`absolute inline-block h-3 w-2 rounded-[999px] ${piece.color}`}
              style={{ left: piece.left, top: "-12%" }}
              animate={{
                y: ["0%", "138%"],
                x: [0, piece.drift, -piece.drift * 0.55, piece.drift * 0.25],
                rotate: [0, 120, 220, 360],
                opacity: [0, 0.95, 0.82, 0],
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: index % 2 === 0 ? 0.35 : 0.1,
              }}
            />
          ))}
        </div>

        <AnimatedReveal>
          <div className="relative z-20 overflow-hidden rounded-2xl border border-[var(--accent)]/45 bg-gradient-to-br from-[var(--accent-soft)] via-[#2a2110]/30 to-transparent p-8 shadow-[0_0_80px_rgba(212,175,55,0.2)]">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-2xl" />
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-strong)] sm:text-sm sm:tracking-[0.2em]">🏆 Rising Star Award – Shakti Tech</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              Awarded for outstanding performance, ownership, and contribution in building scalable business systems and
              delivering impactful solutions.
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
