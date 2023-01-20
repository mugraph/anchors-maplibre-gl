<template>
  <div class="grid max-w-full grid-cols-12 gap-4">
    <SvgNumber
      v-for="(num, index) in numbers"
      :number="index"
      :size="numSize.count"
      :key="index"
      :fg-color="'white'"
      :bg-color="isPrime(index) ? colors.red[500] : colors.emerald[600]"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isPrime } from '@/helpers/util';
import colors from 'color-palette';

import SvgNumber from '../components/SvgNumber.vue';

const props = defineProps(['numSize', 'arrLength']);

const numbers = computed(() => {
  return [...Array(props.arrLength.count)];
});
</script>
