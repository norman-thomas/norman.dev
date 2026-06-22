"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-mist"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-lime text-ink transition-transform duration-300 group-hover:rotate-6">
            N
          </span>
          <span className="hidden sm:inline">norman<span className="text-lime">.dev</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist-muted transition-colors hover:text-lime"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href={`mailto:${site.links.email}`} className="btn-primary !px-5 !py-2">
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
