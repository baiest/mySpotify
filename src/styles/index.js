import { createGlobalStyle } from 'styled-components'
import { color } from './colors'
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #FFF;
  }
  
  body {
    font-size: 62.5%;
    background: ${color.backgroud};
  }
`
