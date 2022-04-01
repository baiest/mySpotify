import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["800"],
    },
    {
      name: "Montserrat",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Montserrat", "serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
})

typography.injectStyles()

export default typography
