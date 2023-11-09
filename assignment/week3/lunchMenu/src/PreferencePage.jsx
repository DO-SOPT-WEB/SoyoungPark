import styled from 'styled-components';
import { useState } from 'react';
import Step from './Step';
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
          <Recommend category={props.category} />
        </>
      ) : null}
      {step == 1 ? (
        <>
          <Step
            title="어떤 종류가 좋아?"
            optionsKey="country"
            setSelect={setSelect}
            setOption={setOption}
            options={options}
            items={['한식', '일식', '중식']}
          />
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
          <Step
            title="이 중에서는 뭐가 끌려?"
            optionsKey="main"
            setSelect={setSelect}
            setOption={setOption}
            options={options}
            items={['밥', '면', '고기/해물']}
          />
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
          <Step
            title="국물은 있는 게 좋아?"
            optionsKey="soup"
            setSelect={setSelect}
            setOption={setOption}
            options={options}
            items={['당연!', '국물 필요없어!']}
          />
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
          <Result options={options} category={props.category} setStep={setStep} />
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
