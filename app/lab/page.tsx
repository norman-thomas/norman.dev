"use client";

import { motion } from "framer-motion";
import { variants, type Variant } from "@/lib/variants";

// ── Tiny CSS-drawn preview thumbnails, one per variant ──────────────────────
function Thumb({ slug }: { slug: string }) {
  if (slug === "aurora") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0B0F0E]">
        <div className="absolute -top-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-lime/30 blur-2xl" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(163,230,53,0.12)_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="absolute bottom-6 left-5 right-10 space-y-1.5">
          <div className="h-2.5 w-2/3 rounded bg-white/80" />
          <div className="h-2.5 w-1/2 rounded bg-lime" />
          <div className="mt-2 h-1.5 w-3/4 rounded bg-white/20" />
        </div>
      </div>
    );
  }
  if (slug === "terminal") {
    return (
      <div className="h-full w-full bg-black p-3 font-mono text-[7px] leading-relaxed text-lime/90">
        <div className="text-white/40">norman@dev ~ %</div>
        <div>&gt; whoami</div>
        <div className="text-white/70">norman thomas — builder</div>
        <div>&gt; ls projects/</div>
        <div className="text-teal">ergo/ walko/ next/</div>
        <div className="flex items-center gap-1">
          &gt; <span className="inline-block h-2 w-1 animate-pulse bg-lime" />
        </div>
      </div>
    );
  }
  if (slug === "synapse") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0B0F0E]">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {[
            [20, 30, 70, 50],
            [70, 50, 120, 28],
            [120, 28, 180, 60],
            [70, 50, 95, 95],
            [180, 60, 230, 40],
            [95, 95, 160, 110],
            [20, 30, 60, 90],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(163,230,53,0.4)"
              strokeWidth="1"
            />
          ))}
          {[
            [20, 30],
            [70, 50],
            [120, 28],
            [180, 60],
            [230, 40],
            [95, 95],
            [160, 110],
            [60, 90],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.5" fill="#A3E635" />
          ))}
          <circle cx="95" cy="65" r="3.5" fill="#2DD4BF" />
        </svg>
        <div className="absolute bottom-5 left-5 right-10 space-y-1.5">
          <div className="h-2.5 w-1/2 rounded bg-white/80" />
          <div className="h-2.5 w-2/3 rounded bg-teal" />
        </div>
      </div>
    );
  }
  if (slug === "spec") {
    return (
      <div className="h-full w-full bg-[#0B0F0E] p-4">
        <div className="flex justify-between border-b border-white/20 pb-1.5 font-mono text-[6px] uppercase tracking-widest text-white/40">
          <span>norman.dev</span>
          <span className="text-lime">● available</span>
        </div>
        <div className="mt-2 text-2xl font-semibold uppercase leading-[0.85] tracking-tighter text-white">
          <span className="text-lime">Ergo</span>
          <span className="text-white/30"> / </span>
          <span className="text-teal">Walko</span>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-px border border-white/15 bg-white/10">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-3 bg-[#0B0F0E]" />
          ))}
        </div>
      </div>
    );
  }
  if (slug === "deck") {
    return (
      <div className="flex h-full w-full flex-col items-center bg-gradient-to-b from-[#0e1a16] to-[#0B0F0E] p-3">
        <div className="mb-2 font-mono text-[6px] text-white/40">
          9:41 · norman.dev
        </div>
        <div className="grid flex-1 grid-cols-4 content-start gap-2">
          {["bg-lime", "bg-teal", "bg-white/20", "bg-white/20", "bg-white/20", "bg-white/20", "bg-white/20", "bg-white/20"].map(
            (c, i) => (
              <div key={i} className={`h-4 w-4 rounded-[5px] ${c}`} />
            )
          )}
        </div>
        <div className="flex w-full justify-center gap-2 rounded-xl bg-white/10 p-1.5">
          <div className="h-3.5 w-3.5 rounded-[4px] bg-lime" />
          <div className="h-3.5 w-3.5 rounded-[4px] bg-teal" />
          <div className="h-3.5 w-3.5 rounded-[4px] bg-white/30" />
        </div>
      </div>
    );
  }
  // planned / generic
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0B0F0E] font-mono text-[8px] uppercase tracking-widest text-white/30">
      coming soon
    </div>
  );
}

function VariantCard({ v, index }: { v: Variant; index: number }) {
  const planned = v.status === "planned";
  const live = v.slug === "spec";
  const Wrapper = planned ? "div" : motion.a;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.5 }}
    >
      <Wrapper
        {...(planned ? {} : { href: `/${v.slug}` })}
        className={`group block overflow-hidden rounded-2xl border bg-ink-raised/50 transition-all duration-300 ${
          live ? "border-lime/40" : "border-white/[0.07]"
        } ${
          planned
            ? "cursor-default opacity-50"
            : "hover:-translate-y-1 hover:border-lime/30 hover:shadow-[0_20px_60px_-20px_rgba(163,230,53,0.25)]"
        }`}
      >
        <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-white/[0.06]">
          <Thumb slug={v.slug} />
          {live && (
            <span className="absolute left-3 top-3 rounded-full bg-lime px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink">
              ● Live
            </span>
          )}
          {!planned && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
              <span className="rounded-full bg-lime px-4 py-2 text-xs font-semibold text-black">
                View design →
              </span>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-mist">{v.name}</h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-mist-faint">
              {planned ? "planned" : v.tagline}
            </span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-mist-muted">
            {v.vibe}
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function Lab() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-mask" />
        <div className="absolute left-1/2 top-[-15%] h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-lime/15 blur-[130px]" />
      </div>

      <div className="container-content py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-lime font-mono text-sm font-bold text-ink">
              N
            </span>
            <span className="eyebrow">norman.dev · design archive</span>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            The design{" "}
            <span className="text-gradient">archive.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist-muted">
            Every direction we explored for norman.dev, kept for reference. The
            live site uses{" "}
            <a href="/spec" className="text-lime underline underline-offset-4">
              Spec Sheet
            </a>
            . The rest are archived here — unlinked from the public site.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-sm text-mist-muted transition-colors hover:text-lime"
          >
            ← Back to the live site
          </a>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {variants.map((v, i) => (
            <VariantCard key={v.slug} v={v} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 font-mono text-xs text-mist-faint"
        >
          // {variants.filter((v) => v.status === "ready").length} archived ·{" "}
          {variants.filter((v) => v.status === "planned").length} sketched
        </motion.p>
      </div>
    </main>
  );
}
