import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
// import MapTest from '@/views/MapTest.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/maptest',
  //   name: 'MapTest',
  //   component: MapTest,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
