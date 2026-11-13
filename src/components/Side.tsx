import type { ReactNode } from 'react';
import styled from 'styled-components';
import { loaderDelay } from '../utils';
import useMounted from '../hooks/useMounted';
import FadeIn from './FadeIn';

const StyledSideElement = styled.div<{ $orientation: 'left' | 'right' }>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${p => (p.$orientation === 'left' ? '40px' : 'auto')};
  right: ${p => (p.$orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--text);

  @media (max-width: 1080px) {
    left: ${p => (p.$orientation === 'left' ? '20px' : 'auto')};
    right: ${p => (p.$orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface Props {
  children: ReactNode;
  isHome: boolean;
  orientation: 'left' | 'right';
}

const Side = ({ children, isHome, orientation }: Props) => {
  const mounted = useMounted(loaderDelay, isHome);
  return (
    <StyledSideElement $orientation={orientation}>
      <FadeIn show={mounted} variant="fade">
        {children}
      </FadeIn>
    </StyledSideElement>
  );
};

export default Side;
