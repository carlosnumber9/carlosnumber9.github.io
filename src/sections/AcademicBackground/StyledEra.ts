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

  transition: all 0.3s ease-in-out;

  &:hover {
    width: 98%;
    cursor: pointer;
  }
`;
