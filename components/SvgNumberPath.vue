<template>
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
import { computed } from 'vue';

const props = defineProps([
  'size',
  'style',
  'digit',
  'fgColor',
  'bgColor',
  'fgStrokeColor',
  'bgStrokeColor',
]);
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
