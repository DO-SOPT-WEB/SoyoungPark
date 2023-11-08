import styled from 'styled-components';

const Recommend = (props) => {
  return (
    <>
      <Style.Category>{props.category}</Style.Category>
      <Style.StartBtn>START</Style.StartBtn>
    </>
  );
};

const Style = {
  Category: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    background-color: ${({ theme }) => theme.colors.white};
    width: 70%;
    border-radius: 1rem;
    height: 25rem;
  `,
  StartBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    width: 6rem;
    border: none;
    border-radius: 1rem;
    height: 3rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export default Recommend;
