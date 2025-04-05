import styled from 'styled-components';

export const StyledJob = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

  width: 100%;
  max-height: 120px;

  display: flex;
  flex-direction: row;

  transition: all 0.1s ease-in-out;

  text-decoration: none;
  color: inherit;

  span {
    font-size: 0.85rem;
    margin-bottom: 2px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 4px;
  }

  h4 {
    font-weight: 400;
    font-size: 0.95rem;
    color: #333;
  }

  .plus-icon {
    color: rgba(211, 211, 211, 0.3);
    transition: all 0.1s ease-in-out;
  }

  &:nth-child(odd) {
    align-self: flex-start;
    justify-content: flex-end;

    & > .info {
      align-items: flex-start;
      order: 2;
    }

    & > .features {
      align-items: flex-end;
      align-content: flex-end;
    }

    & > .plus {
      align-items: flex-end;
      align-content: flex-end;
    }

    .feature {
      margin-right: 10px;
    }

    h3,
    h4,
    span {
      margin-left: 10px;
    }
  }

  &:nth-child(even) {
    justify-content: flex-start;
    align-self: flex-end;

    & > .info {
      align-items: flex-end;
      order: -1;
    }

    & > .features {
      align-content: flex-start;
      align-items: flex-start;
    }

    .feature {
      margin-left: 10px;
    }

    h3,
    h4,
    span {
      margin-right: 10px;
    }
  }

  span {
    color: lightgray;
  }

  @media (hover: hover) {
    &:hover {
      font-size: 110%;

      span {
        color: gray;
      }

      .feature {
        visibility: visible;
      }

      & > a {
        background-color: rgba(1, 1, 1, 0.1);
      }
    }
  }

  @media (hover: none) {
      font-size: 110%;
      height: auto;

      span {
        color: gray;
      }

      .feature {
        visibility: visible;
      }
  }
`;
