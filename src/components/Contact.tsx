"use client";

import { FormEvent, useState } from "react";
import { Section } from "@/components/Section";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error ?? "Could not send message. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something that creates measurable value">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-[var(--border)] bg-[#0d0d0d] px-4 py-3 text-xs text-[var(--heading)] outline-none transition focus:border-[var(--accent)] sm:text-sm"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-[var(--border)] bg-[#0d0d0d] px-4 py-3 text-xs text-[var(--heading)] outline-none transition focus:border-[var(--accent)] sm:text-sm"
          />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder="Phone Number"
            required
            className="w-full rounded-xl border border-[var(--border)] bg-[#0d0d0d] px-4 py-3 text-xs text-[var(--heading)] outline-none transition focus:border-[var(--accent)] sm:text-sm"
          />
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            placeholder="Tell me about your project"
            required
            className="w-full rounded-xl border border-[var(--border)] bg-[#0d0d0d] px-4 py-3 text-xs text-[var(--heading)] outline-none transition focus:border-[var(--accent)] sm:text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-semibold text-[#1a1408] transition hover:bg-[var(--accent-strong)] sm:text-sm"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" ? (
            <p className="text-xs text-red-300 sm:text-sm">
              {statusMessage}
            </p>
          ) : null}
        </form>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
          <h3 className="text-lg font-semibold text-[var(--heading)] sm:text-xl">Direct Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-[var(--muted)] sm:text-base">
            <p>Email: devp.ajitkumar@gmail.com</p>
            <p>Phone: +91 8406055367</p>
            <p>
              LinkedIn:{" "}
              <a
                className="text-[var(--accent-strong)] hover:text-[var(--heading)]"
                href="https://www.linkedin.com/in/ajit-kumar-6584b13aa/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ajit-kumar-6584b13aa
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a className="text-[var(--accent-strong)] hover:text-[var(--heading)]" href="https://github.com/devpajitkumar-pixel" target="_blank" rel="noreferrer">
                github.com/devpajitkumar-pixel
              </a>
            </p>
          </div>
        </div>
      </div>

      {status === "success" ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/65 px-4">
          <div className="w-full max-w-md rounded-2xl border border-[var(--accent)]/40 bg-[var(--surface)] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <p className="text-xl text-[var(--accent-strong)]">Thank You!</p>
            <p className="mt-3 text-sm text-[var(--foreground)]">{statusMessage}</p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setStatusMessage("");
              }}
              className="mt-5 rounded-full bg-[var(--accent)] px-6 py-2 text-xs font-semibold text-[#1a1408] transition hover:bg-[var(--accent-strong)] sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
