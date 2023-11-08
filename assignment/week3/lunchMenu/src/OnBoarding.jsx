import styled from 'styled-components';

const OnBoarding = () => {
  return (
    <Style.Container>
      <Style.CategoryHeader>
        <h3>원하는 추천 방식 선택</h3>
      </Style.CategoryHeader>
      <Style.CategoryContent>
        <Style.Category>취향대로 추천</Style.Category>
        <Style.Category>랜덤 추천</Style.Category>
      </Style.CategoryContent>
      <Style.StartBtn>START</Style.StartBtn>
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
  `,
  StartBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    width: 6rem;
    border: none;
    border-radius: 1rem;
    height: 3rem;
    display: none;
  `,
};

export default OnBoarding;
