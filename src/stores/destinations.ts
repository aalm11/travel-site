import { defineStore } from "pinia";
import type { Destination } from "../types";

export const useDestinationsStore = defineStore("destinations", {
  state: () => ({
    destinations: [] as Destination[],
  }),
  actions: {
    setDestinations(data: Destination[]) {
      this.destinations = data;
    },
  },
});
