<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/faq-banner.jpg';
import faq from '@/components/FrequentlyAskedQuestions.vue';

const pageTitle = ref('常見問題');
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container block mt-5">
    <h3 class="mb-3 fw-bold">常見問題</h3>
    <faq />
    <h3 class="mb-3 fw-bold">注意事項</h3>
    <ul class="notice-list">
      <li>1. 共享空間歡迎各新創公司、個人工作室、SOHO族入駐使用，不接受博弈產業公司類型入駐或承租，敬請見諒</li>
      <li>2. 入駐共同工作空間需要繳保證金兩個月租金。保證金於入駐當天會轉為押金，並在結束合約當日檢查無毀損問題時返還</li>
      <li>3. 公共區域應保持輕聲細語，請勿大聲喧嘩，打擾到其他人員</li>
      <li>4. 承租空間須自行清潔環境，請愛惜共享空間內所有設備及裝潢，若發現造成家具或設備損毀，需額外支付維護費用</li>
      <li>5. 公共空間會有專人定期打掃整潔，請各入駐夥伴做好資源回收分類即可</li>
    </ul>
  </div>
</template>
