<template>
  <mgl-map
    v-if="showMap"
    ref="mapRef"
    :center="options.center"
    :zoom="options.zoom"
    @map:load="onLoad"
    @map:moveend="onMoveEnd"
  >
    >
    <mgl-navigation-control />
    <mgl-geolocation-control />
    <mgl-geo-json-source source-id="path" :data="data.path">
      <mgl-line-layer layer-id="path" :paint="pathPaint" />
    </mgl-geo-json-source>
    <mgl-geo-json-source source-id="scenes" :data="data.scenes">
      <mgl-circle-layer
        layer-id="scenes"
        :paint="circlePaint"
        @click="onClick"
        @mouseenter="onMouseEnter"
        @focusin="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focusout="onMouseLeave"
      />
    </mgl-geo-json-source>
  </mgl-map>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onUnmounted } from 'vue';
import {
  MglDefaults,
  useMap,
} from '@/plugins/vue-maplibre-gl/vue-maplibre-gl.esm.js';
import maplibregl from 'maplibre-gl';
import { useMapStore } from '../../stores/map';
import * as path from '../../assets/path.json';
import * as scenes from '../../assets/scenes.json';
import { useRoute, useRouter } from 'vue-router';
import { nextTick } from 'vue';

MglDefaults.style =
  'https://api.maptiler.com/maps/basic-v2-dark/style.json?key=' +
  import.meta.env.VITE_MAPTILER_KEY;

const mapRef = useMap();
const mapStore = useMapStore();
const showMap = ref(true);
const router = useRouter();
const route = useRoute();

const data = { path, scenes };

const options = reactive({
  controlPosition: ref('top-left'),
  center: route.params
    ? [route.params.lng, route.params.lat]
    : [10.288107, 49.405078],
  zoom: 14,
});

const pathPaint = reactive({
  'line-color': 'lightblue',
  'line-width': 4,
});

const circlePaint = reactive({
  'circle-stroke-width': 1,
  'circle-stroke-color': 'black',
  'circle-color': 'red',
  'circle-radius': 10,
  'circle-opacity': 0.5,
  'circle-stroke-opacity': 0.8,
});

const addMarkers = () => {
  console.log('ready');

  data.scenes.features.forEach(function (marker) {
    console.log(marker);

    const el = document.createElement('div');
    el.className = 'marker';
    el.style.background = 'green';
    el.style.width = 12 + 'px';
    el.style.height = 12 + 'px';

    // add marker to map
    new maplibregl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(mapRef.map);
  });
};

const onLoad = () => {
  if (mapRef.isLoaded && mapRef.isMounted) {
    addMarkers();
    mapStore.setIsReady(true);
  }
};

const onMoveEnd = () => {
  const params = {
    zoom: Number(mapRef.map.getZoom().toFixed(1)),
    lat: Number(mapRef.map.getCenter().lat.toFixed(3)),
    lng: Number(mapRef.map.getCenter().lng.toFixed(3)),
  };
  router.replace({ params: params });
};

const flyTo = (center: number[], zoom: number | null) => {
  mapRef.map.flyTo({
    center: center,
    zoom:
      zoom === null
        ? mapRef.map.getZoom()
          ? Number(mapRef.map.getZoom().toFixed(1))
          : options.zoom
        : zoom,
    speed: 0.8,
    curve: 1.25,
    essential: true,
    easing(t) {
      return t;
    },
  });
};

const onClick = (e) => {
  const center = e.features[0].geometry.coordinates.slice();
  flyTo(center, null);
};

const onMouseEnter = () => {
  mapRef.map.getCanvas().style.cursor = 'pointer';
};

const onMouseLeave = () => {
  mapRef.map.getCanvas().style.cursor = '';
};

watch(
  () => route.params,
  (v) => {
    nextTick(() => {
      if (
        Number(v.lng) !== Number(mapRef.map.getCenter().lng.toFixed(3)) ||
        Number(v.lat) !== Number(mapRef.map.getCenter().lat.toFixed(3))
      )
        flyTo([Number(v.lng), Number(v.lat)], Number(v.zoom));
    });
  }
);

onUnmounted(() => {
  mapStore.setIsReady(false);
});
</script>
