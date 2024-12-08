<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import GoTop from '@/components/GoTop.vue';
</script>

<template>
  <HeaderComponent />
  <LoadingComponent />
  <RouterView />
  <FooterComponent />
  <GoTop />
</template>
