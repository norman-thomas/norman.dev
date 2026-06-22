"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[50vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[140px]"
          animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-content text-center">
        <Reveal>
          <p className="eyebrow mb-6">Let&apos;s build something</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Have an idea worth{" "}
            <span className="text-gradient">shipping?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist-muted">
            Whether it&apos;s a product to take from zero to the App Store or an
            AI feature done right — I&apos;d love to hear what you&apos;re
            working on.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${site.links.email}`} className="btn-primary">
              {site.links.email}
            </a>
            <a
              href={site.links.fullProfile}
              className="btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Full profile at norman.works
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-mist-muted">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-lime"
            >
              GitHub
            </a>
            <span className="h-3 w-px bg-white/10" />
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-lime"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
