/**
 * 03 · Experience：工作以外的经历：社团、学生组织、志愿者、开源项目（比如 GSoC、Mentorship 项目）等。
 * 和 02 Work 一样点击展开；字段说明见 work.ts。最新的放最前面，想加新的就往数组里加一项。
 * TODO: 把 'Placeholder' 换成真实内容；有 logo 的话放进 public/images/logos/ 再填 logo。
 */
import type { ExperienceItem } from './types';

export const involvement: ExperienceItem[] = [
  {
    range: 'Oct 2026 – Present',
    role: 'Back End Developer',
    org: 'UofT Women in Computer Science (WiCS)',
    url: 'https://www.uoftwics.com/',
    logo: 'images/logos/wics.png',
    meta: 'Volunteer · Ongoing',
    description: 'Placeholder: one sentence on what you do here and who it helps.',
    bullets: [
      'Placeholder: something you organized or built, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. mentored 12 first-years).',
    ],
    tags: ['Placeholder', 'Skills'],
  },
  {
    range: 'May 2024 – Apr 2025',
    role: 'Student Mentor',
    org: 'Woodsworth College, University of Toronto',
    url: 'https://www.wdw.utoronto.ca/',
    logo: 'images/logos/woodsworth.png',
    meta: 'Volunteer · 1 year',
    description: 'Placeholder: one sentence on what you do here and who it helps.',
    bullets: [
      'Placeholder: something you organized or built, and the result.',
      'Placeholder: another highlight, ideally with a number (e.g. mentored 12 first-years).',
    ],
    tags: ['Placeholder', 'Skills'],
  },
];
