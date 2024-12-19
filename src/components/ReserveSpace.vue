<script setup>
import { shallowRef, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useReserveStore } from '@/stores/reserveStore';

import first from '@/components/reserve/FirstStep.vue';
import second from '@/components/reserve/SecondStep.vue';
import third from '@/components/reserve/ThirdStep.vue';
import fourth from '@/components/reserve/FourthStep.vue';

const reserveStore = useReserveStore();
const { step } = storeToRefs(reserveStore);

const stepText = ['選擇空間', '選擇時段/座位', '填寫資料', '預約完成'];

// 步驟數組
const reserveStep = shallowRef([
  { name: 'first', component: first },
  { name: 'second', component: second },
  { name: 'third', component: third },
  { name: 'fourth', component: fourth },
]);

// 獲取當前步驟
const currentStep = computed(() => reserveStep.value[step.value]);
</script>

<template>
  <ul class="reserve-step">
    <li
      :class="['step', { 'active': index === step}]"
      v-for="(text, index) in stepText"
      :key="text"
    >
      <div class="circle">{{ index + 1 }}</div>
      <div class="text">{{ text }}</div>
    </li>
  </ul>
  <div class="reserve-list">
    <component :is='currentStep.component' />
  </div>
</template>
