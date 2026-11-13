import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Loader from './Loader';
import Nav from './Nav';
import Social from './Social';
import Email from './Email';
import Footer from './Footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: Props) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  // 开启“减少动画”的用户直接跳过加载动画
  const [isLoading, setIsLoading] = useState(
    () => isHome && window.matchMedia('(prefers-reduced-motion: no-preference)').matches,
  );
  const finishLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    document.title = title ? `${title} | Corrine Xiang` : 'Corrine Xiang';
  }, [title]);

  // 跳到 URL 里的 #锚点（比如从 /archive 点 About 回来）
  useEffect(() => {
    if (isLoading || !location.hash) return;
    const id = location.hash.slice(1);
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        el.focus({ preventScroll: true });
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, [isLoading, location.hash, location.key]);

  // 站外链接在新标签页打开
  useEffect(() => {
    if (isLoading) return;
    document.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
      if (link.host && link.host !== window.location.host) {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
      }
    });
  });

  return (
    <>
      <GlobalStyle />
      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>

      {isLoading && isHome ? (
        <Loader finishLoading={finishLoading} />
      ) : (
        <StyledContent>
          <Nav isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />
          <div id="content">
            {children}
            <Footer />
          </div>
        </StyledContent>
      )}
    </>
  );
};

export default Layout;
