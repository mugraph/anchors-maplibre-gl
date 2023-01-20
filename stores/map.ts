import { defineStore } from 'pinia';
import { RouteParams } from '@/types/RouteParams';
import { toFeatureCollection } from '@/helpers/util';
import axios from 'axios';
import Openrouteservice from 'openrouteservice-js';

const Directions = new Openrouteservice.Directions({
  api_key: import.meta.env.VITE_ORS_KEY,
});

export const useMapStore = defineStore('mapStore', {
  state: () => {
    return {
      center: [8.7707, 53.095] as [number, number],
      chapterId: null as string,
      chapters: null,
      isFlyTo: true as boolean,
      isReady: false as boolean,
      loadedTime: null as number,
      path: null,
      time: new Date().getTime(),
      tourId: null as string,
      tours: null,
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
    setTourId(payload: string) {
      this.tourId = payload;
    },
    setIsFlyTo(payload: boolean) {
      this.isFlyTo = payload;
    },
    async fetchTours(params: RouteParams) {
      this.isReady = false;
      try {
        const resp = await axios.get('http://localhost:8080/tours');
        this.tours = resp.data;
        this.resolveTourId(params);
        this.isReady = true;
      } catch (error) {
        console.log(error);
      }
    },
    resolveTourId(params: RouteParams) {
      if (this.tours)
        this.tourId = this.tours.features.find(
          (e) => e.common_name === params.tour_name
        ).id;
    },
    async fetchSingleTour(id: string) {
      try {
        const resp = await axios.get('http://localhost:8080/tour/' + id);
        this.tour = toFeatureCollection(resp.data.features.slice(0, 1));
        this.chapters = toFeatureCollection(resp.data.features.slice(1));
        this.fetchPath();
      } catch (error) {
        console.log(error);
      }
    },
    setChapterId(id: string) {
      this.chapterId = id;
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
