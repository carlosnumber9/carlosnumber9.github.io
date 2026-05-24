import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type VeilTone = 'dark' | 'light';
type VeilMode = 'veil' | 'reveal';

interface VeilLayer {
  id: number;
  isExpanded: boolean;
  isRevealed?: boolean;
  isSettled?: boolean;
  isVisible: boolean;
  mode?: VeilMode;
  tone: VeilTone;
}

interface StyledVeilLayerProps {
  $isExpanded: boolean;
  $isRevealed: boolean;
  $isSettled: boolean;
  $isVisible: boolean;
  $index: number;
  $mode: VeilMode;
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
  width: ${({ $isExpanded, $isVisible, $mode }) =>
    $mode === 'reveal'
      ? '100vw'
      : $isExpanded
        ? VEIL_EXPANDED_SIZE
        : $isVisible
          ? VEIL_CORNER_SIZE
          : 0};
  height: ${({ $isExpanded, $isVisible, $mode }) =>
    $mode === 'reveal'
      ? '100vh'
      : $isExpanded
        ? VEIL_EXPANDED_SIZE
        : $isVisible
          ? VEIL_CORNER_SIZE
          : 0};
  pointer-events: none;
  z-index: ${({ $index }) => 900 + $index};
  background-color: rgb(255 255 255 / 0.05);
  -webkit-backdrop-filter: ${({ $tone }) => getVeilBackdropFilter($tone)};
  backdrop-filter: ${({ $tone }) => getVeilBackdropFilter($tone)};
  clip-path: ${({ $isRevealed, $mode }) =>
    $mode === 'reveal'
      ? `polygon(
          0 0,
          calc(100% - ${$isRevealed ? VEIL_EXPANDED_SIZE : '0px'}) 0,
          100% ${$isRevealed ? VEIL_EXPANDED_SIZE : '0px'},
          100% 100%,
          0 100%
        )`
      : 'polygon(100% 0, 100% 100%, 0 0)'};
  transform-origin: top right;
  transition: ${({ $isSettled }) =>
    $isSettled
      ? 'none'
      : css`
          width ${VEIL_TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1),
          height ${VEIL_TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1),
          clip-path ${VEIL_TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)
        `};
  will-change: width, height, clip-path;

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
      if (layerCount % 2 === 0) {
        return currentLayers
          .filter((layer) => layer.isExpanded)
          .map((layer) => ({
            ...layer,
            isRevealed: false,
            isSettled: false,
            mode: 'reveal',
            tone: 'dark',
          }));
      }

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

    const revealTimeout = window.setTimeout(() => {
      if (latestLayerCount.current !== layerCount || layerCount % 2 === 1) {
        return;
      }

      setLayers((currentLayers) =>
        currentLayers.map((layer) => ({ ...layer, isRevealed: true })),
      );
    }, VEIL_CORNER_PAINT_DELAY_MS);

    const settleDelay =
      layerCount % 2 === 0
        ? VEIL_TRANSITION_MS + VEIL_CORNER_PAINT_DELAY_MS
        : VEIL_TRANSITION_MS;

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
    }, settleDelay);

    timeouts.current = [...timeouts.current, revealTimeout, settleTimeout];
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
          $isRevealed={Boolean(layer.isRevealed)}
          $isSettled={Boolean(layer.isSettled)}
          $isVisible={layer.isVisible}
          $mode={layer.mode ?? 'veil'}
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
