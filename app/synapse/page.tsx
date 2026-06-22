"use client";

import { motion } from "framer-motion";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { site } from "@/lib/content";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function SynapsePage() {
  return (
    <div className="relative">
      {/* Fixed living mesh behind everything + readability veils */}
      <div className="fixed inset-0 -z-10 bg-ink">
        <NeuralCanvas />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,15,14,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Nav />

      <main>
        {/* Hero */}
        <section
          id="top"
          className="relative flex min-h-[100svh] items-center pt-16"
        >
          <div className="container-content">
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mb-6 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              <span className="eyebrow">A network of things I&apos;ve built</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              I build software that{" "}
              <span className="text-gradient">thinks with you.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-muted sm:text-xl"
            >
              {site.subhead} Every node below is a product, an idea, or a problem
              I can solve for you.
            </motion.p>

            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#work" className="btn-primary">
                Explore the work
              </a>
              <a href="#contact" className="btn-ghost">
                Work with me
              </a>
            </motion.div>

            <motion.p
              custom={4}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-14 max-w-md font-mono text-xs text-mist-faint"
            >
              // move your cursor — the network responds
            </motion.p>
          </div>
        </section>

        {/* Reused, info-complete sections float over the mesh */}
        <Projects />
        <Capabilities />
        <Contact />
      </main>

      <Footer />
      <DesignSwitcher current="synapse" />
    </div>
  );
}
