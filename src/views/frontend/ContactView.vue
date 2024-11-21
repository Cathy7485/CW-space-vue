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
    <PageContact />
  </div>
</template>
