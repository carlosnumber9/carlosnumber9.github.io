import styled from 'styled-components';

export const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  background-color: rgb(1 1 1 / 0.05);
  border: 1px solid rgb(211 211 211 / 0.9);
  color: inherit;
  padding: 3px 9px;
  margin-top: 2px;
  border-radius: 15px;
  visibility: hidden;
  font-size: 0.78rem;

  &:hover {
    cursor: pointer;
    background-color: rgb(1 1 1 / 0.08);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  transition:
    visibility 0.1s ease-in-out,
    background-color 0.16s ease-in-out,
    border-color 0.16s ease-in-out;
`;
