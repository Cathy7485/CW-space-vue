<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container block mt-5">
    <faq />
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/faq-banner.jpg';
import faq from '@/components/FrequentlyAskedQuestions.vue';

export default {
  data() {
    return {
      bannerUrl,
      pageTitle: '常見問題',
    };
  },
  components: {
    PageBanner,
    faq,
  },
};
</script>
