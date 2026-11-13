import styled from 'styled-components';
import { siteConfig, socialMedia } from '../config';
import { mixins } from '../styles/mixins';
import { Icon } from './icons';

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto 0;
  padding: 0 25px 28px;

  @media (max-width: 768px) {
    padding: 0 25px 20px;
  }
`;

/* 版权、Available for work、署名 */
const StyledBottom = styled.div`
  ${mixins.flexBetween};
  flex-wrap: wrap;
  gap: 12px 24px;
  padding-top: 20px;
  border-top: 1px solid var(--bg-hover);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1.6;

  .status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 12px;
    border-radius: 999px;
    background: var(--accent-tint);
    color: var(--accent-text);
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px rgba(217, 119, 87, 0.2);

    @media (prefers-reduced-motion: no-preference) {
      animation: pulse 2s var(--easing) infinite;
    }
  }

  @keyframes pulse {
    50% {
      box-shadow: 0 0 0 6px rgba(217, 119, 87, 0);
    }
  }

  a:hover,
  a:focus-visible {
    color: var(--accent-text);
  }
`;

/* 手机上侧边栏隐藏，社交图标放到页脚 */
const StyledSocialLinks = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0 0 16px;
    padding: 0;
    list-style: none;
    color: var(--text);

    a {
      padding: 10px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledSocialLinks>
      {socialMedia.map(({ name, url }) => (
        <li key={name}>
          <a
            href={url}
            aria-label={name}
            {...(url.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
            <Icon name={name} />
          </a>
        </li>
      ))}
    </StyledSocialLinks>

    <StyledBottom>
      <span>© {new Date().getFullYear()} {siteConfig.name}</span>
      <span className="status">
        <span className="dot" aria-hidden="true" />
        Available for work
      </span>
      <span>
        Design inspired by{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
          Brittany Chiang
        </a>
      </span>
    </StyledBottom>
  </StyledFooter>
);

export default Footer;
