import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/* 跟随光标的暖橙光斑：鼠标附近的底色稍微变深。只在有鼠标的设备上出现。 */
const StyledSpotlight = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(
    520px circle at var(--mx, -999px) var(--my, -999px),
    rgba(217, 119, 87, 0.1),
    transparent 72%
  );

  @media (hover: none) {
    display: none;
  }
`;

const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty('--mx', `${e.clientX}px`);
        ref.current?.style.setProperty('--my', `${e.clientY}px`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  if (reduced) return null;
  return <StyledSpotlight ref={ref} aria-hidden="true" />;
};

export default Spotlight;
