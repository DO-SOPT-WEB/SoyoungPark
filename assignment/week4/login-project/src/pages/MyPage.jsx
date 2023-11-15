import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
const MyPage = () => {
  const { userId } = useParams();

  return (
    <>
      <Header>MY PAGE</Header>
      <ContentWrapper>
        <Icon />
        <div>dd</div>
        <div>dd</div>
      </ContentWrapper>
      <Link to="/login">
        <Button type="button">로그아웃</Button>
      </Link>
    </>
  );
};
const Header = styled.div``;
const ContentWrapper = styled.div`
  text-align: center;
`;
const Icon = styled(MdAccountCircle)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 100px;
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

export default MyPage;
