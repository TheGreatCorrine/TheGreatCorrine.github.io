import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../../content/projects';
import { mixins } from '../../styles/mixins';
import useReveal from '../../hooks/useReveal';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { Icon } from '../icons';

const GRID_LIMIT = 6;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: var(--font-display);
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);

    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    width: 100%;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  &.new {
    animation: card-in 300ms var(--easing) both;
  }

  @keyframes card-in {
    from {
      opacity: 0.01;
      transform: translateY(20px);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${mixins.boxShadow};
    ${mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--bg-hover);
    background-color: var(--bg-elevated);
    transition: var(--transition);
    overflow: auto;
  }

  &:hover .project-title {
    color: var(--accent-text);
  }

  header {
    width: 100%;
  }

  .project-top {
    ${mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--accent);

      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--text);

      a {
        ${mixins.flexCenter};
        padding: 5px 7px;

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
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--text-strong);
    font-size: var(--fz-xxl);
    transition: var(--transition);

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

  .project-description {
    color: var(--text);
    font-size: 17px;

    a {
      ${mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      color: var(--text-muted);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const reduced = usePrefersReducedMotion();
  const revealTitle = useRef<HTMLHeadingElement>(null);
  const revealArchiveLink = useRef<HTMLAnchorElement>(null);
  const revealGrid = useRef<HTMLUListElement>(null);
  useReveal([revealTitle, revealArchiveLink, revealGrid]);

  const list = projects.filter(p => p.showInProjects !== false);
  const projectsToShow = showMore ? list : list.slice(0, GRID_LIMIT);

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>
      <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
        view the archive
      </Link>

      <ul className="projects-grid" ref={revealGrid}>
        {projectsToShow.map(({ title, description, tech, github, external }, i) => (
          <StyledProject
            key={title}
            className={i >= GRID_LIMIT && !reduced ? 'new' : undefined}
            style={{ animationDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms` }}>
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <Icon name="Folder" />
                  </div>
                  <div className="project-links">
                    {github && (
                      <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                        <Icon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a href={external} aria-label="External Link" className="external" target="_blank" rel="noreferrer">
                        <Icon name="External" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">
                  <a href={external ?? github ?? '#'} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h3>
                <div className="project-description" dangerouslySetInnerHTML={{ __html: description }} />
              </header>
              <footer>
                <ul className="project-tech-list">
                  {tech.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </StyledProject>
        ))}
      </ul>

      {list.length > GRID_LIMIT && (
        <button className="more-button" onClick={() => setShowMore(s => !s)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledProjectsSection>
  );
};

export default Projects;
