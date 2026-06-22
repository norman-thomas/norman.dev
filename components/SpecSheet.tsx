import { Reveal } from "@/components/Reveal";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { site, projects, capabilities } from "@/lib/content";

// A small monospace label used throughout the datasheet.
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist-faint">
      {children}
    </span>
  );
}

function Row({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/15">
      <div className="container-content grid grid-cols-12 gap-6 py-12 sm:py-16">
        <div className="col-span-12 sm:col-span-3">
          <Label>
            {index} / {title}
          </Label>
        </div>
        <div className="col-span-12 sm:col-span-9">{children}</div>
      </div>
    </section>
  );
}

/**
 * The Spec Sheet — the live site design. `showSwitcher` adds the design-lab
 * switcher; the production homepage renders it without one.
 */
export function SpecSheet({ showSwitcher = false }: { showSwitcher?: boolean }) {
  return (
    <div className="min-h-screen bg-ink pb-28 text-mist">
      {/* meta strip */}
      <div className="border-b border-white/15">
        <div className="container-content flex items-center justify-between py-3">
          <Label>norman.dev — profile v1</Label>
          <Label>
            <span className="text-lime">●</span> available · est. 2026
          </Label>
        </div>
      </div>

      {/* masthead — products-led: the work is the monument, the name is a byline */}
      <header className="container-content py-14 sm:py-20">
        <Reveal>
          <Label>Norman Thomas — Engineer / Head of Engineering</Label>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[16vw] font-semibold uppercase leading-[0.85] tracking-tighter sm:gap-x-6 sm:text-[10rem]">
            <span className="text-lime">Ergo</span>
            <span className="text-mist-faint">/</span>
            <span className="text-teal">Walko</span>
            <span className="text-mist-faint">/</span>
            <span className="text-transparent [-webkit-text-stroke:1.5px_#5C726B]">
              Next
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-balance text-xl font-medium leading-snug sm:text-2xl">
            I design, build, and ship products end to end.{" "}
            <span className="text-mist-muted">
              These are the latest — more on the way.
            </span>
          </p>
        </Reveal>

        {/* spec quick-table */}
        <Reveal delay={0.15}>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/10 sm:grid-cols-4">
            {[
              ["Role", "Head of Eng."],
              ["Discipline", "Full-stack"],
              ["Products", "02 live · ∞ next"],
              ["Status", "For hire"],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink p-4">
                <Label>{k}</Label>
                <p className="mt-1.5 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </header>

      {/* 01 PROFILE */}
      <Row index="01" title="Profile">
        <Reveal>
          <p className="text-pretty text-2xl font-medium leading-snug sm:text-3xl">
            {site.throughLine}
          </p>
        </Reveal>
      </Row>

      {/* 02 PRODUCTS */}
      <section className="border-t border-white/15">
        <div className="container-content grid grid-cols-12 gap-6 pt-12 sm:pt-16">
          <div className="col-span-12 sm:col-span-3">
            <Label>02 / Products</Label>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <Label>02 live, more in development</Label>
          </div>
        </div>

        {projects.map((p, i) => (
          <div key={p.id} className="container-content">
            <Reveal>
              <div className="grid grid-cols-12 gap-6 border-t border-white/10 py-12 first:border-t-0">
                <div className="col-span-12 sm:col-span-3">
                  <Label>P-{String(i + 1).padStart(2, "0")}</Label>
                  <p className="mt-3 inline-block border border-white/20 px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-lime">
                    {p.status}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <h2 className="text-6xl font-semibold uppercase tracking-tighter sm:text-8xl">
                    {p.name}
                  </h2>
                  <p
                    className={`mt-3 text-xl font-medium ${
                      p.accent === "lime" ? "text-lime" : "text-teal"
                    }`}
                  >
                    {p.tagline}
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-muted">
                    {p.blurb}
                  </p>
                  <dl className="mt-8 grid gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-2">
                    {p.features.map((f, fi) => (
                      <div key={f.title} className="bg-ink p-5">
                        <Label>F-{String(fi + 1).padStart(2, "0")}</Label>
                        <p className="mt-2 text-base font-semibold">{f.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-mist-muted">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      {/* 03 CAPABILITIES */}
      <Row index="03" title="Capabilities">
        <ul>
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.05}>
              <div className="flex flex-col gap-2 border-b border-white/10 py-6 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="font-mono text-sm text-lime">0{i + 1}</span>
                <h3 className="min-w-[14rem] text-2xl font-semibold sm:text-3xl">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist-muted">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Row>

      {/* 04 CONTACT */}
      <Row index="04" title="Contact">
        <Reveal>
          <a
            href={`mailto:${site.links.email}`}
            className="group block text-pretty text-4xl font-semibold tracking-tight underline decoration-white/20 decoration-2 underline-offset-8 transition-colors hover:text-lime hover:decoration-lime sm:text-6xl"
          >
            {site.links.email}
          </a>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
            <a href={site.links.github} target="_blank" rel="noreferrer" className="text-mist-muted hover:text-lime">
              → GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="text-mist-muted hover:text-lime">
              → LinkedIn
            </a>
            <a href={site.links.fullProfile} target="_blank" rel="noreferrer" className="text-mist-muted hover:text-lime">
              → norman.works (full profile)
            </a>
          </div>
        </Reveal>
      </Row>

      <div className="border-t border-white/15">
        <div className="container-content py-8">
          <Label>End of sheet — {site.name} © 2026</Label>
        </div>
      </div>

      {showSwitcher && <DesignSwitcher current="spec" />}
    </div>
  );
}
