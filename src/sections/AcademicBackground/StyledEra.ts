import styled, { css } from 'styled-components';
import { Era } from '../../declarations';

interface Props {
  era: Era;
}

export const StyledEra = styled.div<Props>`
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 95%;
  ${({ era }) => css`
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 1),
        transparent,
        transparent
      ),
      url('${era.image}');
  `}
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  padding: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 98%;
    cursor: pointer;
  }

  h3, h4 {
    margin-left: 20px;
  }

  span {
    background: rgba(0, 0, 0, 0.6); /* Color opaco */
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
  }
`;