import styled from 'styled-components';

export const StyledJobInfo = styled.a`
  width: 50%;

  display: flex;
  flex-direction: column;

  transition: all 0.1s ease-in-out;

  text-decoration: none;
  color: inherit;

  &:nth-child(odd) {
    align-items: flex-start;
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-items: flex-start;
    align-self: flex-end;
  }

  hr {
    opacity: 0;
  }

  span {
    color: lightgray;
  }

  h3,
  h4,
  span {
    margin: 0;
  }

  &:hover {
    background-color: rgba(1, 1, 1, 0.1);
  }
`;
