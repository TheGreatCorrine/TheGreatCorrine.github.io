/** 02 Work 和 03 Community 共用的经历格式。除了前四项，其他都可以留空，留空的部分不会显示。 */
export interface ExperienceItem {
  /** 时间，比如 'May – Aug 2025' 或 'Oct 2026 – Present' */
  range: string;
  /** 职位 */
  role: string;
  /** 公司 / 组织 */
  org: string;
  /** 官网链接。填了以后整张卡片可以点 */
  url?: string;
  /** 一两句话的描述 */
  description?: string;
  /** 要点列表（▹ 开头），可以写 <a> 链接 */
  bullets?: string[];
  /** 技能标签 */
  tags?: string[];
}
