import styled from 'styled-components';

export const StyledFileButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &:hover .file-icon {
    transform: scale(1.1);
    color: darkred;
    transition: all 0.1s ease-in-out;
  }

  .file-icon {
    color: black;
    text-decoration: none;
  }
`;
