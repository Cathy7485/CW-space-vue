<script setup>
import { ref } from 'vue';

import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import LatestNews from '@/components/LatestNews.vue';

const title = ref('公告訊息');
const link = ref('news');
</script>

<template>
  <div class="block home-news">
    <HomeBlockTitle :title="title" :link="link" />
    <LatestNews />
  </div>
</template>
