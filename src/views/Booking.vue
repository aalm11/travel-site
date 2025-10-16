<template>
  <div class="bg-gray-50 py-12 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 预订表单 -->
        <div class="lg:col-span-2">
          <BookingForm ref="bookingFormRef" />
        </div>

        <!-- 价格摘要 -->
        <div class="lg:col-span-1">
          <PriceSummary
            :destination-id="formData.destinationId"
            :start-date="formData.startDate"
            :end-date="formData.endDate"
            :adults="formData.adults"
            :children="formData.children"
            :infants="formData.infants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BookingForm from "../components/booking/BookingForm.vue";
import PriceSummary from "../components/booking/PriceSummary.vue";

const bookingFormRef = ref<InstanceType<typeof BookingForm> | null>(null);

const formData = computed(() => {
  return (
    bookingFormRef.value?.formData || {
      destinationId: "",
      startDate: "",
      endDate: "",
      adults: 1,
      children: 0,
      infants: 0,
    }
  );
});
</script>
