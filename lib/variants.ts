// Registry of design variants. The gallery (/) and the floating switcher both
// read from here. Add a new variant by dropping a route + an entry below.

export type Variant = {
  slug: string; // route segment, "" = home gallery
  name: string;
  tagline: string;
  vibe: string;
  status: "ready" | "planned";
};

export const variants: Variant[] = [
  {
    slug: "aurora",
    name: "Aurora",
    tagline: "Polished dark scroll",
    vibe: "The refined-conventional baseline — glow, gradient type, scroll reveals. Retired.",
    status: "ready",
  },
  {
    slug: "terminal",
    name: "Shell",
    tagline: "norman://shell",
    vibe: "An interactive faux-OS terminal you can actually type into.",
    status: "ready",
  },
  {
    slug: "synapse",
    name: "Synapse",
    tagline: "Living agent mesh",
    vibe: "A cursor-reactive neural network breathes behind fully-visible content. The showpiece.",
    status: "ready",
  },
  {
    slug: "deck",
    name: "Home Screen",
    tagline: "The page is a phone",
    vibe: "Your projects as app icons. Tap to open. Best as the mobile experience.",
    status: "ready",
  },
  {
    slug: "spec",
    name: "Spec Sheet",
    tagline: "Brutalist datasheet",
    vibe: "Oversized type, visible grid, everything laid bare. Maximally obvious.",
    status: "ready",
  },
  {
    slug: "agent",
    name: "Agent",
    tagline: "Chat-first",
    vibe: "The page is a conversation with your AI. Preview of the v2 idea.",
    status: "planned",
  },
];

export const readyVariants = variants.filter((v) => v.status === "ready");
