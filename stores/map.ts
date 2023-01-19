import { RouteParams } from './types/RouteParams';
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
      loadedTime: null as number,
      isReady: false as boolean,
      center: [8.7707, 53.095] as [number, number],
      tourUUID: null as string,
      featureUUID: null as string,
      chapterUUID: null as string,
      tours: null,
      chapters: null,
      path: null,
      isFlyTo: true as boolean,
    };
  },
  actions: {
    setIsReady(payload: boolean) {
      this.isReady = payload;
      this.loadedTime = new Date().getTime();
    },
    resetTime() {
      this.loadedTime = null;
      this.time = new Date().getTime();
    },
    setTourUUID(payload: string) {
      this.tourUUID = payload;
    },
    setFeatureUUID(payload: string) {
      this.featureUUID = payload;
    },
    setIsFlyTo(payload: boolean) {
      this.isFlyTo = payload;
    },
    async fetchTours(params: RouteParams) {
      this.isReady = false;
      try {
        const resp = await axios.get('http://localhost:8080/tours');
        this.tours = resp.data;
        this.resolveTourUUID(params);
        this.isReady = true;
      } catch (error) {
        console.log(error);
      }
    },
    resolveTourUUID(params: RouteParams) {
      if (this.tours)
        this.tourUUID = this.tours.features.find(
          (e) => e.common_name === params.tour_name
        ).uuid;
    },
    async fetchChapters(uuid: string) {
      try {
        const resp = await axios.get('http://localhost:8080/tour/' + uuid);
        this.chapters = toFeatureCollection(resp.data.chapters);
        this.fetchPath();
      } catch (error) {
        console.log(error);
      }
    },
    async setChapterUUID(uuid: string) {
      try {
        const resp = await axios.get('http://localhost:8080/parent/' + uuid);
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
        profile: 'foot-walking',
        format: 'geojson',
        options: {
          profile_params: { weightings: { green: 0.8, quiet: 0.4 } },
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
