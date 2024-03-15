import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  padding: 10px;
  gap: 20px;
  width: 80%;

  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, 0.5),
  0 -1em 1em -1em rgba(0, 0, 0, 0.5);

  margin-bottom: 30px;

  .section-title {
    color: rgb(75, 75, 75);
    margin-left: 0;

    font-weight: lighter;
  }

  .section * {
    display: none;
  }

  .main-content {
    text-align: justify;
  }
`;
