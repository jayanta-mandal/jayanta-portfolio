import { useEffect, type RefObject } from 'react';

/**
 * Writes how far the viewport has travelled through the element (0 to 1) to `--progress`.
 * `anchor` is the fraction of the viewport height used as the reading line.
 */
export function useScrollProgress<T extends HTMLElement>(ref: RefObject<T | null>, anchor = 0.6) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const raw = (window.innerHeight * anchor - rect.top) / Math.max(rect.height, 1);
      element.style.setProperty('--progress', Math.min(1, Math.max(0, raw)).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref, anchor]);
}
