import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(() => !window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const listener = (e: MediaQueryListEvent) => setReduced(!e.matches);
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, []);

  return reduced;
};

export default usePrefersReducedMotion;
