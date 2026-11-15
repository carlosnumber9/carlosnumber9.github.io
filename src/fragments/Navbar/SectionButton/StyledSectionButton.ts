import styled, { css } from 'styled-components';

interface Props {
  selected: boolean;
}

export const StyledSectionButton = styled.button<Props>`
  -webkit-appearance: none;
  appearance: none;
  font-family: 'Oxygen', sans-serif;
  font-size: 1rem;
  padding: 15px 25px 15px 25px;
  transition: 0.2s ease-in-out;
  border: none;
  background-color: transparent;
  color: inherit;
  flex: 0 1 auto;
  min-width: 0;
  -webkit-text-fill-color: currentColor;
  -webkit-tap-highlight-color: transparent;

  .section-icon {
    cursor: pointer;
    color: inherit;
  }

  ${({ selected }) =>
    selected &&
    css`
      z-index: 2;
    `}

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: -4px;
  }

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
    flex: 1 1 0;
    padding: 15px 0;

    .navbar-item-title {
      display: none;
    }

    ${({ selected }) =>
      selected &&
      css`
        box-shadow: inset 0 -2px currentColor;
      `}
  }
`;
