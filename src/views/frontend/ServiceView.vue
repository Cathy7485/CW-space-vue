<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/plan-banner.jpg';
import ServicePlan from '@/components/ServicePlan.vue';

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
