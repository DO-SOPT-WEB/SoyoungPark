import styled from 'styled-components';

const SelectCategory = () => {
  return (
    <Style.CategoryContent>
      <Style.Category>
        <h3> 취향대로 추천</h3>
      </Style.Category>
      <Style.Category>
        <h3>랜덤으로 추천</h3>
      </Style.Category>
    </Style.CategoryContent>
  );
};

const Style = {
  CategoryContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 70%;
    align-self: center;
    height: 25rem;
  `,
  Category: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    background-color: ${({ theme }) => theme.colors.white};
    width: 50%;
    border-radius: 1rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.brown};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export default SelectCategory;
