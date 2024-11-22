<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/contact-banner.jpg';
import PageContact from '@/components/PageContact.vue';

const pageTitle = ref('聯絡我們');
const activeIdx = ref(0);
const contactTabs = ref(['線上留言', '地理位置']);

const changeIdx = (idx) => { activeIdx.value = idx; };

</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="`${pageTitle} - ${contactTabs[activeIdx]}`"></PageBanner>
  <div class="block container mt-5">
    <div class="space-tabs">
      <div v-for="(item, index) in contactTabs" :key="item" class="space-tab-item"
        :class="{ 'active': index === activeIdx }" @click="changeIdx(index)">{{ item }}</div>
    </div>
    <PageContact v-if="activeIdx === 0" />
    <div v-else class="location-section">
      <div class="left">
        <div class="fs-4 fw-bold">地理位置</div>
        <div class="fw-bold mt-4">臺南市安平區永華路二段777號</div>
        <hr>
        <div>搭乘台南捷運綠線到府平公園站下車，步行3分鐘即可抵達CW space 中心</div>
      </div>
      <div class="right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.890343628232!2d120.16842215129887!3d22.991059489200016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7608a0982b33%3A0x1e55b069e1044555!2zNzA45Y-w5Y2X5biC5a6J5bmz5Y2A5rC46I-v6Lev5LqM5q61Nzc36Jmf!5e0!3m2!1szh-TW!2stw!4v1732238779614!5m2!1szh-TW!2stw"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>
