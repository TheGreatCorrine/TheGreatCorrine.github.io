import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { navLinks } from '../config';
import { mixins } from '../styles/mixins';
import useScrollDirection, { ScrollDirection } from '../hooks/useScrollDirection';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import useMounted from '../hooks/useMounted';
import FadeIn from './FadeIn';
import Menu from './Menu';
import ResumeButton from './ResumeButton';
import { IconLogo } from './icons';

const StyledHeader = styled.header<{ $dir: ScrollDirection; $top: boolean }>`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--nav-bg);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${p =>
      p.$dir === 'up' &&
      !p.$top &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--nav-bg);
        box-shadow: 0 10px 30px -10px var(--shadow);
      `};

    ${p =>
      p.$dir === 'down' &&
      !p.$top &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--text-strong);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .menu-wrap {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .logo {
    ${mixins.flexCenter};

    a {
      color: var(--accent);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      svg {
        fill: none;
        user-select: none;
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
      }
    }
  }
`;

const StyledLinks = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--accent-text);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Nav = ({ isHome }: { isHome: boolean }) => {
  const reduced = usePrefersReducedMotion();
  const mounted = useMounted(isHome ? 100 : 0, isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolledToTop(window.scrollY < 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const animate = isHome && !reduced;
  const fade = animate ? 'fade' : undefined;
  const fadeDown = animate ? 'fadedown' : undefined;
  const show = mounted;

  return (
    <StyledHeader $dir={scrollDirection} $top={scrolledToTop}>
      <StyledNav aria-label="Main">
        <FadeIn show={show} variant={fade ?? 'fade'} className="logo">
          <Link to="/" aria-label="home">
            <IconLogo />
          </Link>
        </FadeIn>

        <StyledLinks>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <FadeIn
                key={name}
                as="li"
                show={show}
                variant={fadeDown ?? 'fade'}
                delay={animate ? i * 100 : 0}>
                <Link to={url}>{name}</Link>
              </FadeIn>
            ))}
          </ol>
          <FadeIn show={show} variant={fadeDown ?? 'fade'} delay={animate ? navLinks.length * 100 : 0}>
            <ResumeButton className="resume-button" />
          </FadeIn>
        </StyledLinks>

        <FadeIn show={show} variant={fade ?? 'fade'} className="menu-wrap">
          <Menu />
        </FadeIn>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
