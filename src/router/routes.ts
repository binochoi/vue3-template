import { RouteRecordRaw } from 'vue-router/auto';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('src/pages/Home.vue'),
  },
] satisfies RouteRecordRaw[];
