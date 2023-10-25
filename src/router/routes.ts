import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('src/pages/Home.vue'),
  },
] satisfies RouteRecordRaw[];
