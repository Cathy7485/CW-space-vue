<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/shared-banner.jpg';

const pageTitle = ref('空間介紹');

const store = useSpaceStore();
const { spaceList } = storeToRefs(store);
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
        :class="{'active': item.isActive }"
        @click="changeSpace(item)">{{ item.name }}</div>
    </div>
    <div class="row">
      <div class="col-lg-5 d-flex flex-column">
        <div class="space-title"></div>
        <div class="d-block mb-3">
          <span>開放時間：</span>
          <p></p>
          <span>費用：</span>
          <span>免費</span>
          <span class="fw-bold">NT $元</span>
        </div>
        <div class="space-page-info">
          <div class="title">詳細資訊</div>
          <div class="p-3"></div>
        </div>
        <div class="mt-auto">
          <router-link
            to="reserve"
            class="button primary me-3">立即預約</router-link>
            <router-link
            to="reserve"
            class="button">預約參觀</router-link>
        </div>
      </div>
      <div class="col-lg-7">
        <swiper-container>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>
        <!-- <swiper
        :slides-per-view="1"
        :space-between="20"
        :modules="modules"
        navigation
        >
          <swiper-slide
            v-for="(i,index) in tempData.imagesUrl"
            :key="index">
            <div class="img">
              <img :src="i" class="w-100" alt="">
            </div>
          </swiper-slide>
        </swiper> -->
      </div>
    </div>
  </div>
</template>
