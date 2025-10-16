import { ref } from "vue";
export function useBooking() {
  const booking = ref({});
  return { booking };
}
