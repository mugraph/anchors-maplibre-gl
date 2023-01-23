<!-- eslint-disable quotes -->
<template>
  <div ref="svgRef">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size * 2"
      :height="size * 2"
      viewBox="0 0 24 24"
      class="[z-2000]"
    >
      <SvgCircularProgress
        :id="id"
        :digit="digits.bg[0]"
        :style="'bg'"
        :size="size"
        :bg-color="'#726f8c33'"
        :bg-stroke-color="'#726f8c33'"
      />
      <g :transform="scale + ' ' + translate">
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
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import * as digits from '../assets/digits.json';
const props = defineProps([
  'id',
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

const scale = computed(() => {
  return 'scale(0.5 0.5)';
});

const translate = computed(() => {
  return `translate(${(props.size * 2) / (props.size / 6)} ${
    (props.size * 2) / (props.size / 6)
  })`;
});

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
