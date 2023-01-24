<template>
  <div
    v-if="mapStore.isReady && mapStore.chapters"
    :class="[markers.length > 0 ? 'block' : 'hidden']"
  >
    <SvgNumber
      v-for="(feature, index) in mapStore.chapters.features"
      :id="feature.id"
      :number="index + 1"
      :size="32"
      :fg-color="
        feature.id === mapStore.chapterId ? colors.zinc[900] : colors.zinc[900]
      "
      :bg-color="
        feature.id === mapStore.chapterId ? colors.one.DEFAULT : colors.zinc[50]
      "
      :key="svgKey + index"
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
    @map:click="onMapclick"
  >
    <mgl-raster-source
      source-id="raster-tiles"
      :tiles="tiles"
      :tile-size="256"
      scheme="tms"
    >
      <mgl-raster-layer
        layer-id="raster"
        source="raster-tiles"
        :minzoom="0"
        :maxzoom="22"
        :paint="{ 'raster-opacity': 0.4 }"
      />
    </mgl-raster-source>
    <mgl-navigation-control />
    <mgl-geolocation-control />
    <mgl-geo-json-source source-id="path" :data="mapStore.path">
      <mgl-line-layer layer-id="path" :paint="pathPaint" />
    </mgl-geo-json-source>
    <mgl-geo-json-source
      source-id="bounds"
      :data="mapStore.chapters"
      promote-id="id"
    >
      <mgl-circle-layer
        layer-id="bounds"
        :paint="boundsPaint"
        @click="onClick"
        @keyup.enter="onClick"
        @mouseenter="onMouseEnter"
        @focusin="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focusout="onMouseLeave"
      />
    </mgl-geo-json-source>
  </mgl-map>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onBeforeUnmount, onMounted } from 'vue';
import {
  MglDefaults,
  useMap,
} from '@/plugins/vue-maplibre-gl/vue-maplibre-gl.esm.js';
import maplibregl from 'maplibre-gl';
import { MapLibreOptions } from '@/types/MapLibreOptions';
import { useMapStore } from '../../stores/map';
import { useRoute, useRouter } from 'vue-router';
import { nextTick } from 'vue';
import colors from 'color-palette';
import { useBottomSheetStore } from '../../stores/bottomSheet';

MglDefaults.style =
  'https://api.maptiler.com/maps/basic-v2-dark/style.json?key=' +
  import.meta.env.VITE_MAPTILER_KEY;

const mapRef = useMap();
const svgs = ref([]);
const svgKey = ref(0);

const mapStore = useMapStore();
const snap = useBottomSheetStore();

const showMap = ref(true);
const router = useRouter();
const route = useRoute();

const markers = [];

const options: MapLibreOptions = reactive({
  center: route.params
    ? [Number(route.params.lng), Number(route.params.lat)]
    : [10.288107, 49.405078],
  zoom: route.params ? Number(route.params.zoom) : 14,
});

const tiles = ref(['/tiles/{z}/{x}/{y}.png']);

const pathPaint = reactive({
  'line-color': 'lightblue',
  'line-width': 4,
});

const boundsPaint = reactive({
  'circle-color': '#726f8c',
  'circle-opacity': 0.2,
  'circle-radius': 32,
  'circle-stroke-color': '#262240',
  'circle-stroke-opacity': 0.01,
  'circle-stroke-width': 1,
});

onMounted(() => {
  load();
  async function load() {
    await mapStore.fetchTours(route.params);
    await mapStore.fetchSingleTour(mapStore.tourId);
    moveMap();
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
    markers.push(marker);
  });
};

const onLoad = () => {
  if (mapRef.isLoaded && mapRef.isMounted) {
    mapStore.setIsReady(true);
    addMarkers();
  }
};
const onMapclick = (e) => {
  console.log(JSON.stringify([e.event.lngLat.lng, e.event.lngLat.lat]));
};

// Replace route map replaceRouterParams
const replaceRouterParams = () => {
  const params = {
    lat: Number(mapRef.map.getCenter().lat.toFixed(3)),
    lng: Number(mapRef.map.getCenter().lng.toFixed(3)),
    zoom: Number(mapRef.map.getZoom().toFixed(1)),
  };
  router.replace({ params: params });
};

// Fit bounding box or set new center (and)
const moveMap = () => {
  if (mapStore.tour.bbox) {
    mapRef.map.fitBounds(mapStore.tour.bbox, { animate: true, padding: 60 });
  }
};

const easeTo = (center: number[], zoom: number | null) => {
  mapRef.map.easeTo({
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
    padding: { bottom: snap.currentOffset },
    easing(t) {
      return t;
    },
  });
};

const onClick = (e) => {
  mapStore.setChapterId(e.features[0].properties.id);
};

const onEnter = (e) => {
  mapStore.setChapterId(e.properties.id);
};

const onMouseEnter = () => {
  mapRef.map.getCanvas().style.cursor = 'pointer';
};

const onMouseLeave = () => {
  mapRef.map.getCanvas().style.cursor = '';
};

const forceRerender = () => {
  svgs.value.length = 0;
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
          moveMap();
    });
  }
);

watch(
  () => mapStore.chapters,
  (v, old) => {
    // Force SVG rerender if number of chapters changes
    if (old && v.features.length !== old.features.length) {
      forceRerender();
    }
    if (old !== null) {
      nextTick(() => {
        addMarkers();
      });
    }
  }
);

watch(
  () => mapStore.chapterId,
  () => {
    replaceRouterParams();
    const newCenter = mapStore.chapters.features
      .find((e) => e.id === mapStore.chapterId)
      .geometry.coordinates.slice();
    easeTo(newCenter, null);
  }
);

watch(
  () => snap.currentOffset,
  () => {
    if (mapStore.chapters?.features && mapStore.chapterId) {
      const newCenter = mapStore.chapters.features
        .find((e) => e.id === mapStore.chapterId)
        .geometry.coordinates.slice();
      easeTo(newCenter, null);
    }
  }
);

onBeforeUnmount(() => {
  mapStore.setIsReady(false);
});
</script>
