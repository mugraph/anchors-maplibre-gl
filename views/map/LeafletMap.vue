<template>
  <LMap
    ref="map"
    :zoom="baseLayer.zoom"
    :min-zoom="mapOptions.minZoom"
    :max-zoom="mapOptions.maxZoom"
    :center="[mapStore.center[1], mapStore.center[0]]"
    :options="mapOptions"
    :zoom-animation="true"
    @ready="onReady"
    :use-global-leaflet="false"
  >
    <LTileLayer
      ref="baseLayer"
      :url="baseLayer.url"
      :attribution="baseLayer.attribution"
    />
  </LMap>
</template>

<script setup lang="ts">
import { reactive, ref, onUnmounted } from 'vue';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import { useMapStore } from '../../stores/map';

const map = ref<any | null>(null);
const mapStore = useMapStore();

const baseLayer = reactive({
  zoom: 16,
  center: [53.095, 8.7707],
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
});

const mapOptions = reactive({
  zoomControl: true,
  minZoom: 1,
  maxZoom: 18,
  zoomSnap: 0.2,
  opacitySlider: false,
  flyToOptions: {
    duration: 0.6,
    easeLinearity: 0.2,
  },
});

const onReady = () => {
  mapStore.setIsReady(true);
};
onUnmounted(() => {
  mapStore.setIsReady(false);
});
</script>
