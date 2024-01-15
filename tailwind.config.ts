import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-gradient": "spinner 4s linear infinite forwards",
        show: "displayer 1s linear forwards",
      },
      backgroundImage: {
        "red-to-pink-to-purple-horizontal-gradient":
          "linear-gradient(var(--angle), var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100%)",
        "pink-to-highlight-to-purple-to-blue-horizontal-gradient":
          "linear-gradient(140deg, var(--vivid-pink) 0%, var(--vivid-pink) 15%, color-mix(in srgb, var(--vivid-pink), var(--electric-violet) 50%) 25%, color-mix(in srgb, var(--vivid-pink), var(--electric-violet) 10%) 35%, color-mix(in srgb, var(--vivid-pink), var(--orange-red) 50%) 42%, color-mix(in srgb, var(--vivid-pink), var(--orange-red) 50%) 44%, color-mix(in srgb, var(--vivid-pink), var(--page-background) 70%) 47%, var(--electric-violet) 48%, var(--bright-blue) 60%)",
        "soft-pink-radial-gradient": "var(--soft-pink-radial-gradient)",
      },
      colors: {
        "transparent-background":
          "color-mix(in srgb, var(--page-background) 70%, transparent)",
        "pill-color":
          "color-mix(in srgb, var(--pill-accent) 70%, var(--full-contrast))",
        "pill-background":
          "color-mix(in srgb, var(--pill-accent) 5%, transparent)",
      },
      keyframes: {
        displayer: {
          "0%": { opacity: "0" },
          to: { opacity: "1" },
        },
        spinner: {
          "0%": { "--angle": "90deg" },
          to: { "--angle": "450deg" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
