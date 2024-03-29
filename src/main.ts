import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVfm } from 'vue-final-modal';
import { createHead } from '@unhead/vue';
import { Icon } from '@iconify/vue';
import App from './App.vue';
import router from './router';
import './main.scss';
import 'vue-final-modal/style.css';

const app = createApp(App)
  .use(createPinia())
  .use(createVfm())
  .use(createHead)
  .use(router)
  .component('Icon', Icon);

router
  .isReady()
  .then(() => app.mount('#app'));
