<template>
  <nav class="flex p-2 bg-indigo-200" :style="[{ height: navHeight + 'px' }]">
    <Button type="button" class="mx-1 bg-zinc-100" @click="setActive(0)">
      One
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100" @click="setActive(1)">
      Two
    </Button>
    <Button type="button" class="mx-1 bg-zinc-100" @click="setActive(2)">
      Close
    </Button>
  </nav>
  <div class="flex-grow w-full">
    <SimpleMap
      ref="mapRef"
      @onMapLoadedAndMounted="onMapLoadedAndMountedHandler"
    />
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
  <Button
    v-motion-pop
    v-if="activeSnap.activeSnap === 0 || activeSnap.activeSnap === 1"
    @click="setActive(2)"
    type="button"
    class="fixed bottom-3 left-0 right-0 mx-auto z-[1020] bg-zinc-800 text-white ring-2 rounded ring-black/25"
    :delay="400"
  >
    Close Content
  </Button>
  <Button
    v-if="activeSnap.activeSnap === 2 && mapLoadedAndMounted"
    v-motion-pop
    @click="setActive(0)"
    type="button"
    class="fixed bottom-3 left-0 right-0 mx-auto z-[1002] bg-white ring-2 rounded ring-black/25"
    :delay="200"
  >
    Open Content
  </Button>
</template>

<script setup>
import { ref } from 'vue';
import { useBottomSheetStore } from '../stores/bottomSheet';

const mapRef = ref(null);
const mapLoadedAndMounted = ref(false);
const navHeight = ref(54);
const activeSnap = useBottomSheetStore();

function onMapLoadedAndMountedHandler() {
  mapLoadedAndMounted.value = true;
}

const setActive = (v) => {
  activeSnap.setActiveSnap(v);
};
</script>
