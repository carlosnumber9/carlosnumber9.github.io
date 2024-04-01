import styled from 'styled-components';

export const StyledProject = styled.div`
  position: relative;
  border: 1px solid lightgray;
  width: 40%;

  a {
    color: inherit;

    &:hover .repo-icon {
      transform: scale(1.2);
      transition: transform 0.1s ease-in-out;
    }
  }
`;
