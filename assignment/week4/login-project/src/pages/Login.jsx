import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Header>Login</Header>
      <InputWrapper>
        <Input placeholder="아이디를 입력해주세요."></Input>
        <Input placeholder="비밀번호를 입력해주세요."></Input>
      </InputWrapper>
      <ButtonWrapper>
        <Link to="/mypage/:userId">
          <Button type="button">로그인</Button>
        </Link>
        <Link to="/signup">
          <Button type="button">회원가입</Button>
        </Link>
      </ButtonWrapper>
    </>
  );
};

export default Login;

const Header = styled.div``;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Input = styled.input`
  width: 30vw;
  flex: 1;
  border-radius: 0.3rem;
  border: 0.1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Button = styled.button`
  width: 30vw;
  height: 7vh;
  border: none;
  border-radius: 0.3rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
