"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };
type Pulse = { a: number; b: number; t: number; speed: number };

/**
 * A living "agent mesh": nodes drift, nearby ones link, and signal pulses
 * travel along the links — evoking an agentic system at work. Cursor-reactive.
 * Pauses when the tab is hidden and renders a single static frame under
 * prefers-reduced-motion. Sits behind content; purely decorative.
 */
export function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = ref.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;
    // Explicit non-null bindings so control-flow narrowing survives into the
    // nested animation closures below.
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let frame = 0;
    const mouse = { x: -9999, y: -9999 };

    const LINK = 132; // link distance threshold
    const LIME = "163,230,53";
    const TEAL = "45,212,191";

    function build() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(96, Math.max(28, Math.floor((w * h) / 17000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
      pulses = [];
    }

    function neighbor(i: number): number {
      // find a random near node to send a pulse to
      const n = nodes[i];
      const candidates: number[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        const dx = nodes[j].x - n.x;
        const dy = nodes[j].y - n.y;
        if (dx * dx + dy * dy < LINK * LINK) candidates.push(j);
      }
      return candidates.length
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : -1;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // move
      if (!reduce) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          // subtle drift toward cursor when close
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 200 * 200 && d2 > 1) {
            const f = 0.04 / Math.sqrt(d2);
            n.vx += dx * f;
            n.vy += dy * f;
          }
          // damping so cursor pulls don't accelerate forever
          n.vx *= 0.985;
          n.vy *= 0.985;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const a = (1 - d / LINK) * 0.45;
            ctx.strokeStyle = `rgba(${LIME},${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
        // link to cursor
        const mdx = nodes[i].x - mouse.x;
        const mdy = nodes[i].y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 180) {
          const a = (1 - md / 180) * 0.6;
          ctx.strokeStyle = `rgba(${TEAL},${a})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${LIME},0.9)`;
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // spawn pulses occasionally
      if (!reduce && frame % 26 === 0 && pulses.length < 7) {
        const i = Math.floor(Math.random() * nodes.length);
        const j = neighbor(i);
        if (j >= 0) pulses.push({ a: i, b: j, t: 0, speed: 0.012 + Math.random() * 0.02 });
      }

      // draw + advance pulses
      pulses = pulses.filter((p) => {
        const A = nodes[p.a];
        const B = nodes[p.b];
        const x = A.x + (B.x - A.x) * p.t;
        const y = A.y + (B.y - A.y) * p.t;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 6);
        grad.addColorStop(0, `rgba(${TEAL},0.9)`);
        grad.addColorStop(1, `rgba(${TEAL},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        p.t += p.speed;
        return p.t < 1;
      });

      frame++;
      raf = requestAnimationFrame(draw);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (reduce) {
        draw(); // single static frame
        return;
      }
      raf = requestAnimationFrame(draw);
    }

    function onResize() {
      build();
      start();
    }
    function onMove(e: PointerEvent) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduce) start();
    }

    build();
    start();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="h-full w-full"
    />
  );
}
