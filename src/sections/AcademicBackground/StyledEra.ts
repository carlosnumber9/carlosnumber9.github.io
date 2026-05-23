import styled from 'styled-components';

export const StyledEra = styled.a`
  width: 95%;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  color: inherit;
  text-decoration: none;
  transition:
    width 0.3s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    width: 98%;
    transform: translateX(4px);
    cursor: pointer;
  }

  span.era-dates {
    color: rgb(0 0 0 / 0.35);
    font-size: 0.85rem;
    margin-bottom: 2px;
  }

  .era-content {
    border-left: 1px solid rgb(0 0 0 / 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0 10px 20px;
    transition:
      background-color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
  }

  &:hover .era-content {
    background-color: rgb(1 1 1 / 0.06);
    border-color: rgb(0 0 0 / 0.32);
  }

  h3,
  h4,
  span {
    margin: 0;
    text-align: center;
  }

  h3 {
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 4px;
  }

  h4 {
    color: rgb(0 0 0 / 0.74);
    font-weight: 400;
    font-size: 0.95rem;
  }

  .era-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    margin-top: 8px;
  }

  .era-tag {
    background-color: rgb(1 1 1 / 0.1);
    border-radius: 15px;
    color: inherit;
    font-size: small;
    padding: 5px 8px;
  }

  @media (hover: none) {
    width: 98%;

    .era-content {
      background-color: rgb(1 1 1 / 0.04);
    }
  }
`;
