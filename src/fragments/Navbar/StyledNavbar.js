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

    .section-icon {
      cursor: pointer;
    }

    @media only screen and (min-width: 980px) {
      .section-icon {
        display: none;
      }

      .navbar-item-title {
        display: unset;
      }

      .navbar-item {
        &.selected {
          box-shadow: 1em 0 1em -1em rgba(0, 0, 0, 0.5),
            -1em 0 1em -1em rgba(0, 0, 0, 0.5);
        }

        &:hover {
          cursor: pointer;
          box-shadow: 1em 0 1em -1em rgba(0, 0, 0, 0.5),
            -1em 0 1em -1em rgba(0, 0, 0, 0.5);
        }

        &.border-right {
          border-right: 1px solid lightgray;
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
