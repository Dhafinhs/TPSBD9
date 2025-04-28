export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // ← penting
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // biru-600
        secondary: "#ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
