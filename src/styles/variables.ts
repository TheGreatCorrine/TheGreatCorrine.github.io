import { css } from 'styled-components';

/**
 * 颜色变量。布局变量（字号、间距、动效）与原版 v4 一致，只换了配色。
 * 想改颜色只需改这里。
 */
const variables = css`
  :root {
    /* 背景层级 */
    --bg: #faf9f5;
    --bg-elevated: #f0eee6;
    --bg-hover: #e8e6dc;
    --bg-deep: #f5f4ee;
    --nav-bg: rgba(250, 249, 245, 0.85);
    --shadow: rgba(20, 20, 19, 0.1);

    /* 文字层级 */
    --text-strong: #141413;
    --text: #3d3d3a;
    --text-body: #5e5d59;
    --text-muted: #6f6e68;

    /* 强调色：--accent 用于边框/图标/符号，--accent-text 用于小号文字（对比度 ≥ 4.5） */
    --accent: #d97757;
    --accent-text: #a84f30;
    --accent-tint: rgba(217, 119, 87, 0.1);
    /* 图片默认的暖色染色底（灰度图 × 这个颜色），悬停时恢复原图 */
    --img-tint: #f0cdbd;

    --font-sans: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', 'Roboto Mono', monospace;
    /* 想要更“Claude”的气质，可以把大标题换成衬线体，比如 'Source Serif 4', Georgia, serif */
    --font-display: var(--font-sans);

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
