import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type VeilTone = 'dark' | 'light';

interface VeilLayer {
  id: number;
  isExpanded: boolean;
  isSettled?: boolean;
  isVisible: boolean;
  tone: VeilTone;
}

interface StyledVeilLayerProps {
  $isExpanded: boolean;
  $isSettled: boolean;
  $isVisible: boolean;
  $index: number;
  $tone: VeilTone;
}

const DARK_VEIL_BACKDROP_FILTER =
  'invert(1) hue-rotate(180deg) saturate(0.78) brightness(1.05) contrast(0.72)';
const LIGHT_VEIL_BACKDROP_FILTER =
  'contrast(1.39) brightness(0.95) saturate(1.28) hue-rotate(180deg) invert(1)';
const VEIL_CORNER_SIZE = '82px';
const VEIL_EXPANDED_SIZE = '220vmax';
const VEIL_TRANSITION_MS = 720;
const VEIL_CORNER_DELAY_MS = 500;
const VEIL_CORNER_PAINT_DELAY_MS = 50;
const VEIL_CORNER_TRANSITION_MS = 420;
export const VEIL_THEME_APPLY_MS = VEIL_TRANSITION_MS;
export const VEIL_INTERACTION_SETTLE_MS =
  VEIL_TRANSITION_MS +
  VEIL_CORNER_DELAY_MS +
  VEIL_CORNER_PAINT_DELAY_MS +
  VEIL_CORNER_TRANSITION_MS;

const getVeilBackdropFilter = (tone: VeilTone) =>
  tone === 'dark' ? DARK_VEIL_BACKDROP_FILTER : LIGHT_VEIL_BACKDROP_FILTER;

export const StyledVeilLayer = styled.div<StyledVeilLayerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ $isExpanded, $isVisible }) =>
    $isExpanded ? VEIL_EXPANDED_SIZE : $isVisible ? VEIL_CORNER_SIZE : 0};
  height: ${({ $isExpanded, $isVisible }) =>
    $isExpanded ? VEIL_EXPANDED_SIZE : $isVisible ? VEIL_CORNER_SIZE : 0};
  pointer-events: none;
  z-index: ${({ $index }) => 900 + $index};
  background-color: rgb(255 255 255 / 0.05);
  -webkit-backdrop-filter: ${({ $tone }) => getVeilBackdropFilter($tone)};
  backdrop-filter: ${({ $tone }) => getVeilBackdropFilter($tone)};
  clip-path: polygon(100% 0, 100% 100%, 0 0);
  transform-origin: top right;
  transition: ${({ $isSettled }) =>
    $isSettled
      ? 'none'
      : css`
          width ${VEIL_TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1),
          height ${VEIL_TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)
        `};
  will-change: width, height;

`;

export const StyledVeilTrigger = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  width: ${VEIL_CORNER_SIZE};
  height: ${VEIL_CORNER_SIZE};
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
  layerCount: number;
  isDarkTheme: boolean;
  isTransitioning: boolean;
  onToggle: () => void;
}

export const Veil = ({
  layerCount,
  isDarkTheme,
  isTransitioning,
  onToggle,
}: VeilProps) => {
  const [layers, setLayers] = useState<VeilLayer[]>([
    { id: 0, isExpanded: false, isVisible: true, tone: 'dark' },
  ]);
  const timeouts = useRef<number[]>([]);
  const latestLayerCount = useRef(0);

  useEffect(() => {
    if (layerCount === 0) return;

    latestLayerCount.current = layerCount;

    setLayers((currentLayers) => {
      const expandingLayer = currentLayers[currentLayers.length - 1];
      const previousLayers = currentLayers.slice(0, -1);

      return [
        ...previousLayers,
        {
          ...expandingLayer,
          isExpanded: true,
          isSettled: false,
        },
      ];
    });

    const settleTimeout = window.setTimeout(() => {
      if (latestLayerCount.current !== layerCount) return;

      setLayers(
        layerCount % 2 === 1
          ? [
              {
                id: layerCount * 2 - 1,
                isExpanded: true,
                isSettled: true,
                isVisible: true,
                tone: 'dark',
              },
            ]
          : [],
      );

      const nextCornerLayer: VeilLayer = {
        id: layerCount * 2,
        isExpanded: false,
        isVisible: false,
        tone: layerCount % 2 === 1 ? 'light' : 'dark',
      };

      const cornerDelayTimeout = window.setTimeout(() => {
        if (latestLayerCount.current !== layerCount) return;

        setLayers((currentLayers) => [...currentLayers, nextCornerLayer]);

        const cornerGrowTimeout = window.setTimeout(() => {
          if (latestLayerCount.current !== layerCount) return;

          setLayers((currentLayers) =>
            currentLayers.map((layer) =>
              layer.id === nextCornerLayer.id
                ? { ...layer, isVisible: true }
                : layer,
            ),
          );
        }, VEIL_CORNER_PAINT_DELAY_MS);

        timeouts.current = [...timeouts.current, cornerGrowTimeout];
      }, VEIL_CORNER_DELAY_MS);

      timeouts.current = [...timeouts.current, cornerDelayTimeout];
    }, VEIL_TRANSITION_MS);

    timeouts.current = [...timeouts.current, settleTimeout];
  }, [layerCount]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <>
      {layers.map((layer, index) => (
        <StyledVeilLayer
          key={layer.id}
          $index={index}
          $isExpanded={layer.isExpanded}
          $isSettled={Boolean(layer.isSettled)}
          $isVisible={layer.isVisible}
          $tone={layer.tone}
          aria-hidden="true"
        />
      ))}
      <StyledVeilTrigger
        type="button"
        aria-label={isDarkTheme ? 'Disable inverted veil' : 'Enable inverted veil'}
        aria-pressed={isDarkTheme}
        disabled={isTransitioning}
        onClick={onToggle}
      />
    </>
  );
};
