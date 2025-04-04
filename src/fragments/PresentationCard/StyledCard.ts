import styled from 'styled-components';

export const StyledCard = styled.div`
  @media only screen and (min-width: 980px) {
    width: 350px;
  }

  @media only screen and (min-width: 600px) and (max-width: 980px) {
    width: 350px;
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    .card-text {
      font-size: 1.1rem;
    }
    justify-content: center;
  }

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
  margin-top: 30px;
  padding: 10px;
  width: 50wv;

  -webkit-box-shadow: 0px 0px 6px 1px rgba(135, 135, 135, 0.5);
  -moz-box-shadow: 0px 0px 6px 1px rgba(135, 135, 135, 0.5);
  box-shadow: 0px 0px 6px 1px rgba(135, 135, 135, 0.5);

  .card-column {
    display: grid;
  }

  .first-column {
    grid-template-columns: 2;
    grid-template-rows: 5;
  }

  .first-column * {
    margin: auto;
    padding: 3px;
  }

  .card-hr {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: flex-start;
    height: 8px;
    border: transparent;
    margin: none;
    padding: none;
    width: 100%;

    hr {
      text-align: left;
      border-top: 1px solid rgb(199, 199, 199);
      border-left: transparent;
      border-right: transparent;
      border-bottom: transparent;
      width: 95%;
      border-width: 1px;
      margin-right: 0;
      margin-left: 0;
    }
  }
  #phone-number-icon {
    grid-row: 1 / 2;
    grid-column: 1/ 2;
  }

  #phone-number-text {
    grid-row: 1/2;
    grid-column: 2 / 3;
  }

  #second-hr {
    grid-row: 2/3;
    grid-column: 1 / 3;
  }

  #email-icon {
    grid-row: 3/3;
    grid-column: 1 / 2;
  }

  #email-text {
    grid-row: 3/3;
    grid-column: 2 / 3;
  }

  .second-column {
    display: flex;
    flex-direction: column;
  }

  .second-column * {
    margin: 3px;
  }

  .card-icon {
    color: black;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: darkblue;
    }

    transition: all 0.1s ease-in-out;
  }
`;
