<template>
  <ul class="mb-4">
    <li
      v-for="(feature, index) in mapStore.chapters.features"
      :key="feature.id"
      class="px-3 py-1"
      role="button"
      @click="onClick(feature)"
      @keyup.enter="onClick(feature)"
      tabindex="0"
    >
      <h2 class="text-lg text-zinc-50">
        {{ index + 1 }}. {{ feature.properties.title }}
      </h2>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useMapStore } from '../stores/map';
import { useBottomSheetStore } from '../stores/bottomSheet';

const mapStore = useMapStore();
const snap = useBottomSheetStore();

const onClick = (feature) => {
  mapStore.setChapterId(feature.properties.id);
  snap.setActive(1);
};
</script>
