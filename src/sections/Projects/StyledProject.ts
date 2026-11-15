import styled from 'styled-components';

export const StyledProject = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
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

  .project-demo,
  .project-shade,
  .project-toggle {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .project-demo {
    object-fit: cover;
    pointer-events: none;
    opacity: 0;
    transform: scale(1.035);
    transition: opacity 0.18s ease-in-out;
  }

  .project-shade {
    background-color: #111;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.18s ease-in-out;
  }

  .project-toggle {
    z-index: 1;
    appearance: none;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;

    &:focus-visible {
      outline: 2px solid #f3f3f3;
      outline-offset: -5px;
    }
  }

  .project-content {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    min-width: 0;
    pointer-events: none;
    transition: opacity 0.18s ease-in-out;
  }

  &[data-details-visible='false'] .project-content {
    visibility: hidden;
    opacity: 0;
  }

  &[data-demo-ready='true'] .project-demo {
    opacity: 1;
  }

  &[data-demo-ready='true'][data-details-visible='true'] {
    .project-demo {
      filter: blur(3px);
    }

    .project-shade {
      opacity: 0.8;
    }

    h3,
    p,
    .project-icon,
    .project-tags span,
    a {
      color: #f3f3f3;
    }

    .project-icon,
    .project-tags span,
    a {
      border-color: rgba(243, 243, 243, 0.5);
      background-color: rgba(243, 243, 243, 0.12);
    }
  }

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
    -webkit-user-select: none;
    user-select: none;
  }

  p {
    margin: 0;
    color: rgba(55, 55, 55, 0.78);
    font-size: 0.94rem;
    line-height: 1.45;
    -webkit-user-select: none;
    user-select: none;
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
    -webkit-user-select: none;
    user-select: none;
  }

  a {
    pointer-events: auto;
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

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 3px;
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

  @media (prefers-reduced-motion: reduce) {
    &,
    .project-demo,
    .project-shade,
    .project-content,
    .repo-icon,
    a {
      transition: none;
    }

    &:hover,
    a:hover .repo-icon {
      transform: none;
    }
  }
`;
