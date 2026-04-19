import styled from 'styled-components';

const FOLD_SIZE = 64;

export const StyledPageFold = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;

  .fold-canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  .fold-hitarea {
    position: absolute;
    top: 0;
    right: 0;
    width: ${FOLD_SIZE * 1.5}px;
    height: ${FOLD_SIZE * 1.5}px;
    cursor: pointer;
    pointer-events: auto;
  }
`;
