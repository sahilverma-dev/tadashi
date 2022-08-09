/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        dark: {
          100: "#1e1e1e",
          200: "#1c1c1c",
          300: "#1a1a1a",
          400: "#181818",
          500: "#161616",
          600: "#141414",
          700: "#121212",
          800: "#101010",
          900: "#0e0e0e",
        },
      },
    },
  },
  plugins: [],
};
