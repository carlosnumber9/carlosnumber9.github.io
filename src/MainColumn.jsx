import styled from 'styled-components';

export const MainColumn = () => styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-weight: 100;
  -webkit-font-smoothing: antialiased;

  /* BOX SHADOW */
  -webkit-box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);
  -moz-box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);
  box-shadow: 3px 0px 5px 0px rgba(156, 156, 156, 1),
    -3px 0px 5px 0px rgba(156, 156, 156, 1);

  font-family: 'Oxygen', sans-serif;
`;
