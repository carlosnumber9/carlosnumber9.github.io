import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  font-weight: lighter;
  margin-top: 0;
  margin-bottom: 24px;
  padding: 14px 0;
  color: black;
  background-color: rgb(243 243 243 / 0.88);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  @media only screen and (max-width: 980px) {
    width: 100%;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
`;
