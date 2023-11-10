import { useState } from 'react';
import { useEffect } from 'react';
import ResultPage from './ResultPage';
import RecommendStartPage from './RecommendStartPage';
import styled from 'styled-components';

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

const Style = {
  CountDown: styled.p`
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.white};
    filter: drop-shadow(0 0 2px ${({ theme }) => theme.colors.ochre})
      drop-shadow(0 0 5px ${({ theme }) => theme.colors.ochre});
  `,
};

export default RandomPage;
