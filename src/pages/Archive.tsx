import { useRef } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Icon } from '../components/icons';
import { featured } from '../content/featured';
import { projects } from '../content/projects';
import { mixins } from '../styles/mixins';
import useReveal from '../hooks/useReveal';

const StyledTableContainer = styled.div`
  margin: 100px -20px;
  overflow-x: auto;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--bg-elevated);
      }
    }

    th {
      color: var(--text-strong);
      font-size: var(--fz-md);
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;
        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;
        font-variant-numeric: tabular-nums;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--text-strong);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;

        .separator {
          margin: 0 5px;
        }

        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

type Row = {
  year: number;
  title: string;
  madeAt?: string;
  tech: string[];
  github?: string;
  external?: string;
};

const Archive = () => {
  const revealTitle = useRef<HTMLElement>(null);
  const revealTable = useRef<HTMLDivElement>(null);
  useReveal([revealTitle, revealTable], [200, 200]);

  // 精选项目没有年份字段时归到最新一年
  const latestYear = Math.max(...projects.map(p => p.year));
  const rows: Row[] = [
    ...featured.map(f => ({ ...f, year: latestYear })),
    ...projects,
  ].sort((a, b) => b.year - a.year);

  return (
    <Layout title="Archive">
      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ year, title, madeAt, tech, github, external }) => (
                <tr key={title}>
                  <td className="overline year">{year}</td>
                  <td className="title">{title}</td>
                  <td className="company hide-on-mobile">{madeAt ?? '—'}</td>
                  <td className="tech hide-on-mobile">
                    {tech.map((item, i) => (
                      <span key={item}>
                        {item}
                        {i !== tech.length - 1 && <span className="separator">&middot;</span>}
                      </span>
                    ))}
                  </td>
                  <td className="links">
                    <div>
                      {external && (
                        <a href={external} aria-label="External Link">
                          <Icon name="External" />
                        </a>
                      )}
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

export default Archive;
