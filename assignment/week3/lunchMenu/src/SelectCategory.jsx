import styled from 'styled-components';

const SelectCategory = (props) => {
  const clickCategory = (e) => {
    props.setCategory(e.target.innerHTML);
  };
  return (
    <>
      <Style.CategoryHeader>
        <h3>원하는 추천 방식 선택</h3>
      </Style.CategoryHeader>
      <Style.CategoryContent>
        <Style.Category
          onClick={(e) => {
            clickCategory(e);
          }}
        >
          취향대로 추천
        </Style.Category>
        <Style.Category
          onClick={(e) => {
            clickCategory(e);
          }}
        >
          랜덤으로 추천
        </Style.Category>
      </Style.CategoryContent>
    </>
  );
};

const Style = {
  CategoryHeader: styled.div`
    display: flex;
    width: 60vw;
    padding: 2rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    height: 3rem;
    align-self: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    border-radius: 1rem;
  `,
  CategoryContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 60vw;
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
