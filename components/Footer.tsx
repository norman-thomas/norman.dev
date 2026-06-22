import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-content flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm text-mist-muted">
          <span className="grid h-6 w-6 place-items-center rounded bg-lime/90 text-xs font-bold text-ink">
            N
          </span>
          norman<span className="text-lime">.dev</span>
        </div>

        <p className="font-mono text-xs text-mist-faint">
          Designed &amp; built by {site.name}. © {2026}
        </p>

        <a
          href={`mailto:${site.links.email}`}
          className="text-sm text-mist-muted transition-colors hover:text-lime"
        >
          {site.links.email}
        </a>
      </div>
    </footer>
  );
}
