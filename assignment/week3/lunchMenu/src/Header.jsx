import styled from 'styled-components';
import cookie1 from '/cookie.png';
import cookie2 from '/cookie2.png';

const Header = () => {
  return (
    <Style.MainHeader>
      <Style.ImgContainer>
        <img src={cookie1} className="cookie1"></img>
      </Style.ImgContainer>
      <h1>오늘의 점메추</h1>
      <Style.ImgContainer>
        <img src={cookie2}></img>
      </Style.ImgContainer>
    </Style.MainHeader>
  );
};

const Style = {
  MainHeader: styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    text-align: center;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.lightBrown};
    width: 100vw;
  `,
  ImgContainer: styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 2rem;
      max-width: 100vw;
      height: auto;
      transform: rotate(15deg);
    }
  `,
};
export default Header;
