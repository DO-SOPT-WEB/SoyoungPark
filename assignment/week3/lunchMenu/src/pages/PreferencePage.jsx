import styled from 'styled-components';
import { useReducer, useState } from 'react';
import Step from '../components/Step';
import RecommendStartPage from './RecommendStartPage';
import ResultPage from './ResultPage';
const Preference = (props) => {
  const [step, dispatch] = useReducer(reducer, 1);
  const [select, setSelect] = useState(false);
  const [options, setOption] = useState({
    country: '',
    main: '',
    soup: '',
  });

  function reducer(step, action) {
    switch (action.type) {
      case 'PREV_PAGE':
        return step - 1;
      case 'NEXT_PAGE':
        return step + 1;
      case 'START':
        return 0;
    }
  }
  const nextStep = () => {
    dispatch({ type: 'NEXT_PAGE' });
    setSelect(false);
  };
  const prevStep = () => {
    dispatch({ type: 'PREV_PAGE' });
    setSelect(true);
  };
  return (
    <Style.Container>
      {step == 0 ? (
        <>
          <RecommendStartPage category={props.category} />
        </>
      ) : null}
      {step == 1 ? (
        <>
          <Step
            title="어떤 종류가 좋아?"
            step={step}
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
            step={step}
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
            step={step}
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
          <ResultPage options={options} category={props.category} dispatch={dispatch} />
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
