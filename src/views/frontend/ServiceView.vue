<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <ServicePlan />
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/plan-banner.jpg';
import ServicePlan from '@/components/ServicePlan.vue';

export default {
  data() {
    return {
      bannerUrl,
      pageTitle: '方案介紹',
    };
  },
  components: {
    PageBanner,
    ServicePlan,
  },
};
</script>
