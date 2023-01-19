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
        :fgColor="fgColor"
        :bgColor="bgColor"
      />
      <!-- equals 3 digits -->
      <g
        v-if="realDigits.length === 3"
        transform="scale (.8 .8) translate (-0.7 2.75)"
      >
        <g v-for="(d, i) in realDigits" :key="d">
          <g v-if="i === 0">
            <g v-if="d === 1" transform="translate(-3.5, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
            <g v-else transform="translate(-3.5, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
          </g>
          <g v-else-if="i === 1">
            <!-- prev digit was 1 -->
            <g v-if="realDigits[i - 1] === 1" transform="translate(2.75, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
            <!-- first digit was not 1  -->
            <g v-else transform="translate(3.7, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
          </g>
          <g v-else-if="i === 2">
            <g v-if="realDigits[i - 1] === 1" transform="translate(10, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
            <g v-else-if="realDigits[i - 2] === 1" transform="translate(10, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
            <g v-else transform="translate(11, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
          </g>
        </g>
      </g>
      <!-- no euqual 3 digits -->
      <g v-else>
        <g v-for="(d, i) in realDigits" :key="d">
          <g v-if="realDigits.length === 1" transform="translate(0, 0)">
            <SvgNumberPath
              :digit="digits.fg[d]"
              :style="'fg'"
              :size="size"
              :fgColor="fgColor"
              :bgColor="bgColor"
            />
          </g>
          <g v-else-if="i === 0">
            <g v-if="d === 1" transform="translate(-4, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
            <g v-else transform="translate(-3.5, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
          </g>
          <g v-else-if="i === 1">
            <g v-if="realDigits[i - 1] === 1" transform="translate(3, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
            <g v-else transform="translate(3.5, 0)">
              <SvgNumberPath
                :digit="digits.fg[d]"
                :style="'fg'"
                :size="size"
                :fgColor="fgColor"
                :bgColor="bgColor"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
</script>
