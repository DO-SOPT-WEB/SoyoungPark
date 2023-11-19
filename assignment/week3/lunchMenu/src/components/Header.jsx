import styled from 'styled-components';
import cookie1 from '../images/cookie.png';
import cookie2 from '../images/cookie2.png';
import RandomPage from '../pages/RandomPage';
import PreferencePage from '../pages/PreferencePage';

const Header = (props) => {
  const goBack = () => {
    props.setCategory('');
  };
  return (
    <Style.Container>
      <Style.MainHeader>
        <Style.ImgContainer>
          <img src={cookie1} className="cookie1"></img>
        </Style.ImgContainer>
        <h1>오늘의 점메추</h1>
        <Style.ImgContainer>
          <img src={cookie2}></img>
        </Style.ImgContainer>
      </Style.MainHeader>
      {props.category ? <Style.GoBack onClick={goBack}>처음으로</Style.GoBack> : null}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.lightBrown};
    width: 100vw;
  `,
  MainHeader: styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    text-align: center;
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
  GoBack: styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    width: 6rem;
    border: none;
    border-radius: 1rem;
    height: 3rem;
    position: absolute;
    left: 80%;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};
export default Header;
