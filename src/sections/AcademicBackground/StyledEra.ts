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
        rgba(255, 255, 255, 1) 50%,
        transparent 100%
      ),
      url('${era.image}');
  `}
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;
