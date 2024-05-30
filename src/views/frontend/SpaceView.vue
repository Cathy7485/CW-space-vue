<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <div class="row">
      <div class="col-lg-6">
        <div class="title">共享辦公空間</div>
        <div>
          開放時間：
          週一至週五 8:00-18:00（不含例假日）
          單日體驗 NT 300 / 天 單月方案 NT3,500 / 月
        </div>
      </div>
      <div class="col-lg-6">
        <swiper>
          swiper-slide
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/shared-banner.jpg';

export default {
  data() {
    return {
      bannerUrl,
      pageTitle: '環境空間',
    };
  },
  components: {
    PageBanner,
  },
};
</script>
