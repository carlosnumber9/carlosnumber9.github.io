import styled from 'styled-components';

export const StyledCard = styled.div`
  @media only screen and (max-width: 600px) {
    .card-text {
      font-size: 4.5vw;
    }
  }

  .presentation-card {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    margin-top: 30px;
    padding: 10px;
    width: 80%;

    -webkit-box-shadow: 0px 0px 14px 1px rgba(135, 135, 135, 1);
    -moz-box-shadow: 0px 0px 14px 1px rgba(135, 135, 135, 1);
    box-shadow: 0px 0px 14px 1px rgba(135, 135, 135, 1);
  }

  .card-column {
    display: grid;
  }

  .first-column {
    grid-template-columns: 2;
    grid-template-rows: 7;
  }

  .first-column * {
    margin: auto;
    padding: 4px;
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
  }

  .card-hr hr {
    text-align: left;
    border-top: 1px solid rgb(199, 199, 199);
    border-left: transparent;
    border-right: transparent;
    border-bottom: transparent;
    width: 70%;
    border-width: 1px;
    margin-right: 0;
    margin-left: 0;
  }

  #age-icon {
    grid-row: 1 / 2;
    grid-column: 1/ 2;
  }

  #age-text {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  #first-hr {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }

  #phone-number-icon {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }

  #phone-number-text {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }

  #second-hr {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
  }

  #email-icon {
    grid-row: 5 / 6;
    grid-column: 1 / 2;
  }

  #email-text {
    grid-row: 5 / 6;
    grid-column: 2 / 3;
  }

  #third-hr {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
  }

  #address-icon {
    grid-row: 7 / 8;
    grid-column: 1 / 2;
  }

  #address-text {
    grid-row: 7 / 8;
    grid-column: 2 / 3;
  }

  .second-column {
    display: flex;
    flex-direction: column;
  }

  .second-column * {
    margin: 3px;
  }

  /* .first-column {
  border: 1px solid black;
}

.first-column * {
  border: 1px solid black;
} */
`;
