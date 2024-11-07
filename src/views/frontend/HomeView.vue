<script setup>
import HomeBanner from '@/components/HomeBanner.vue';
import HomeAbout from '@/components/HomeAbout.vue';
import HomeSpace from '@/components/HomeSpace.vue';
import HomeService from '@/components/HomeService.vue';
import LatestNews from '@/components/HomeNews.vue';
import HomeQuestion from '@/components/HomeQuestion.vue';
import HomeVisitBanner from '@/components/HomeVisitBanner.vue';
</script>

<template>
  <HomeBanner />
  <div class="content container">
    <HomeAbout />
    <HomeSpace />
    <HomeService />
    <LatestNews />
    <HomeQuestion />
  </div>
  <HomeVisitBanner />
</template>
