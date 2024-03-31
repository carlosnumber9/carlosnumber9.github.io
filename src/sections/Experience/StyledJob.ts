import styled from 'styled-components';

export const StyledJob = styled.div`
  width: 100%;
  max-height: 120px;

  display: flex;
  flex-direction: row;

  transition: all 0.1s ease-in-out;

  text-decoration: none;
  color: inherit;

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

  h3,
  h4,
  span {
    margin: 0;
  }

  &:hover {
    span {
      color: gray;
    }

    .feature {
      visibility: visible;
      color: white;
    }
  }

  @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

  @media only screen and (min-width: 980px) {
    &:hover {
      font-size: 110%;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 980px) {
    &:hover {
      font-size: 110%;
      cursor: pointer;
    }
  }
`;
