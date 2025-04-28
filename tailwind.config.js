/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#03254c",
        "blue-1": "#1167b1",
        "blue-2": "#187bcd",
        "blue-3": "#2a9df4",
        light: "#d0efff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

