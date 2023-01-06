import { defineStore } from 'pinia';

export const useBottomSheetStore = defineStore('bottomSheet', {
  state: () => {
    return {
      activeSnap: 2,
    };
  },
  actions: {
    setActiveSnap(payload) {
      this.activeSnap = payload;
    },
  },
});
