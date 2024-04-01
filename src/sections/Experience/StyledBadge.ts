import styled from 'styled-components';

export const StyledBadge = styled.span`
  display: block;
  background-color: rgba(1, 1, 1, 0.1);
  color: black;
  padding: 5px;
  margin-top: 2px;
  border-radius: 15px;
  visibility: hidden;
  font-size: small;
  
  &:hover {
    cursor: pointer;
    color: black;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  transition: visibility 0.1s ease-in-out, color 0.3s ease-in-out;
`;
