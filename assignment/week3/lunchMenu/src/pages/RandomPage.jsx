import { useState } from 'react';
import { useEffect } from 'react';
import ResultPage from './ResultPage';
import RecommendStartPage from './RecommendStartPage';
import styled, { keyframes } from 'styled-components';

const RandomPage = (props) => {
  const [time, setTime] = useState(3);
  const [step, setStep] = useState();

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  return (
    <>
      {time ? (
        <Style.CountDown>{time}</Style.CountDown>
      ) : step === 0 ? (
        <RecommendStartPage category={props.category} />
      ) : (
        <ResultPage category={props.category} setStep={setStep} />
      )}
    </>
  );
};

const bounce = keyframes`
100% {
  top: 0px;}
`;
const Style = {
  CountDown: styled.p`
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.white};
    filter: drop-shadow(0 0 2px ${({ theme }) => theme.colors.ochre})
      drop-shadow(0 0 5px ${({ theme }) => theme.colors.ochre});
    position: relative;
    top: -20px;
    display: inline-block;
    animation: ${bounce} 0.5s ease-in infinite alternate;
  `,
};

export default RandomPage;
