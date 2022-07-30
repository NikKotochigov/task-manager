import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #5aa;
    font-family: "MS Sans Serif";
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #333;
  }
`
 
export default GlobalStyle;