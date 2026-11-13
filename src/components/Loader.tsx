import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mixins } from '../styles/mixins';
import { IconLoader } from './icons';

const StyledLoader = styled.div<{ $done: boolean }>`
  ${mixins.flexCenter};
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-deep);
  z-index: 99;
  opacity: ${p => (p.$done ? 0 : 1)};
  transition: opacity 200ms var(--easing);

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    color: var(--accent);
    animation: loader-out 300ms cubic-bezier(0.77, 0, 0.175, 1) 3000ms forwards;

    svg {
      display: block;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      fill: none;
      user-select: none;
    }

    .frame {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
      animation: loader-draw 1500ms cubic-bezier(0.77, 0, 0.175, 1) 300ms forwards;
    }

    .letter {
      opacity: 0;
      animation: loader-letter 700ms cubic-bezier(0.77, 0, 0.175, 1) 1800ms forwards;
    }
  }

  @keyframes loader-draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes loader-letter {
    to {
      opacity: 1;
    }
  }
  @keyframes loader-out {
    to {
      opacity: 0;
      transform: scale(0.1);
    }
  }
`;

/** 首页加载动画：描边 Logo → 出现字母 → 缩小消失，约 3.3 秒。 */
const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add('hidden');
    const t1 = window.setTimeout(() => setDone(true), 3300);
    const t2 = window.setTimeout(() => {
      document.body.classList.remove('hidden');
      finishLoading();
    }, 3500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.classList.remove('hidden');
    };
  }, [finishLoading]);

  return (
    <StyledLoader className="loader" $done={done}>
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

export default Loader;
