/** 精选项目（大图交叠样式）。图片放在 public/images/ 下，建议 16:10。 */
export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  cover: string;
  github?: string;
  external?: string;
}

// 列表为空时，整个 Projects 区块和导航里的 Projects 都会隐藏。
// 加项目的写法示例（图片放 public/images/ 下）：
// {
//   title: 'Course Planner',
//   description: 'A web app that turns degree requirements into a term-by-term plan.',
//   tech: ['React', 'TypeScript'],
//   cover: 'images/featured-1.svg',
//   github: 'https://github.com/TheGreatCorrine/...',
//   external: 'https://...',
// },
export const featured: FeaturedProject[] = [];
