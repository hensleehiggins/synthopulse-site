import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06111f",
        pulse: "#20d3ee",
        deep: "#071827"
      }
    }
  },
  plugins: []
};

export default config;
