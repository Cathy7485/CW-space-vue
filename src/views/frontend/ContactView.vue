<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <PageContact />
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/contact-banner.jpg';
import PageContact from '@/components/PageContact.vue';

export default {
  data() {
    return {
      bannerUrl,
      pageTitle: '聯絡我們',
    };
  },
  components: {
    PageBanner,
    PageContact,
  },
};
</script>
