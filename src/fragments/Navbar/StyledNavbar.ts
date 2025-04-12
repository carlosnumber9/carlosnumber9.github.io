import styled from 'styled-components';

export const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    font-weight: lighter;
    margin-top: 60px;
    margin-bottom: 60px;
    color: black;

    @media only screen and (max-width: 980px) {
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
  }
`;
