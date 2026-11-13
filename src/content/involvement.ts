/**
 * 03 · 工作以外的经历（社团、学生组织、志愿者等）。
 * 整张卡片可点击，跳到 url（组织官网）。最新的放最前面。
 */
export interface Involvement {
  range: string;
  role: string;
  org: string;
  url: string;
  description: string;
  tags: string[];
}

// TODO: 补充真实的职位、时间、描述、官网链接
export const involvement: Involvement[] = [
  {
    range: 'TODO – Present',
    role: 'TODO: Your Role',
    org: 'Women in Computer Science (WiCS)',
    url: 'https://example.com',
    description: 'TODO: one or two sentences on what you organized, who it served, and what came of it.',
    tags: ['Leadership', 'Event Planning', 'Community'],
  },
  {
    range: 'TODO',
    role: 'Mentorship Program Coordinator',
    org: 'Woodsworth College',
    url: 'https://www.wdw.utoronto.ca/',
    description: 'TODO: one or two sentences on the program you coordinated, how many students it reached, and what you changed.',
    tags: ['Mentorship', 'Program Coordination', 'Student Life'],
  },
];
