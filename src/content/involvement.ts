/**
 * 03 · 工作以外的经历：社团、学生组织、志愿者、开源项目（比如 GSoC、Mentorship 项目）等。
 * 填了 url 的条目整张卡片可点击，跳到组织官网；description、tags 可以留空。
 * 最新的放最前面，想加新的就往数组里加一项。
 */
export interface Involvement {
  range: string;
  role: string;
  org: string;
  url?: string;
  description?: string;
  tags?: string[];
}

export const involvement: Involvement[] = [
  {
    range: 'Oct 2026 – Present',
    role: 'Back End Developer',
    org: 'UofT Women in Computer Science (WiCS)',
    // TODO: 填 WiCS 官网链接后，这张卡片就能点了
    url: '',
    description: '',
    tags: [],
  },
  {
    range: 'May 2024 – Apr 2025',
    role: 'Student Mentor',
    org: 'Woodsworth College, University of Toronto',
    url: 'https://www.wdw.utoronto.ca/',
    description: '',
    tags: [],
  },
];
