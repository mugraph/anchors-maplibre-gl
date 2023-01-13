<template>
  <mgl-map
    v-if="showMap"
    ref="map"
    :center="mapStore.center"
    :zoom="options.zoom"
    @map:load="onLoad"
  >
    >
    <mgl-navigation-control />
  </mgl-map>
</template>

<script setup lang="ts">
import { reactive, ref, onUnmounted } from 'vue';
import {
  MglDefaults,
  useMap,
} from '@/plugins/vue-maplibre-gl/vue-maplibre-gl.esm.js';
import { useMapStore } from '../../stores/map';

MglDefaults.style =
  'https://api.maptiler.com/maps/basic-v2-dark/style.json?key=' +
  import.meta.env.VITE_MAPTILER_KEY;

const map = useMap();
const mapStore = useMapStore();
const showMap = ref(true);

const options = reactive({
  controlPosition: ref('top-left'),
  center: [10.288107, 49.405078],
  zoom: 16,
});

function onLoad() {
  if (map.isLoaded && map.isMounted) {
    mapStore.setIsReady(true);
  }
}
onUnmounted(() => {
  mapStore.setIsReady(false);
});
</script>
