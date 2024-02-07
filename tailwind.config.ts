import type { Config } from "tailwindcss";
import { transparent, current } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      current,
      transparent,
      light: "#FFFFFF",
      dark: "#151515",
      pink: {
        dark: "#640227",
        medium: "#833552",
        light: "#F8D9E8",
        extraLight: "#F8D9E8",
        highlight: "#FF62AE",
        "1/10": "#6402271A",
      },
      blue: {
        dark: "#1F2C2E",
        medium: "#354143",
        light: "#9CB5BA",
        extraLight: "#9CB5BA",
        highlight: "#9BEEFF",
        "1/10": "#1F2C2E1A",
      },
      green: {
        dark: "#394107",
        medium: "#4D5420",
        light: "#D4E99C",
        extraLight: "#D4E99C",
        highlight: "#97C910",
        "1/10": "#3941071A",
      },
    },
    extend: {
      borderRadius: {
        inherit: "inherit",
      },
      animation: {
        slideDown: "slideDown 250ms cubic-bezier(0.45, 1.45, 0.8, 1)",
        slideUp: "slideUp 250ms cubic-bezier(0.45, 1.45, 0.8, 1)",
      },
      keyframes: {
        slideDown: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
