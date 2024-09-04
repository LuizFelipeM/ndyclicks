import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT"

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'savoy-blue': '#5762d6',
      'rose': '#ff216e',
      'rich-black': '#0e1223',
      'jet': '#323232',
      'dim-gray': '#73746c',
      'white-smoke': '#f3f3f3',
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}) as Config;
export default config;
