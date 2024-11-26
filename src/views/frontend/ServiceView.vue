<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import bannerUrl from '@/assets/images/plan-banner.jpg';
import PageBanner from '@/components/PageBanner.vue';

const store = useSpaceStore();
const { getSpaceList, changePlan } = store;
const {
  activePlan, activeIdx,
} = storeToRefs(store);

const pageTitle = ref('方案介紹');
const planText = ref(['日租方案', '月租方案', '年租方案']);

onMounted(() => {
  getSpaceList();
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
        @click="changePlan(index)">{{ item }}</div>
    </div>
    <template v-if="activePlan.length > 0">
      <div class="service-detail" v-for="item in activePlan" :key="item.id">
        <div class="img">
          <img :src="item.imgUrl[0]" alt="">
        </div>
        <div class="right">
          <div class="name">{{ item.name }}</div>
          <div v-if="item.type[0].capacity === 1">
            <template v-if="activeIdx === 0">
              NT$ {{ item.type[0].price['day'] }} 元/日
            </template>
            <template v-if="activeIdx === 1">
              NT$ {{ item.type[0].price['month'] }} 元/月
            </template>
          </div>
          <div v-else>
            <template v-if="item.type[0].price['month']">
              <div class='mb-2'>NT$ {{ item.type[0].price['month'] }} 元/月 (A1、B1 辦公室)</div>
              <div>NT$ {{ item.type[2].price['month']  }} 元/月 (C1 辦公室)</div>
            </template>
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
