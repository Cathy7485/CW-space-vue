import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';

import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { timeformat } from './directive/timeformat';

import App from './App.vue';
import router from './router';

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

register();

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component('DatePicker', DatePicker);
app.component('LoadingComponent', Loading);
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.directive('timeformat', timeformat);
app.mount('#app');
