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
    longDescription:
      "巴厘岛是印度尼西亚最受欢迎的旅游目的地之一，以其迷人的海滩、古老的寺庙、梯田稻田和丰富的文化而闻名。这里是冲浪者的天堂，也是寻求宁静和灵性的理想之地。",
    highlights: ["美丽的海滩", "古老寺庙", "梯田景观", "传统舞蹈", "水上运动"],
    duration: "5天4晚",
    rating: 4.8,
    reviews: 1250,
    location: "印度尼西亚",
    bestTimeToVisit: "4月-10月",
    activities: ["冲浪", "潜水", "寺庙参观", "瑜伽", "SPA"],
    included: ["往返机票", "酒店住宿", "早餐", "机场接送", "中文导游"],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
    ],
  },
  {
    id: "2",
    name: "东京",
    description: "现代与传统完美融合的国际都市",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
    price: 4599,
    longDescription:
      "东京是日本的首都，是一座充满活力的现代化大都市。这里既有繁华的购物区、米其林星级餐厅，也有古老的寺庙、传统的茶馆。从东京塔到浅草寺，从秋叶原到涩谷，每个角落都有独特的魅力。",
    highlights: ["东京塔", "浅草寺", "秋叶原", "涩谷交叉口", "富士山"],
    duration: "6天5晚",
    rating: 4.9,
    reviews: 2100,
    location: "日本",
    bestTimeToVisit: "3月-5月，9月-11月",
    activities: ["购物", "美食探索", "寺庙参观", "动漫文化", "温泉体验"],
    included: ["往返机票", "酒店住宿", "早餐", "JR通票", "中文导游"],
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
      "https://images.unsplash.com/photo-1551639270-9bc6271c6de8?w=800",
    ],
  },
  {
    id: "3",
    name: "巴黎",
    description: "浪漫之都，艺术与美食的天堂",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
    price: 6999,
    longDescription:
      "巴黎是法国的首都，被誉为世界上最浪漫的城市。从标志性的埃菲尔铁塔到世界著名的卢浮宫，从塞纳河畔的漫步到香榭丽舍大街的购物，巴黎以其独特的魅力吸引着世界各地的游客。",
    highlights: ["埃菲尔铁塔", "卢浮宫", "凯旋门", "圣母院", "凡尔赛宫"],
    duration: "7天6晚",
    rating: 4.7,
    reviews: 1800,
    location: "法国",
    bestTimeToVisit: "4月-6月，9月-11月",
    activities: ["博物馆参观", "塞纳河游船", "购物", "品尝美食", "街头艺术"],
    included: ["往返机票", "酒店住宿", "早餐", "市内交通", "中文导游"],
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800",
    ],
  },
  {
    id: "4",
    name: "马尔代夫",
    description: "梦幻海岛，蔚蓝海水和白色沙滩",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400",
    price: 8999,
    longDescription:
      "马尔代夫是印度洋上的热带天堂，以其水晶般清澈的海水、洁白的沙滩和豪华的水上别墅而闻名。这里是蜜月旅行和潜水爱好者的终极目的地，拥有世界上最美丽的珊瑚礁和海洋生物。",
    highlights: ["水上别墅", "浮潜", "潜水", "日落巡航", "海豚观赏"],
    duration: "5天4晚",
    rating: 4.9,
    reviews: 1500,
    location: "马尔代夫",
    bestTimeToVisit: "11月-4月",
    activities: ["浮潜", "潜水", "水上运动", "SPA", "海钓"],
    included: ["往返机票", "度假村住宿", "全餐", "水上活动", "机场接送"],
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800",
    ],
  },
]);

onMounted(() => {
  destinationsStore.setDestinations(destinations.value);
});
</script>
