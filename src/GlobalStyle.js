import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --size-1: 4px;
    --size-2: 8px;
    --size-3: 12px;
    --size-4: 16px;
    --size-5: 24px;
    --size-6: 32px;
    --size-7: 48px;
    --size-8: 64px;
    --size-9: 96px;
    --size-10: 128px;

    --primary-1: #044E54;
    --primary-2: #0A6C74;
    --primary-3: #0E7C86;
    --primary-4: #14919B;
    --primary-5: #2CB1BC;
    --primary-6: #38BEC9;
    --primary-7: #54D1DB;
    --primary-8: #87EAF2;
    --primary-9: #BEF8FD;
    --primary-10: #E0FCFF;

    --neutral-1: #102A43;
    --neutral-2: #243B53;
    --neutral-3: #334E68;
    --neutral-4: #486581;
    --neutral-5: #627D98;
    --neutral-6: #829AB1;
    --neutral-7: #9FB3C8;
    --neutral-8: #BCCCDC;
    --neutral-9: #D9E2EC;
    --neutral-10: #F0F4F8;

  }
  
  :root {
    --shadow: 2px 2px 2px 2px var(--neutral-9)
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }

  #root {
    height: 100%
  }

  html, body {
    height: 100%;
    font-size: var(--size-4);
    background: var(--neutral-10);
  }

  input, textarea, button {
    font-size: 1em;
  }
`

export default GlobalStyle
