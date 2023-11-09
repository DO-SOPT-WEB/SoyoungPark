import styled from 'styled-components';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Recommend from './Recommend';
import Result from './Result';
const Preference = (props) => {
  const [step, setStep] = useState(1);
  const [select, setSelect] = useState(false);
  const [options, setOption] = useState({
    country: '',
    main: '',
    soup: '',
  });

  const nextStep = () => {
    setStep(step + 1);
    setSelect(false);
  };
  const prevStep = () => {
    setStep(step - 1);
    setSelect(true);
  };
  return (
    <Style.Container>
      {step == 0 ? (
        <>
          <Recommend category={props.category} setStep={setStep} />
        </>
      ) : null}
      {step == 1 ? (
        <>
          <Step1 setSelect={setSelect} setOption={setOption} options={options} />
          <Style.BtnContainer>
            <Style.Btn onClick={prevStep}>이전으로</Style.Btn>
            {select ? (
              <Style.Btn onClick={nextStep}>다음으로</Style.Btn>
            ) : (
              <Style.BtnDisable>다음으로</Style.BtnDisable>
            )}
          </Style.BtnContainer>
        </>
      ) : null}
      {step == 2 ? (
        <>
          <Step2 setSelect={setSelect} setOption={setOption} options={options} />
          <Style.BtnContainer>
            <Style.Btn onClick={prevStep}>이전으로</Style.Btn>
            {select ? (
              <Style.Btn onClick={nextStep}>다음으로</Style.Btn>
            ) : (
              <Style.BtnDisable>다음으로</Style.BtnDisable>
            )}
          </Style.BtnContainer>
        </>
      ) : null}
      {step == 3 ? (
        <>
          <Step3 setSelect={setSelect} setOption={setOption} options={options} />
          <Style.BtnContainer>
            <Style.Btn onClick={prevStep}>이전으로</Style.Btn>
            {select ? (
              <Style.Btn onClick={nextStep}>다음으로</Style.Btn>
            ) : (
              <Style.BtnDisable>다음으로</Style.BtnDisable>
            )}
          </Style.BtnContainer>
        </>
      ) : null}
      {step == 4 ? (
        <>
          <Result options={options} category={props.category} />
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
    width: 60vw;
    height: calc(100% - 9rem);
    border-radius: 0.6rem;
  `,
  BtnContainer: styled.div`
    display: flex;
    gap: 2rem;
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
  BtnDisable: styled.button`
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.gray};
    width: 6rem;
    border: none;
    border-radius: 1rem;
    height: 3rem;
  `,
};
export default Preference;
