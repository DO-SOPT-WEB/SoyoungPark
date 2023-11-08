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
    width: 100%;
  `,
  ImgContainer: styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: center; /* 이미지를 가운데 정렬합니다. */
    align-items: center; /* 이미지를 가운데 정렬합니다. */

    & > img {
      width: 2rem; /* 이미지의 가로폭을 50%로 조절 */
      max-width: 100%;
      height: auto; /* 가로폭에 따라 세로 크기 자동 조절 */
      transform: rotate(15deg);
    }
  `,
};
export default Header;
