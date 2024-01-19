/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#693130",
        secondary: "#7f4b4b",
        accent: "#e8642f",
        neutral: "#fdf7e8",
        "base-100": "#f6dcca",
        info: "#fcfcfc",
        success: "#c8a593",
        warning: "#a16207",
        error: "#dc2626"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
