<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/contact-banner.jpg';
import PageContact from '@/components/PageContact.vue';

const pageTitle = ref('聯絡我們');

</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <PageContact />
  </div>
</template>
