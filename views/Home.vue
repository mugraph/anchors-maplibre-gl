<template>
  <Navigation :nav-height="navHeight" />
  <div class="flex-grow w-full">
    <RouterView />
    <BottomSheet :top-offset="navHeight">
      <Content v-if="mapStore.chapters?.features" />
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
      class="bg-white rounded ring-2 ring-black/25"
      :delay="400"
    >
      Show Map
    </Button>
    <Button
      v-if="snap.active === 2 && mapStore.isReady"
      v-motion-pop-bottom
      @click="setActive(0)"
      type="button"
      class="bg-white rounded ring-2 ring-black/25"
      :delay="400"
    >
      Show List
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBottomSheetStore } from '../stores/bottomSheet';
import { useMapStore } from '../stores/map';

const navHeight = ref(54);
const mapStore = useMapStore();
const snap = useBottomSheetStore();

const setActive = (v: number) => {
  snap.setActive(v);
};
</script>
