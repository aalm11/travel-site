<template>
  <section class="py-12 px-4 bg-gradient-to-r from-primary-blue-light to-primary-green-light">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">用户评价</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4" />
            <div>
              <h4 class="font-semibold text-gray-800">{{ testimonial.name }}</h4>
              <div class="text-yellow-500">{{ "⭐".repeat(testimonial.rating) }}</div>
            </div>
          </div>
          <p class="text-gray-600 italic">"{{ testimonial.comment }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "张小明",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment: "非常棒的旅行体验！导游专业，行程安排合理，强烈推荐！",
  },
  {
    name: "李华",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    comment: "服务周到，价格实惠，下次旅行还会选择这里。",
  },
  {
    name: "王芳",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment: "整个旅程都很愉快，客服响应及时，解决问题很快。",
  },
];
</script>
