import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#00a397",
        blue:"#00a3af",
        headeing:"#302833",
        body:"#2b2b2b",
        light:"#e7e7eb",
        pinkLight:"#fdeff2",
        yellowLight:"#f4dda5",
        purpleLight:"#dbd0e6",
        redLight:"#e597b2",
      }
    },
  },
  plugins: [],
};
export default config;
