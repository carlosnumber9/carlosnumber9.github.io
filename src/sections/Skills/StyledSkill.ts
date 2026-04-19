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
  }
`;
