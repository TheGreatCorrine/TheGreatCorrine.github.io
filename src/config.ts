/**
 * 站点设置：名字、邮箱、社交链接、导航。
 */
export const siteConfig = {
  name: 'Corrine Xiang',
  shortName: 'Corrine',
  email: 'corrine.xiang@mail.utoronto.ca',
  // 放在 public/ 下的简历文件
  resume: 'resume.pdf',
};

export type SocialName = 'GitHub' | 'Linkedin' | 'Instagram' | 'Twitter' | 'Codepen';

export const socialMedia: { name: SocialName; url: string }[] = [
  { name: 'GitHub', url: 'https://github.com/TheGreatCorrine' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/yining-xiang/' },
];

export const navLinks = [
  { name: 'About', url: '/#about' },
  { name: 'Experience', url: '/#jobs' },
  { name: 'Involvement', url: '/#involvement' },
  { name: 'Projects', url: '/#projects' },
  { name: 'Kind Words', url: '/#testimonials' },
];

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});
