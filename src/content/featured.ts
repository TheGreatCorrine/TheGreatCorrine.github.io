/** 精选项目（大图交叠样式）。图片放在 public/images/ 下，建议 16:10。 */
export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  cover: string;
  github?: string;
  external?: string;
}

// TODO: 换成你的项目
export const featured: FeaturedProject[] = [
  {
    title: 'Course Planner',
    description:
      'A web app that turns degree requirements into a term-by-term plan, flags prerequisite conflicts, and exports the schedule to your calendar.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vite'],
    cover: 'images/featured-1.svg',
    github: 'https://github.com/TheGreatCorrine',
    external: 'https://example.com',
  },
  {
    title: 'Transit Delay Map',
    description:
      'An interactive map of subway delays by station and hour, built from open city data and updated nightly.',
    tech: ['D3.js', 'Python', 'Pandas', 'GitHub Actions'],
    cover: 'images/featured-2.svg',
    github: 'https://github.com/TheGreatCorrine',
  },
  {
    title: 'Study Timer',
    description:
      'A minimal focus timer browser extension that tracks sessions and shows a weekly summary of where your time went.',
    tech: ['TypeScript', 'Chrome Extensions API', 'Chart.js'],
    cover: 'images/featured-3.svg',
    github: 'https://github.com/TheGreatCorrine',
    external: 'https://example.com',
  },
];
