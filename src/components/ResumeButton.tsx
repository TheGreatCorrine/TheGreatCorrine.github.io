import { useCallback, useEffect, useId, useRef, useState } from 'react';
import styled from 'styled-components';
import { siteConfig } from '../config';
import { mixins } from '../styles/mixins';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { useLang } from '../i18n';

const StyledWrapper = styled.div<{ $align: 'right' | 'center' }>`
  position: relative;
  display: inline-block;

  .resume-trigger {
    font-family: var(--font-mono);
  }

  /* 点 Resume 后弹出的小提示 */
  .popover {
    position: absolute;
    top: calc(100% + 14px);
    ${p => (p.$align === 'right' ? 'right: 0;' : 'left: 50%; transform: translateX(-50%);')}
    z-index: 20;
    width: min(280px, 80vw);
    padding: 16px 18px;
    border: 1px solid var(--bg-hover);
    border-radius: 10px;
    background: var(--bg);
    box-shadow: 0 16px 34px -18px rgba(20, 20, 19, 0.35);
    color: var(--text);
    font-family: var(--font-sans);
    font-size: var(--fz-sm);
    line-height: 1.55;
    text-align: left;
    animation: pop-in 0.18s var(--easing);

    /* 小三角 */
    &:before {
      content: '';
      position: absolute;
      top: -6px;
      ${p => (p.$align === 'right' ? 'right: 24px;' : 'left: calc(50% - 5px);')}
      width: 10px;
      height: 10px;
      border-top: 1px solid var(--bg-hover);
      border-left: 1px solid var(--bg-hover);
      background: var(--bg);
      transform: rotate(45deg);
    }
  }

  .popover-title {
    display: block;
    margin-bottom: 4px;
    color: var(--text-strong);
    font-weight: 600;
  }

  .popover a {
    ${mixins.inlineLink};
    overflow-wrap: anywhere;
  }

  @keyframes pop-in {
    from {
      opacity: 0;
      margin-top: -4px;
    }
  }
`;

interface Props {
  /** 按钮自己的 class（用来套 Nav / Menu 里原来的按钮样式） */
  className: string;
  align?: 'right' | 'center';
  tabIndex?: number;
}

/** Resume 按钮：不直接下载，点了弹出提示，请访客直接找 Corrine 要。 */
const ResumeButton = ({ className, align = 'right', tabIndex }: Props) => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  const close = useCallback(() => setOpen(false), []);
  useOnClickOutside(wrapperRef, close);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <StyledWrapper ref={wrapperRef} $align={align}>
      <button
        type="button"
        className={`${className} resume-trigger`}
        aria-expanded={open}
        aria-controls={popoverId}
        tabIndex={tabIndex}
        onClick={() => setOpen(o => !o)}>
        {t('Resume', '简历')}
      </button>
      {open && (
        <div className="popover" id={popoverId} role="status">
          <span className="popover-title">{t('Resume available on request', '简历可以直接找我要')}</span>
          {t('Just ask! Email me at ', '发邮件到 ')}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {t(' and I’ll send it over.', '，我会发给你。')}
        </div>
      )}
    </StyledWrapper>
  );
};

export default ResumeButton;
