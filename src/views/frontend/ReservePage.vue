<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container block mt-5">
    預約
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/visit-banner.jpg';

export default {
  data() {
    return {
      pageTitle: '聯絡我們-預約參觀',
      bannerUrl,
    };
  },
  components: {
    PageBanner,
  },
};
</script>
