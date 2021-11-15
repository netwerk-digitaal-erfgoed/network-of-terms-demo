import {createRouter, createWebHistory} from 'vue-router';
import TheFaq from './components/TheFaq.vue';
import SearchForm from './components/SearchForm.vue';
import LookupForm from './components/LookupForm.vue';

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchForm,
    },
    {
      path: '/lookup',
      name: 'lookup',
      component: LookupForm,
    },
    {
      path: '/faq',
      name: 'faq',
      component: TheFaq,
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
