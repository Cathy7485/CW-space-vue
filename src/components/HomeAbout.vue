<template>
  <div class="block container">
    <div class="row">
      <div class="col-lg-6">
        <div class="about-info">
          <HomeBlockTitle  :title="title" :link="link" />
          <div>
            <p>我們位於交通發達市中心區域性的商業區，提供給您最便利的辦公位置。</p>
            <p>您不需要額外再支出龐大的設備採買費用，只需要帶上您的筆電，即刻便可以開始工作！</p>
            <p>最適合新創企業、SOHO族、斜槓專家</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="about-img">
          <img src="@/assets/images/about.jpg" alt="關於我們">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';

export default {
  data() {
    return {
      title: '關於我們',
      link: 'about',
    };
  },
  components: {
    HomeBlockTitle,
  },
};
</script>
