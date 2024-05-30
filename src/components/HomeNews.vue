<template>
  <div class="block home-news">
    <HomeBlockTitle :title="title" :link="link" />
    <LatestNews />
  </div>
</template>

<script>
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import LatestNews from '@/components/LatestNews.vue';

export default {
  data() {
    return {
      title: '公告訊息',
      link: 'news',
    };
  },
  components: {
    HomeBlockTitle,
    LatestNews,
  },
};
</script>
