<template>
  <Card class="max-w-sm">
    <img :src="destination.image" :alt="destination.name" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ destination.name }}</h3>
      <p class="text-gray-600 mb-4">{{ destination.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-primary-green font-bold text-lg">￥{{ destination.price }}</span>
        <button class="bg-primary-blue hover:bg-primary-blue-dark text-white px-4 py-2 rounded transition">查看详情</button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from "../common/Card.vue";
import type { Destination } from "../../types";

defineProps<{
  destination: Destination;
}>();
</script>
