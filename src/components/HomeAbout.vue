<script setup>
import { ref } from 'vue';
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';

const title = ref('關於我們');
const link = ref('about');
</script>

<template>
  <div class="block">
    <div class="row">
      <div class="col-lg-6">
        <div class="about-info">
          <HomeBlockTitle  :title="title" :link="link" />
          <div>
            <p>我們位於交通發達市中心區域性的商業區，提供給您最便利的辦公位置。</p>
            <p>您不需要額外再支出龐大的設備採買費用，只需要帶上您的筆電，即刻便可以開始工作！</p>
            <p>最適合新創企業、SOHO族、斜槓專家</p>
            <p>舒適的環境，提供給您最佳的辦公空間，搭配月租方案更優惠，也有年租方案供您選擇，詳情請查看方案介紹頁面。</p>
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
