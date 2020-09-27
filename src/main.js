import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { router } from './router';
import * as en from './locales/en.json';
import * as nl from './locales/nl.json';
import App from './App.vue';
import './index.css';
const i18n = createI18n({
    locale: 'nl',
    messages: {
        en,
        nl
    }
});
const app = createApp(App);
app.use(i18n);
app.use(router);
router.isReady().then(() => app.mount('#app'));
