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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#6FA8FF",
          light: "#CFE3FF",
        },
        secondary: "#CFE3FF",
        accent: "#A8B8FF",
        navy: {
          DEFAULT: "#1A2A4A",
          light: "#4A5A7A",
        },
        mist: "#F3F7FF",
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(111, 168, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 60px rgba(111, 168, 255, 0.4), 0 0 120px rgba(168, 184, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
