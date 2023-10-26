import styled from 'styled-components';

export const StyledListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  & li {
    min-width: 400px;

    background-color: lightcoral;
    display: flex;
    gap: 20px;
    padding: 5px 20px;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    & button {
      cursor: pointer;
    }
  }
`;
