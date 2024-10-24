import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { globbySync } from 'globby';
let homeHTML = globbySync('./home/*.html');
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ['index.html', 'facility.html', 'practice.html']
    },
    minify: true,
    sourcemap: false
  },
  esbuild: {
    drop: ['console', 'debugger'],
    target: 'es2015',
    legalComments: 'none'
  },
  plugins: [vue()],
  server: {
    port: 5100
  }
});
