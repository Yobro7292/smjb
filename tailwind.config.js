/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#8e5e48",
        "dark-brown": "#6e422d",
        "light-brown": "#e0bead",
      },
    },
  },
  plugins: [],
};
