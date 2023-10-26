import styled from 'styled-components';

export const StyledContactForm = styled.form`
  min-width: 400px;

  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  & label {
  }
  & input {
    display: block;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
  }
  & button {
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 1px 1px black;
    }
  }
`;
