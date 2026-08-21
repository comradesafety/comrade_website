import { useEffect } from 'react';

const SITE_NAME = 'Comrade';

/**
 * Sets the document title for the current page, restoring the previous
 * title on unmount (relevant for fast client-side route transitions).
 */
export function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
