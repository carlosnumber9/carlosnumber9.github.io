import { useEffect, type RefObject } from 'react';
import { createVeilClipPath } from '../../veilClip';

export const useProjectVeilClip = (
  projectsRef: RefObject<HTMLDivElement | null>,
  contentScrollRef: RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    const projects = projectsRef.current;
    const content = contentScrollRef.current;
    if (!projects || !content) return;

    const clippedLayers = new Map<HTMLElement, string>();
    let animationFrame = 0;

    const restoreLayer = (layer: HTMLElement) => {
      layer.style.removeProperty('clip-path');
      layer.removeAttribute('data-project-clip');
      clippedLayers.delete(layer);
    };

    const updateClip = () => {
      const contentBounds = content.getBoundingClientRect();
      const navbarBounds = content.querySelector('nav')?.getBoundingClientRect();
      const visibleTop = Math.max(0, contentBounds.top, navbarBounds?.bottom ?? 0);
      const exclusions: DOMRect[] = [];

      projects
        .querySelectorAll<HTMLElement>('[data-demo-ready="true"]')
        .forEach((card) => {
          const bounds = card.getBoundingClientRect();
          const left = Math.max(0, contentBounds.left, bounds.left + card.clientLeft);
          const top = Math.max(visibleTop, bounds.top + card.clientTop);
          const right = Math.min(
            window.innerWidth,
            contentBounds.right,
            bounds.right - card.clientLeft,
          );
          const bottom = Math.min(
            window.innerHeight,
            contentBounds.bottom,
            bounds.bottom - card.clientTop,
          );
          if (right <= left || bottom <= top) return;

          exclusions.push(new DOMRect(left, top, right - left, bottom - top));
        });

      for (const layer of clippedLayers.keys()) {
        if (!layer.isConnected || exclusions.length === 0) restoreLayer(layer);
      }

      if (exclusions.length > 0) {
        document.querySelectorAll<HTMLElement>('[data-veil-layer]').forEach((layer) => {
          const revealSize =
            layer.dataset.veilMode === 'reveal'
              ? layer.querySelector('.veil-reveal-size')?.getBoundingClientRect().width
              : undefined;
          const path = createVeilClipPath(
            layer.getBoundingClientRect(),
            exclusions,
            revealSize,
          );
          if (clippedLayers.get(layer) === path) return;

          layer.setAttribute('data-project-clip', 'true');
          layer.style.clipPath = path;
          clippedLayers.set(layer, path);
        });
      }

      animationFrame = window.requestAnimationFrame(updateClip);
    };

    updateClip();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      for (const layer of clippedLayers.keys()) restoreLayer(layer);
    };
  }, [projectsRef, contentScrollRef]);
};
