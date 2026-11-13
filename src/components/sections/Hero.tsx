import styled from 'styled-components';
import { hero } from '../../content/hero';
import { mixins } from '../../styles/mixins';
import { navDelay } from '../../utils';
import useMounted from '../../hooks/useMounted';
import FadeIn from '../FadeIn';

const StyledHeroSection = styled.section`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 24px 4px;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 3vw, var(--fz-md));
    font-weight: 500;
    letter-spacing: 0.18em;

    @media (max-width: 480px) {
      margin: 0 0 16px 2px;
    }
  }

  h2 {
    margin: 0;

    .dot {
      color: var(--accent);
    }
  }

  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px 36px;
    align-items: baseline;
    margin: 44px 0 0 4px;

    @media (max-width: 480px) {
      gap: 12px 20px;
      margin-top: 32px;
    }
  }

  dt {
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: var(--text);
    font-size: var(--fz-xl);
    line-height: 1.4;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }

    .muted {
      color: var(--text-muted);
      font-size: 0.85em;
    }
  }
`;

const Hero = () => {
  const mounted = useMounted(navDelay);

  const items = [
    <h1>{hero.name}</h1>,
    <h2 className="big-heading">
      {hero.title}
      <span className="dot">.</span>
    </h2>,
    <dl>
      {hero.facts.map(({ label, value }) => (
        <div key={label} style={{ display: 'contents' }}>
          <dt>{label}</dt>
          <dd dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      ))}
    </dl>,
  ];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <FadeIn key={i} show={mounted} delay={(i + 1) * 100}>
          {item}
        </FadeIn>
      ))}
    </StyledHeroSection>
  );
};

export default Hero;
