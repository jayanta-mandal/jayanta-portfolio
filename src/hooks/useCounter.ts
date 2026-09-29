import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './useMediaQuery';

interface CounterOptions {
  /** Start counting only when true (e.g. when the element is visible). */
  start?: boolean;
  duration?: number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/** Animates a number from 0 to `target`. Jumps straight to the target when reduced motion is preferred. */
export function useCounter(target: number, { start = true, duration = 1400 }: CounterOptions = {}) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reducedMotion) {
      setValue(target);
      return;
    }

    let frame = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      setValue(target * easeOutCubic(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration, reducedMotion]);

  return { value, done: value >= target };
}
