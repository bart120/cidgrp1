import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';

import { createApp } from 'vue'
import App from './App.vue'
import PriveVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './conf/routes';
import { createPinia } from 'pinia'

import langFR from './conf/cid.fr.json';
import langEN from './conf/cid.en.json';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    messages:{
        fr: langFR,
        en: langEN
    },
    locale: 'en',//navigator.language,//'fr'
    fallbackLocale: 'fr'
});

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(PriveVue)
    .mount('#app');
