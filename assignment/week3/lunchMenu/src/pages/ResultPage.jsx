import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { MENU_LIST } from '../constants/menu';

const ResultPage = (props) => {
  const [finalmenu, setFinalMenu] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const reset = () => {
    props.category === '취향대로 추천' ? props.dispatch({ type: 'START' }) : props.setStep(0);
  };

  if (props.category === '취향대로 추천') {
    const menu = MENU_LIST.filter((item) => {
      return (
        item.country === props.options.country && item.main === props.options.main && item.soup === props.options.soup
      );
    });
    useEffect(() => {
      const random = Math.floor(Math.random() * menu.length);
      setFinalMenu(menu[random].name);
      setMenuImage(menu[random].image);
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
export default ResultPage;
