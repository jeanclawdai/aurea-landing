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
        // New Premium Color Palette
        ocean: {
          DEFAULT: "#073653", // Deep ocean blue
          light: "#0a5278",
        },
        cyan: {
          DEFAULT: "#03A7CA", // Bright cyan
          light: "#50c5e0",
        },
        sky: {
          DEFAULT: "#BAE0E7", // Light sky blue
          light: "#d4edf2",
        },
        mist: {
          DEFAULT: "#E2E7EA", // Light gray-blue
          light: "#f0f3f5",
        },
        // Legacy (for compatibility)
        primary: {
          DEFAULT: "#03A7CA",
          light: "#BAE0E7",
        },
        navy: {
          DEFAULT: "#073653",
          light: "#0a5278",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(3, 167, 202, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 60px rgba(3, 167, 202, 0.4), 0 0 120px rgba(186, 224, 231, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
