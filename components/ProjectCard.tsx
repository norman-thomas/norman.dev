"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/content";

const accentMap = {
  lime: {
    text: "text-lime",
    glow: "bg-lime/20",
    ring: "group-hover:border-lime/30",
    dot: "bg-lime",
    chip: "bg-lime/10 text-lime",
  },
  teal: {
    text: "text-teal",
    glow: "bg-teal/20",
    ring: "group-hover:border-teal/30",
    dot: "bg-teal",
    chip: "bg-teal/10 text-teal",
  },
} as const;

const statusMap = {
  Live: "bg-lime/15 text-lime",
  Beta: "bg-teal/15 text-teal",
  Building: "bg-white/10 text-mist-muted",
} as const;

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduce = useReducedMotion();
  const a = accentMap[project.accent];

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group surface relative overflow-hidden p-7 transition-colors duration-500 sm:p-10 ${a.ring}`}
    >
      {/* Accent glow that intensifies on hover */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full ${a.glow} blur-[90px] opacity-40 transition-opacity duration-500 group-hover:opacity-80`}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        {/* Left: identity + blurb */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span
              className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${a.text}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-medium ${statusMap[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h3>
          <p className={`mt-2 text-lg font-medium ${a.text}`}>
            {project.tagline}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-mist-muted">
            {project.blurb}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.links.appStore ? (
              <a href={project.links.appStore} className="btn-ghost !py-2 !text-xs">
                App Store
              </a>
            ) : null}
            {project.links.playStore ? (
              <a href={project.links.playStore} className="btn-ghost !py-2 !text-xs">
                Google Play
              </a>
            ) : null}
            {!project.links.appStore && !project.links.playStore ? (
              <span className="inline-flex items-center gap-2 font-mono text-xs text-mist-faint">
                <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                In active development
              </span>
            ) : null}
          </div>
        </div>

        {/* Right: feature grid */}
        <ul className="grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
          {project.features.map((f) => (
            <li
              key={f.title}
              className="bg-ink-raised/80 p-5 transition-colors duration-300 hover:bg-ink-raised"
            >
              <p className="text-sm font-semibold text-mist">{f.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-mist-muted">
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
