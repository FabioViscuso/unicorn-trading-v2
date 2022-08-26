/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/*.html",
  ],
  theme: {
    extend: {
      'fontFamily': {
        'josefin': ['Josefin', 'Sans',],
        'body': ['Open Sans',],
      },
    },

    'mobile': '360px',
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
        ".bg-aqua": { background: "aqua" },
        ".rotate-150deg": {
          transform: "rotateX(150deg)",
        },
      };
      addUtilities(myUtilities);
    }),
  ],
}
