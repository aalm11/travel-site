<template>
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">{{ label }}</label>
    <div class="flex items-center gap-4">
      <button
        @click="decrement"
        :disabled="modelValue <= min"
        class="w-10 h-10 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded-lg font-bold"
      >
        -
      </button>
      <span class="text-xl font-semibold w-12 text-center">{{ modelValue }}</span>
      <button
        @click="increment"
        :disabled="modelValue >= max"
        class="w-10 h-10 bg-primary-blue hover:bg-primary-blue-dark text-white rounded-lg font-bold"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  modelValue: number;
  min?: number;
  max?: number;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const increment = () => {
  const maxVal = props.max || 99;
  if (props.modelValue < maxVal) {
    emit("update:modelValue", props.modelValue + 1);
  }
};

const decrement = () => {
  const minVal = props.min || 0;
  if (props.modelValue > minVal) {
    emit("update:modelValue", props.modelValue - 1);
  }
};
</script>
