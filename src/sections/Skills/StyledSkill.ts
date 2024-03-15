import styled from 'styled-components';

export const StyledSkill = styled.span`
  padding: 5px 10px 5px 10px;
  border-radius: 40px;
  border: 1px solid gray;
  color: black;
  &:hover {
    background-color: gray;
    color: white;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;
