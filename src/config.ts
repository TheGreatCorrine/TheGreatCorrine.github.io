/**
 * 站点设置：名字、邮箱、社交链接、导航。
 * TODO: 把下面标了 TODO 的地方换成你自己的信息。
 */
export const siteConfig = {
  name: 'Corrine',
  title: 'Corrine',
  // TODO: 换成你想公开的邮箱
  email: 'hello@example.com',
  // 放在 public/ 下的简历文件
  resume: 'resume.pdf',
};

export type SocialName = 'GitHub' | 'Linkedin' | 'Instagram' | 'Twitter' | 'Codepen';

export const socialMedia: { name: SocialName; url: string }[] = [
  { name: 'GitHub', url: 'https://github.com/TheGreatCorrine' },
  // TODO: 换成你的 LinkedIn，或者删掉这一行
  { name: 'Linkedin', url: 'https://www.linkedin.com/' },
  // TODO: 不需要的社交账号直接删掉
  { name: 'Instagram', url: 'https://www.instagram.com/' },
];

export const navLinks = [
  { name: 'About', url: '/#about' },
  { name: 'Experience', url: '/#jobs' },
  { name: 'Work', url: '/#projects' },
  { name: 'Contact', url: '/#contact' },
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
