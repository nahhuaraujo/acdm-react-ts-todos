import styled from 'styled-components';

export const Todo = styled.li`
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
  display: flex;
  justify-content: space-between;
  > button {
    font: inherit;
    background-color: #ebb002;
    border: 1px solid #ebb002;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: #ebc002;
      border-color: #ebc002;
    }
  }
`;
