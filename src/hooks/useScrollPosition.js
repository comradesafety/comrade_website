import { useEffect, useState } from 'react';

/**
 * Tracks the window scroll position with rAF throttling.
 *
 * @param {number} scrolledThreshold - pixels scrolled before `isScrolled` flips true.
 * @returns {{ scrollY: number, isScrolled: boolean, progress: number }}
 *   progress is a 0–1 value representing how far through the page the user has scrolled.
 */
export function useScrollPosition(scrolledThreshold = 24) {
  const [state, setState] = useState({ scrollY: 0, isScrolled: false, progress: 0 });

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

      setState({
        scrollY,
        isScrolled: scrollY > scrolledThreshold,
        progress,
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(measure);
        ticking = true;
      }
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [scrolledThreshold]);

  return state;
}
