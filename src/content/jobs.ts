/** 02 · 工作 / co-op / 实习经历，最新的放最前面。bullets 里可以写 <a> 链接。 */
export interface Job {
  /** Tab 上显示的短名字（手机端每个 Tab 宽 120px，尽量短） */
  tab: string;
  company: string;
  title: string;
  url?: string;
  range: string;
  bullets: string[];
}

// TODO: 每段经历在 bullets 里补 2–4 条你做了什么、用了什么、带来了什么结果（空着就不显示）
export const jobs: Job[] = [
  {
    tab: 'Terminal',
    company: 'Terminal',
    title: 'Platform Engineer Intern',
    range: 'Jan – Aug 2026',
    bullets: [],
  },
  {
    tab: 'BSH',
    company: 'BSH Home Appliances',
    title: 'AI Engineer Intern',
    url: 'https://www.bsh-group.com/',
    range: 'May – Aug 2025',
    bullets: [],
  },
  {
    tab: 'Rotman',
    company: 'Rotman School of Management',
    title: 'Student Developer',
    url: 'https://www.rotman.utoronto.ca/',
    range: 'Jan – Apr 2025',
    bullets: [],
  },
  {
    tab: 'Re:Pair',
    company: 'Re:Pair Genomics',
    title: 'Full-Stack Development Intern',
    range: 'Sep – Dec 2024',
    bullets: [],
  },
  {
    tab: 'CITIC',
    company: 'CITIC Securities',
    title: 'Summer Analyst Intern',
    url: 'https://www.citics.com/',
    range: 'May – Aug 2023',
    bullets: [],
  },
];
