import { useRef } from 'react';
import styled from 'styled-components';
import { about } from '../../content/about';
import { aboutZh } from '../../content/zh';
import { useLang } from '../../i18n';
import { mixins } from '../../styles/mixins';
import { asset } from '../../utils';
import useReveal from '../../hooks/useReveal';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  align-self: start;
  max-width: 300px;

  /* 照片旁边的两个小气泡 */
  .bubble {
    position: absolute;
    z-index: 3;
    pointer-events: none;
    white-space: nowrap;
  }

  .location {
    top: 18px;
    left: -22px;
    padding: 8px 14px;
    border-radius: 12px;
    background: #3d3d3a;
    box-shadow: 0 10px 22px -12px rgba(20, 20, 19, 0.5);
    color: #faf9f5;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .status {
    right: -30px;
    bottom: -6px;
    padding: 11px 16px 12px;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 16px;
    background: rgba(250, 249, 245, 0.82);
    box-shadow: 0 14px 28px -16px rgba(20, 20, 19, 0.45);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    .label {
      display: block;
      margin-bottom: 3px;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .text {
      display: block;
      color: var(--text-strong);
      font-size: var(--fz-sm);
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    .location {
      left: -12px;
    }
    .status {
      right: -16px;
    }
  }

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    /* 照片一直是彩色；悬停时照片往左上浮起，橙色框往右下靠近 */
    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }
    }

    .img {
      display: block;
      position: relative;
      width: 100%;
      height: auto;
      aspect-ratio: 640 / 725;
      object-fit: cover;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
      border: 2px solid var(--accent);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const { t } = useLang();
  const revealContainer = useRef<HTMLElement>(null);
  useReveal([revealContainer]);

  return (
    <StyledAboutSection id="about" ref={revealContainer} tabIndex={-1}>
      <h2 className="numbered-heading">{t('About Me', '关于我')}</h2>

      <div className="inner">
        <StyledText>
          <div>
            {t(about.paragraphs, aboutZh.paragraphs).map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <ul className="skills-list">
            {about.skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img className="img" src={asset(about.photo)} width={640} height={725} alt={about.photoAlt} />
          </div>
          <span className="bubble location">{t(about.location, aboutZh.location)}</span>
          <span className="bubble status">
            <span className="label">{t(about.status.label, aboutZh.status.label)}</span>
            <span className="text">{t(about.status.text, aboutZh.status.text)}</span>
          </span>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
