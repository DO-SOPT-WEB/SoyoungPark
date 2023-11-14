import styled from 'styled-components';
import { useState } from 'react';
import Header from '../components/Header';
import SelectCategory from '../components/SelectCategory';
import RecommendStartPage from './RecommendStartPage';
const OnBoardingPage = () => {
  const [category, setCategory] = useState('');
  const [startRecommend, setStartRecommend] = useState(false);

  return (
    <>
      {category ? (
        <>
          <Header category={category} setCategory={setCategory} />
          <Style.Container>
            <RecommendStartPage
              category={category}
              startRecommend={startRecommend}
              setStartRecommend={setStartRecommend}
            />
          </Style.Container>
        </>
      ) : (
        <>
          <Header />
          <Style.Container>
            <SelectCategory setCategory={setCategory} />
          </Style.Container>
        </>
      )}
    </>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.lightBrown};
    width: 80vw;
    height: calc(100vh - 9rem);
    border-radius: 0.6rem;
  `,
};

export default OnBoardingPage;
