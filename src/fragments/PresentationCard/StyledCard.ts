import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
  padding: 8px 12px;
  width: fit-content;
  max-width: calc(100vw - 48px);
  border: 1px solid rgb(215 215 215 / 0.72);
  background-color: rgb(255 255 255 / 0.34);

  -webkit-box-shadow: 0px 0px 6px 1px rgba(135, 135, 135, 0.5);
  -moz-box-shadow: 0px 0px 6px 1px rgba(135, 135, 135, 0.5);
  box-shadow: 0px 0px 6px 1px rgba(135, 135, 135, 0.5);

  .contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    color: black;
    background-color: rgb(255 255 255 / 0.38);
    text-decoration: none;
    cursor: pointer;
    transition:
      background-color 0.16s ease-in-out,
      box-shadow 0.16s ease-in-out,
      color 0.16s ease-in-out,
      transform 0.16s ease-in-out;

    &:hover {
      color: darkblue;
      background-color: rgb(255 255 255 / 0.72);
      box-shadow: 0px 6px 16px rgba(135, 135, 135, 0.24);
      transform: translateY(-1px);
    }

    &:focus-visible {
      outline: 2px solid darkblue;
      outline-offset: 3px;
    }
  }

  .contact-icon {
    width: 22px;
    height: 22px;
  }

  @media only screen and (max-width: 600px) {
    gap: 8px;
    margin-top: 18px;
    padding: 7px 10px;

    .contact-link {
      width: 38px;
      height: 38px;
    }

    .contact-icon {
      width: 20px;
      height: 20px;
    }
  }
`;
