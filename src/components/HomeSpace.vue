<script setup>
import { ref } from 'vue';
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import SwiperImage from '@/components/SwiperImage.vue';

const title = ref('環境空間');
const link = ref('space');
</script>

<template>
  <div class="home-space block">
    <HomeBlockTitle :title="title" :link="link" />
    <SwiperImage />
  </div>
</template>

<style scoped>
.swiper-container :deep(pagination-bullet) {
  background-color: white; /* 未選中的圓點顏色 */
  opacity: 0.5;
}

.swiper-container :deep(pagination-bullet-active) {
  background-color: white; /* 選中的圓點顏色 */
  opacity: 1;
}
</style>
