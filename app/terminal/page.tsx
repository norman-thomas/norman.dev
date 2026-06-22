"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { site, projects, capabilities } from "@/lib/content";

type Line = { kind: "in" | "out" | "sys"; node: ReactNode };

const PROMPT = "norman@dev ~ %";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    className="text-teal underline decoration-teal/40 underline-offset-2 hover:decoration-teal"
  >
    {children}
  </a>
);

function projectBlock(id: string): ReactNode {
  const p = projects.find((x) => x.id === id);
  if (!p) return <span className="text-rose-400">no such project: {id}</span>;
  return (
    <div className="space-y-1">
      <div>
        <span className="text-lime">{p.name}</span>{" "}
        <span className="text-white/40">— {p.status}</span>
      </div>
      <div className="text-teal">{p.tagline}</div>
      <div className="max-w-2xl text-white/70">{p.blurb}</div>
      <div className="pt-1">
        {p.features.map((f) => (
          <div key={f.title} className="text-white/70">
            <span className="text-lime">+</span> {f.title}
            <span className="text-white/40"> — {f.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TerminalPage() {
  const [history, setHistory] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [cmdLog, setCmdLog] = useState<string[]>([]);
  const [logIdx, setLogIdx] = useState(-1);
  const [booted, setBooted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const commands = useMemo(() => {
    const list: Record<string, () => ReactNode> = {
      help: () => (
        <div className="grid max-w-md grid-cols-[7rem_1fr] gap-x-4 gap-y-0.5 text-white/70">
          {[
            ["whoami", "who is this"],
            ["ls", "list everything"],
            ["ergo", "open project Ergo"],
            ["walko", "open project Walko"],
            ["services", "what I can build for you"],
            ["contact", "how to reach me"],
            ["gui", "launch the graphical site"],
            ["clear", "clear the screen"],
          ].map(([c, d]) => (
            <div key={c} className="contents">
              <span className="text-lime">{c}</span>
              <span>{d}</span>
            </div>
          ))}
        </div>
      ),
      whoami: () => (
        <div className="space-y-1">
          <div className="text-lime">{site.name}</div>
          <div className="max-w-2xl text-white/80">{site.headline}</div>
          <div className="max-w-2xl text-white/50">{site.subhead}</div>
        </div>
      ),
      about: () => commands.whoami(),
      ls: () => (
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-lime">ergo</span>
          <span className="text-lime">walko</span>
          <span className="text-teal">next/</span>
          <span className="text-white/70">about</span>
          <span className="text-white/70">services</span>
          <span className="text-white/70">contact</span>
        </div>
      ),
      projects: () => (
        <div className="space-y-1 text-white/70">
          {projects.map((p) => (
            <div key={p.id}>
              <span className="text-lime">{p.id}</span> — {p.tagline}
            </div>
          ))}
          <div className="text-teal">next/ — more on the way</div>
        </div>
      ),
      ergo: () => projectBlock("ergo"),
      walko: () => projectBlock("walko"),
      next: () => (
        <span className="text-teal">
          // more products in progress. watch this space.
        </span>
      ),
      services: () => (
        <div className="space-y-1">
          <div className="text-white/60">// {site.name} is available for select freelance work</div>
          {capabilities.map((c) => (
            <div key={c.title} className="text-white/70">
              <span className="text-lime">›</span> {c.title}
              <span className="text-white/40"> — {c.desc}</span>
            </div>
          ))}
        </div>
      ),
      skills: () => commands.services(),
      contact: () => (
        <div className="space-y-0.5 text-white/70">
          <div>
            email &nbsp;&nbsp; <A href={`mailto:${site.links.email}`}>{site.links.email}</A>
          </div>
          <div>
            github &nbsp; <A href={site.links.github}>{site.links.github}</A>
          </div>
          <div>
            linkedin <A href={site.links.linkedin}>{site.links.linkedin}</A>
          </div>
          <div>
            profile &nbsp; <A href={site.links.fullProfile}>norman.works</A>
          </div>
        </div>
      ),
      social: () => commands.contact(),
      gui: () => (
        <span className="text-white/70">
          launching graphical interface…{" "}
          <A href="/aurora">open the Aurora site →</A>
        </span>
      ),
    };
    return list;
  }, []);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [
      ...history,
      { kind: "in", node: <span>{raw}</span> },
    ];

    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "") {
      setHistory(next);
      return;
    }
    if (cmd === "sudo hire norman" || cmd === "hire" || cmd === "sudo hire") {
      next.push({
        kind: "out",
        node: (
          <span className="text-lime">
            access granted. let&apos;s build something →{" "}
            <A href={`mailto:${site.links.email}`}>{site.links.email}</A>
          </span>
        ),
      });
      setHistory(next);
      return;
    }

    const key = cmd.startsWith("open ") ? cmd.slice(5).trim() : cmd;
    const fn = commands[key as keyof typeof commands];
    next.push(
      fn
        ? { kind: "out", node: fn() }
        : {
            kind: "out",
            node: (
              <span className="text-rose-400">
                command not found: {cmd}. try{" "}
                <span className="text-lime">help</span>.
              </span>
            ),
          }
    );
    setHistory(next);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(value);
    if (value.trim()) {
      setCmdLog((l) => [...l, value]);
      setLogIdx(-1);
    }
    setValue("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = logIdx < 0 ? cmdLog.length - 1 : Math.max(0, logIdx - 1);
      if (cmdLog[idx] !== undefined) {
        setLogIdx(idx);
        setValue(cmdLog[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (logIdx < 0) return;
      const idx = logIdx + 1;
      if (idx >= cmdLog.length) {
        setLogIdx(-1);
        setValue("");
      } else {
        setLogIdx(idx);
        setValue(cmdLog[idx]);
      }
    }
  };

  // Boot sequence: reveal intro lines, then enable prompt.
  useEffect(() => {
    const boot: Line[] = [
      { kind: "sys", node: <span className="text-white/40">norman://shell — v1.0.0 (static build)</span> },
      { kind: "sys", node: <span className="text-white/40">booting profile of {site.name}…</span> },
      { kind: "sys", node: <span className="text-lime">✓ ready.</span> },
      {
        kind: "sys",
        node: (
          <span className="text-white/70">
            Type <span className="text-lime">help</span> to explore, or{" "}
            <span className="text-lime">whoami</span> to start.
          </span>
        ),
      },
    ];
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const tick = () => {
      const line = boot[i]; // capture before mutating i — the updater may run async
      setHistory((h) => [...h, line]);
      i += 1;
      if (i < boot.length) timers.push(setTimeout(tick, 280));
      else setBooted(true);
    };
    timers.push(setTimeout(tick, 250));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
    if (booted) inputRef.current?.focus();
  }, [history, booted]);

  return (
    <div
      className="min-h-screen bg-[#07090a] font-mono text-[13px] leading-relaxed text-white/90 sm:text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* window chrome */}
      <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-white/10 bg-[#0b0e0f]/90 px-4 py-3 backdrop-blur">
        <span className="h-3 w-3 rounded-full bg-rose-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-lime/80" />
        <span className="ml-3 text-xs text-white/40">{PROMPT} — norman.dev</span>
      </div>

      {/* body */}
      <div className="mx-auto max-w-4xl px-4 py-6 pb-28 sm:px-8">
        {history.map((l, i) => (
          <div key={i} className="mb-2">
            {l.kind === "in" ? (
              <div className="flex gap-2">
                <span className="shrink-0 text-lime">{PROMPT}</span>
                <span className="text-white">{l.node}</span>
              </div>
            ) : (
              <div className="pl-0">{l.node}</div>
            )}
          </div>
        ))}

        {/* active prompt */}
        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <span className="shrink-0 text-lime">{PROMPT}</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="terminal input"
            className="flex-1 border-none bg-transparent text-white caret-lime outline-none"
          />
        </form>
        <div ref={endRef} />
      </div>

      <DesignSwitcher current="terminal" />
    </div>
  );
}
