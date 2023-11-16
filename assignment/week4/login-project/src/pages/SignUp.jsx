import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const SignUp = () => {
  const [userData, setUserData] = useState({
    id: '',
    password: '',
    confirmPW: '',
    nickname: '',
  });
  const [check, setCheck] = useState({
    checkID: '체크전',
  });

  const API = `http://3.39.54.196/api/v1/members/check?username=${userData.id}`;

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setCheck({ ...check, checkID: '체크전' });
  };
  const isExist = () => {
    axios
      .get(API)
      .then((response) => {
        response.data.isExist ? setCheck({ ...check, checkID: false }) : setCheck({ ...check, checkID: true });
      })
      .catch((error) => {
        console.error('Error checking username:', error);
      });
  };
  return (
    <>
      <Header>Sign up</Header>
      <InputWrapper>
        <IdContainer>
          <Input placeholder="아이디를 입력해주세요." onChange={handleUserData} name="id" />
          <IdCheckBtn onClick={isExist} $checkid={check.checkID}>
            중복체크
          </IdCheckBtn>
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
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme, $checkid }) =>
    $checkid ? ($checkid === '체크전' ? theme.colors.black : theme.colors.green) : theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
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
