/** About 部分。每段是一个字符串，可以写 <a> 链接。 */
export const about = {
  paragraphs: [
    'Hi, I’m Corrine! I started in business school at Rotman, picked up a second degree in Computer Science along the way, and now work as a backend and platform engineer.',
    'I began in full-stack development, moved into edge AI, and now work on data infrastructure, a.k.a. the part of the stack that only gets noticed when it breaks.',
    'Here are a few technologies I’ve been working with recently:',
  ],
  skills: ['Python', 'Java', 'Kubernetes', 'AWS', 'React', 'PostgreSQL'],
  // 照片放在 public/images/ 下，竖版 640×725；换照片时记得改文件名，避免浏览器缓存旧图
  photo: 'images/me-portrait.jpg',
  photoAlt: 'Corrine Xiang',
  // 照片旁边的两个小气泡
  location: 'Toronto, ON',
  status: { label: 'Incoming', text: 'Software Engineer Intern · Kinaxis' },
};
