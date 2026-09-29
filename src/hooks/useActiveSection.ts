import { useEffect, useState } from 'react';

/**
 * Tracks which navigation group is in the middle of the viewport.
 * Sections declare their group with a `data-nav` attribute.
 */
export function useActiveSection(initial = 'home'): string {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav]'));
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.nav;
          if (entry.isIntersecting && id) setActive(id);
        });
      },
      { rootMargin: '-45% 0px -54% 0px' },
    );

    sections.forEach((section) => observer.observe(section));

    // The last section may never reach the middle band on tall screens.
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const last = sections[sections.length - 1]?.dataset.nav;
      if (atBottom && last) setActive(last);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return active;
}
