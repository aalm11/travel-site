<template>
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">{{ label }}</label>
    <select
      v-model="selectedDestination"
      @change="handleChange"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
    >
      <option value="">请选择目的地</option>
      <option v-for="dest in destinations" :key="dest.id" :value="dest.id">{{ dest.name }} - ￥{{ dest.price }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDestinationsStore } from "../../stores/destinations";

const props = defineProps<{
  label?: string;
  modelValue?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const destinationsStore = useDestinationsStore();
const destinations = ref(destinationsStore.destinations);
const selectedDestination = ref(props.modelValue || "");

const handleChange = () => {
  emit("update:modelValue", selectedDestination.value);
};

onMounted(() => {
  destinations.value = destinationsStore.destinations;
});
</script>
