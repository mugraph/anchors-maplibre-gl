<!-- eslint-disable quotes -->
<template>
  <img alt="number" :src="svgURL" />
</template>

<script setup>
import { computed } from 'vue';
import * as digits from '../assets/digits.json';
const props = defineProps(['number', 'size']);

const str = props.number.toString().split('');
const realDigits = str.map(Number);

const options = {
  width: props.size,
  height: props.size,
  viewBox: '0 0 24 24',
};
const svgOpen = `<svg xmlns='http://www.w3.org/2000/svg' width='${options.width}' height='${options.height}' viewBox='${options.viewBox}'>`;
const svgClose = '</svg>';
const bg = `<path fill="#843b62"
     fill-opacity="1" stroke="#6b818c"
     stroke-opacity="0.5"
     stroke-width="0.5" d='${digits.bg[0]}' />`;

const svgURL = computed(() => {
  let str = '';
  if (realDigits.length === 3) {
    str += '<g transform="scale (.8 .8) translate (0 2.5)">';
  }
  for (let i = 0; i < realDigits.length; i++) {
    if (i === 0) {
      if (realDigits.length === 1) {
        str += '<g transform="translate(0, 0)">';
      } else if (realDigits[i] === 1) {
        str += '<g transform="translate(-4, 0)">';
      } else {
        str += '<g transform="translate(-3.5, 0)">';
      }
    } else if (i === 1) {
      if (realDigits[i - 1] === 1) {
        str += '<g transform="translate(3, 0)">';
      } else {
        str += '<g transform="translate(3.5, 0)">';
      }
    } else if (i === 2) {
      str += '<g transform="translate(10.4, 0)">';
    }
    str += `<path fill="white" stroke="#6b818c" stroke-opacity="0.5"
     stroke-width="0.5" d='${digits.fg[realDigits[i]]}'/></g>`;
  }
  if (realDigits.length === 3) {
    str += '</g>';
  }
  console.log(svgOpen + bg + str + svgClose);
  const url =
    'data:image/svg+xml,' + encodeURIComponent(svgOpen + bg + str + svgClose);
  return url;
});
</script>
