import styled from 'styled-components';

export const StyledSkill = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid lightgray;
  color: black;
  width: 100px;
  height: 100px;
  &:hover {
    background-color: lightgray;
    color: white;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  .icon {
    width: 100px;
    height: 100px;
    transition: filter 720ms cubic-bezier(0.76, 0, 0.24, 1);
  }

  [data-veil-theme='dark'] & .icon {
    filter: contrast(1.55) brightness(0.96) saturate(1.75) hue-rotate(180deg)
      invert(1);
  }
`;
