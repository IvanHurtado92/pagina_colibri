/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // qué hace extend?
      // https://tailwindcss.com/docs/theme#extending-the-default-theme
      colors: {
        verde_mamalon: "#2EDF59",
      },
    },
  },
  plugins: [],
};
