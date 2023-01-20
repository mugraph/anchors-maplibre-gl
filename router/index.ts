import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home.vue';
import MapLibreMap from '@/views/map/MapLibreMap.vue';
import LeafletMap from '@/views/map/LeafletMap.vue';
import MapTest from '@/views/map/MapTest.vue';
import SvgNumberGrid from '@/views/SvgNumberGrid.vue';

import { useMapStore } from '../stores/map';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: ':tour_name?/:zoom/:lat/:lng',
        name: 'maplibre',
        component: MapLibreMap,
      },
      {
        path: 'leaflet',
        name: 'leaflet',
        component: LeafletMap,
      },
      {
        path: 'maptest',
        name: 'maptest',
        component: MapTest,
      },
      {
        path: 'svgnumbers',
        name: 'svgnumbers',
        component: SvgNumberGrid,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const mapStore = useMapStore();
  if (to.query.id) {
    mapStore.setTourId(to.query.id);
    await mapStore.fetchSingleTour(to.query.id);
  }
  mapStore.resetTime();
  return true;
});

export default router;
