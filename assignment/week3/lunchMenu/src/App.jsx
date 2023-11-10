import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import Header from './components/Header';
import OnBoardingPage from './pages/OnBoardingPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled>
        <Header />
        <OnBoardingPage />
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
