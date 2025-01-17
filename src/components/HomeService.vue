<script setup>
import { ref } from 'vue';
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import ServicePlan from '@/components/SwiperPlan.vue';

const title = ref('空間簡介');
const link = ref('service');
</script>

<template>
  <div class="container">
    <HomeBlockTitle :title="title" :link="link" />
  </div>
  <div class="block-inner">
    <ServicePlan />
  </div>
</template>
