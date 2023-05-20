// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#F4F0EC",
        textPrimary: "#CDA274",
        textDarkPrimary: "#6D4E2D"
      },
    },
  },
  plugins: [],
};
