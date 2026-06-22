import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slate + Acid Lime system
        ink: {
          DEFAULT: "#0B0F0E", // base canvas
          soft: "#101614",
          raised: "#151D1A", // cards
        },
        lime: {
          DEFAULT: "#A3E635", // primary accent
          bright: "#BEF264",
        },
        teal: {
          DEFAULT: "#2DD4BF", // secondary accent
        },
        mist: {
          DEFAULT: "#ECFDF5", // primary text
          muted: "#9CB3AC", // secondary text
          faint: "#5C726B", // tertiary / labels
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
