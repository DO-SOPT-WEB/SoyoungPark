import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
const MENU_LIST = [
  {
    name: '불고기',
    country: '한식',
    main: '고기/해물',
    soup: '국물 필요없어!',
    image:
      'https://s3.ap-northeast-2.amazonaws.com/meesig/v3/prod/image/item/main/288/a12f1ee3aea649c1b72c11d8c9cf880e20170515202929',
  },
  {
    name: '해물파전',
    country: '한식',
    main: '고기/해물',
    soup: '국물 필요없어!',
    image: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/16354724603.jpg',
  },
  {
    name: '순대국밥',
    country: '한식',
    main: '밥',
    soup: '당연!',
    image: 'https://cdn.oasis.co.kr:48581/product/78096/thumb/thumb_7809619e9bd04-e819-4aa4-a665-1f30af0287a8.jpg',
  },
  {
    name: '비빔밥',
    country: '한식',
    main: '밥',
    soup: '국물 필요없어!',
    image:
      'https://img.freepik.com/free-photo/fresh-gourmet-meal-on-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=sph',
  },
  { name: '라면', country: '한식', main: '면', soup: '당연!' },
  {
    name: '김밥',
    country: '한식',
    main: '밥',
    soup: '국물 필요없어!',
    image:
      'https://media.istockphoto.com/id/1482842407/ko/%EC%82%AC%EC%A7%84/%EA%B9%80-%EB%B0%A5.jpg?s=612x612&w=0&k=20&c=WXukllXqm6U3Ps4r7KG-OChRBoeEuSFnjpON4-lQpL0=',
  },
  {
    name: '쫄면',
    country: '한식',
    main: '면',
    soup: '국물 필요없어!',
    image: 'https://cdn.imweb.me/upload/S202110027b8d6aeabd0c5/3ab3c745faa8b.jpg',
  },
  {
    name: '가츠동',
    country: '일식',
    main: '고기/해물',
    soup: '국물 필요없어!',
    image:
      'https://lh3.googleusercontent.com/-MW7UyHsD05o/XDmbqkOTTWI/AAAAAAAH_O4/W0EEmrLGFf0dFl4jaoHRm1DoXPc0jHOYgCHMYCw/s0/a983d12ff4b5922deb91f54c7caf9feb1109bc96.jpg',
  },
  {
    name: '밀푀유나베',
    country: '일식',
    main: '고기/해물',
    soup: '당연!',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2023/03/02/c3e761c077b127a7ff0ecdb1af17a12f1.jpg',
  },
  {
    name: '라멘',
    country: '일식',
    main: '면',
    soup: '당연!',
    image: 'https://image.jtbcplus.kr/data/contents/jam_photo/202306/11/25f2e97f-90ff-46f1-8ed7-4296b70c44e4.jpg',
  },
  {
    name: '야끼소바',
    country: '일식',
    main: '면',
    soup: '국물 필요없어!',
    image: 'https://www.homecuisine.co.kr/files/attach/images/142/627/014/b0db9e7a79e564d17ce3eaf824361c70.JPG',
  },
  {
    name: '규동',
    country: '일식',
    main: '밥',
    soup: '국물 필요없어!',
    image:
      'https://i.namu.wiki/i/xH8J2dZ2EZB5zkg58-RCN-MGNoxg8k3DrTxaOWAMgRlla_TiHM8QzJEd4-BvjRdMcoveEdVH3FP_aLuTZ_0gRA.webp',
  },
  {
    name: '초밥',
    country: '일식',
    main: '밥',
    soup: '국물 필요없어!',
    image: 'https://m.namjasusan.com/web/product/medium/202205/f26bdf68bcf65a833be99a744cabb189.jpg',
  },
  {
    name: '잡채밥',
    country: '중식',
    main: '밥',
    soup: '국물 필요없어!',
    image: 'https://www.homecuisine.co.kr/files/attach/images/142/850/002/37e6010a503adf40d59f6d0d6dadd8eb.JPG',
  },
  {
    name: '마라탕',
    country: '중식',
    main: '고기/해물',
    soup: '당연!',
    image:
      'https://s3-ap-northeast-1.amazonaws.com/agreable-shoplink/item/templates/dec715a496d94b43925b653161b78381.jpg',
  },
  {
    name: '탕수육',
    country: '중식',
    main: '고기/해물',
    soup: '국물 필요없어!',
    image: 'https://blog.kakaocdn.net/dn/qnIz2/btqSdtiK7C4/Thg8RwPPLh1slbBI8Vsksk/img.jpg',
  },
  {
    name: '짜장면',
    country: '중식',
    main: '면',
    soup: '국물 필요없어!',
    image:
      'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2JVJ/image/vEBttMW9x_W027VoICmrbHh3fY4.png',
  },
  {
    name: '짬뽕',
    country: '중식',
    main: '면',
    soup: '당연!',
    image: 'https://t1.daumcdn.net/cfile/tistory/227DF04451F36B4436',
  },
];
const Result = (props) => {
  const [finalmenu, setFinalMenu] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const reset = () => {
    props.setStep(0);
  };

  if (props.category === '취향대로 추천') {
    const menu = MENU_LIST.filter((item) => {
      return (
        item.country === props.options.country && item.main === props.options.main && item.soup === props.options.soup
      );
    });
    useEffect(() => {
      if (menu.length > 0) {
        const random = Math.floor(Math.random() * menu.length);
        setFinalMenu(menu[random].name);
        setMenuImage(menu[random].image);
      } else {
        setFinalMenu('원하시는 메뉴가 업써용 ㅜ오늘 점심은,,😭');
      }
    }, []);
  } else {
    useEffect(() => {
      const random = Math.floor(Math.random() * MENU_LIST.length);
      const menu = MENU_LIST[random];
      setFinalMenu(menu.name);
      setMenuImage(menu.image);
    }, []);
  }

  return (
    <>
      <Style.ResultHeader>
        <h3>오늘의 추천 음식은 두구두구..😮</h3>
      </Style.ResultHeader>
      <Style.ContentContainer>
        <img src={menuImage}></img>
        <h2>{finalmenu}</h2>
      </Style.ContentContainer>
      <Style.Btn onClick={reset}>다시하기</Style.Btn>
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
export default Result;
