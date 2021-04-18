const colors = require("tailwindcss/colors")
const myColors = require("./colors")

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
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
      ...myColors.blues,
    },
    fontFamily: {
      serif: ["Merriweather", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      // sans: ["Merriweather Sans", "ui-sans-serif", "system-ui"],
      mono: ["Fira Code", "Menlo", "Monaco", "Courier New", "monospace"],
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
