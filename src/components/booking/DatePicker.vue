<template>
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">{{ label }}</label>
    <input
      type="date"
      :value="modelValue"
      @input="handleInput"
      :min="minDate"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  label: string;
  modelValue: string;
  minDate?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
