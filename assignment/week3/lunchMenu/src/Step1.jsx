import styled from 'styled-components';
import SelectCategory from './SelectCategory';

const Step1 = (props) => {
  return (
    <>
      <Style.CategoryHeader>
        <h3>어떤 종류가 좋아?</h3>
      </Style.CategoryHeader>
      <Style.MenuContainer>
        <Style.Menu>한식</Style.Menu>
        <Style.Menu>일식</Style.Menu>
        <Style.Menu>중식</Style.Menu>
      </Style.MenuContainer>
    </>
  );
};

const Style = {
  CategoryHeader: styled.div`
    display: flex;
    width: 100%;
    padding: 2rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    height: 3rem;
    align-self: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    border-radius: 1rem;
  `,
  MenuContainer: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    align-self: center;
    height: 25rem;
  `,
  Menu: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    border-radius: 1rem;
  `,
};
export default Step1;
