import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import VueRouter from 'unplugin-vue-router/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { unheadVueComposablesImports } from '@unhead/vue';

const envPrefixes = ['APP_'];
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: envPrefixes,
  plugins: [
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
        VueRouterAutoImports,
        unheadVueComposablesImports,
      ],
      dirs: [
        './src/composables/**',
        './src/stores/**',
        './src/utils/**',
      ],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    VueRouter({ /* options */ }),
    vue({
      script: {
        defineModel: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@global': path.join(__dirname, './global/dist'),
      src: path.join(__dirname, './src'),
    },
  },
});
