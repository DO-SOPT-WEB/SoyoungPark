import styled from 'styled-components';

const Step = (props) => {
  const { title, step, optionsKey, setSelect, setOption, options, items } = props;

  const selectHandler = () => {
    setSelect(true);
  };

  const optionHandler = (e) => {
    const selectedOption = e.target.innerHTML;
    setOption({ ...options, [optionsKey]: selectedOption });
  };

  const isSelected = (option) => {
    return options[optionsKey] === option;
  };

  return (
    <>
      <Style.CategoryHeader>
        <h3>{title}</h3>
      </Style.CategoryHeader>
      <Style.Step>{step}/3</Style.Step>
      <Style.MenuContainer>
        {items.map((item, index) => (
          <Style.Menu
            key={index}
            onClick={(e) => {
              selectHandler();
              optionHandler(e);
            }}
            selected={isSelected(item)}
          >
            {item}
          </Style.Menu>
        ))}
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
  Step: styled.div`
    align-self: flex-end;
    margin-right: 0.5rem;
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
export default Step;
