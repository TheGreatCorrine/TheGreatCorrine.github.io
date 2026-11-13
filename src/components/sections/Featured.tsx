import { useRef } from 'react';
import styled from 'styled-components';
import { featured } from '../../content/featured';
import { mixins } from '../../styles/mixins';
import { asset } from '../../utils';
import useReveal from '../../hooks/useReveal';
import { Icon } from '../icons';

const StyledProjectsGrid = styled.ul`
  ${mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }

    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--text-strong);
    font-family: var(--font-display);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    border: 1px solid var(--bg-hover);
    background-color: var(--bg-elevated);
    color: var(--text);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      border: 0;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--text);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--text-strong);

    a {
      ${mixins.flexCenter};
      padding: 10px;

      &.external svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.2;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--img-tint);
      border-radius: var(--border-radius);
      vertical-align: middle;
      overflow: hidden;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
          mix-blend-mode: normal;
          opacity: 0;
        }

        .img {
          opacity: 1;
        }
      }

      &:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--bg);
        mix-blend-mode: screen;
        opacity: 0.3;
      }
    }

    .img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(95%);
      transition: var(--transition);

      @media (max-width: 768px) {
        height: 100%;
        aspect-ratio: auto;
      }
    }
  }
`;

const Featured = () => {
  const revealTitle = useRef<HTMLHeadingElement>(null);
  const revealProjects = useRef<Array<HTMLLIElement | null>>([]);
  useReveal(
    [revealTitle, ...featured.map((_, i) => ({ get current() { return revealProjects.current[i]; } }))],
    [200, ...featured.map((_, i) => i * 100)],
  );

  return (
    <section id="projects" tabIndex={-1}>
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>

      <StyledProjectsGrid>
        {featured.map(({ title, description, tech, cover, github, external }, i) => (
          <StyledProject
            key={title}
            ref={el => {
              revealProjects.current[i] = el;
            }}>
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={external ?? github ?? '#'}>{title}</a>
                </h3>
                <div className="project-description" dangerouslySetInnerHTML={{ __html: description }} />
                <ul className="project-tech-list">
                  {tech.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {github && (
                    <a href={github} aria-label="GitHub Link">
                      <Icon name="GitHub" />
                    </a>
                  )}
                  {external && (
                    <a href={external} aria-label="External Link" className="external">
                      <Icon name="External" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-image">
              <a href={external ?? github ?? '#'} tabIndex={-1} aria-hidden="true">
                <img className="img" src={asset(cover)} alt={title} width={700} height={438} loading="lazy" />
              </a>
            </div>
          </StyledProject>
        ))}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
