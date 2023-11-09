import styled from 'styled-components';
import RandomPage from './RandomPage';
import PreferencePage from './PreferencePage';
import { useEffect } from 'react';
const Recommend = (props) => {
  const clickStart = () => {
    props.setStartRecommend(true);
  };
  return (
    <>
      {props.startRecommend && props.category ? (
        <>
          {props.category === '취향대로 추천' ? (
            <PreferencePage category={props.category} startRecommend={props.startRecommend} />
          ) : null}
          {props.category === '랜덤으로 추천' ? <RandomPage /> : null}
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
    width: 70%;
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

export default Recommend;
