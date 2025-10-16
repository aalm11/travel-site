<template>
  <div class="bg-white p-6 rounded-lg shadow-lg sticky top-4">
    <h3 class="text-2xl font-bold mb-4 text-gray-800">预订摘要</h3>

    <div v-if="destinationName" class="mb-4">
      <p class="text-gray-600">目的地</p>
      <p class="font-semibold text-lg">{{ destinationName }}</p>
    </div>

    <div v-if="startDate" class="mb-4">
      <p class="text-gray-600">出发日期</p>
      <p class="font-semibold">{{ startDate }}</p>
    </div>

    <div v-if="endDate" class="mb-4">
      <p class="text-gray-600">返回日期</p>
      <p class="font-semibold">{{ endDate }}</p>
    </div>

    <div v-if="totalGuests > 0" class="mb-4">
      <p class="text-gray-600">旅客人数</p>
      <p class="font-semibold">成人 {{ adults }}人, 儿童 {{ children }}人, 婴儿 {{ infants }}人</p>
    </div>

    <hr class="my-4" />

    <div class="flex justify-between items-center mb-4">
      <span class="text-gray-600">基础价格</span>
      <span class="font-semibold">￥{{ basePrice }}</span>
    </div>

    <div class="flex justify-between items-center mb-4">
      <span class="text-gray-600">人数费用</span>
      <span class="font-semibold">￥{{ guestsCost }}</span>
    </div>

    <hr class="my-4" />

    <div class="flex justify-between items-center text-xl font-bold text-primary-green">
      <span>总价</span>
      <span>￥{{ totalPrice }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDestinationsStore } from "../../stores/destinations";

const props = defineProps<{
  destinationId: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  infants: number;
}>();

const destinationsStore = useDestinationsStore();

const destinationName = computed(() => {
  const dest = destinationsStore.destinations.find(d => d.id === props.destinationId);
  return dest?.name || "";
});

const basePrice = computed(() => {
  const dest = destinationsStore.destinations.find(d => d.id === props.destinationId);
  return dest?.price || 0;
});

const totalGuests = computed(() => props.adults + props.children + props.infants);

const guestsCost = computed(() => {
  return props.adults * 1000 + props.children * 500 + props.infants * 100;
});

const totalPrice = computed(() => {
  return basePrice.value + guestsCost.value;
});
</script>
