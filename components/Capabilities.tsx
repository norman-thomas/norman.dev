"use client";

import { Reveal } from "./Reveal";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      {/* faint top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Work with me</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                The same hands that built these can build yours.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist-muted">
                I take on a small number of freelance and advisory engagements —
                the kind where shipping something real, fast, and well-made
                matters more than headcount.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal
                key={c.title}
                as="li"
                delay={i * 0.06}
                className="group bg-ink p-7 transition-colors duration-300 hover:bg-ink-soft sm:p-8"
              >
                <span className="font-mono text-xs text-lime/70">
                  0{i + 1}
                </span>
                <p className="mt-4 text-lg font-semibold text-mist">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist-muted">
                  {c.desc}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
