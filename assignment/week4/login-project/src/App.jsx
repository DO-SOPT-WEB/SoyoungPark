import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import Router from './components/Router';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <SubContainer>
          <Router />
        </SubContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 60vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;
  gap: 1rem;
`;
export default App;
