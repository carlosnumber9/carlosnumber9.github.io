import styled from 'styled-components';

export const StyledProject = styled.div`
  width: min(100%, 360px);
  min-height: 180px;
  padding: 18px;
  border: 1px solid rgb(210, 210, 210);
  background-color: rgba(255, 255, 255, 0.46);
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  transition:
    transform 0.16s ease-in-out,
    border-color 0.16s ease-in-out,
    box-shadow 0.16s ease-in-out,
    background-color 0.16s ease-in-out;

  .project-heading {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .project-icon {
    width: 34px;
    height: 34px;
    border: 1px solid lightgray;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #2f2f2f;
    background-color: rgba(243, 243, 243, 0.78);
    flex: 0 0 auto;
  }

  h3 {
    margin: 0;
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.25;
    color: #171717;
    overflow-wrap: anywhere;
  }

  p {
    margin: 0;
    color: rgba(55, 55, 55, 0.78);
    font-size: 0.94rem;
    line-height: 1.45;
  }

  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: auto;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .project-tags span {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 3px 9px;
    border: 1px solid rgba(211, 211, 211, 0.9);
    border-radius: 15px;
    background-color: rgba(1, 1, 1, 0.05);
    color: #333;
    font-size: 0.78rem;
  }

  a {
    width: 34px;
    height: 34px;
    border: 1px solid lightgray;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #1f1f1f;
    text-decoration: none;
    flex: 0 0 auto;
    transition:
      color 0.16s ease-in-out,
      background-color 0.16s ease-in-out,
      transform 0.16s ease-in-out;

    &:hover .repo-icon {
      transform: translate(1px, -1px);
    }
  }

  .repo-icon {
    transition: transform 0.16s ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      border-color: rgb(180, 180, 180);
      background-color: rgba(255, 255, 255, 0.72);
      box-shadow: 0px 6px 16px rgba(135, 135, 135, 0.24);
    }

    a:hover {
      background-color: rgba(1, 1, 1, 0.08);
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    min-height: 165px;
    padding: 16px;
  }
`;
