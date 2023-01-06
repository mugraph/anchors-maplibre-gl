<template>
  <mgl-map
    v-if="showMap"
    ref="map"
    :center="center"
    :zoom="zoom"
    @map:load="onLoad"
  >
    >
    <mgl-navigation-control />
  </mgl-map>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, watch } from 'vue';
import {
  MglDefaults,
  MglEvent,
  useMap,
} from '@/plugins/vue-maplibre-gl/vue-maplibre-gl.esm.js';

MglDefaults.style =
  'https://api.maptiler.com/maps/streets/style.json?key=8CBtPqg51QlgN6ngqBZ7';
console.log('MglDefaults', MglDefaults);

export default defineComponent({
  name: 'SimpleMap',
  emits: ['onMapLoaded', 'onMapMounted', 'onMapLoadedAndMounted'],
  setup(props, { emit }) {
    const map = useMap(),
      showCustomControl = ref(false);

    watch(
      toRef(map, 'isLoaded'),
      () => {
        console.log('IS LOADED', map);
        if (map.isLoaded && map.isMounted) {
          emit('onMapLoadedAndMounted', true);
        } else if (map.isLoaded) {
          emit('onMapLoaded', true);
        }
      },
      {
        immediate: true,
      }
    );
    watch(
      toRef(map, 'isMounted'),
      (v) => {
        console.log('IS MOUNTED', v);
        if (v === true) {
          emit('onMapMounted', true);
        }
      },
      {
        immediate: true,
      }
    );

    return {
      showCustomControl,
      controlPosition: ref('top-left'),
      showMap: ref(true),
      center: [10.288107, 49.405078],
      zoom: 3,
    };
  },
  methods: {
    onLoad(e: MglEvent) {
      this.loaded++;
      console.log(e.type, e);
    },
  },
});
</script>
