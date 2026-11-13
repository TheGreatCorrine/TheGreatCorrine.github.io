import { PointerEvent, useRef } from 'react';
import styled from 'styled-components';
import type { ExperienceItem } from '../content/types';
import { mixins } from '../styles/mixins';
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

const StyledItem = styled.li`
  position: relative;
  transition: opacity 0.25s var(--easing);

  .card {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 8px 32px;
    padding: 28px 28px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      padding: 20px 4px;
    }
  }

  /* 毛玻璃卡片：悬停或键盘聚焦时出现 */
  .glass {
    position: absolute;
    inset: 0;
    border-radius: 8px;
    background: rgba(250, 249, 245, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.7);
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
  &:focus-within .glass {
    opacity: 1;
  }

  .range {
    position: relative;
    margin: 4px 0 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .content {
    position: relative;
    min-width: 0;
  }

  h3 {
    margin: 0 0 10px;
    font-size: var(--fz-xl);
    font-weight: 500;
    line-height: 1.3;
  }

  .card-link {
    color: var(--text-strong);
    position: static;

    /* 让整张卡片都能点 */
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      border-radius: 8px;
    }

    &:focus-visible {
      outline: none;
    }
    &:focus-visible:before {
      outline: 2px dashed var(--accent);
      outline-offset: 3px;
    }

    .arrow {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: 6px;
      vertical-align: -1px;
      transition: transform 0.25s var(--easing);
    }
  }

  &:hover .card-link,
  .card-link:focus-visible {
    color: var(--accent-text);

    .arrow {
      transform: translate(3px, -3px);
    }
  }

  .card-title {
    color: var(--text-strong);
  }

  .org {
    white-space: normal;
  }

  p {
    margin: 0;
    font-size: var(--fz-md);
    line-height: 1.6;
    color: var(--text-body);
  }

  .bullets {
    ${mixins.fancyList};
    position: relative;
    z-index: 2;
    margin-top: 12px;
    font-size: var(--fz-md);
    line-height: 1.55;

    li {
      margin-bottom: 6px;
    }

    a {
      ${mixins.inlineLink};
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 16px 0 0;

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

interface Props {
  id: string;
  heading: string;
  items: ExperienceItem[];
}

/** 02 和 03 共用的经历列表：左边时间，右边“职位 · 组织 ↗”、描述、要点和标签。 */
const ExperienceSection = ({ id, heading, items }: Props) => {
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
        {items.map(({ range, role, org, url, description, bullets, tags }) => (
          <StyledItem key={`${role}-${org}`}>
            <div className="glass" aria-hidden="true" />
            <div className="card">
              <p className="range">{range}</p>
              <div className="content">
                <h3>
                  {url ? (
                    <a className="card-link" href={url} target="_blank" rel="noreferrer">
                      {role} · <span className="org">{org}</span>
                      <Arrow />
                    </a>
                  ) : (
                    <span className="card-title">
                      {role} · <span className="org">{org}</span>
                    </span>
                  )}
                </h3>
                {description && <p>{description}</p>}
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
              </div>
            </div>
          </StyledItem>
        ))}
      </ol>
    </StyledSection>
  );
};

export default ExperienceSection;
