import styled from 'styled-components';
import { useState } from 'react';
import SelectCategory from './SelectCategory';
import Recommend from './Recommend';
const OnBoarding = () => {
  const [category, setCategory] = useState('');
  const [startRecommend, setStartRecommend] = useState(false);

  return (
    <Style.Container>
      {category ? (
        <Recommend category={category} startRecommend={startRecommend} setStartRecommend={setStartRecommend} />
      ) : (
        <SelectCategory setCategory={setCategory} />
      )}
    </Style.Container>
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

export default OnBoarding;
