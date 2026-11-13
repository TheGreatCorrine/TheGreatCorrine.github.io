# thegreatcorrine.github.io

我的个人网站：https://thegreatcorrine.github.io/

布局参照 [Brittany Chiang 的 v4 网站](https://github.com/bchiang7/v4)（页脚已署名），配色改成了暖白色系。
技术栈：Vite + React + TypeScript + styled-components，纯静态，部署在 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # 打开 http://localhost:5173
npm run build    # 打包到 dist/
```

## 改内容

所有文字都在 `src/content/` 和 `src/config.ts`，搜索 `TODO` 就能找到要改的地方。

| 想改的 | 文件 |
|---|---|
| 名字、邮箱、社交链接、导航 | `src/config.ts` |
| 开场介绍 | `src/content/hero.ts` |
| About 文字和技能 | `src/content/about.ts` |
| 02 Work Experience（co-op / 实习） | `src/content/work.ts` |
| 03 Community & Open Source（社团、GSoC 等） | `src/content/involvement.ts` |
| 02、03 的区块标题 | `src/pages/Home.tsx` |
| 04 精选项目 | `src/content/featured.ts` |
| 05 评价 | `src/content/testimonials.ts` |
| 页脚（邮箱、Let’s Connect、Available for work） | `src/components/Footer.tsx` |
| 颜色、字体 | `src/styles/variables.ts` |
| Logo | `src/components/icons/index.tsx` 里的 `IconLogo`、`IconLoader`，以及 `public/favicon.svg` |

图片和简历放在 `public/` 下：

- `public/images/me.svg` → 换成你的照片（比如 `me.jpg`，然后改 `about.ts` 里的 `photo`）
- `public/images/featured-*.svg` → 项目截图，建议 16:10
- `public/resume.pdf` → 你的简历

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布（见 `.github/workflows/deploy.yml`）。

第一次需要在仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。

`npm run build` 会把 `index.html` 复制成 `404.html`，这样打开不存在的地址时会显示网站自己的 404 页面。

账号的 Actions 被锁住期间，网站从 `gh-pages` 分支发布（Settings → Pages → Deploy from a branch → `gh-pages`）。这个分支只放 `npm run build` 生成的 `dist/` 内容，**不要合并进 `main`**。
