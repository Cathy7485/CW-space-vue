<script setup>
import { ref } from 'vue';
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import ServicePlan from '@/components/SwiperPlan.vue';

const title = ref('空間簡介');
const link = ref('service');
</script>

<template>
  <HomeBlockTitle :title="title" :link="link" />
  <ServicePlan />
</template>
