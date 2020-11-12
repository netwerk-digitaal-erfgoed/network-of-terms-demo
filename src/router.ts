import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Faq from './components/Faq.vue';

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  },
});
