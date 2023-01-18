<template>
  <div
    v-if="mapStore.isReady && mapStore.chapters"
    :class="[markers.length > 0 ? 'block' : 'hidden']"
  >
    <SvgNumber
      v-for="(feature, index) in mapStore.chapters.features"
      :number="index + 1"
      :size="32"
      :fgColor="'white'"
      :bgColor="
        feature.properties.uuid === mapStore.featureUUID ? '#843B62' : '#555257'
      "
      :key="index"
      :ref="
        (el) => {
          svgs.push(el);
        }
      "
      class="hover:cursor-pointer"
      role="button"
      tabindex="0"
    >
    </SvgNumber>
  </div>
  <mgl-map
    v-if="showMap"
    ref="mapRef"
    :center="options.center"
    :zoom="options.zoom"
    @map:load="onLoad"
    @map:moveend="replaceRouterParams"
  >
    >
    <mgl-navigation-control />
    <mgl-geolocation-control />
    <mgl-geo-json-source source-id="path" :data="mapStore.path">
      <mgl-line-layer layer-id="path" :paint="pathPaint" />
    </mgl-geo-json-source>
    <mgl-geo-json-source source-id="bounds" :data="mapStore.chapters">
      <mgl-circle-layer
        layer-id="bounds"
        :paint="boundsPaint"
        @click="onClick"
        @mouseenter="onMouseEnter"
        @focusin="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focusout="onMouseLeave"
        @keyup.enter="onClick"
      />
    </mgl-geo-json-source>
  </mgl-map>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,
  watch,
  computed,
  onBeforeUnmount,
  onMounted,
} from 'vue';
import {
  MglDefaults,
  useMap,
} from '@/plugins/vue-maplibre-gl/vue-maplibre-gl.esm.js';
import maplibregl from 'maplibre-gl';
import { useMapStore } from '../../stores/map';
import { useRoute, useRouter } from 'vue-router';
import { nextTick } from 'vue';

MglDefaults.style =
  'https://api.maptiler.com/maps/basic-v2-dark/style.json?key=' +
  import.meta.env.VITE_MAPTILER_KEY;

const mapRef = useMap();
const svgs = ref([]);

const mapStore = useMapStore();
const showMap = ref(true);
const router = useRouter();
const route = useRoute();

const markers = [];

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

const boundsPaint = reactive({
  'circle-stroke-width': 1,
  'circle-stroke-color': '#262240',
  'circle-color': '#726f8c',
  'circle-radius': 25,
  'circle-opacity': 0.2,
  'circle-stroke-opacity': 0.15,
});

onMounted(() => {
  mapStore.fetchTours(route.params);
  wait();
  function wait() {
    if (!mapStore.tours) {
      setTimeout(wait, 100);
    } else {
      mapStore.fetchChapters(mapStore.tourUUID);
    }
  }
});

const addMarkers = () => {
  markers.length = 0;
  mapStore.chapters.features.forEach((el, index) => {
    const svgRef = svgs.value[index].svgRef;
    const lngLat = mapStore.chapters.features[index].geometry.coordinates;

    const marker = new maplibregl.Marker(svgRef)
      .setLngLat(lngLat)
      .addTo(mapRef.map);

    marker._element.addEventListener('keypress', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') onEnter(el);
    });
    // NOTE: Decide if this is intended behavior
    // marker._element.addEventListener('focusin', () => {
    //   mapStore.setIsFlyTo(false);
    //   moveMap(lngLat, null);
    // });

    markers.push(marker);
  });
};

const onLoad = () => {
  if (mapRef.isLoaded && mapRef.isMounted) {
    mapStore.setIsReady(true);
    addMarkers();
  }
};

const chapter_name = computed(() => {
  if (mapStore.chapterUUID && mapStore.chapters)
    return mapStore.chapters.features.find(
      (e) => e.uuid === mapStore.chapterUUID
    ).common_name;
  else return null;
});

// Replace route map replaceRouterParams
const replaceRouterParams = () => {
  const params = {
    chapter_name: chapter_name.value,
    zoom: Number(mapRef.map.getZoom().toFixed(1)),
    lat: Number(mapRef.map.getCenter().lat.toFixed(3)),
    lng: Number(mapRef.map.getCenter().lng.toFixed(3)),
  };
  router.replace({ params: params });
};

// If isFlyTo is true, fly to new location (and zoom)
// Otherwise set new center (and)
const moveMap = (center: number[], zoom: number | null) => {
  if (mapStore.isFlyTo === true) flyTo(center, zoom);
  else {
    const z =
      zoom === null
        ? mapRef.map.getZoom()
          ? Number(mapRef.map.getZoom().toFixed(1))
          : options.zoom
        : zoom;
    mapRef.map.setCenter(center);
    mapRef.map.setZoom(z);
    mapStore.setIsFlyTo(true);
  }
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
  mapStore.setFeatureUUID(e.features[0].properties.uuid);
  // HACK: Chapter UUID is fetched from API based on properties uuid
  mapStore.setChapterUUID(e.features[0].properties.uuid);
  const center = e.features[0].geometry.coordinates.slice();
  moveMap(center, null);
};

const onEnter = (e) => {
  mapStore.setFeatureUUID(e.properties.uuid);
  // HACK: Chapter UUID is fetched from API based on properties uuid
  mapStore.setChapterUUID(e.properties.uuid);
  const center = e.geometry.coordinates.slice();
  moveMap(center, null);
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
      if (mapStore.isReady)
        if (
          Number(v.lng) !== Number(mapRef.map.getCenter().lng.toFixed(3)) ||
          Number(v.lat) !== Number(mapRef.map.getCenter().lat.toFixed(3))
        )
          moveMap([Number(v.lng), Number(v.lat)], Number(v.zoom));
    });
  }
);

watch(
  () => mapStore.tourUUID,
  (v) => {
    if (v === null) {
      console.log('tour id:', mapStore.tourUUID);
    }
  }
);

watch(
  () => mapStore.chapters,
  (v, old) => {
    if (old !== null)
      nextTick(() => {
        addMarkers();
      });
  }
);

watch(
  () => mapStore.chapterUUID,
  (v) => {
    replaceRouterParams();
  }
);

onBeforeUnmount(() => {
  mapStore.setIsReady(false);
});
</script>
