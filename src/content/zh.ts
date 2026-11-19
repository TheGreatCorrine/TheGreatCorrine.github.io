/** 中文版内容（和英文版一一对应）。 */
import type { ExperienceItem } from './types';
import type { Testimonial } from './testimonials';
import { work as workEn } from './work';
import { involvement as involvementEn } from './involvement';

export const heroZh = {
  name: 'CORRINE X.',
  title: '软件工程师',
  facts: [
    { label: '学校', value: '多伦多大学 · 2027 届' },
    { label: '专业', value: '计算机科学 + Rotman 商科' },
    { label: '实习', value: 'Kinaxis <span class="muted">（即将入职）</span> · Terminal · BSH' },
  ],
};

export const aboutZh = {
  paragraphs: [
    '你好，我是 Corrine！我在大学同时读两个差别很大的学位：商科和计算机科学，当时完全没想到自己会成为一名软件工程师。',
    '一个个人交易应用第一次把这两个领域连在了一起。之后的每一段经历都让我更深入地去“做东西”：从金融科技、全栈产品，到 AI 系统和开发者基础设施。',
    '下面是我最近常用的一些技术：',
  ],
  location: '加拿大 · 多伦多',
  status: { label: '即将入职', text: 'Kinaxis · 软件工程师实习生' },
};

const placeholderZh = {
  description: '占位文字：用一句话介绍团队和你做的事情。',
  bullets: ['占位文字：你做了什么、用了什么工具、带来了什么结果。', '占位文字：另一个亮点，最好带一个数字（比如构建时间缩短 40%）。'],
  tags: ['占位', '技术栈'],
};

const workZhFields: Partial<ExperienceItem>[] = [
  { range: '2027.1 起', role: '软件工程师实习生', meta: '全职 Co-op · 即将入职' },
  { range: '2026.1 – 2026.8', role: '平台工程实习生', meta: '全职 Co-op · 8 个月' },
  { range: '2025.5 – 2025.8', role: 'AI 工程实习生', org: '博西家电（BSH）', meta: '暑期实习 · 4 个月' },
  { range: '2025.1 – 2025.4', role: '学生开发者', org: '多伦多大学 Rotman 管理学院', meta: '兼职 · 4 个月' },
  { range: '2024.9 – 2024.12', role: '全栈开发实习生', meta: '兼职实习 · 4 个月' },
  { range: '2023.5 – 2023.8', role: '暑期分析师实习生', org: '中信证券', meta: '暑期实习 · 4 个月' },
];

const involvementZhFields: Partial<ExperienceItem>[] = [
  { range: '2026.10 – 至今', role: '后端开发', org: '多伦多大学计算机科学女性协会（WiCS）', meta: '志愿者 · 进行中' },
  { range: '2024.5 – 2025.4', role: '学生导师', org: '多伦多大学 Woodsworth 学院', meta: '志愿者 · 1 年' },
];

const merge = (en: ExperienceItem[], zh: Partial<ExperienceItem>[]): ExperienceItem[] =>
  en.map((item, i) => ({
    ...item,
    ...(item.description ? { description: placeholderZh.description } : {}),
    ...(item.bullets?.length ? { bullets: placeholderZh.bullets } : {}),
    ...(item.tags?.length ? { tags: placeholderZh.tags } : {}),
    ...zh[i],
  }));

export const workZh = merge(workEn, workZhFields);
export const involvementZh = merge(involvementEn, involvementZhFields);

export const testimonialsIntroZh = '一些和我一起学习、一起做项目、偶尔一起 debug 的人留下的话 :)';

export const testimonialsZh: Testimonial[] = [
  { type: 'quote', quote: 'Corrine 学习和理解复杂概念的能力很强，在独立负责工作时也能做出深思熟虑的决定。', name: 'Connor Giles', role: 'Terminal · 首席技术官' },
  { type: 'quote', quote: '她很好相处，沟通坦诚，也总是愿意帮团队把事情往前推进。', name: 'Shruthi Murali', role: 'Terminal · 实习生' },
  { type: 'keyword', lead: '队友们说我是一个……的人', word: '善于协作', tone: 'dark' },
  { type: 'keyword', lead: '之前的经理说我是一个……的人', word: '学得很快', tone: 'accent' },
  { type: 'quote', quote: '她是那种能带动大家一起往前走的队友，很在意细节，也一定要让最终成果是我们都引以为傲的。', name: 'Raine Yang', role: 'IBM · 实习生' },
  { type: 'quote', quote: 'Corrine 对自己的工作很有主人翁意识，能很快把想法落地，并根据真实反馈不断改进方案。', name: 'Yilun You', role: '博世 · 经理' },
];
