<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import bannerUrl from '@/assets/images/plan-banner.jpg';
import PageBanner from '@/components/PageBanner.vue';

const store = useSpaceStore();
const { getSpaceList, changePlan } = store;
const {
  activePlan, activeIdx, planList,
} = storeToRefs(store);

const pageTitle = ref('方案介紹');

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
        v-for="(item, index) in planList"
        :key="item"
        class="space-tab-item"
        :class="{'active': index === activeIdx }"
        @click="changePlan(index)">{{ item }}</div>
    </div>
    <div v-for="(item) in activePlan" :key="item.id">
      <div>{{ item.name }}</div>
      <div v-for="(i, idx) in item.type" :key="i">
        <template v-if="idx === 0">
          {{ i.price }}
        </template>
      </div>
    </div>
  </div>
</template>
