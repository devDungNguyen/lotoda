/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf8ff",
          100: "#d6edff",
          200: "#b5e0ff",
          300: "#83cfff",
          400: "#48b3ff",
          500: "#1e8eff",
          600: "#066dff",
          700: "#0056f7",
          800: "#0844c5",
          900: "#0d3e9b",
          950: "#0e275d",
        },
      },
    },
  },
  plugins: [],
};
