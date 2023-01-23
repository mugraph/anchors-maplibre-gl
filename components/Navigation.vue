<template>
  <nav
    v-if="route.path === '/'"
    class="flex items-center p-2 bg-indigo-200"
    :style="[{ 'min-height': navHeight + 'px' }]"
  >
    <Button type="button" class="mx-1 bg-zinc-100" @click="setActive(0)">
      One
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100" @click="setActive(1)">
      Two
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100" @click="setActive(2)">
      Close
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100">
      <RouterLink :to="{ name: 'leaflet' }">Leaflet</RouterLink>
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100">
      <RouterLink
        :to="{
          name: 'maplibre',
          params: { tour_name: 'nantes', zoom: 14, lat: 47.218, lng: -1.553 },
        }"
      >
        Maplibre
      </RouterLink>
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100">
      <RouterLink :to="{ name: 'svgnumbers' }">SVG Numbers</RouterLink>
    </Button>
    <span v-if="mapStore.loadedTime" class="pl-4 text-sm">
      {{ `${mapStore.loadedTime - mapStore.time}ms` }}
    </span>
    <span>{{ mapStore.chapterId }}</span>
    <div v-if="route.name === 'svgnumbers'">
      <span class="px-2">Length:</span>
      <input class="w-24 px-2 w-fit" v-model="arrLength.count" />
      <Button
        type="button"
        class="mx-1 bg-yellow-100"
        @click="arrLength.count++"
        @mousedown="onMouseDown(countUp, arrLength)"
        @mouseup="onMouseUp"
      >
        +
      </Button>
      <Button
        type="button"
        class="mx-1 bg-yellow-100"
        @click="arrLength.count--"
        @mousedown="onMouseDown(countDown, arrLength)"
        @mouseup="onMouseUp"
      >
        -
      </Button>
      <span class="px-2">Size:</span>
      <input class="w-24 px-2 w-fit" v-model="numSize.count" />
      <Button
        type="button"
        class="mx-1 bg-yellow-100"
        @click="numSize.count++"
        @mousedown="onMouseDown(countUp, numSize)"
        @mouseup="onMouseUp"
      >
        +
      </Button>
      <Button
        type="button"
        class="mx-1 bg-yellow-100"
        @click="numSize.count--"
        @mousedown="onMouseDown(countDown, numSize)"
        @mouseup="onMouseUp"
      >
        -
      </Button>
    </div>
  </nav>
  <nav
    v-if="route.name === 'maplibre' && mapStore.tours"
    class="fixed flex items-center mx-1 top-0 z-[1002]"
    :style="[{ 'min-height': navHeight + 'px' }]"
  >
    <RouterLink
      v-for="tour in mapStore.tours.features"
      :key="tour.id"
      class="bg-white rounded ring-2 ring-black/25 px-3 py-1 mx-1"
      :to="{
        name: 'maplibre',
        params: {
          tour_name: tour.properties.common_name,
          zoom: 14,
          lat: Number((tour.geometry as GeoJSON.Point).coordinates[1].toFixed(3)),
          lng: Number((tour.geometry as GeoJSON.Point).coordinates[0].toFixed(3)),
        },
        query: {
          id: tour.id,
        },
      }"
    >
      {{ tour.properties.title }}
    </RouterLink>
    <Button
      class="bg-white rounded ring-2 ring-black/25 px-3 py-1 mx-1"
      @click="increaseProgress()"
      >Progress +</Button
    >
  </nav>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useBottomSheetStore } from '../stores/bottomSheet';
import { useMapStore } from '../stores/map';
import { useRoute } from 'vue-router';

defineProps({ navHeight: { type: Number, default: 54 } });

const mapStore = useMapStore();
const snap = useBottomSheetStore();
const route = useRoute();

const arrLength = reactive({
  count: 24,
});
const numSize = reactive({
  count: 24,
});

const interval = ref();

const setActive = (v) => {
  snap.setActive(v);
};

const countUp = (val) => {
  val.count++;
};

const countDown = (val) => {
  val.count--;
};

const onMouseDown = (callback, val) => {
  interval.value = setInterval(function () {
    callback(val);
  }, 100);
};

const increaseProgress = () => {
  mapStore.setProgress(mapStore.progress + 1);
};

const onMouseUp = () => {
  clearInterval(interval.value);
};
</script>
