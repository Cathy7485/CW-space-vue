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
  <div class="bg-lines">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="content">
    <div class="container">
      <HomeAbout />
    </div>
    <div class="container">
      <HomeSpace />
    </div>
    <HomeService />
    <div class="container">
      <LatestNews />
    </div>
    <div class="container">
      <HomeQuestion />
    </div>
  </div>
  <HomeVisitBanner />
</template>
