import styled from 'styled-components';

const Input = (props) => {
  return (
    <>
      <InputContent
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        check={props.check}
        onChange={props.onChange}
        autoComplete="off"
      />
      {props.check === '중복체크' && (
        <IdCheckBtn onClick={props.onClick} $checkid={props.checkid}>
          {props.content}
        </IdCheckBtn>
      )}
    </>
  );
};

export default Input;

const IdContainer = styled.div`
  display: flex;
  width: 30vw;
  gap: 0.6rem;
`;
const InputContent = styled.input`
  flex: 1;
  border-radius: 0.3rem;
  border: 0.1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem;
`;
const IdCheckBtn = styled.button`
  width: 8vw;
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme, $checkid }) =>
    $checkid ? ($checkid === 'uncheck' ? theme.colors.black : theme.colors.green) : theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`;
