import styled from 'styled-components';
import { useState } from 'react';
import SelectCategory from './SelectCategory';
import Recommend from './Recommend';
const OnBoarding = () => {
  const [category, setCategory] = useState('');
  return (
    <Style.Container>
      <Style.CategoryHeader>
        <h3>원하는 추천 방식 선택</h3>
      </Style.CategoryHeader>

      {category ? <Recommend category={category} /> : <SelectCategory setCategory={setCategory} />}
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
    width: 80%;
    height: calc(100% - 9rem);
    border-radius: 0.6rem;
  `,
  CategoryHeader: styled.div`
    display: flex;
    width: 70%;
    padding: 2rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    height: 3rem;
    align-self: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    border-radius: 1rem;
  `,
};

export default OnBoarding;
