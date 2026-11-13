import { useRef } from 'react';
import styled from 'styled-components';
import { testimonials, testimonialsIntro } from '../../content/testimonials';
import { asset } from '../../utils';
import useReveal from '../../hooks/useReveal';

const StyledSection = styled.section`
  .numbered-heading {
    white-space: normal;

    &:after {
      flex: 1 0 40px;
      max-width: 200px;

      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  .intro {
    max-width: 540px;
    margin: -20px 0 40px;
  }

  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 960px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  min-height: 260px;
  padding: 32px 30px;
  border-radius: 8px;
  border: 1px solid var(--bg-hover);
  background-color: var(--bg-elevated);
  box-shadow: 0 10px 30px -15px var(--shadow);
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 30px -15px var(--shadow);
    }
  }

  blockquote {
    margin: 0;
    color: var(--text);
    font-size: 17px;
    line-height: 1.55;
  }

  figcaption {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .avatar {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    color: var(--bg);
    font-size: var(--fz-md);
    font-weight: 600;
    letter-spacing: 0.02em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .name {
    display: block;
    color: var(--text-strong);
    font-size: var(--fz-md);
    font-weight: 600;
  }

  .role {
    display: block;
    color: var(--text-muted);
    font-size: var(--fz-sm);
  }

  &.keyword {
    border: 0;
    container-type: inline-size;
    color: #faf9f5;

    p {
      margin: 0;
      font-size: 17px;
      line-height: 1.5;
      opacity: 0.85;
    }

    .word {
      margin: 0;
      color: #faf9f5;
      font-family: var(--font-display);
      /* 按卡片宽度缩放，保证 COLLABORATE 这种长词放得下 */
      font-size: clamp(30px, 12cqi, 60px);
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: -0.03em;
      text-transform: uppercase;
    }
  }

  &.dark {
    background-color: #262624;
  }

  &.accent {
    background-color: var(--accent-text);
  }
`;

/* 首字母头像的底色，按顺序轮流使用 */
const avatarColors = ['#C15F3C', '#8A7A5E', '#5E5D59', '#A8674E'];

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  const revealTitle = useRef<HTMLDivElement>(null);
  const revealGrid = useRef<HTMLUListElement>(null);
  useReveal([revealTitle, revealGrid]);

  let quoteIndex = 0;

  return (
    <StyledSection id="testimonials" tabIndex={-1}>
      <div ref={revealTitle}>
        <h2 className="numbered-heading">What It’s Like to Work With Me</h2>
        <p className="intro">{testimonialsIntro}</p>
      </div>

      <ul className="grid" ref={revealGrid}>
        {testimonials.map(t => {
          if (t.type === 'keyword') {
            return (
              <StyledCard key={t.word} className={`keyword ${t.tone}`}>
                <p>{t.lead}</p>
                <p className="word">{t.word}</p>
              </StyledCard>
            );
          }
          const color = avatarColors[quoteIndex++ % avatarColors.length];
          return (
            <StyledCard key={t.name} as="li">
              <figure style={{ margin: 0, display: 'contents' }}>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="avatar" style={{ backgroundColor: color }} aria-hidden="true">
                    {t.photo ? <img src={asset(t.photo)} alt="" /> : initials(t.name)}
                  </span>
                  <span>
                    <span className="name">{t.name}</span>
                    <span className="role">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StyledCard>
          );
        })}
      </ul>
    </StyledSection>
  );
};

export default Testimonials;
