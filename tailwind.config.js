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
    screens: {
      'xs': '100px',
      // => @media (min-width: 100px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
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
