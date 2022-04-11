import { createGlobalStyle } from "styled-components"
import { color } from "./colors"
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background: ${color.backgroud};
  }
`
