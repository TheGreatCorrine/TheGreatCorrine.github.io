import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks } from '../config';
import { mixins } from '../styles/mixins';
import { KEY_CODES } from '../utils';
import useOnClickOutside from '../hooks/useOnClickOutside';
import ResumeButton from './ResumeButton';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button<{ $menuOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    ${mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--accent);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${p => (p.$menuOpen ? '0.12s' : '0s')};
    transform: rotate(${p => (p.$menuOpen ? '225deg' : '0deg')});
    transition-timing-function: cubic-bezier(
      ${p => (p.$menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19')}
    );

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--accent);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${p => (p.$menuOpen ? '100%' : '120%')};
      top: ${p => (p.$menuOpen ? '0' : '-10px')};
      opacity: ${p => (p.$menuOpen ? 0 : 1)};
      transition: ${p => (p.$menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)')};
    }

    &:after {
      width: ${p => (p.$menuOpen ? '100%' : '80%')};
      bottom: ${p => (p.$menuOpen ? '0' : '-10px')};
      transform: rotate(${p => (p.$menuOpen ? '-90deg' : '0')});
      transition: ${p => (p.$menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

const StyledSidebar = styled.aside<{ $menuOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    ${mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--bg-elevated);
    box-shadow: -10px 0px 30px -15px var(--shadow);
    z-index: 9;
    transform: translateX(${p => (p.$menuOpen ? 0 : 100)}vw);
    visibility: ${p => (p.$menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    ${mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--text-strong);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    counter-reset: item 0;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--accent-text);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-wrap {
    margin: 10% auto 0;
  }

  .resume-link {
    ${mixins.bigButton};
    padding: 18px 50px;
    width: max-content;
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setMenuOpen(false), []);
  useOnClickOutside(wrapperRef, close);

  useEffect(() => {
    document.body.classList.toggle('blur', menuOpen);
    return () => document.body.classList.remove('blur');
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === KEY_CODES.ESCAPE) {
        setMenuOpen(false);
        return;
      }
      if (e.key !== KEY_CODES.TAB || !menuOpen || !navRef.current || !buttonRef.current) return;

      // 菜单打开时把焦点锁在菜单里
      const focusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll<HTMLElement>('a, button'))];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledHamburgerButton
          onClick={() => setMenuOpen(o => !o)}
          $menuOpen={menuOpen}
          ref={buttonRef}
          aria-label="Menu"
          aria-expanded={menuOpen}>
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar $menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            <ol>
              {navLinks.map(({ url, name }) => (
                <li key={name}>
                  <Link to={url} onClick={close} tabIndex={menuOpen ? 0 : -1}>
                    {name}
                  </Link>
                </li>
              ))}
            </ol>
            <div className="resume-wrap">
              <ResumeButton className="resume-link" align="center" tabIndex={menuOpen ? 0 : -1} />
            </div>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
