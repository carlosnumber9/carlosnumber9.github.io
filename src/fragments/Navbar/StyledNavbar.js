import styled from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 90%;

  font-family: 'Microsoft Jhenghei', serif;
  font-weight: lighter;

  margin-top: 60px;
  margin-bottom: 60px;

  .navbar-item {
    padding: 5px;

    transition: 0.2s ease-in-out;
  }

  .vertical-separator {
    width: 1px;
    height: 50px;
    border-right: 1px solid gray;
  }

  .navbar-item:hover {
    -webkit-box-shadow: 0px 0px 14px 1px rgba(135, 135, 135, 1);
    -moz-box-shadow: 0px 0px 14px 1px rgba(135, 135, 135, 1);
    box-shadow: 0px 0px 14px 1px rgba(135, 135, 135, 1);

    cursor: pointer;
  }

  @media only screen and (min-width: 980px) {
    .navbar-item-icon {
      display: none;
    }

    .navbar-item-title {
      display: unset;
    }

    .vertical-separator {
      display: unset;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 980px) {
    .navbar-item-icon {
      display: unset;
    }

    .navbar-item-title {
      display: none;
    }

    .vertical-separator {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .navbar-item-icon {
      display: unset;
    }

    .navbar-item-title {
      display: none;
    }

    .vertical-separator {
      display: none;
    }
  }
`;
