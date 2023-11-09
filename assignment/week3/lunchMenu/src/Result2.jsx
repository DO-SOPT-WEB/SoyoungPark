import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
const MENU_LIST = [
  {
    name: '불고기',
    image:
      'https://s3.ap-northeast-2.amazonaws.com/meesig/v3/prod/image/item/main/288/a12f1ee3aea649c1b72c11d8c9cf880e20170515202929',
  },
  {
    name: '해물파전',
    image: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/16354724603.jpg',
  },
  {
    name: '가츠동',
    image:
      'https://lh3.googleusercontent.com/-MW7UyHsD05o/XDmbqkOTTWI/AAAAAAAH_O4/W0EEmrLGFf0dFl4jaoHRm1DoXPc0jHOYgCHMYCw/s0/a983d12ff4b5922deb91f54c7caf9feb1109bc96.jpg',
  },
  {
    name: '야끼소바',
    image: 'https://www.homecuisine.co.kr/files/attach/images/142/627/014/b0db9e7a79e564d17ce3eaf824361c70.JPG',
  },
  {
    name: '규동',
    image:
      'https://i.namu.wiki/i/xH8J2dZ2EZB5zkg58-RCN-MGNoxg8k3DrTxaOWAMgRlla_TiHM8QzJEd4-BvjRdMcoveEdVH3FP_aLuTZ_0gRA.webp',
  },
  {
    name: '초밥',
    image: 'https://m.namjasusan.com/web/product/medium/202205/f26bdf68bcf65a833be99a744cabb189.jpg',
  },
  {
    name: '마라탕',
    image:
      'https://s3-ap-northeast-1.amazonaws.com/agreable-shoplink/item/templates/dec715a496d94b43925b653161b78381.jpg',
  },
  {
    name: '탕수육',
    image: 'https://blog.kakaocdn.net/dn/qnIz2/btqSdtiK7C4/Thg8RwPPLh1slbBI8Vsksk/img.jpg',
  },
  {
    name: '짜장면',
    image:
      'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2JVJ/image/vEBttMW9x_W027VoICmrbHh3fY4.png',
  },
];
const Result2 = () => {
  const [finalmenu, setFinalMenu] = useState('');
  const [menuImage, setMenuImage] = useState('');
  useEffect(() => {
    const random = Math.floor(Math.random() * MENU_LIST.length);
    const menu = MENU_LIST[random];
    setFinalMenu(menu.name);
    setMenuImage(menu.image);
  }, []);
  return (
    <>
      <Style.ResultHeader>
        <h3>오늘의 추천 음식은 두구두구..😮</h3>
      </Style.ResultHeader>
      <Style.ContentContainer>
        <img src={menuImage}></img>
        <h2>{finalmenu}</h2>
      </Style.ContentContainer>
      <Style.Btn>다시하기</Style.Btn>
    </>
  );
};

const Style = {
  ResultHeader: styled.div`
    display: flex;
    width: 60vw;
    padding: 2rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    height: 3rem;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    border-radius: 1rem;
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    align-items: center;
    height: 25rem;

    & > img {
      width: 40vw;
      max-height: 30vh;
      height: auto;
      border-radius: 0.6rem;
    }
  `,
  Btn: styled.button`
    width: 6rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.brown};
    color: white;
    border: none;
    height: 3rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  `,
};
export default Result2;
