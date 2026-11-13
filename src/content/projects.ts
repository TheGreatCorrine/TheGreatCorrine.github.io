/**
 * 其他项目（卡片网格 + Archive 页面表格）。
 * showInProjects: false 表示只出现在 Archive 页面，不在首页卡片里显示。
 */
export interface Project {
  title: string;
  description: string;
  year: number;
  tech: string[];
  madeAt?: string;
  github?: string;
  external?: string;
  showInProjects?: boolean;
}

// TODO: 换成你的项目，最新的放最前面
export const projects: Project[] = [
  { title: 'Recipe Scaler', description: 'Paste a recipe, pick a serving size, and get converted quantities in metric.', year: 2026, tech: ['React', 'Regex'], github: 'https://github.com/TheGreatCorrine' },
  { title: 'Markdown Notes', description: 'A local-first notes app with full-text search and keyboard shortcuts.', year: 2026, tech: ['TypeScript', 'IndexedDB'], github: 'https://github.com/TheGreatCorrine', external: 'https://example.com' },
  { title: 'Grade Calculator', description: 'Works out what you need on the final to hit a target grade, with weighted components.', year: 2025, tech: ['Vue', 'Vite'], github: 'https://github.com/TheGreatCorrine' },
  { title: 'Discord Study Bot', description: 'A bot that runs group study sessions, reminders and simple leaderboards.', year: 2025, tech: ['Python', 'discord.py', 'SQLite'], madeAt: 'Club C', github: 'https://github.com/TheGreatCorrine' },
  { title: 'Color Contrast Checker', description: 'Checks palettes against WCAG contrast rules and suggests the nearest passing color.', year: 2025, tech: ['JavaScript', 'CSS'], external: 'https://example.com' },
  { title: 'Course Review Scraper', description: 'Collects public course reviews into a searchable table.', year: 2024, tech: ['Python', 'BeautifulSoup'], github: 'https://github.com/TheGreatCorrine' },
  { title: 'Pixel Art Editor', description: 'A tiny canvas editor with layers, an undo stack and PNG export.', year: 2024, tech: ['Canvas API', 'TypeScript'], github: 'https://github.com/TheGreatCorrine' },
  { title: 'Weather CLI', description: 'A command-line weather forecast with a seven-day ASCII chart.', year: 2023, tech: ['Go'], github: 'https://github.com/TheGreatCorrine' },
  { title: 'First Website', description: 'My first personal page, built with plain HTML and CSS.', year: 2022, tech: ['HTML', 'CSS'], showInProjects: false },
];
