<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/faq-banner.jpg';
import faq from '@/components/FrequentlyAskedQuestions.vue';

const pageTitle = ref('常見問題');
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container block mt-5">
    <faq />
  </div>
</template>
