"use client";

import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function Approach() {
  return (
    <section id="approach" className="relative py-28 sm:py-36">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-6">The through-line</p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="max-w-4xl text-pretty text-2xl font-medium leading-snug text-mist sm:text-4xl sm:leading-[1.25]">
            {site.throughLine.split("—")[0]}
            <span className="text-mist-muted">
              {site.throughLine.includes("—")
                ? "— " + site.throughLine.split("—").slice(1).join("—")
                : ""}
            </span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-3">
          {[
            {
              k: "How I work",
              v: "Solo and end to end. Design, engineering, and product judgment in one head — fewer handoffs, faster from idea to shipped.",
            },
            {
              k: "What I bias toward",
              v: "Small surface, deep capability. Products that feel simple but do something genuinely hard underneath.",
            },
            {
              k: "Where AI fits",
              v: "A tool, not a tagline. I reach for AI when it makes a product meaningfully better — and leave it out when it doesn't.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.k}
              delay={i * 0.08}
              className="bg-ink p-7 sm:p-8"
            >
              <p className="eyebrow mb-3 text-lime/80">{c.k}</p>
              <p className="text-sm leading-relaxed text-mist-muted">{c.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
