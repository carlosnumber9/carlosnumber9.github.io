import styled, { css } from 'styled-components';
import { Era } from '../../declarations';

interface Props {
  era: Era;
}

export const StyledEra = styled.div<Props>`
  width: 95%;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 98%;
    cursor: pointer;
  }

  span.era-dates {
    color: lightgray;
  }

  div {
    border-left: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    width: 100%;
  }

  span {
    margin-left: 20px;
  }
`;