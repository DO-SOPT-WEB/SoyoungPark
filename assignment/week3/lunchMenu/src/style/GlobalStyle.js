import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
#root, body, html {
    margin: 0 auto;
}
  
* {
   font-family: 'KOTRAHOPE';
    box-sizing: border-box;
}
`;

export default GlobalStyle;
