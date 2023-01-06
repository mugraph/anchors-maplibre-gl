<template>
  <div id="snap-points-wrapper" :style="{ height: `${wrapperHeight}px` }">
    <div
      v-for="(point, index) in snapPoints"
      :key="point"
      class="indicator"
      :style="{ top: snapValues[index] + 'px' }"
    >
      <div class="square snap">
        <div>{{ snapValues[index] }}</div>
      </div>
      <div class="square snap"></div>
    </div>
    <div
      v-for="(point, index) in breakPoints"
      :key="point"
      class="indicator"
      :style="{ top: breakPoints[index] + 'px' }"
    >
      <div class="square break">
        <div>{{ breakPoints[index] }}</div>
      </div>
      <div class="square break"></div>
    </div>
    <div
      id="sheet"
      ref="sheetRef"
      class="bg-yellow-200"
      :style="{ height: `${sheetHeight}px` }"
    >
      <div id="sheetHeader" ref="sheetHeaderRef"></div>
      <div id="sheetContent" class="px-14">
        <span>sheetHeight: {{ sheetHeight }}</span>
        <br />
        <span>active Snap: {{ activeSnap.activeSnap }}</span>
        <br />
        <span>SnapValues: {{ snapValues }}</span>
        <br />
        <span>Breakpoints: {{ breakPoints }}</span>
        <br />
        <br />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { debounce } from '@/helpers/util';
import { useDrag } from '@vueuse/gesture';
import { useMotionProperties, useMotionTransitions } from '@vueuse/motion';
import { useBottomSheetStore } from '../stores/bottomSheet';

const sheetRef = ref();
const sheetHeaderRef = ref();

let isDragging = ref(false);

const props = defineProps({
  topOffset: {
    Type: Number,
    default: 54,
  },
  active: {
    Type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 200,
  },
});
const activeSnap = useBottomSheetStore();
const windowHeight = ref(0);
const sheetHeaderHeight = ref(0);
const snapPoints = [0, 0.5, 1];

//const activeSnap = ref(null);

const wrapperHeight = computed(() => {
  return windowHeight.value - props.topOffset;
});

const snapValues = computed(() => {
  let values = [];
  for (let point of snapPoints) {
    let value = wrapperHeight.value * point;
    values.push(value);
  }
  return values;
});

const sheetHeight = computed(() => {
  let y = snapValues.value[activeSnap.activeSnap];
  if (activeSnap.activeSnap === null) y = wrapperHeight.value;
  return wrapperHeight.value - y;
});

const breakPoints = computed(() => {
  let points = [];
  for (let i = 0; i <= snapValues.value.length - 2; i++) {
    if (i === snapValues.value.length - 2)
      points.push((wrapperHeight.value + snapValues.value[i]) / 2);
    else points.push((snapValues.value[i] + snapValues.value[i + 1]) / 2);
  }
  console.log(points);
  return points;
});

const { motionProperties } = useMotionProperties(sheetRef);
const { push } = useMotionTransitions(motionProperties);

const keyFrame = {
  type: 'keyframe',
  ease: 'linear',
  duration: 0,
  delay: 0,
};

function dragHandler(ctx) {
  isDragging.value = false;

  //console.log('ctx: ', ctx);
  const { dragging } = ctx;
  if (dragging) {
    handleDrag(ctx);
  } else {
    handleDragEnd(ctx);
  }
}

function handleDrag(ctx) {
  //if (ctx.tap || !allowDrag(ctx)) return;
  isDragging.value = true;

  const {
    movement: [, y],
  } = ctx;
  //const setY = axisY.value + y;
  const setY = sheetHeight.value + y * -1;

  // Stop at wrapperHeight
  if (setY > wrapperHeight.value) {
    const max = wrapperHeight.value - snapValues.value[0];
    moveSheet(max, false);
  }
  moveSheet(setY, false);
}

const findClosest = (array, goal) => {
  return array.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};

function handleDragEnd(ctx) {
  // if (ctx.tap || !allowDrag(ctx)) return;
  isDragging.value = false;

  const {
    movement: [, y],
  } = ctx;

  const snapScale = wrapperHeight.value - (sheetHeight.value + y * -1);
  const targetSnap = findClosest(snapValues.value, snapScale);

  if (snapValues.value.indexOf(targetSnap) === activeSnap.activeSnap) {
    moveSheet(undefined, true);
  } else {
    activeSnap.setActiveSnap(snapValues.value.indexOf(targetSnap));
  }
}

function moveSheet(v, withKeyFrame) {
  if (v > wrapperHeight.value) return;
  const mP = motionProperties;
  if (!v || v === undefined) v = sheetHeight.value;
  if (withKeyFrame) {
    push('y', -v, mP, { ...keyFrame, duration: props.duration });
    push('height', v, mP, {
      ...keyFrame,
      duration: props.duration,
    });
  } else {
    push('y', -v, mP, keyFrame);
    push('height', v, mP, keyFrame);
  }
}

function calculateHeight() {
  windowHeight.value = window.innerHeight;
  sheetHeaderHeight.value = sheetHeaderRef.value.clientHeight;

  moveSheet(sheetHeight.value, true);
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
  // preventWindowScrollY: true,
  useTouch: true,
});

watch(
  () => activeSnap.activeSnap,
  () => {
    moveSheet(undefined, true);
  }
);
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
  z-index: 1000;
}

.square > div {
  margin-right: -24px;
  margin-top: -14px;
  padding-left: 20px;
  font-size: 12px;
  transform: rotate(-45deg);
}

.snap {
  background-color: lightcoral;
}

.break {
  background-color: lightseagreen;
}

#sheet {
  height: 0;
  position: relative;
  top: 100%;
}

#sheetHeader {
  pointer-events: auto;
  cursor: ns-resize;
  padding-bottom: 10px;
  padding-top: 10px;
}

#sheetHeader::before {
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

#sheetContent {
  pointer-events: auto;
  overflow-y: auto;
  height: 100%;
}
</style>
