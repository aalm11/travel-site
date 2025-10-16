<template>
  <section class="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-blue to-primary-green overflow-hidden">
    <!-- 背景图片（可选） -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-30"
      style="background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200')"
    ></div>

    <!-- 内容区域 -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">开启你的梦想之旅</h1>
      <p class="mb-8 text-xl md:text-2xl">发现世界美景，轻松预订心仪目的地</p>

      <!-- 搜索框 -->
      <div class="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <input
          type="text"
          placeholder="搜索目的地..."
          class="px-6 py-3 rounded-lg w-full md:w-96 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-green"
        />
        <button
          class="bg-primary-green hover:bg-primary-green-dark px-8 py-3 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl"
        >
          搜索
        </button>
      </div>

      <router-link to="/booking">
        <button class="bg-white hover:bg-gray-100 text-primary-blue px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl">
          立即探索
        </button>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
