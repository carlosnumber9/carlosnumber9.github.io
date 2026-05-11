import styled, { css } from 'styled-components';
import { Theme } from './declarations';

interface StyledVeilProps {
  themeMode: Theme;
}

export const StyledVeil = styled.div<StyledVeilProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 82px;
  height: 82px;
  pointer-events: none;
  z-index: 999;
  background-color: rgb(47 47 47 / 0.08);
  -webkit-backdrop-filter: invert(1) brightness(0.9) contrast(1.05);
  backdrop-filter: invert(1) brightness(0.9) contrast(1.05);
  clip-path: polygon(100% 0, 100% 100%, 0 0);
  transform-origin: top right;
  transition:
    width 720ms cubic-bezier(0.76, 0, 0.24, 1),
    height 720ms cubic-bezier(0.76, 0, 0.24, 1);
  will-change: width, height;

  ${({ themeMode }) =>
    themeMode === 'dark' &&
    css`
      width: 220vmax;
      height: 220vmax;
    `}
`;

export const StyledVeilTrigger = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  width: 82px;
  height: 82px;
  padding: 0;
  border: 0;
  background: transparent;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
  cursor: pointer;
  z-index: 1000;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: -10px;
  }
`;

interface VeilProps {
  theme: Theme;
  onToggle: () => void;
}

export const Veil = ({ theme, onToggle }: VeilProps) => {
  const isDarkTheme = theme === 'dark';

  return (
    <>
      <StyledVeil themeMode={theme} aria-hidden="true" />
      <StyledVeilTrigger
        type="button"
        aria-label={isDarkTheme ? 'Disable inverted veil' : 'Enable inverted veil'}
        aria-pressed={isDarkTheme}
        onClick={onToggle}
      />
    </>
  );
};
