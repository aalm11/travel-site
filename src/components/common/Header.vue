<template>
  <header class="bg-white shadow-md py-4 px-6 flex items-center justify-between">
    <div class="text-2xl font-bold text-primary-blue">TravelSite</div>
    <nav class="hidden md:flex gap-6">
      <router-link to="/" class="hover:text-primary-blue transition">首页</router-link>
      <a href="#destinations" class="hover:text-primary-blue transition">目的地</a>
      <router-link to="/booking" class="hover:text-primary-blue transition">预订</router-link>
      <router-link to="/about" class="hover:text-primary-blue transition">关于我们</router-link>
      <a href="#contact" class="hover:text-primary-blue transition">联系方式</a>
    </nav>
    <button class="md:hidden text-primary-blue">
      <span class="text-2xl">☰</span>
    </button>
  </header>
</template>
<script setup lang="ts">
// 响应式菜单后续补充
</script>
