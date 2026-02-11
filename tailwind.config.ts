import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nwa-dark': '#1C1F24',
        'nwa-darker': '#0F1115',
        'nwa-anthracite': '#22262B',
        'nwa-metal': '#9A9A9A',
        'nwa-silver': '#B5B5B5',
        'nwa-light-silver': '#D6D6D6',
        'nwa-highlight': '#E3E3E3',
        'nwa-cyan': '#00B7D6',
        'nwa-cyan-bright': '#00CFEA',
        'nwa-text': '#F2F2F2',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
