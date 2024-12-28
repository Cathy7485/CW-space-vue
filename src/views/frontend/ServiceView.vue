<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import bannerUrl from '@/assets/images/plan-banner.jpg';
import PageBanner from '@/components/PageBanner.vue';

const store = useSpaceStore();
const { getSpaceList, changeIdx, getPlanList } = store;
const {
  activePlan, activeIdx, planList,
} = storeToRefs(store);

const pageTitle = ref('方案介紹');
const planText = ref(['日租方案', '月租方案', '年租方案']);

onMounted(() => {
  getSpaceList();
  activeIdx.value = 0;
});
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container mt-5">
    <div class="space-tabs">
      <div
        v-for="(item, index) in planText"
        :key="item"
        class="space-tab-item"
        :class="{'active': index === activeIdx }"
        @click="changeIdx(index)">{{ item }}</div>
    </div>
    <template v-if="activePlan.length > 0">
      <div class="service-detail" v-for="item in activePlan" :key="item.id">
        <div class="img">
          <img :src="item.imgUrl[0]" alt="">
        </div>
        <div class="right">
          <div class="name">{{ item.name }}</div>
            <div v-for="plan in getPlanList(item.name)" :key="plan">
              NT$ {{ plan.price[planList[activeIdx]] }} /
              <span v-if="planList[activeIdx] === 'day'">日</span>
              <span v-else-if="planList[activeIdx] === 'month'">月</span>
              <span v-if="item.name === '獨立辦公空間'"> ( {{ plan.sort }} 辦公室 )</span>
            </div>
          <div class="text-bg">{{ item.enName }}</div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="d-flex align-item-center flex-column">
        <h2 class="text-center mb-3">不限空間種類，每月租金打0.8折，會議室免費使用</h2>
        <h4 class="text-center mb-3">細節請來電聯繫專人為您服務！</h4>
        <h4 class="text-center">
          <a class="text-danger" href="tel:+886-6-666-6666">06-666-6666</a>
        </h4>
      </div>
    </template>
  </div>
</template>
