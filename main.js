import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import VueMaplibreGl from '@/plugins/vue-maplibre-gl/vue-maplibre-gl.esm.js';
import { GesturePlugin } from '@vueuse/gesture';
import { MotionPlugin } from '@vueuse/motion';

import '@/plugins/vue-maplibre-gl/style.css';
import '@/assets/tailwind.css';

const app = createApp(App);
app.use(VueMaplibreGl);
app.use(createPinia());
app.use(GesturePlugin);
app.use(MotionPlugin);
app.use(router);
app.mount('#app');
