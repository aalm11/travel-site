<template>
  <div v-if="destination" class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative h-96 overflow-hidden">
      <img :src="destination.image" :alt="destination.name" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">{{ destination.name }}</h1>
          <p class="text-xl flex items-center gap-2">
            <span>{{ destination.location }}</span>
            <span v-if="destination.rating" class="flex items-center gap-1">
              <span>⭐</span>
              <span>{{ destination.rating }}</span>
              <span v-if="destination.reviews">({{ destination.reviews }} 评价)</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Details -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <section class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">目的地介绍</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ destination.longDescription || destination.description }}
            </p>
          </section>

          <!-- Highlights -->
          <section v-if="destination.highlights && destination.highlights.length > 0" class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">亮点特色</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(highlight, index) in destination.highlights"
                :key="index"
                class="flex items-center gap-2 text-gray-700"
              >
                <span class="text-primary-green text-xl">✓</span>
                <span>{{ highlight }}</span>
              </div>
            </div>
          </section>

          <!-- Activities -->
          <section v-if="destination.activities && destination.activities.length > 0" class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">推荐活动</h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(activity, index) in destination.activities"
                :key="index"
                class="px-4 py-2 bg-blue-100 text-primary-blue rounded-full text-sm font-medium"
              >
                {{ activity }}
              </span>
            </div>
          </section>

          <!-- Gallery -->
          <section v-if="destination.gallery && destination.gallery.length > 0" class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">精彩图集</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img
                v-for="(image, index) in destination.gallery"
                :key="index"
                :src="image"
                :alt="`${destination.name} - ${index + 1}`"
                class="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </section>

          <!-- What's Included -->
          <section v-if="destination.included && destination.included.length > 0" class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">费用包含</h2>
            <ul class="space-y-2">
              <li v-for="(item, index) in destination.included" :key="index" class="flex items-start gap-2 text-gray-700">
                <span class="text-primary-green text-xl">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column - Booking Card -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <div class="mb-6">
              <div class="flex items-baseline gap-2 mb-2">
                <span class="text-3xl font-bold text-primary-green">￥{{ destination.price }}</span>
                <span class="text-gray-600">/ 人起</span>
              </div>
              <div v-if="destination.duration" class="text-gray-600 text-sm">行程时长：{{ destination.duration }}</div>
            </div>

            <div class="space-y-4 mb-6">
              <div v-if="destination.bestTimeToVisit" class="flex items-start gap-2">
                <span class="text-gray-700 font-semibold">最佳季节：</span>
                <span class="text-gray-600">{{ destination.bestTimeToVisit }}</span>
              </div>
              <div v-if="destination.rating" class="flex items-center gap-2">
                <span class="text-gray-700 font-semibold">游客评分：</span>
                <div class="flex items-center gap-1">
                  <span class="text-yellow-500">⭐</span>
                  <span class="font-bold text-gray-800">{{ destination.rating }}</span>
                  <span class="text-gray-600">({{ destination.reviews || 0 }} 条评价)</span>
                </div>
              </div>
            </div>

            <button
              @click="goToBooking"
              class="w-full bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-3 px-6 rounded-lg transition mb-3"
            >
              立即预订
            </button>
            <button
              @click="goBack"
              class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Not Found State -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">目的地未找到</h1>
      <p class="text-gray-600 mb-8">抱歉，我们找不到您要查看的目的地。</p>
      <button
        @click="goBack"
        class="bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-3 px-6 rounded-lg transition"
      >
        返回首页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDestinationsStore } from "../stores/destinations";

const route = useRoute();
const router = useRouter();
const destinationsStore = useDestinationsStore();

const destinationId = computed(() => route.params.id as string);
const destination = computed(() => destinationsStore.getDestinationById(destinationId.value));

const goToBooking = () => {
  router.push({ name: "Booking", query: { destination: destinationId.value } });
};

const goBack = () => {
  router.push({ name: "Home" });
};
</script>
