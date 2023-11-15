import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NPSfontBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
#root, body, html {
    margin: 0 auto;
}
  
* {
   font-family: 'NPSfontBold';
    box-sizing: border-box;
}
`;

export default GlobalStyle;
