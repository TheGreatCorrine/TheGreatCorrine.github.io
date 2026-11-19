import styled from 'styled-components';
import { useLang } from '../i18n';

const StyledToggle = styled.button`
  padding: 8px 10px;
  border: 1px solid var(--bg-hover);
  border-radius: var(--border-radius);
  background: transparent;
  color: var(--text-strong);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  line-height: 1;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    border-color: var(--accent);
    color: var(--accent-text);
  }
`;

/** 中英切换按钮：显示“要切换到的语言” */
const LangToggle = ({ className, tabIndex }: { className?: string; tabIndex?: number }) => {
  const { lang, toggle } = useLang();
  return (
    <StyledToggle
      type="button"
      className={className}
      onClick={toggle}
      tabIndex={tabIndex}
      aria-label={lang === 'en' ? 'Switch to Chinese' : '切换到英文'}>
      {lang === 'en' ? '中文' : 'EN'}
    </StyledToggle>
  );
};

export default LangToggle;
