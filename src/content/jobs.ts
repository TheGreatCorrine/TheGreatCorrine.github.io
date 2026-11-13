/** 工作 / 实习经历，最新的放最前面。bullets 里可以写 <a> 链接。 */
export interface Job {
  company: string;
  title: string;
  url: string;
  range: string;
  bullets: string[];
}

// TODO: 换成你的真实经历
export const jobs: Job[] = [
  {
    company: 'Company A',
    title: 'Software Engineering Intern',
    url: 'https://example.com',
    range: 'May – Aug 2026',
    bullets: [
      'Built and shipped features for a customer-facing web app used by thousands of users.',
      'Wrote reusable, accessible UI components shared across three product teams.',
      'Worked with designers and engineers to turn Figma specs into production code.',
    ],
  },
  {
    company: 'Lab B',
    title: 'Research Assistant',
    url: 'https://example.com',
    range: 'Sep 2025 – Apr 2026',
    bullets: [
      'Built an internal dashboard for exploring experiment results.',
      'Cleaned, documented and analyzed a dataset of 20k survey responses.',
    ],
  },
  {
    company: 'Club C',
    title: 'Web Developer',
    url: 'https://example.com',
    range: 'Jan – Aug 2025',
    bullets: [
      'Rebuilt the club website and set up automatic deploys.',
      'Mentored new members through their first pull requests.',
    ],
  },
];
