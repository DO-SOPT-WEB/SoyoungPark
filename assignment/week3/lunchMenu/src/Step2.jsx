import styled from 'styled-components';

const Step2 = (props) => {
  const selectHandler = () => {
    props.setSelect(true);
  };
  const optionHandler = (e) => {
    props.setOption({ ...props.options, main: e.target.innerHTML });
  };
  const isSelected = (option) => {
    return props.options.main === option;
  };
  return (
    <>
      <Style.CategoryHeader>
        <h3>이 중에서는 뭐가 끌려?</h3>
      </Style.CategoryHeader>
      <Style.MenuContainer>
        <Style.Menu
          onClick={(e) => {
            selectHandler();
            optionHandler(e);
          }}
          selected={isSelected('밥')}
        >
          밥
        </Style.Menu>
        <Style.Menu
          onClick={(e) => {
            selectHandler();
            optionHandler(e);
          }}
          selected={isSelected('면')}
        >
          면
        </Style.Menu>
        <Style.Menu
          onClick={(e) => {
            selectHandler();
            optionHandler(e);
          }}
          selected={isSelected('고기/해물')}
        >
          고기/해물
        </Style.Menu>
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
    background-color: ${({ theme, selected }) => (selected ? theme.colors.brown : theme.colors.white)};
    color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.black)};
    border: 0.2rem solid ${({ theme }) => theme.colors.brown};
    border-radius: 1rem;
    &:hover {
      border: 0.2rem solid ${({ theme }) => theme.colors.deepBrown};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.brown};
      color: white;
    }
  `,
};

export default Step2;
