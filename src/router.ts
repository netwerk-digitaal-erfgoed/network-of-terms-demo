import {createRouter, createWebHistory} from 'vue-router';
import TheFaq from './components/TheFaq.vue';
import TheFaq1 from './components/TheFaq1.vue';
import TheFaq2 from './components/TheFaq2.vue';
import TheFaq3 from './components/TheFaq3.vue';
import Recon from './components/Recon.vue';
import Contact from './components/Contact.vue';
import Privacy from './components/Privacy.vue';
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
    {
      path: '/faq1',
      name: 'faq1',
      component: TheFaq1,
    },
    {
      path: '/faq2',
      name: 'faq2',
      component: TheFaq2,
    },
    {
      path: '/faq3',
      name: 'faq3',
      component: TheFaq3,
    },
    {
      path: '/reconciliation',
      name: 'reconciliation',
      component: Recon,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
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
