import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 仓库名是 <用户名>.github.io，所以网站在根路径 "/"。
// 如果以后改成普通仓库（比如 "portfolio"），这里要改成 '/portfolio/'。
export const BASE = '/';

export default defineConfig({
  base: BASE,
  plugins: [react()],
});
