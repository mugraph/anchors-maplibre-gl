import { defineStore } from 'pinia';

export const useMapStore = defineStore('mapStore', {
  state: () => {
    return {
      time: new Date().getTime(),
      loadedTime: null,
      isReady: false,
      center: [8.7707, 53.095],
    };
  },
  actions: {
    setIsReady(payload) {
      this.isReady = payload;
      this.loadedTime = new Date().getTime();
    },
    resetTime() {
      this.loadedTime = null;
      this.time = new Date().getTime();
    },
  },
});
