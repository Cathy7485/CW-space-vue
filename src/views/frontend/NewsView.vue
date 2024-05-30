<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container home-news content">
    <LatestNews />
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import LatestNews from '@/components/LatestNews.vue';
import bannerUrl from '@/assets/images/faq-banner.jpg';

export default {
  data() {
    return {
      bannerUrl,
      pageTitle: '最新消息',
    };
  },
  components: {
    PageBanner,
    LatestNews,
  },
};
</script>
