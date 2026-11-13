import type { CSSProperties, ReactNode } from 'react';

interface Props {
  show: boolean;
  variant?: 'fadeup' | 'fadedown' | 'fade';
  delay?: number;
  as?: 'div' | 'li';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** 入场动画：show 变成 true 时淡入。替代原版的 CSSTransition。 */
const FadeIn = ({ show, variant = 'fadeup', delay = 0, as: Tag = 'div', className = '', style, children }: Props) => (
  <Tag
    className={`${variant} ${show ? 'is-in' : ''} ${className}`.trim()}
    style={{ transitionDelay: `${delay}ms`, ...style }}>
    {children}
  </Tag>
);

export default FadeIn;
