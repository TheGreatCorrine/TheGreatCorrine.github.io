import { useState } from 'react';
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

/* 第一行：左边邮箱，右边 Let's Connect */
const StyledTop = styled.div`
  ${mixins.flexBetween};
  flex-wrap: wrap;
  gap: 16px 32px;
  padding: 28px 0;
  border-top: 1px solid var(--bg-hover);
  border-bottom: 1px solid var(--bg-hover);

  .email {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 6px 12px;
    min-width: 0;
  }

  .label {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .address {
    color: var(--text-strong);
    font-size: clamp(var(--fz-lg), 2.4vw, var(--fz-xxl));
    font-weight: 500;
    overflow-wrap: anywhere;
  }

  .copy {
    padding: 4px 8px;
    border-radius: var(--border-radius);
    background: transparent;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      background: var(--accent-tint);
      color: var(--accent-text);
    }
  }

  .connect {
    ${mixins.smallButton};
    font-size: var(--fz-sm);
    padding: 0.9rem 1.2rem;
  }
`;

/* 第二行：版权、Available for work、署名 */
const StyledBottom = styled.div`
  ${mixins.flexBetween};
  flex-wrap: wrap;
  gap: 12px 24px;
  padding-top: 20px;
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
    margin: 20px 0 0;
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

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const linkedin = socialMedia.find(s => s.name === 'Linkedin');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <StyledFooter id="contact">
      <StyledTop>
        <div className="email">
          <span className="label">Email :</span>
          <a className="address" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <button type="button" className="copy" onClick={copyEmail} aria-live="polite">
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        {linkedin && (
          <a className="connect" href={linkedin.url} target="_blank" rel="noreferrer">
            Let’s Connect
          </a>
        )}
      </StyledTop>

      <StyledSocialLinks>
        {socialMedia.map(({ name, url }) => (
          <li key={name}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
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
};

export default Footer;
