/**
 * 05 · 别人对你的评价。
 * type: 'quote' 是评价卡片；'keyword' 是大字关键词卡片（tone 控制颜色）。
 * 头像先用名字首字母；以后有照片可以加 photo 字段（放 public/images/ 下）。
 */
export type Testimonial =
  | { type: 'quote'; quote: string; name: string; role: string; photo?: string }
  | { type: 'keyword'; lead: string; word: string; tone: 'dark' | 'accent' };

export const testimonialsIntro =
  'Notes from people I’ve learned from, built with, and occasionally debugged things with. :)';

export const testimonials: Testimonial[] = [
  {
    type: 'quote',
    quote:
      'Corrine has a strong ability to learn and understand complex concepts, and demonstrates thoughtful decision-making while leading independent work.',
    name: 'Connor Giles',
    role: 'CTO, Terminal',
  },
  {
    type: 'quote',
    quote:
      'She is easy to work with, communicates openly, and is always willing to help the team move things forward.',
    name: 'Shruthi Murali',
    role: 'Intern, Terminal',
  },
  { type: 'keyword', lead: 'My teammates describe me as someone who…', word: 'Collaborate', tone: 'dark' },
  { type: 'keyword', lead: 'My previous manager described me as someone who…', word: 'Learn fast', tone: 'accent' },
  {
    type: 'quote',
    quote:
      'She is the kind of teammate who keeps everyone moving, cares about the details, and makes sure the final work is something we’re proud of.',
    name: 'Raine Yang',
    role: 'Intern, IBM',
  },
  {
    type: 'quote',
    quote:
      'Corrine takes ownership of her work, moves quickly from ideas to implementation, and keeps improving the solution based on real-world feedback.',
    name: 'Yilun You',
    role: 'Manager, Bosch',
  },
];
