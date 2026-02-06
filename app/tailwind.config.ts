import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        accent: "var(--accent)",
        plum: "var(--plum)",
        bg: "var(--bg)",
        fg: "var(--fg)",
        s0: "var(--surface-0)",
        s1: "var(--surface-1)",
        s2: "var(--surface-2)",
        s3: "var(--surface-3)",
        s4: "var(--surface-4)",
        mist: "var(--mist)",
      },
    },
  },
  plugins: [],
};

export default config;
