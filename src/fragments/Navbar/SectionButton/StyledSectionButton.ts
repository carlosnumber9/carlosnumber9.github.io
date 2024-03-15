import styled, { css } from 'styled-components';

interface Props {
  selected: boolean;
}

export const StyledSectionButton = styled.button<Props>`
  font-family: 'Oxygen', sans-serif;
  font-size: 1rem;
  padding: 15px 25px 15px 25px;
  transition: 0.2s ease-in-out;
  border: none;
  background-color: white;

  .section-icon {
    cursor: pointer;
  }

  ${({ selected }) =>
    selected &&
    css`
      z-index: 2;
    `}

  @media only screen and (min-width: 980px) {
    .section-icon {
      display: none;
    }

    .navbar-item-title {
      display: unset;
    }

    ${({ selected }) =>
      selected &&
      css`
        box-shadow:
          1em 0 1em -1em rgba(0, 0, 0, 0.5),
          -1em 0 1em -1em rgba(0, 0, 0, 0.5);
      `}

    &:hover {
      cursor: pointer;
      z-index: 2;
      box-shadow:
        1em 0 1em -1em rgba(0, 0, 0, 0.5),
        -1em 0 1em -1em rgba(0, 0, 0, 0.5);
    }
  }

  @media only screen and (max-width: 980px) {
    .navbar-item-title {
      display: none;
    }
  }
`;
