import {createRouter, createWebHistory} from 'vue-router';
import TheFaq from './components/TheFaq.vue';
import TheFaq1 from './components/TheFaq1.vue';
import TheFaq2 from './components/TheFaq2.vue';
import TheFaq3 from './components/TheFaq3.vue';
import TheFaq4 from './components/TheFaq4.vue';
import ReconciliationService from './components/ReconciliationService.vue';
import Contact from './components/ContactInfo.vue';
import PrivacyStatement from './components/PrivacyStatement.vue';
import SearchForm from './components/SearchForm.vue';
import LookupForm from './components/LookupForm.vue';
import TerminologySources from './components/TerminologySources.vue';

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
      path: '/faq4',
      name: 'faq4',
      component: TheFaq4,
    },
    {
      path: '/sources',
      name: 'sources',
      component: TerminologySources,
    },
    {
      path: '/reconciliation',
      name: 'reconciliation',
      component: ReconciliationService,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyStatement,
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
