import styled, { css } from 'styled-components';
import { Theme } from './declarations';

interface StyledVeilProps {
  themeMode: Theme;
}

const VEIL_BACKDROP_FILTER =
  'invert(1) hue-rotate(180deg) saturate(0.78) brightness(1.05) contrast(0.72)';

export const StyledVeil = styled.div<StyledVeilProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 82px;
  height: 82px;
  pointer-events: none;
  z-index: 999;
  background-color: rgb(255 255 255 / 0.05);
  -webkit-backdrop-filter: ${VEIL_BACKDROP_FILTER};
  backdrop-filter: ${VEIL_BACKDROP_FILTER};
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
