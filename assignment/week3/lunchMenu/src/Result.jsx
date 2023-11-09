import styled from 'styled-components';

const Result = () => {
  return (
    <>
      <Style.ResultHeader>
        <h3>오늘의 추천 음식은 두구두구</h3>
      </Style.ResultHeader>
      <Style.ContentContainer></Style.ContentContainer>
    </>
  );
};
const Style = {
  ResultHeader: styled.div`
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
  ContentContainer: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 60vw;
    align-self: center;
    height: 25rem;
  `,
};
export default Result;
