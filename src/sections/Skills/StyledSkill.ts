import styled from 'styled-components';

export const StyledSkill = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 100px;
  border: 1px solid lightgray;
  color: black;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: lightgray;
    color: white;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  .icon {
    width: 40px;
  }
`;
