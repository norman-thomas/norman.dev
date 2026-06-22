"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { site, projects, capabilities } from "@/lib/content";

type AppDef = {
  id: string;
  label: string;
  glyph: ReactNode;
  bg: string; // icon background
  kind: "view" | "external";
  href?: string;
};

const icon = (node: ReactNode, bg: string) => ({ glyph: node, bg });

const apps: AppDef[] = [
  {
    id: "ergo",
    label: "Ergo",
    ...icon("✦", "bg-gradient-to-br from-lime to-lime-bright text-ink"),
    kind: "view",
  },
  {
    id: "walko",
    label: "Walko",
    ...icon("◎", "bg-gradient-to-br from-teal to-emerald-300 text-ink"),
    kind: "view",
  },
  {
    id: "next",
    label: "Next",
    ...icon("+", "bg-white/10 text-white/50 border border-dashed border-white/20"),
    kind: "view",
  },
  {
    id: "about",
    label: "About",
    ...icon("i", "bg-gradient-to-br from-slate-600 to-slate-800 text-white font-serif italic"),
    kind: "view",
  },
  {
    id: "services",
    label: "Services",
    ...icon("⚙", "bg-gradient-to-br from-zinc-700 to-zinc-900 text-lime"),
    kind: "view",
  },
  {
    id: "github",
    label: "GitHub",
    ...icon("⌘", "bg-gradient-to-br from-zinc-800 to-black text-white"),
    kind: "external",
    href: site.links.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    ...icon("in", "bg-gradient-to-br from-sky-700 to-sky-900 text-white text-sm font-bold"),
    kind: "external",
    href: site.links.linkedin,
  },
  {
    id: "aurora",
    label: "Aurora",
    ...icon("◈", "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white"),
    kind: "external",
    href: "/aurora",
  },
];

const dock: AppDef[] = [
  apps[0],
  apps[1],
  {
    id: "contact",
    label: "Contact",
    ...icon("✉", "bg-gradient-to-br from-lime to-teal text-ink"),
    kind: "view",
  },
];

function AppIcon({ app, onOpen }: { app: AppDef; onOpen: (id: string) => void }) {
  const content = (
    <>
      <div
        className={`grid h-[58px] w-[58px] place-items-center rounded-[16px] text-2xl shadow-lg shadow-black/40 transition-transform duration-200 group-active:scale-90 ${app.bg}`}
      >
        {app.glyph}
      </div>
      <span className="text-[11px] font-medium text-white/85 drop-shadow">
        {app.label}
      </span>
    </>
  );
  if (app.kind === "external") {
    return (
      <a
        href={app.href}
        target={app.href?.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex flex-col items-center gap-2"
      >
        {content}
      </a>
    );
  }
  return (
    <button
      onClick={() => onOpen(app.id)}
      className="group flex flex-col items-center gap-2"
    >
      {content}
    </button>
  );
}

// ── App content panels ──────────────────────────────────────────────────────
function AppBody({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id);
  if (project) {
    return (
      <div className="space-y-6">
        <div>
          <span
            className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium ${
              project.accent === "lime"
                ? "bg-lime/15 text-lime"
                : "bg-teal/15 text-teal"
            }`}
          >
            {project.status}
          </span>
          <h2 className="mt-4 text-3xl font-semibold">{project.name}</h2>
          <p
            className={`mt-1 text-lg ${
              project.accent === "lime" ? "text-lime" : "text-teal"
            }`}
          >
            {project.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist-muted">
            {project.blurb}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {project.features.map((f) => (
            <div key={f.title} className="surface p-4">
              <p className="text-sm font-semibold">{f.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-mist-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-mist-faint">
          {project.accent === "lime" ? "▍" : "▍"} In active development
        </p>
      </div>
    );
  }

  if (id === "next") {
    return (
      <div className="flex h-full flex-col items-center justify-center py-16 text-center">
        <div className="text-5xl">🛠️</div>
        <h2 className="mt-4 text-2xl font-semibold">More on the way</h2>
        <p className="mt-2 max-w-xs text-sm text-mist-muted">
          New products are always in progress. This slot is reserved for
          what&apos;s next.
        </p>
      </div>
    );
  }

  if (id === "about") {
    return (
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold">{site.name}</h2>
        <p className="text-lg leading-snug text-mist">{site.headline}</p>
        <p className="text-sm leading-relaxed text-mist-muted">{site.subhead}</p>
        <div className="surface p-5 text-sm leading-relaxed text-mist-muted">
          {site.throughLine}
        </div>
        <p className="font-mono text-xs text-mist-faint">
          Full profile → <a className="text-teal" href={site.links.fullProfile} target="_blank" rel="noreferrer">norman.works</a>
        </p>
      </div>
    );
  }

  if (id === "services") {
    return (
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold">Work with me</h2>
        <p className="text-sm leading-relaxed text-mist-muted">
          A small number of freelance and advisory engagements — where shipping
          something real and well-made matters most.
        </p>
        <div className="space-y-3">
          {capabilities.map((c, i) => (
            <div key={c.title} className="surface flex gap-4 p-4">
              <span className="font-mono text-xs text-lime/70">0{i + 1}</span>
              <div>
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-mist-muted">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // contact
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-semibold">Let&apos;s build something</h2>
      <p className="text-sm leading-relaxed text-mist-muted">
        Have an idea worth shipping? I&apos;d love to hear it.
      </p>
      <div className="flex flex-col gap-3">
        <a href={`mailto:${site.links.email}`} className="btn-primary justify-center">
          {site.links.email}
        </a>
        <a href={site.links.github} target="_blank" rel="noreferrer" className="btn-ghost justify-center">
          GitHub
        </a>
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost justify-center">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

const titleFor = (id: string) => {
  const a = [...apps, ...dock].find((x) => x.id === id);
  return a?.label ?? id;
};

export default function DeckPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0e1a16] via-[#0b110f] to-[#070a09]">
      {/* wallpaper glow + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[55vh] w-[70vh] -translate-x-1/2 rounded-full bg-lime/15 blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* status bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-4 text-xs font-medium text-white/80">
        <span>9:41</span>
        <span className="font-mono tracking-wide text-white/50">norman.dev</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-3.5 rounded-[2px] border border-white/40" />
          <span>5G</span>
        </span>
      </div>

      {/* home screen */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] max-w-md flex-col px-6 pb-32 pt-8">
        {/* greeting widget */}
        <div className="surface mb-10 p-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-lime/80">
            {site.name}
          </p>
          <p className="mt-2 text-xl font-semibold leading-snug text-mist">
            {site.headline}
          </p>
          <p className="mt-2 text-xs text-mist-muted">
            Tap an app to explore. ↓ dock has the essentials.
          </p>
        </div>

        {/* app grid */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
          {apps.map((a) => (
            <AppIcon key={a.id} app={a} onOpen={setOpen} />
          ))}
        </div>

        <div className="flex-1" />

        {/* dock */}
        <div className="fixed inset-x-0 bottom-20 z-10 mx-auto flex w-full max-w-xs items-center justify-around rounded-[26px] border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl">
          {dock.map((a) => (
            <AppIcon key={a.id} app={a} onOpen={setOpen} />
          ))}
        </div>
      </div>

      {/* opened app */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="flex h-full w-full max-w-md flex-col overflow-hidden border border-white/10 bg-ink sm:h-[80vh] sm:rounded-[32px]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <span className="font-mono text-xs uppercase tracking-widest text-mist-faint">
                  {titleFor(open)}
                </span>
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close app"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-mist-muted transition-colors hover:bg-white/10 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <AppBody id={open} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <DesignSwitcher current="deck" />
    </div>
  );
}
