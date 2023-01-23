<template>
  <circle
    :cx="12"
    :cy="12"
    :r="7"
    stroke="#B8DFD8BF"
    :stroke-width="6"
    :stroke-dasharray="circumference"
    :stroke-dashoffset="offset"
    fill="transparent"
  />
  <path
    :d="digit"
    :fill="styles[style].fill"
    :fill-opacity="styles[style]['fill-opacity']"
    :stroke="styles[style].stroke"
    :stroke-width="styles[style]['stroke-width']"
    :stroke-opacity="styles[style]['stroke-opacity']"
  />
</template>

<script setup lang="ts">
import { useMapStore } from '../stores/map';
import { ref, computed } from 'vue';

const props = defineProps([
  'id',
  'size',
  'style',
  'digit',
  'fgColor',
  'bgColor',
  'fgStrokeColor',
  'bgStrokeColor',
]);
const mapStore = useMapStore();
const radius = ref(7);
const circumference = computed(() => {
  return radius.value * 2 * Math.PI;
});
const offset = computed(() => {
  if (props.id === mapStore.chapterId) {
    return (
      circumference.value - (mapStore.progress / 100) * circumference.value
    );
  } else {
    return circumference.value;
  }
});

const styles = computed(() => {
  const width = (props.size * 10) / Math.pow(props.size, 2);
  return {
    bg: {
      fill: props.bgColor,
      'fill-opacity': 1,
      stroke: props.bgStrokeColor ? props.bgStrokeColor : '#6b818c',
      'stroke-width': width <= 0.5 ? width : 0.5,
      'stroke-opacity': '0.5',
    },
    fg: {
      fill: props.fgColor,
      'fill-opacity': 1,
      stroke: props.fgStrokeColor ? props.fgStrokeColor : '#6b818c',
      'stroke-width': width <= 0.5 ? width : 0.5,
      'stroke-opacity': '0.5',
    },
  };
});
</script>
