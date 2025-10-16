<template>
  <footer class="bg-gradient-to-r from-primary-blue to-primary-green text-white py-8 mt-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <!-- 公司信息 -->
        <div>
          <h3 class="text-xl font-bold mb-4">TravelSite</h3>
          <p class="text-sm">探索世界，发现美好。我们致力于为您提供最优质的旅游体验。</p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-xl font-bold mb-4">快速链接</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/" class="hover:underline">首页</router-link></li>
            <li><router-link to="/booking" class="hover:underline">预订</router-link></li>
            <li><a href="#about" class="hover:underline">关于我们</a></li>
            <li><a href="#contact" class="hover:underline">联系我们</a></li>
          </ul>
        </div>

        <!-- 社交媒体 -->
        <div>
          <h3 class="text-xl font-bold mb-4">关注我们</h3>
          <div class="flex gap-4 text-2xl">
            <a href="#" class="hover:opacity-80">📱</a>
            <a href="#" class="hover:opacity-80">🐦</a>
            <a href="#" class="hover:opacity-80">📸</a>
            <a href="#" class="hover:opacity-80">💼</a>
          </div>
        </div>
      </div>

      <hr class="border-white/30 mb-4" />

      <div class="text-center text-sm">
        <p>
          © 2025 TravelSite. 保留所有权利. | <a href="#" class="hover:underline">隐私政策</a> |
          <a href="#" class="hover:underline">服务条款</a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
