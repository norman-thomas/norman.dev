"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Backdrop: dotted grid + drifting glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-mask" />
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-lime/20 blur-[120px]"
          animate={
            reduce
              ? undefined
              : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[10%] top-[40%] h-[40vh] w-[40vh] rounded-full bg-teal/15 blur-[120px]"
          animate={reduce ? undefined : { y: [0, -30, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-content"
      >
        <motion.div variants={item} className="mb-6 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          <span className="eyebrow">Engineer · Head of Engineering · Builder</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          I design and ship products at the{" "}
          <span className="text-gradient">edge of what software can do.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-muted sm:text-xl"
        >
          {site.subhead}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="btn-primary">
            See what I&apos;ve built
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Work with me
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-mist-faint"
        >
          <span>
            <span className="text-lime">02</span> products in the wild
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>
            <span className="text-lime">∞</span> more on the way
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>Idea → App Store, end to end</span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 mx-auto flex w-full justify-center"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            className="block h-2 w-1 rounded-full bg-lime"
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
