<template>
  <section class="py-12 px-4 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">热门目的地</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DestinationCard v-for="destination in destinations" :key="destination.id" :destination="destination" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DestinationCard from "./DestinationCard.vue";
import type { Destination } from "../../types";
import { useDestinationsStore } from "../../stores/destinations";

const destinationsStore = useDestinationsStore();
const destinations = ref<Destination[]>([
  {
    id: "1",
    name: "巴厘岛",
    description: "热带天堂，美丽的海滩和文化遗产",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400",
    price: 3999,
  },
  {
    id: "2",
    name: "东京",
    description: "现代与传统完美融合的国际都市",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
    price: 4599,
  },
  {
    id: "3",
    name: "巴黎",
    description: "浪漫之都，艺术与美食的天堂",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
    price: 6999,
  },
  {
    id: "4",
    name: "马尔代夫",
    description: "梦幻海岛，蔚蓝海水和白色沙滩",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400",
    price: 8999,
  },
]);

onMounted(() => {
  destinationsStore.setDestinations(destinations.value);
});
</script>
