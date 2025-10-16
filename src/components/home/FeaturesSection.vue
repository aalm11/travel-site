<template>
  <section class="py-12 px-4 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">我们的特色服务</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.title" class="text-center">
          <div class="mb-4 flex justify-center">
            <div class="w-16 h-16 bg-primary-blue-light rounded-full flex items-center justify-center">
              <span class="text-3xl">{{ feature.icon }}</span>
            </div>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: "🎯",
    title: "专业导游",
    description: "经验丰富的专业导游带您深度游览",
  },
  {
    icon: "🎨",
    title: "灵活行程",
    description: "根据您的需求定制个性化旅行方案",
  },
  {
    icon: "💰",
    title: "优惠价格",
    description: "超值价格，让您的旅行物超所值",
  },
  {
    icon: "📞",
    title: "24小时客服",
    description: "全天候客服支持，随时解答您的问题",
  },
];
</script>
