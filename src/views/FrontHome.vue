<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import GoTop from '@/components/GoTop.vue';
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
  <GoTop />
</template>
