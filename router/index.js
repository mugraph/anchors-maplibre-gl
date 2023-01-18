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
        path: ':tour_name?/:chapter_name?/:zoom/:lat/:lng',
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

router.beforeEach(async (to) => {
  const mapStore = useMapStore();
  mapStore.resetTime();
  // HACK: find a better way
  // to.query.deferFlyTo is of type 'string'
  if (to.query.deferFlyTo === 'true') {
    mapStore.setIsFlyTo(false);
  }
  return true;
});

export default router;
