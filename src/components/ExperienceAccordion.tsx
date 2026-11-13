import { PointerEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import type { ExperienceItem } from '../content/types';
import { mixins } from '../styles/mixins';
import { asset } from '../utils';
import useReveal from '../hooks/useReveal';

const StyledSection = styled.section`
  position: relative;
  max-width: 860px;

  /* 跟随鼠标的暖色光斑，给毛玻璃卡片一个可以“透”出来的背景 */
  .spotlight {
    position: absolute;
    inset: 80px -120px 0;
    z-index: -1;
    pointer-events: none;
    background:
      radial-gradient(420px circle at var(--mx, 30%) var(--my, 40%), rgba(217, 119, 87, 0.16), transparent 70%),
      radial-gradient(360px circle at 85% 75%, rgba(196, 160, 120, 0.14), transparent 70%);
    transition: background 0.1s linear;

    @media (max-width: 1080px) {
      inset: 80px 0 0;
    }

    /* 触屏设备没有悬停，不需要光斑 */
    @media (hover: none), (max-width: 768px) {
      display: none;
    }
  }

  /* 标题较长时（比如 Community & Open Source）在手机上允许换行 */
  .numbered-heading {
    @media (max-width: 600px) {
      white-space: normal;

      &:after {
        display: none;
      }
    }
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 12px;
  }

  @media (hover: hover) {
    .list:hover > li:not(:hover) {
      opacity: 0.5;
    }
  }
`;

/* 缩写方块的底色，按顺序轮流使用 */
const logoColors = ['#C15F3C', '#3D3D3A', '#8A7A5E', '#5E5D59', '#A8674E', '#6F6E68'];

const abbr = (org: string) => {
  // 名字里有括号缩写的，比如 “(WiCS)”，直接用它
  const paren = org.match(/\(([A-Za-z]{2,6})\)/);
  if (paren) return paren[1];
  const words = org.replace(/[^A-Za-z0-9: ]/g, '').split(/[\s:]+/).filter(Boolean);
  if (words.length === 1) return words[0][0].toUpperCase();
  if (/^[A-Z]{2,5}$/.test(words[0])) return words[0];
  return words
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
};

const StyledItem = styled.li`
  position: relative;
  border-radius: 10px;
  transition: opacity 0.25s var(--easing);

  /* 展开的那一条不参与“其他行变淡” */
  &.open {
    opacity: 1 !important;
  }

  /* 毛玻璃底：悬停、聚焦或展开时出现 */
  .glass {
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: rgba(250, 249, 245, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-shadow:
      0 10px 30px -15px var(--shadow),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);
    opacity: 0;
    transition: opacity 0.25s var(--easing);
    pointer-events: none;
  }

  &:hover .glass,
  &:focus-within .glass,
  &.open .glass {
    opacity: 1;
  }

  &.open .glass {
    background: rgba(250, 249, 245, 0.78);
  }

  .head {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr auto;
    align-items: center;
    gap: 8px 28px;
    width: 100%;
    padding: 24px 28px;
    border: 0;
    border-radius: 10px;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;

    @media (max-width: 600px) {
      grid-template-columns: 1fr auto;
      padding: 18px 8px 18px 4px;
    }
  }

  .range {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;

    @media (max-width: 600px) {
      grid-column: 1;
      grid-row: 1;
    }
  }

  .title {
    min-width: 0;
    color: var(--text-strong);
    font-size: var(--fz-xl);
    font-weight: 500;
    line-height: 1.3;
    transition: color 0.2s var(--easing);

    @media (max-width: 600px) {
      grid-column: 1;
      grid-row: 2;
      font-size: var(--fz-lg);
    }
  }

  &:hover .title,
  &.open .title,
  .head:focus-visible .title {
    color: var(--accent-text);
  }

  .chev {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: var(--text-muted);
    transition:
      transform 0.3s var(--easing),
      background-color 0.2s,
      color 0.2s;

    svg {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 600px) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }

  &:hover .chev,
  &.open .chev {
    background: var(--accent-tint);
    color: var(--accent-text);
  }

  &.open .chev {
    transform: rotate(180deg);
  }

  /* 展开区：高度平滑展开 */
  .body {
    position: relative;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.35s var(--easing);
  }

  &.open .body {
    grid-template-rows: 1fr;
  }

  .inner {
    overflow: hidden;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 3fr auto;
    gap: 12px 28px;
    padding: 0 28px 26px;
    opacity: 0;
    transform: translateY(-6px);
    transition:
      opacity 0.25s var(--easing),
      transform 0.3s var(--easing);

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      padding: 0 4px 20px;
    }
  }

  &.open .content {
    opacity: 1;
    transform: none;
    transition-delay: 0.08s;
  }

  .logo-col {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 600px) {
      flex-direction: row;
      align-items: center;
    }
  }

  .logo {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    overflow: hidden;
    border-radius: 14px;
    background: var(--bg-elevated);
    box-shadow: 0 8px 18px -12px rgba(20, 20, 19, 0.5);
    color: #faf9f5;
    font-size: var(--fz-lg);
    font-weight: 600;
    letter-spacing: -0.02em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #fff;
    }

    @media (max-width: 600px) {
      width: 48px;
      height: 48px;
      border-radius: 11px;
      font-size: var(--fz-md);
    }
  }

  .meta {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.6;
  }

  .details {
    min-width: 0;
  }

  /* 横版 logo：白底圆角卡片 */
  .banner {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    height: 64px;
    margin-bottom: 18px;
    padding: 10px 18px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 8px 18px -12px rgba(20, 20, 19, 0.35);

    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media (max-width: 600px) {
      height: 52px;
    }
  }

  .description {
    margin: 0 0 12px;
    color: var(--text);
    font-size: var(--fz-md);
    line-height: 1.6;
  }

  .bullets {
    ${mixins.fancyList};
    font-size: var(--fz-md);
    line-height: 1.55;

    li {
      margin-bottom: 8px;
    }

    a {
      ${mixins.inlineLink};
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0 0;
    padding: 0;
    list-style: none;

    li {
      padding: 5px 12px;
      border-radius: 999px;
      background: var(--accent-tint);
      color: var(--accent-text);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.4;
    }
  }

  .visit {
    ${mixins.smallButton};
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;

    .arrow {
      width: 14px;
      height: 14px;
    }
  }

  /* 只有官网按钮、没有描述时，按钮不用离上面那么远 */
  .details > .visit:first-child {
    margin-top: 4px;
  }

  .spacer {
    width: 28px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const Arrow = () => (
  <svg className="arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Chevron = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 6l4 4 4-4" />
  </svg>
);

interface Props {
  id: string;
  heading: string;
  items: ExperienceItem[];
}

/** 02 Work 和 03 Experience 共用：点击展开的经历列表，一次只展开一条。展开后显示 logo、描述、要点、标签和官网按钮。 */
const ExperienceAccordion = ({ id, heading, items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealContainer = useRef<HTMLElement>(null);
  useReveal([revealContainer]);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left + 120}px`);
    el.style.setProperty('--my', `${e.clientY - r.top - 80}px`);
  };

  return (
    <StyledSection id={id} ref={revealContainer} tabIndex={-1} onPointerMove={onPointerMove}>
      <div className="spotlight" aria-hidden="true" />
      <h2 className="numbered-heading">{heading}</h2>

      <ol className="list">
        {items.map((item, i) => {
          const { range, role, org, url, description, bullets, tags, logo, banner, meta } = item;
          const open = openIndex === i;
          const headId = `${id}-head-${i}`;
          const bodyId = `${id}-body-${i}`;
          return (
            <StyledItem key={`${role}-${org}`} className={open ? 'open' : undefined}>
              <div className="glass" aria-hidden="true" />
              <button
                type="button"
                className="head"
                id={headId}
                aria-expanded={open}
                aria-controls={bodyId}
                onClick={() => setOpenIndex(open ? null : i)}>
                <span className="range">{range}</span>
                <span className="title">
                  {role} · {org}
                </span>
                <span className="chev">
                  <Chevron />
                </span>
              </button>

              <div className="body" id={bodyId} role="region" aria-labelledby={headId}>
                <div className="inner">
                  <div className="content" aria-hidden={!open}>
                    <div className="logo-col">
                      <div
                        className="logo"
                        style={logo ? undefined : { backgroundColor: logoColors[i % logoColors.length] }}
                        aria-hidden="true">
                        {logo ? <img src={asset(logo)} alt="" /> : abbr(org)}
                      </div>
                      {meta && <div className="meta">{meta}</div>}
                    </div>

                    <div className="details">
                      {banner && (
                        <div className="banner">
                          <img src={asset(banner)} alt={org} loading="lazy" />
                        </div>
                      )}
                      {description && <p className="description">{description}</p>}
                      {bullets && bullets.length > 0 && (
                        <ul className="bullets">
                          {bullets.map((b, k) => (
                            <li key={k} dangerouslySetInnerHTML={{ __html: b }} />
                          ))}
                        </ul>
                      )}
                      {tags && tags.length > 0 && (
                        <ul className="tags" aria-label="Skills">
                          {tags.map(t => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      )}
                      {url && (
                        <a
                          className="visit"
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={open ? 0 : -1}>
                          Visit {org.split(/[\s,]/)[0]}
                          <Arrow />
                        </a>
                      )}
                    </div>
                    <div className="spacer" />
                  </div>
                </div>
              </div>
            </StyledItem>
          );
        })}
      </ol>
    </StyledSection>
  );
};

export default ExperienceAccordion;
