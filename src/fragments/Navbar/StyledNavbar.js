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

  .navbar-item {
    padding: 15px 25px 15px 25px;
    transition: 0.2s ease-in-out;
  }

  .vertical-separator {
    width: 1px;
    height: 50px;
    border-right: 1px solid gray;
  }

  @media only screen and (min-width: 980px) {
    .section-icon {
      display: none;
    }

    .navbar-item-title {
      display: unset;
    }

    .vertical-separator {
      display: unset;
    }

    .navbar-item {
      &.selected {
        box-shadow: 0px 3.6px 3.6px rgba(0, 0, 0, 0.024),
          0px 10px 10px rgba(0, 0, 0, 0.035),
          0px 24.1px 24.1px rgba(0, 0, 0, 0.046),
          0px -3.6px 3.6px rgba(0, 0, 0, 0.024),
          0px -10px 10px rgba(0, 0, 0, 0.035),
          0px -24.1px 24.1px rgba(0, 0, 0, 0.046);
      }

      &:hover {
        box-shadow: 0px 3.6px 3.6px rgba(0, 0, 0, 0.024),
          0px 10px 10px rgba(0, 0, 0, 0.035),
          0px 24.1px 24.1px rgba(0, 0, 0, 0.046),
          0px -3.6px 3.6px rgba(0, 0, 0, 0.024),
          0px -10px 10px rgba(0, 0, 0, 0.035),
          0px -24.1px 24.1px rgba(0, 0, 0, 0.046);
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 980px) {
    .navbar-item-title {
      display: none;
    }

    .vertical-separator {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .navbar-item-title {
      display: none;
    }

    .vertical-separator {
      display: none;
    }
  }
`;
