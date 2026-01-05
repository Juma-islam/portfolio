/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a855f7", // Purple-500 equivalent
        secondary: "#d946ef", // Fuchsia-500
        dark: "#0a0a0a",
        "background-light": "#f3f4f6",
        "background-dark": "#050505", // Very dark, almost black
        "card-dark": "#121212",
        "accent-glow": "rgba(168, 85, 247, 0.5)"
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}