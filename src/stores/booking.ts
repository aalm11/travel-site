import { defineStore } from "pinia";
import type { BookingInfo } from "../types";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    bookingInfo: {} as Partial<BookingInfo>,
  }),
  actions: {
    setBookingInfo(data: BookingInfo) {
      this.bookingInfo = data;
    },
    clearBookingInfo() {
      this.bookingInfo = {};
    },
  },
});
