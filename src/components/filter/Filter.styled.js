import styled from 'styled-components';

export const StyledFilterDiv = styled.div`
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

  & input {
    display: block;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
