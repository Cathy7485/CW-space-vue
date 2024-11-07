<script setup>
import visit from '@/assets/images/visit.jpg';
</script>

<template>
  <div class="home-visit">
    <img class="block-banner" :src="visit" alt="banner">
    <div class="info container">
      <div class="title">我們體驗過都覺得棒</div>
      <router-link
        to="/reserve"
        class="button primary"
        >預約參觀</router-link>
    </div>
  </div>
</template>
