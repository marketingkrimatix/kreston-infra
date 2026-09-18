import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        steel: "#233240",
        copper: "#c87941",
        sand: "#f2eee8",
        mist: "#f7f7f5",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["DM Sans", "sans-serif"],
      },
      maxWidth: { site: "1280px" },
      boxShadow: { soft: "0 24px 80px rgba(14, 24, 33, 0.10)" },
      opacity: {
        12: "0.12",
        35: "0.35",
        38: "0.38",
        42: "0.42",
        45: "0.45",
        55: "0.55",
        58: "0.58",
        62: "0.62",
        65: "0.65",
        68: "0.68",
      },
    },
  },
  plugins: [],
} satisfies Config;
