// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all page copy & links.
// Edit here — every section reads from this file. Placeholder values are marked.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Norman Thomas",
  // Primary positioning line (hero). Grounded, medium-agnostic — not "just mobile".
  headline: "I design, build, and ship products end to end.",
  subhead:
    "Independent engineer and head of engineering. I turn ideas into products people rely on — from agentic AI to personalized travel.",
  // Short through-line shown under "Approach".
  throughLine:
    "I build software that thinks with you — opinionated products that fold AI, device context, and good design into something genuinely useful. Small surface, deep capability. Shipped end to end, by one person who cares about the details.",
  domain: "norman.dev",
  // Links — replace placeholders (#) when available.
  links: {
    email: "hello@norman.dev", // TODO: confirm address
    github: "https://github.com/norman-thomas",
    linkedin: "https://www.linkedin.com/in/norman-thomas/",
    fullProfile: "https://norman.works",
  },
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  status: "Live" | "Beta" | "Building";
  blurb: string;
  features: { title: string; desc: string }[];
  accent: "lime" | "teal";
  // Optional store links — leave null to render a "coming soon" state.
  links: { appStore: string | null; playStore: string | null; site: string | null };
};

export const projects: Project[] = [
  {
    id: "ergo",
    name: "Ergo",
    tagline: "An agentic AI assistant in the palm of your hand.",
    status: "Building",
    blurb:
      "A personal assistant that doesn't just chat — it acts. Ergo is outfitted with a growing toolkit that reaches into your device and connected data, then gets things done on your behalf. Deeply customizable, so it works the way you do.",
    accent: "lime",
    features: [
      {
        title: "Agentic by design",
        desc: "Plans and executes multi-step tasks with real tools — not just answers, outcomes.",
      },
      {
        title: "Device-aware",
        desc: "Taps into on-device capabilities and the data you connect for context that generic assistants can't reach.",
      },
      {
        title: "Yours to shape",
        desc: "Customize tools, behavior, and personality so the assistant fits your life instead of the other way around.",
      },
      {
        title: "Private & in your pocket",
        desc: "Built mobile-first, so your most capable assistant is always one tap away.",
      },
    ],
    links: { appStore: null, playStore: null, site: null },
  },
  {
    id: "walko",
    name: "Walko",
    tagline: "Personalized tours, built for the day you're actually having.",
    status: "Building",
    blurb:
      "Walko crafts a tour that fits you — your interests, your time, your circumstances. It accounts for the weather, makes sure you arrive when places are open, and sequences everything into one itinerary built just for you.",
    accent: "teal",
    features: [
      {
        title: "Itineraries that fit you",
        desc: "Tells you what to see based on your interests and the time you actually have — not a generic top-10 list.",
      },
      {
        title: "Aware of the real world",
        desc: "Factors in weather and opening hours so you show up when places are open and conditions make sense.",
      },
      {
        title: "Smart sequencing",
        desc: "Orders stops into a route that flows, so the day feels effortless instead of scattered.",
      },
      {
        title: "Made for the moment",
        desc: "Adapts to your circumstances on the day, building the plan around how you want to spend your time.",
      },
    ],
    links: { appStore: null, playStore: null, site: null },
  },
];

// What I do — freelance angle, light touch.
export const capabilities = [
  {
    title: "0 → 1 products",
    desc: "From a vague idea to a shipped app in the store. Strategy, design, and engineering under one roof.",
  },
  {
    title: "AI integration",
    desc: "Agentic systems, LLM tooling, and AI features that are actually useful — not bolted-on gimmicks.",
  },
  {
    title: "Mobile & full-stack",
    desc: "End-to-end builds: native-feeling apps, the APIs behind them, and the cloud they run on.",
  },
  {
    title: "Engineering leadership",
    desc: "Head-of-engineering experience: setting technical direction and shipping with small, fast teams.",
  },
];
