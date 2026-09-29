import { useEffect, type RefObject } from 'react';

interface ParallaxOptions {
  disabled?: boolean;
  /** Interpolation factor per frame; lower is smoother. */
  ease?: number;
}

/**
 * Writes smoothed pointer coordinates (-1 to 1) to `--px` and `--py` on the element.
 * Layers read these custom properties, so pointer movement never triggers a React render.
 */
export function useMouseParallax<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { disabled = false, ease = 0.08 }: ParallaxOptions = {},
) {
  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const tick = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      element.style.setProperty('--px', currentX.toFixed(3));
      element.style.setProperty('--py', currentY.toFixed(3));

      const settled = Math.abs(targetX - currentX) < 0.001 && Math.abs(targetY - currentY) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = (event.clientY / window.innerHeight) * 2 - 1;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(frame);
      element.style.removeProperty('--px');
      element.style.removeProperty('--py');
    };
  }, [ref, disabled, ease]);
}
