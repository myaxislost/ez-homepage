import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faChartLine,
  faDownload,
  faHardDrive,
  faHeadphonesAlt,
  faRotate,
  faRoute,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faChartLine,
  faHeadphonesAlt,
  faDownload,
  faRoute,
  faWindowMaximize,
  faHardDrive,
  faRotate,
);

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
