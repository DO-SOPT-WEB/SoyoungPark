import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import Header from './Header';
import OnBoarding from './OnBoarding';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled>
        <Header />
        <OnBoarding />
      </Styled>
    </ThemeProvider>
  );
}
const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: 100vh;
`;

export default App;
