<template>
  <div id="snap-points-wrapper" :style="{ height: `${wrapperHeight}px` }">
    <div class="info">
      <ul>
        <li>wrapper height: {{ wrapperHeight }}</li>
        <li>sheet height: {{ sheetHeight }}</li>
        <li>active snap: {{ activeSnap }}</li>
        <li>snap points: {{ snapPoints }}</li>
        <li>snap heights: {{ snapHeights }}</li>
      </ul>
    </div>
    <div
      v-for="(point, index) in snapPoints"
      :key="point"
      class="indicator"
      :style="{ top: snapHeights[index] + 'px' }"
    >
      <div>
        <div class="square snap"></div>
        <div class="label">{{ snapHeights[index] }}</div>
      </div>
      <div>
        <div class="square snap"></div>
      </div>
    </div>
    <div
      v-for="(point, index) in breakPoints"
      :key="point"
      class="indicator"
      :style="{ top: breakPoints[index] + 'px' }"
    >
      <div>
        <div
          class="threshold"
          :style="{
            height: `${threshold}px`,
            'margin-top': `${-threshold / 2}px`,
          }"
        ></div>
      </div>
      <div>
        <div
          class="threshold"
          :style="{
            height: `${threshold}px`,
            'margin-top': `${-threshold / 2}px`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps([
  'wrapperHeight',
  'snapPoints',
  'snapHeights',
  'threshold',
  'sheetHeight',
  'activeSnap',
]);

const breakPoints = computed(() => {
  let points = [];
  for (let i = 0; i <= props.snapHeights.length - 2; i++) {
    if (i === props.snapHeights.length - 2)
      points.push((props.wrapperHeight + props.snapHeights[i]) / 2);
    else points.push((props.snapHeights[i] + props.snapHeights[i + 1]) / 2);
  }
  return points;
});
</script>

<style scoped>
#snap-points-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 900;
}

.info {
  position: fixed;
  top: 0px;
  right: 20px;
  font-size: 10px;
  line-height: 100%;
}

.indicator {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% + 20px);
  left: -10px;
}

.square {
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  margin-top: -10px;
}

.label {
  padding-left: 20px;
  font-size: 10px;
  position: relative;
  top: -20px;
  right: -10px;
}

.snap {
  background-color: lightcoral;
}

.break {
  background-color: lightseagreen;
}

.threshold {
  background-color: white;
  opacity: 0.8;
  background-image: linear-gradient(0deg, white 50%, LightSteelBlue 50%);
  background-size: 10px 10px;
  width: 28px;
}
</style>
