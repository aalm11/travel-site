<template>
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold mb-6 text-gray-800">预订信息</h2>

    <form @submit.prevent="handleSubmit">
      <!-- 目的地选择 -->
      <DestinationSelector v-model="formData.destinationId" label="选择目的地" />

      <!-- 日期选择 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatePicker v-model="formData.startDate" label="出发日期" :min-date="today" />
        <DatePicker v-model="formData.endDate" label="返回日期" :min-date="formData.startDate || today" />
      </div>

      <!-- 旅客信息 -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-700">旅客人数</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GuestSelector v-model="formData.adults" label="成人" :min="1" />
          <GuestSelector v-model="formData.children" label="儿童" :min="0" />
          <GuestSelector v-model="formData.infants" label="婴儿" :min="0" />
        </div>
      </div>

      <!-- 个人信息 -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-700">联系信息</h3>
        <div class="grid grid-cols-1 gap-4">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">姓名 *</label>
            <input
              v-model="formData.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="请输入您的姓名"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">邮箱 *</label>
            <input
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">电话 *</label>
            <input
              v-model="formData.phone"
              type="tel"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="请输入您的电话号码"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">特殊要求（可选）</label>
            <textarea
              v-model="formData.specialRequest"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="请告诉我们您的特殊需求"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- 住宿选择 -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-700">住宿选择</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">酒店星级</label>
            <select
              v-model="formData.hotelLevel"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
            >
              <option value="">请选择</option>
              <option value="3">三星级</option>
              <option value="4">四星级</option>
              <option value="5">五星级</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">房间类型</label>
            <select
              v-model="formData.roomType"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
            >
              <option value="">请选择</option>
              <option value="standard">标准间</option>
              <option value="deluxe">豪华间</option>
              <option value="suite">套房</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 优惠码 -->
      <div class="mb-6">
        <label class="block text-gray-700 font-semibold mb-2">优惠码（可选）</label>
        <input
          v-model="formData.couponCode"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
          placeholder="请输入优惠码"
        />
      </div>

      <!-- 提交按钮 -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-primary-green hover:bg-primary-green-dark text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
      >
        {{ isSubmitting ? "提交中..." : "确认预订" }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import DestinationSelector from "./DestinationSelector.vue";
import DatePicker from "./DatePicker.vue";
import GuestSelector from "./GuestSelector.vue";
import { useBookingStore } from "../../stores/booking";
import type { BookingInfo } from "../../types";

const bookingStore = useBookingStore();
const isSubmitting = ref(false);

const today = new Date().toISOString().split("T")[0];

const formData = reactive<BookingInfo>({
  destinationId: "",
  startDate: "",
  endDate: "",
  adults: 1,
  children: 0,
  infants: 0,
  name: "",
  email: "",
  phone: "",
  specialRequest: "",
  hotelLevel: undefined,
  roomType: "",
  couponCode: "",
});

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // 这里可以添加实际的API调用
    bookingStore.setBookingInfo(formData);

    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1500));

    alert("预订成功！我们会尽快与您联系。");

    // 重置表单
    Object.assign(formData, {
      destinationId: "",
      startDate: "",
      endDate: "",
      adults: 1,
      children: 0,
      infants: 0,
      name: "",
      email: "",
      phone: "",
      specialRequest: "",
      hotelLevel: undefined,
      roomType: "",
      couponCode: "",
    });
  } catch (error) {
    alert("预订失败，请稍后再试。");
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};

defineExpose({
  formData,
});
</script>
