/**
 * 02 · Work：co-op / 实习 / 工作经历，最新的放最前面。
 * 填了 url 的条目整张卡片可点击，跳到公司官网。
 * description、bullets、tags 都可以留空，留空的部分不会显示。
 */
import type { ExperienceItem } from './types';

// TODO: 每段经历可以补一句 description，或者 2–4 条 bullets，再加几个技术栈 tags
export const work: ExperienceItem[] = [
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
