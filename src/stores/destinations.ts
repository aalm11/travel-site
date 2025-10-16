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
    getDestinationById(id: string): Destination | undefined {
      return this.destinations.find(dest => dest.id === id);
    },
  },
});
