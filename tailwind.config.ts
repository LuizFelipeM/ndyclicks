import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const textShadowDefault = '2px 2px 4px rgba(0, 0, 0, 0.5)'
const textShadowMd = '5px 5px 6px rgba(0, 0, 0, 0.5)'
const textShadowLg = '5px 5px 2px rgba(0, 0, 0, 0.5)'

const textShadowPlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    '.text-shadow': {
      'text-shadow': textShadowDefault,
    },
    '.text-shadow-md': {
      'text-shadow': textShadowMd,
    },
    '.text-shadow-lg': {
      'text-shadow': textShadowLg,
    },
  })
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#000000',
      'red': '#DF1F1F',
      'savoy-blue': '#5762d6',
      'rose': '#ff216e',
      'rich-black': '#0e1223',
      'oxford-blue': '#12182B',
      'space-cadet': '#18203A',
      'jet': '#323232',
      'dim-gray': '#73746c',
      'white-smoke': '#f3f3f3',
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
      textShadow: {
        'default': textShadowDefault,
        'md': textShadowMd,
        'lg': textShadowLg,
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    textShadowPlugin
  ],
};
export default config;
