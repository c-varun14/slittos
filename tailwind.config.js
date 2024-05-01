/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      customSm: { max: "640px" },
    },
    colors: {
      ...colors,
      customBg: "#090909",
      customLogo: "#DC5923",
    },
  },
  plugins: [],
};
