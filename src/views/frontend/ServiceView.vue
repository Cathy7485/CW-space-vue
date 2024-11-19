<script setup>
import { ref } from 'vue';
import bannerUrl from '@/assets/images/plan-banner.jpg';
import PageBanner from '@/components/PageBanner.vue';
import ServicePlan from '@/components/SwiperPlan.vue';

const activeIdx = ref(0);
const spacePlan = ref(['日租方案', '月租方案', '年租方案']);
const pageTitle = ref('方案介紹');

const changeIdx = (idx) => { activeIdx.value = idx; };
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <div class="space-tabs">
      <div
        v-for="(item, index) in spacePlan"
        :key="item"
        class="space-tab-item"
        :class="{'active': index === activeIdx }"
        @click="changeIdx(index)">{{ item }}</div>
    </div>
    <ServicePlan />
  </div>
</template>
