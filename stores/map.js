import { defineStore } from 'pinia';
import axios from 'axios';
import { toFeatureCollection } from '../helpers/util';
import Openrouteservice from 'openrouteservice-js';

const Directions = new Openrouteservice.Directions({
  api_key: import.meta.env.VITE_ORS_KEY,
});

export const useMapStore = defineStore('mapStore', {
  state: () => {
    return {
      time: new Date().getTime(),
      loadedTime: null,
      isReady: false,
      center: [8.7707, 53.095],
      tourUUID: null,
      featureUUID: null,
      chapterUUID: null,
      tours: null,
      chapters: null,
      path: null,
      isFlyTo: true,
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
    setTourUUID(payload) {
      this.tourUUID = payload;
    },
    setFeatureUUID(payload) {
      this.featureUUID = payload;
    },
    setIsFlyTo(payload) {
      this.isFlyTo = payload;
    },
    async fetchTours(routeParams) {
      this.isReady = false;
      try {
        const resp = await axios.get('http://localhost:8080/tours');
        this.tours = resp.data;
        this.resolveTourUUID(routeParams);
        this.isReady = true;
      } catch (error) {
        console.log(error);
      }
    },
    resolveTourUUID(routeParams) {
      if (this.tours)
        this.tourUUID = this.tours.features.find(
          (e) => e.common_name === routeParams.tour_name
        ).uuid;
    },
    async fetchChapters(uuid) {
      try {
        const resp = await axios.get('http://localhost:8080/tour/' + uuid);
        this.chapters = toFeatureCollection(resp.data.chapters);
        this.fetchPath();
      } catch (error) {
        console.log(error);
      }
    },
    async setChapterUUID(payload) {
      try {
        const resp = await axios.get('http://localhost:8080/parent/' + payload);
        this.chapterUUID = resp.data.uuid;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPath() {
      Directions.calculate({
        coordinates: [
          ...this.chapters.features.map((e) => e.geometry.coordinates),
        ],
        profile: 'foot-hiking',
        format: 'geojson',
        options: {
          profile_params: { weightings: { green: 1, quiet: 1 } },
        },
      })
        .then((json) => {
          this.path = json;
        })
        .catch(function (err) {
          const str = 'An error occurred: ' + err;
          console.log(str);
        });
    },
  },
});
