import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NAVBAR_OFFSET = 84;

/**
 * Restores sensible scroll position on every route change: jumps to the top
 * of the new page, or — if the URL carries a hash (e.g. a deep link to
 * /contact#join) — scrolls to that element once it's mounted. Client-side
 * routing doesn't do this automatically the way full page navigations do.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const id = hash.replace('#', '');
    // The target section may not exist in the DOM yet on the very first
    // paint of the new page, so give it a tick before scrolling to it.
    const timeout = window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}
