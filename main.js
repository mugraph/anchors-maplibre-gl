import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { createPinia } from 'pinia';
import VueMaplibreGl from '@/plugins/vue-maplibre-gl/vue-maplibre-gl.esm.js';
import { GesturePlugin } from '@vueuse/gesture';
import { MotionPlugin } from '@vueuse/motion';
import directives from '@/plugins/motion/directives.js';

import '@/plugins/vue-maplibre-gl/style.css';
import 'leaflet/dist/leaflet.css';
import '@/assets/tailwind.css';

const pinia = createPinia();
const app = createApp(App);

app.use(VueMaplibreGl);
app.use(pinia);
app.use(GesturePlugin);
app.use(MotionPlugin, directives);
app.use(router);
app.mount('#app');
