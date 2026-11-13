import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

/** 延迟 delay 毫秒后返回 true，用来触发入场动画。减少动画时立即返回 true。 */
const useMounted = (delay: number, enabled = true) => {
  const reduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(!enabled || reduced);

  useEffect(() => {
    if (!enabled || reduced) {
      setMounted(true);
      return;
    }
    const t = window.setTimeout(() => setMounted(true), delay);
    return () => window.clearTimeout(t);
  }, [delay, enabled, reduced]);

  return mounted;
};

export default useMounted;
