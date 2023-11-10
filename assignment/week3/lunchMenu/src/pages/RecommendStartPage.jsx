import styled from 'styled-components';
import RandomPage from './RandomPage';
import PreferencePage from './PreferencePage';
import { useState } from 'react';
const RecommendStartPage = (props) => {
  const [startRecommend, setStartRecommend] = useState(false);
  const clickStart = () => {
    setStartRecommend(true);
  };
  return (
    <>
      {startRecommend ? (
        <>
          {props.category === '취향대로 추천' ? <PreferencePage category={props.category} /> : null}
          {props.category === '랜덤으로 추천' ? <RandomPage category={props.category} /> : null}
        </>
      ) : (
        <>
          <Style.Category>{props.category}</Style.Category>
          <Style.StartBtn onClick={clickStart}>START</Style.StartBtn>
        </>
      )}
    </>
  );
};

const Style = {
  Category: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    background-color: ${({ theme }) => theme.colors.white};
    width: 60vw;
    border-radius: 1rem;
    height: 25rem;
  `,
  StartBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    width: 6rem;
    border: none;
    border-radius: 1rem;
    height: 3rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export default RecommendStartPage;
