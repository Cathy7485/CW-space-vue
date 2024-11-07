<script setup>
import { ref } from 'vue';
import bannerUrl from '@/assets/images/plan-banner.jpg';
import PageBanner from '@/components/PageBanner.vue';
import ServicePlan from '@/components/SwiperPlan.vue';

const pageTitle = ref('方案介紹');
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <ServicePlan />
  </div>
</template>
