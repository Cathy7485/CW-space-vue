import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { timeformat } from './directive/timeformat';

import App from './App.vue';
import router from './router';
import 'bootstrap';

register();

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component('LoadingComponent', Loading);

app.directive('timeformat', timeformat);
app.mount('#app');
