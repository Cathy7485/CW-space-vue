<!-- eslint-disable arrow-body-style -->
<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/shared-banner.jpg';
import btnImg from '@/assets/images/arrow-right.svg';
import SpaceDetail from '@/components/SpaceDetail.vue';

const pageTitle = ref('空間介紹');

const store = useSpaceStore();
const { spaceList, activeSpace, activeIdx } = storeToRefs(store);
const { getSpaceList, changeIdx } = store;

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container space-page mt-5">
    <div class="space-tabs">
      <div
        v-for="item in spaceList"
        :key="item.id"
        class="space-tab-item"
        :class="{'active': item.id === activeIdx }"
        @click="changeIdx(item.id)">{{ item.name }}</div>
    </div>
    <div class="space-info">
      <div class="row" v-for="item in activeSpace" :key="item.id">
        <div class="col-lg-5 d-flex flex-column">
          <div class="space-title">{{ item.name }}</div>
          <div class="d-block mb-3">
            <div>開放時間：</div>
            <p v-if="item.open.weekdays">週一到週五 {{ item.open.weekdays }} (不含例假日)</p>
          </div>
          <div class="gray-info">
            <div class="title">詳細資訊</div>
            <div class="p-3">{{ item.info }}</div>
          </div>
          <div class="mt-auto">
            <router-link
              to="reserve"
              class="button primary me-3">立即預約</router-link>
              <router-link
              to="service"
              class="button">方案價格</router-link>
          </div>
        </div>
        <div class="col-lg-7 gy-5 gy-lg-0 position-relative">
          <swiper-container
            class="space-img-box"
            loop="true"
            :navigation="{
              nextEl: '.custom-next'
            }">
            <swiper-slide
              class="space-img"
              v-for="(url, idx) in item.imgUrl"
              :key="url">
              <img :src="url" :alt="`圖片${idx}`">
            </swiper-slide>
          </swiper-container>
          <div class="custom-next space-next-btn">
            <img :src="btnImg" alt="下一張圖片">
          </div>
        </div>
      </div>
    </div>
    <div class="space-detail">
      <SpaceDetail />
    </div>
  </div>
</template>
