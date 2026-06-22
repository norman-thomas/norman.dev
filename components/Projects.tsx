"use client";

import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="container-content">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Selected work</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Things I&apos;ve built.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-mist-muted">
              Two products in active development — and{" "}
              <span className="text-lime">more on the way.</span> Each one
              designed, built, and shipped end to end.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
