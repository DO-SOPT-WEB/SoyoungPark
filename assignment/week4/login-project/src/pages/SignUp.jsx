import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    id: '',
    password: '',
    confirmPW: '',
    nickname: '',
  });
  const [check, setCheck] = useState({
    checkID: 'uncheck',
  });

  const [inactive, setInactive] = useState(true);

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    name === 'id' ? setCheck({ ...check, checkID: 'uncheck' }) : null;
  };
  const isExist = () => {
    const API = `http://3.39.54.196/api/v1/members/check?username=${userData.id}`;
    axios
      .get(API)
      .then((response) => {
        response.data.isExist ? setCheck({ ...check, checkID: false }) : setCheck({ ...check, checkID: true });
      })
      .catch((error) => {
        console.error('Error checking username:', error);
      });
  };
  useEffect(() => {
    handleButton();
  }, [check.checkID, userData]);

  const handleButton = () => {
    Object.values(userData).every((value) => value !== '') && check.checkID === true
      ? setInactive(false)
      : setInactive(true);
  };

  const signUpBtnClick = () => {
    const API = `http://3.39.54.196/api/v1/members`;
    axios
      .post(
        API,
        {
          username: userData.id,
          password: userData.password,
          nickname: userData.nickname,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        alert('회원가입 성공');
        navigate('/login');
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
      <Button type="button" onClick={signUpBtnClick} disabled={inactive}>
        회원가입
      </Button>
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
    $checkid ? ($checkid === 'uncheck' ? theme.colors.black : theme.colors.green) : theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`;
const Button = styled.button`
  width: 30vw;
  height: 7vh;
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme, disabled }) => (disabled ? null : theme.colors.black)};
  color: ${({ theme, disabled }) => (disabled ? null : theme.colors.white)};
`;
