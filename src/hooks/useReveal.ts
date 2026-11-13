import { useEffect } from 'react';
import sr from '../utils/sr';
import { srConfig } from '../config';
import usePrefersReducedMotion from './usePrefersReducedMotion';

/** 滚动到视口时淡入（ScrollReveal）。 */
const useReveal = (refs: Array<{ current: Element | null } | null>, delays?: number[]) => {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const reveal = sr;
    if (reduced || !reveal) return;
    refs.forEach((ref, i) => {
      if (ref?.current) reveal.reveal(ref.current, srConfig(delays?.[i] ?? 200));
    });
  }, [reduced]);
};

export default useReveal;
