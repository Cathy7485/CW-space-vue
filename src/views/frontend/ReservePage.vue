<script setup>
import { ref } from 'vue';
import ReserveVisit from '@/components/ReserveVisit.vue';
import ReserveSpace from '@/components/ReserveSpace.vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/visit-banner.jpg';

const activeIdx = ref(0);
const contactTabs = ref(['預約參觀', '預約空間']);

const changeIdx = (idx) => { activeIdx.value = idx; };
</script>

<template>
  <PageBanner :images-url="bannerUrl" :page-title="contactTabs[activeIdx]"></PageBanner>
  <div class="container block mt-5">
    <div class="space-tabs">
      <div v-for="(item, index) in contactTabs" :key="item" class="space-tab-item"
        :class="{ 'active': index === activeIdx }" @click="changeIdx(index)">{{ item }}</div>
    </div>
    <ReserveVisit v-if="activeIdx === 0" />
    <ReserveSpace v-else />
  </div>
</template>
