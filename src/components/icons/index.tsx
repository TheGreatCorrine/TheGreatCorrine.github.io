/** Feather 图标（MIT）。 */
import type { ReactElement } from 'react';

const Svg = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather">
    <title>{title}</title>
    {children}
  </svg>
);

const icons: Record<string, ReactElement> = {
  GitHub: (
    <Svg title="GitHub">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </Svg>
  ),
  Linkedin: (
    <Svg title="LinkedIn">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Svg>
  ),
  Instagram: (
    <Svg title="Instagram">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </Svg>
  ),
  Twitter: (
    <Svg title="Twitter">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </Svg>
  ),
  Codepen: (
    <Svg title="CodePen">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="22" x2="12" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" y1="2" x2="12" y2="8.5" />
    </Svg>
  ),
  External: (
    <Svg title="External Link">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </Svg>
  ),
  Folder: (
    <Svg title="Folder">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </Svg>
  ),
};

export const Icon = ({ name }: { name: string }) => icons[name] ?? icons.External;

/** 网站 Logo：圆角方框 + 字母 C。想换字母就改 path。 */
export const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 84">
    <title>Logo</title>
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="76" height="76" rx="18" />
      <path d="M53 31a15 15 0 1 0 0 22" />
    </g>
  </svg>
);

/** 加载动画用的 Logo：外框先描边，再出现字母。 */
export const IconLoader = () => (
  <svg id="loader-logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 84">
    <title>Loader Logo</title>
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <rect className="frame" x="4" y="4" width="76" height="76" rx="18" pathLength={1} />
      <path className="letter" d="M53 31a15 15 0 1 0 0 22" />
    </g>
  </svg>
);
