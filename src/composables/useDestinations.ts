import { ref } from "vue";
export function useDestinations() {
  const destinations = ref([]);
  return { destinations };
}
