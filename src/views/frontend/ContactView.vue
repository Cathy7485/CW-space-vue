<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <h1>This is an contact page</h1>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/contact-banner.jpg';

export default {
  data() {
    return {
      bannerUrl,
      pageTitle: '聯絡我們',
    };
  },
  components: {
    PageBanner,
  },
};
</script>
