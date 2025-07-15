/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#072040",
        secondary: "#46aaff",
        gray: {
          100: "#f3f4f6",
          300: "#d1d5db",
          500: "#6b7280",
        },
        success: "#b9fbc0",
        error: "#fca5a5",
      },
    },
  },
  plugins: [require("daisyui")],
};
