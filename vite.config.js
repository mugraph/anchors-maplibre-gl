import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ['tailwind.config.cjs', 'node_modules/**'],
    },
  },
  optimizeDeps: {
    include: ['tailwind-config', 'color-palette'],
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['components'],
      dts: true,
    }),
    pluginRewriteAll(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      'color-palette': path.resolve(__dirname, './constants/color-palette.js'),
      'tailwind-config': path.resolve(__dirname, './tailwind.config.cjs'),
    },
  },
  server: {
    cors: true,
  },
});
