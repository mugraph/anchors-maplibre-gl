import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home.vue';
import MapLibreMap from '@/views/map/MapLibreMap.vue';
import LeafletMap from '@/views/map/LeafletMap.vue';
import MapTest from '@/views/map/MapTest.vue';

import { useMapStore } from '../stores/map';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'maplibre',
        component: MapLibreMap,
      },
      {
        path: 'leaflet',
        component: LeafletMap,
      },
      {
        path: 'maptest',
        component: MapTest,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  const mapStore = useMapStore();
  mapStore.resetTime();
  return true;
});

export default router;
