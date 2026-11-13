/**
 * 02 · Work：co-op / 实习 / 工作经历，最新的放最前面。
 * 每条点击后展开，显示 logo、description、bullets、tags 和官网按钮（填了 url 才有）。
 * 除了 range / role / org，其他都可以留空，留空的部分不会显示。
 * logo：把图片放进 public/images/logos/，然后写 logo: 'images/logos/xxx.png'；不写就显示公司缩写方块。
 * meta：logo 下面的一行小字，比如 'Toronto, ON · 8 months'。
 */
import type { ExperienceItem } from './types';

// TODO: 每段经历可以补 description、2–4 条 bullets、技术栈 tags，以及 logo 和 meta
export const work: ExperienceItem[] = [
  {
    range: 'Starting Jan 2027',
    role: 'Software Engineer Intern',
    org: 'Kinaxis',
    url: 'https://www.kinaxis.com/',
    meta: 'Incoming',
  },
  {
    range: 'Jan – Aug 2026',
    role: 'Platform Engineer Intern',
    org: 'Terminal',
  },
  {
    range: 'May – Aug 2025',
    role: 'AI Engineer Intern',
    org: 'BSH Home Appliances',
    url: 'https://www.bsh-group.com/',
  },
  {
    range: 'Jan – Apr 2025',
    role: 'Student Developer',
    org: 'Rotman School of Management',
    url: 'https://www.rotman.utoronto.ca/',
  },
  {
    range: 'Sep – Dec 2024',
    role: 'Full-Stack Development Intern',
    org: 'Re:Pair Genomics',
  },
  {
    range: 'May – Aug 2023',
    role: 'Summer Analyst Intern',
    org: 'CITIC Securities',
    url: 'https://www.citics.com/',
  },
];
