# thegreatcorrine.github.io

My personal site: https://thegreatcorrine.github.io/

Built with Vite, React, TypeScript and styled-components. Design inspired by [Brittany Chiang's v4](https://github.com/bchiang7/v4).

## Development

```bash
npm install
npm run dev
npm run build
```

Content lives in `src/content/` and `src/config.ts`. Images and logos go in `public/images/`.

## Deployment

The site is served from the `gh-pages` branch, which holds only the built `dist/` output. A GitHub Actions workflow (`.github/workflows/deploy.yml`) can deploy from `main` instead once Pages is set to use Actions.
