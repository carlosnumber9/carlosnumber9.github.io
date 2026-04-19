import styled from 'styled-components';

export const MainColumn = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-weight: 100;
  -webkit-font-smoothing: antialiased;

  -webkit-box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);
  -moz-box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);
  box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);

  font-family: 'Oxygen', sans-serif;

  @media only screen and (min-width: 980px) {
    width: 980px;
  }

  @media only screen and (min-width: 600px) and (max-width: 980px) {
    width: 85vw;
  }

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

`;
