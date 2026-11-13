import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { jobs } from '../../content/jobs';
import { mixins } from '../../styles/mixins';
import { KEY_CODES } from '../../utils';
import useReveal from '../../hooks/useReveal';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
`;

const StyledTabButton = styled.button<{ $active: boolean }>`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--bg-hover);
  background-color: transparent;
  color: ${p => (p.$active ? 'var(--accent-text)' : 'var(--text-body)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--bg-hover);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--accent-tint);
  }
`;

const StyledHighlight = styled.div<{ $active: number }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--accent);
  transform: translateY(calc(${p => p.$active} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${p => p.$active} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  animation: panel-in 250ms var(--easing);

  ul {
    ${mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--accent-text);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  @keyframes panel-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const revealContainer = useRef<HTMLElement>(null);
  useReveal([revealContainer]);

  useEffect(() => {
    if (tabFocus === null) return;
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
      return;
    }
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
      return;
    }
    tabs.current[tabFocus]?.focus();
    setActiveTabId(tabFocus);
  }, [tabFocus]);

  const onKeyDown = (e: KeyboardEvent) => {
    const current = tabFocus ?? activeTabId;
    if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_LEFT) {
      e.preventDefault();
      setTabFocus(current - 1);
    }
    if (e.key === KEY_CODES.ARROW_DOWN || e.key === KEY_CODES.ARROW_RIGHT) {
      e.preventDefault();
      setTabFocus(current + 1);
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer} tabIndex={-1}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={onKeyDown}>
          {jobs.map(({ tab, company }, i) => (
            <StyledTabButton
              key={company}
              $active={activeTabId === i}
              onClick={() => {
                setActiveTabId(i);
                setTabFocus(i);
              }}
              ref={el => {
                tabs.current[i] = el;
              }}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}>
              <span>{tab}</span>
            </StyledTabButton>
          ))}
          <StyledHighlight $active={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobs.map(({ title, url, company, range, bullets }, i) =>
            activeTabId === i ? (
              <StyledTabPanel
                key={company}
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`tab-${i}`}>
                <h3>
                  <span>{title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    {url ? (
                      <a href={url} className="inline-link">
                        {company}
                      </a>
                    ) : (
                      company
                    )}
                  </span>
                </h3>
                <p className="range">{range}</p>
                {bullets.length > 0 && (
                  <ul>
                    {bullets.map((b, k) => (
                      <li key={k} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                )}
              </StyledTabPanel>
            ) : null,
          )}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
