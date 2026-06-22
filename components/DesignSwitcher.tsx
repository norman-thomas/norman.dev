"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { readyVariants } from "@/lib/variants";

/**
 * Floating switcher present on every variant so you can hop designs without
 * going back to the gallery. Fixed bottom-center, theme-neutral.
 */
export function DesignSwitcher({ current }: { current: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-5 z-[100] flex justify-center px-4 print:hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/70 p-1.5 pl-3 font-mono text-xs text-white/80 shadow-2xl backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <span className="hidden shrink-0 select-none pr-1 text-white/40 sm:inline">
          design:
        </span>

        <div className="flex items-center gap-1">
          {readyVariants.map((v) => {
            const active = v.slug === current;
            return (
              <a
                key={v.slug}
                href={`/${v.slug}`}
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-lime text-black"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {v.name}
              </a>
            );
          })}
        </div>

        <span className="mx-1 hidden h-4 w-px shrink-0 bg-white/10 sm:block" />

        <div className="relative shrink-0">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="About these designs"
            className="grid h-7 w-7 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            ?
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-11 right-0 w-64 rounded-xl border border-white/10 bg-black/90 p-4 text-left leading-relaxed text-white/70 shadow-2xl backdrop-blur-md"
              >
                <p className="mb-2 font-semibold text-white">
                  Same content, different skins.
                </p>
                <p className="mb-3 text-[11px]">
                  Archived design explorations for norman.dev. The live site
                  uses Spec Sheet.
                </p>
                <a
                  href="/lab"
                  className="inline-block rounded-md bg-lime px-3 py-1.5 text-[11px] font-semibold text-black"
                >
                  ← Back to archive
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
