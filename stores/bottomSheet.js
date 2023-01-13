import { defineStore } from 'pinia';

export const useBottomSheetStore = defineStore('snap', {
  state: () => {
    return {
      active: 2,
    };
  },
  actions: {
    setActive(payload) {
      this.active = payload;
    },
  },
});
