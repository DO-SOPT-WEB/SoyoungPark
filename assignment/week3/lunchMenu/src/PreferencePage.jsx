import styled from 'styled-components';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Recommend from './Recommend';
import Result from './Result';
const Preference = (props) => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <Style.Container>
      {step == 0 ? <Recommend category={props.category} /> : null}
      {step == 1 ? (
        <>
          <Step1 />
          <Style.BtnContainer>
            <Style.Btn onClick={prevStep}>이전으로</Style.Btn>
            <Style.Btn onClick={nextStep}>다음으로</Style.Btn>
          </Style.BtnContainer>
        </>
      ) : null}
      {step == 2 ? (
        <>
          <Step2 />
          <Style.BtnContainer>
            <Style.Btn onClick={prevStep}>이전으로</Style.Btn>
            <Style.Btn onClick={nextStep}>다음으로</Style.Btn>
          </Style.BtnContainer>
        </>
      ) : null}
      {step == 3 ? (
        <>
          <Step3 />
          <Style.BtnContainer>
            <Style.Btn onClick={prevStep}>이전으로</Style.Btn>
            <Style.Btn onClick={nextStep}>결과보기</Style.Btn>
          </Style.BtnContainer>
        </>
      ) : null}
      {step == 4 ? (
        <>
          <Result />
        </>
      ) : null}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.lightBrown};
    width: 70%;
    height: calc(100% - 9rem);
    border-radius: 0.6rem;
  `,
  BtnContainer: styled.div`
    display: flex;
    gap: 2rem;
  `,
  Btn: styled.button`
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
export default Preference;
