import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';

import { createApp } from 'vue'
import App from './App.vue'
import PriveVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './conf/routes';

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});


createApp(App)
    .use(router)
    .use(PriveVue)
    .mount('#app');
