import styled from 'styled-components';

export const StyledLoading = styled.div`
  height: 5px;
  width: 150px;
  background: linear-gradient(to right, black, lightblue, black, black);
  background-size: 200% 200%;
  background-position: -25% 0%;
  animation: GradientAnimation 1.5s ease-in-out infinite;

  @keyframes GradientAnimation {
    0% {
      background-position: -25% 0%;
    }
    50% {
      background-position: 75% 0%;
    }
    100% {
      background-position: -25% 0%;
    }
  }
`;
