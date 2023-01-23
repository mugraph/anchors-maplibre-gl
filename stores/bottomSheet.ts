import { defineStore } from 'pinia';

export const useBottomSheetStore = defineStore('snap', {
  state: () => {
    return {
      active: 2,
      currentOffset: null,
    };
  },
  actions: {
    setActive(payload: number) {
      this.active = payload;
    },
    setCurrentOffset(payload: number) {
      console.log(payload);
      this.currentOffset = payload;
    },
  },
});
