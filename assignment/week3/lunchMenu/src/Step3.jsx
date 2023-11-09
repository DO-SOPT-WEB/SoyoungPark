import styled from 'styled-components';

const Step3 = (props) => {
  const selectHandler = () => {
    props.setSelect(true);
  };
  const optionHandler = (e) => {
    props.setOption({ ...props.options, soup: e.target.innerHTML });
  };
  const isSelected = (option) => {
    return props.options.soup === option;
  };
  return (
    <>
      <Style.CategoryHeader>
        <h3>국물은 있는 게 좋아?</h3>
      </Style.CategoryHeader>
      <Style.MenuContainer>
        <Style.Menu
          onClick={(e) => {
            selectHandler();
            optionHandler(e);
          }}
          selected={isSelected('당연!')}
        >
          당연!
        </Style.Menu>
        <Style.Menu
          onClick={(e) => {
            selectHandler();
            optionHandler(e);
          }}
          selected={isSelected('국물 필요없어!')}
        >
          국물 필요없어!
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
  `,
};
export default Step3;
