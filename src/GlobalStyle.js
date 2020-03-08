import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }

  body {
    font-size: 18px;
  }

  input, textarea, button {
    font-size: 1em;
  }
`

export default GlobalStyle
