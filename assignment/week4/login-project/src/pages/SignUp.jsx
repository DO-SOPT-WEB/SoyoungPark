import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SignUp = () => {
  const [userData, setUserData] = useState({
    id: '',
    password: '',
    confirmPW: '',
    nickname: '',
  });

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData.id);
  return (
    <>
      <Header>Sign up</Header>
      <InputWrapper>
        <IdContainer>
          <Input placeholder="아이디를 입력해주세요." onChange={handleUserData} name="id" />
          <IdCheckBtn>중복체크</IdCheckBtn>
        </IdContainer>
        <Input placeholder="비밀번호를 입력해주세요." onChange={handleUserData} name="password" />
        <Input placeholder="비밀번호를 다시 한 번 입력해주세요." onChange={handleUserData} name="confirmPW" />
        <Input placeholder="닉네임을 입력해주세요." onChange={handleUserData} name="nickname" />
      </InputWrapper>
      <Link to="/login">
        <Button type="button">회원가입</Button>
      </Link>
    </>
  );
};

export default SignUp;

const Header = styled.div``;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 0.3rem;
`;
const IdContainer = styled.div`
  display: flex;
  width: 30vw;
  gap: 0.6rem;
`;
const Input = styled.input`
  flex: 1;
  border-radius: 0.3rem;
  border: 0.1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem;
`;
const IdCheckBtn = styled.button`
  width: 8vw;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.3rem;
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
