import {createApp} from 'vue';
import {createI18n} from 'vue-i18n';
import {router} from './router';
import * as en from './locales/en.json';
import * as nl from './locales/nl.json';

import App from './App.vue';
import './index.css';

// Initialize Matomo analytics (production only)
if (import.meta.env.PROD) {
  const _paq = window._paq = window._paq || [];
  const u = '//matomo.netwerkdigitaalerfgoed.nl/';
  _paq.push(['setTrackerUrl', u + 'matomo.php']);
  _paq.push(['setSiteId', '3']);
  _paq.push(['enableLinkTracking']);
  _paq.push(['trackPageView']);
  const script = document.createElement('script');
  script.async = true;
  script.src = u + 'matomo.js';
  document.head.appendChild(script);
}

export const i18n = createI18n({
  locale: 'nl',
  messages: {
    en,
    nl,
  },
});

const app = createApp(App);
app.use(i18n);
app.use(router);

router.isReady().then(() => app.mount('#app'));
