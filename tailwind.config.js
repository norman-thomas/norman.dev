const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      warmgray: colors.warmGray,
      indigo: colors.indigo,
      blue: colors.blue,
      green: colors.green,
      teal: colors.teal,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      serif: ["Merriweather", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
      fontStyle: ["hover"],
      fontFamily: ["hover"],
    },
  },
  plugins: [],
}
