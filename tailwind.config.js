/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'main': ["Inter", "serif"]
    },
    extend: {
      boxShadow: {
        'cursor': '0 0 50px 25px rgba(255, 59, 59, 0.6)',
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "sm": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "xs": { max: "570px" },
      // => @media (max-width: 639px) { ... }

      "vsm": { max: "500px" },
      // => @media (max-width: 480px) { ... }
    }
  },
  plugins: [],
}