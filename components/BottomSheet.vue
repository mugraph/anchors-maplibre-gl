<template>
  <!-- <BottomSheetHelper
    :wrapperHeight="wrapperHeight"
    :snapPoints="snapPoints"
    :snapHeights="snapHeights"
    :threshold="threshold * 2"
    :sheetHeight="sheetHeight"
    :activeSnap="snap.active"
  /> -->
  <div id="sheet-wrapper" :style="{ height: `${wrapperHeight}px` }">
    <div id="sheet" ref="sheetRef" :style="{ height: `${sheetHeight}px` }">
      <div id="sheet-header" ref="sheetHeaderRef"></div>
      <div
        id="sheet-content"
        ref="sheetContentRef"
        class="px-14"
        :class="[getContentOverflow]"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { debounce, findClosest, elScrolledTop } from '@/helpers/util';
import { useDrag } from '@vueuse/gesture';
import { useMotionProperties, useMotionTransitions } from '@vueuse/motion';
import { useBottomSheetStore } from '../stores/bottomSheet';

const sheetRef = ref();
const sheetHeaderRef = ref();
const sheetContentRef = ref();

const isDragging = ref(false);
const velocity = ref(1);

const props = defineProps({
  topOffset: {
    Type: Number,
    default: 54,
  },
  duration: {
    type: Number,
    default: 400,
  },
});

const snap = useBottomSheetStore();
const windowHeight = ref(0);
const sheetHeaderHeight = ref(0);
const snapPoints = [0, 0.5, 1];

const wrapperHeight = computed(() => {
  return windowHeight.value - props.topOffset;
});

// Define threshold
const threshold = computed(() => {
  return wrapperHeight.value * 0.15;
});

const snapHeights = computed(() => {
  const values = [];
  for (const point of snapPoints) {
    const value = wrapperHeight.value * point;
    values.push(value);
  }
  return values;
});

const sheetHeight = computed(() => {
  let y = snapHeights.value[snap.active];
  if (snap.active === null) y = wrapperHeight.value;

  return wrapperHeight.value - y;
});

const getContentOverflow = computed(() =>
  isDragging.value ? 'overflow-y-hidden' : 'overflow-y-auto'
);

const { motionProperties } = useMotionProperties(sheetRef);
const { push } = useMotionTransitions(motionProperties);

const spring = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
  mass: 0.5,
};

function allowDrag(ctx) {
  const {
    swipe: [, sy],
    movement: [, y],
  } = ctx;

  const isDragUp = y < 0 || sy < 0;

  if (isDragUp && snap.active == 0) {
    return false;
  } else if (
    !isDragUp &&
    snap.active == 0 &&
    !elScrolledTop(sheetContentRef.value)
  ) {
    return false;
  } else return true;
}

function dragHandler(ctx) {
  isDragging.value = false;

  const { dragging } = ctx;
  if (dragging) {
    handleDrag(ctx);
  } else {
    handleDragEnd(ctx);
  }
}

function handleDrag(ctx) {
  if (ctx.tap || !allowDrag(ctx)) return;
  isDragging.value = true;

  const {
    movement: [, y],
  } = ctx;

  const max = wrapperHeight.value - snapHeights.value[0];
  const setY = sheetHeight.value + y * -1;

  if (setY >= wrapperHeight.value) {
    moveSheet(max);
    // Snap to top
    if (sheetRef.value.clientHeight == max) {
      snap.setActive(snapHeights.value.indexOf(max - wrapperHeight.value));
    }
  } else {
    moveSheet(setY);
  }
}

function handleDragEnd(ctx) {
  if (ctx.tap || !allowDrag(ctx)) return;
  isDragging.value = false;

  // Keep velocity between 1 and 5
  const v = ctx.velocity;
  velocity.value = v >= 1 ? (v < 5 ? v : 5) : 1;

  // Set direction to -1 [down] or 1 [up]
  const direction = ctx.direction[1] < 0 ? 1 : -1;

  const {
    movement: [, y],
  } = ctx;

  let snapScale = wrapperHeight.value - (sheetHeight.value + y * -1);

  if (direction === 1) {
    snapScale = (snapScale - threshold.value) / velocity.value;
  } else {
    snapScale = (snapScale + threshold.value) * velocity.value;
  }

  const targetHeight = findClosest(snapHeights.value, snapScale);
  const targetIndex = snapHeights.value.indexOf(targetHeight);

  if (targetIndex === snap.active) {
    moveSheet(undefined);
  } else {
    snap.setActive(targetIndex);
  }
}

function moveSheet(v) {
  if (v > wrapperHeight.value) return;
  const mP = motionProperties;
  if (!v || v === undefined) v = sheetHeight.value;

  push('y', -v, mP, spring);
  push('height', v, mP, spring);
}

function calculateHeight() {
  windowHeight.value = window.innerHeight;
  sheetHeaderHeight.value = sheetHeaderRef.value.clientHeight;
  moveSheet(sheetHeight.value);
}

const onWindowResize = () => {
  calculateHeight();
};

onMounted(() => {
  calculateHeight();
  window.addEventListener('resize', debounce(onWindowResize, 200));
});

useDrag(dragHandler, {
  domTarget: sheetRef,
  filterTaps: true,
  useTouch: true,
});

watch(
  () => snap.active,
  () => {
    moveSheet(undefined);
    sheetContentRef.value.scroll({ top: 0, behavior: 'smooth' });
  }
);
</script>

<style scoped>
#sheet-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 800;
}
#sheet {
  position: relative;
  top: 100%;
  background-color: wheat;
}

#sheet-header {
  pointer-events: auto;
  cursor: ns-resize;
  padding-bottom: 10px;
  padding-top: 10px;
}

#sheet-header::before {
  position: absolute;
  content: '';
  display: block;
  width: 36px;
  height: 4px;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.14);
}

#sheet-content {
  pointer-events: auto;
  height: 100%;
}
</style>
