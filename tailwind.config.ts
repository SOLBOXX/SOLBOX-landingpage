import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html", 
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        white: '#FDFCF5',
        black: '#000007',
        primary: '#285AF6',
        lightPrimary: '#2C69E2',
        secondary: "#193A9F",
        tertiary: "#041C62",
      },
    },
  },
  plugins: [],
};

export default config;
