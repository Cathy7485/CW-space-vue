<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/visit-banner.jpg';

const pageTitle = ref('聯絡我們-預約參觀');
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container block mt-5">
    預約
  </div>
</template>
