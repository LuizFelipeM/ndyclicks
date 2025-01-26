import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const textShadowDefault = "2px 2px 4px rgba(0, 0, 0, 0.5)";
const textShadowMd = "5px 5px 6px rgba(0, 0, 0, 0.5)";
const textShadowLg = "5px 5px 2px rgba(0, 0, 0, 0.5)";

const textShadowPlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    ".text-shadow": {
      "text-shadow": textShadowDefault,
    },
    ".text-shadow-md": {
      "text-shadow": textShadowMd,
    },
    ".text-shadow-lg": {
      "text-shadow": textShadowLg,
    },
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",

      error: "#DF1F1F",

      primary: {
        DEFAULT: "#663E2A",
        light: "#764D33",
        dark: "#4C2318",
      },

      secondary: {
        olive: {
          DEFAULT: "#8C9A76",
          light: "#A2B28A",
          dark: "#6F7D5C",
        },
      },

      neutral: {
        "white-smoke": "#f3f3f3",
        silver: "#ABABAB",
        platinum: "#E5E5E5",
        jet: {
          DEFAULT: "#323232",
          dark: "#333333",
        },
        "dim-gray": "#73746c",
      },
    },

    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      textShadow: {
        default: textShadowDefault,
        md: textShadowMd,
        lg: textShadowLg,
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), textShadowPlugin],
};
export default config;
