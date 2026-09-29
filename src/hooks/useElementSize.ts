import { useEffect, useState, type RefObject } from 'react';

/** Reports the rendered size of an element in whole pixels. */
export function useElementSize<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(([entry]) => {
      const box = entry.borderBoxSize?.[0];
      const width = Math.round(box ? box.inlineSize : entry.contentRect.width);
      const height = Math.round(box ? box.blockSize : entry.contentRect.height);
      setSize((previous) =>
        previous.width === width && previous.height === height ? previous : { width, height },
      );
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
