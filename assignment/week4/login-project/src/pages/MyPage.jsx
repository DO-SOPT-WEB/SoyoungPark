import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import axios from 'axios';
const MyPage = () => {
  const params = useParams();
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/members/${params.userId}`);
        setId(response.data.username);
        setNickname(response.data.nickname);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.userId]);
  return (
    <>
      <Header>MY PAGE</Header>
      <ContentWrapper>
        <Icon />
        <DataWrapper>
          <Data>아이디 : {id}</Data>
          <Data>닉네임 : {nickname}</Data>
        </DataWrapper>
      </ContentWrapper>
      <Link to="/login">
        <Button type="button">로그아웃</Button>
      </Link>
    </>
  );
};
const Header = styled.div``;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled(MdAccountCircle)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 100px;
`;
const Button = styled.button`
  width: 20vw;
  height: 7vh;
  border: none;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.deepGray};
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  width: 20vw;
  height: 7vh;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.3rem;
`;

export default MyPage;
