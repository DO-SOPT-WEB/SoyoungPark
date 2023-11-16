import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      setMessage('');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const loginBtnClick = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`, {
        username: userData.username,
        password: userData.password,
      });
      // 아이디와 비밀번호 입력 안했을 때도 로그인되는 문제 해결
      if (userData.username && userData.password) {
        alert('로그인 성공');
        navigate(`/mypage/${response.data.id}`);
      } else {
        alert('아이디와 비밀번호를 입력해주세요');
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Header>Login</Header>
      <InputWrapper>
        <Input placeholder="아이디를 입력해주세요." name="username" onChange={handleUserData}></Input>
        <Input placeholder="비밀번호를 입력해주세요." name="password" onChange={handleUserData}></Input>
      </InputWrapper>
      <ButtonWrapper>
        <Button type="button" onClick={loginBtnClick}>
          로그인
        </Button>
        <Link to="/signup">
          <Button type="button">회원가입</Button>
        </Link>
      </ButtonWrapper>
      {message ? createPortal(<ToastMessage>{message}</ToastMessage>, document.getElementById('toast')) : null}
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
  color: ${({ theme }) => theme.colors.deepGray};
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const ToastMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 3rem;
  width: 30vw;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;
`;
