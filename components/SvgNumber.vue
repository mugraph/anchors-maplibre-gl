<!-- eslint-disable quotes -->
<template>
  <div ref="svgRef">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      class="[z-2000]"
    >
      <SvgNumberPath
        :digit="digits.bg[0]"
        :style="'bg'"
        :size="size"
        :fg-color="fgColor"
        :bg-color="bgColor"
      />
      <g
        v-for="(d, i) in realDigits"
        :key="d"
        :transform="getTransform(d, i, realDigits.length)"
      >
        <SvgNumberPath
          :digit="digits.fg[d]"
          :style="'fg'"
          :size="size"
          :fg-color="fgColor"
          :bg-color="bgColor"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as digits from '../assets/digits.json';
const props = defineProps([
  'number',
  'size',
  'fgColor',
  'bgColor',
  'fgStrokeColor',
  'bgStrokeColor',
]);

const svgRef = ref();
const str = props.number.toString().split('');
const realDigits = str.map(Number);

defineExpose({
  svgRef,
});

const getTransform = (d, i, length) => {
  if (length === 3) {
    if (i === 0) {
      return d === 1
        ? 'translate(-3.5, 0)'
        : 'translate(-3.5, 0) scale(.8 .8) translate(-0.7 2.75)';
    } else if (i === 1) {
      return realDigits[i - 1] === 1
        ? 'translate(2.75, 0)'
        : 'translate(3.7, 0)';
    } else if (i === 2) {
      return realDigits[i - 1] === 1 || realDigits[i - 2] === 1
        ? 'translate(10, 0)'
        : 'translate(11, 0)';
    }
  } else {
    return 'translate(0, 0)';
  }
};
</script>
