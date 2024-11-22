import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';
import { timeformat } from './directive/timeformat';
import App from './App.vue';
import router from './router';
import 'bootstrap';

register();

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.directive('timeformat', timeformat);
app.mount('#app');
