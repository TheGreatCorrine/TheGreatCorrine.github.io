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
    margin: 0 0 30px 4px;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--text-body);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
`;

const Hero = () => {
  const mounted = useMounted(navDelay);

  const items = [
    <h1>{hero.greeting}</h1>,
    <h2 className="big-heading">{hero.name}</h2>,
    <h3 className="big-heading">{hero.tagline}</h3>,
    <p dangerouslySetInnerHTML={{ __html: hero.description }} />,
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
