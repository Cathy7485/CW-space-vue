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
