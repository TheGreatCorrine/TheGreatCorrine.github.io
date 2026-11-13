/**
 * 02 · Work：co-op / 实习 / 工作经历，最新的放最前面。
 * 每条点击后展开，显示 logo、description、bullets、tags 和官网按钮（填了 url 才有）。
 * 除了 range / role / org，其他都可以留空，留空的部分不会显示。
 * logo：把图片放进 public/images/logos/，然后写 logo: 'images/logos/xxx.png'；不写就显示公司缩写方块。
 * meta：logo 下面的一行小字，比如 'Toronto, ON · 8 months'。
 */
import type { ExperienceItem } from './types';

// TODO: 把所有 'Placeholder' 换成真实内容；meta 里可以在时长前面加城市，比如 'Toronto, ON · 8 months'
export const work: ExperienceItem[] = [
  {
    range: 'Starting Jan 2027',
    role: 'Software Engineer Intern',
    org: 'Kinaxis',
    url: 'https://www.kinaxis.com/',
    logo: 'images/logos/kinaxis-k.png',
    meta: 'Full-time Co-op · Incoming',
    description: 'Placeholder: one sentence on the team and what you worked on.',
    bullets: [
      'Placeholder: something you built, the tools you used, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%).',
    ],
    tags: ['Placeholder', 'Tech Stack'],
  },
  {
    range: 'Jan – Aug 2026',
    role: 'Platform Engineer Intern',
    org: 'Terminal',
    logo: 'images/logos/terminal.png',
    meta: 'Full-time Co-op · 8 months',
    description: 'Placeholder: one sentence on the team and what you worked on.',
    bullets: [
      'Placeholder: something you built, the tools you used, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%).',
    ],
    tags: ['Placeholder', 'Tech Stack'],
  },
  {
    range: 'May – Aug 2025',
    role: 'AI Engineer Intern',
    org: 'BSH Home Appliances',
    url: 'https://www.bsh-group.com/',
    logo: 'images/logos/bsh.png',
    meta: 'Summer Intern · 4 months',
    description: 'Placeholder: one sentence on the team and what you worked on.',
    bullets: [
      'Placeholder: something you built, the tools you used, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%).',
    ],
    tags: ['Placeholder', 'Tech Stack'],
  },
  {
    range: 'Jan – Apr 2025',
    role: 'Student Developer',
    org: 'Rotman School of Management',
    url: 'https://www.rotman.utoronto.ca/',
    logo: 'images/logos/rotman.png',
    meta: 'Part-time · 4 months',
    description: 'Placeholder: one sentence on the team and what you worked on.',
    bullets: [
      'Placeholder: something you built, the tools you used, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%).',
    ],
    tags: ['Placeholder', 'Tech Stack'],
  },
  {
    range: 'Sep – Dec 2024',
    role: 'Full-Stack Development Intern',
    org: 'Re:Pair Genomics',
    logo: 'images/logos/repair.png',
    meta: 'Part-time Intern · 4 months',
    description: 'Placeholder: one sentence on the team and what you worked on.',
    bullets: [
      'Placeholder: something you built, the tools you used, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%).',
    ],
    tags: ['Placeholder', 'Tech Stack'],
  },
  {
    range: 'May – Aug 2023',
    role: 'Summer Analyst Intern',
    org: 'CITIC Securities',
    url: 'https://www.citics.com/',
    logo: 'images/logos/citic.png',
    meta: 'Summer Intern · 4 months',
    description: 'Placeholder: one sentence on the team and what you worked on.',
    bullets: [
      'Placeholder: something you built, the tools you used, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%).',
    ],
    tags: ['Placeholder', 'Tech Stack'],
  },
];
