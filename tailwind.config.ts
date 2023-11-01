import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/assets/image/hero_iphone15pro_large.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        common: "#F5F5F7",
        secondary: "#000000",
        "common-button": "#06c",
      },
    },
  },
  extend: {
    colors: {
      common: "#F5F5F7",
      commonButton: "#06c",
      white: "#ffffff",
      "custom-black": "#262626",
      gray: "#E2E2E2",
      "gray-light": "#F5F5F5",
      "gray-deep": "#7F7F7F",
      sky: "#EBF3FF",
      green: "#28A745",
      blue: "#ADD4EF",
      yellow: "#FEBA02",
      "black-light": "#282828",
      red: "#FF0000",
    },
    gridTemplateColumns: {
      16: "repeat(16, minmax(0, 1fr))",
    },
    gridColumn: {
      "span-16": "span 16 / span 16",
    },
  },
  plugins: [],
};
export default config;
