<template>
  <nav
    class="flex items-center p-2 bg-indigo-200"
    :style="[{ height: navHeight + 'px' }]"
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
      <RouterLink to="leaflet">Leaflet</RouterLink>
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100">
      <RouterLink to="maplibre">Maplibre</RouterLink>
    </Button>
    <span v-if="mapStore.loadedTime" class="pl-4 text-sm">
      {{ `${mapStore.loadedTime - mapStore.time}ms` }}
    </span>
  </nav>
  <div class="flex-grow w-full">
    <RouterView />
    <BottomSheet :topOffset="navHeight">
      <ul>
        <li v-for="i in 18" :key="i">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
          rerum voluptates illum ratione porro quidem. Aliquid laudantium magnam
          placeat recusandae unde, velit nobis error eius odio minima sed!
          Porro, fugiat.
        </li>
      </ul>
    </BottomSheet>
  </div>
  <div class="fixed bottom-6 z-[1002] left-1/2 -translate-x-1/2">
    <Button
      v-motion
      :initial="{
        scale: 0,
        opacity: 0,
      }"
      :enter="{
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 6,
          mass: 0.1,
        },
      }"
      v-if="snap.active === 0 || snap.active === 1"
      @click="setActive(2)"
      type="button"
      class="text-white rounded bg-zinc-800 ring-2 ring-black/25"
      :delay="400"
    >
      Close Content
    </Button>
    <Button
      v-if="snap.active === 2 && mapStore.isReady"
      v-motion-pop-bottom
      @click="setActive(0)"
      type="button"
      class="bg-white rounded ring-2 ring-black/25"
      :style="{ transform }"
      :delay="200"
    >
      Open Content
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBottomSheetStore } from '../stores/bottomSheet';
import { useMapStore } from '../stores/map';

const mapStore = useMapStore();
const navHeight = ref(54);
const snap = useBottomSheetStore();

const setActive = (v) => {
  snap.setActive(v);
};
</script>
