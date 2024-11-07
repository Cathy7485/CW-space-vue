<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import LatestNews from '@/components/LatestNews.vue';
import bannerUrl from '@/assets/images/faq-banner.jpg';

const pageTitle = ref('最新消息');
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container home-news content">
    <LatestNews />
  </div>
</template>
