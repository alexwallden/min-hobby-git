import Home from '../components/Home.vue';
import LiveFootage from '../components/LiveFootage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/live-footage', name: 'Live footage', component: () => import('../components/LiveFootage.vue') },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
