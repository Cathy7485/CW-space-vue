<template>
  <HomeHeader />
  <RouterView />
  <HomeFooter />
  <GoTop />
</template>

<script>
import { RouterView } from 'vue-router';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import GoTop from '@/components/GoTop.vue';

export default {
  name: 'FrontLayout',
  components: {
    RouterView,
    HomeHeader,
    HomeFooter,
    GoTop,
  },
};
</script>
