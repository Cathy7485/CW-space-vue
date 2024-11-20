<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/visit-banner.jpg';

const pageTitle = ref('聯絡我們-預約參觀');
const activeIdx = ref(0);
const contactTabs = ref(['預約參觀', '預約空間', '線上留言', '地理位置']);

const changeIdx = (idx) => { activeIdx.value = idx; };
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="container block mt-5">
    <div class="space-tabs">
      <div
        v-for="(item, index) in contactTabs"
        :key="item"
        class="space-tab-item"
        :class="{'active': index === activeIdx }"
        @click="changeIdx(index)">{{ item }}</div>
    </div>
  </div>
</template>
