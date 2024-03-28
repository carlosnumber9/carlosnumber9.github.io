import styled from 'styled-components';

export const StyledJob = styled.div`
  min-width: 200px;

  display: flex;
  flex-direction: column;

  transition: all 1s ease-in-out;

  &:nth-child(odd) {
    align-items: flex-end;
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-items: flex-start;
    align-self: flex-end;
  }

  hr {
    border: 1px solid black;
  }

  span {
    color: lightgray;
  }

  h3,
  h4,
  span {
    margin: 0;
  }
`;
