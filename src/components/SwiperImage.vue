<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import 'swiper/swiper-bundle.css';

const store = useSpaceStore();
const { spaceList } = storeToRefs(store);
const { getSpaceList } = store;

const swiperEl = ref(null);

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <div class="swiper-container">
    <swiper-container
      class="space-swiper"
      ref="swiperEl"
      :navigation="{
        prevEl: '.custom-prev',
        nextEl: '.custom-next'
      }"
      pagination="true"
      :slides-per-view="3"
      :space-between="0"
    >
      <swiper-slide
        v-for="item in spaceList"
        :key="item.id"
      >
        <img :src="item.imgUrl[0]" :alt="item.name">
      </swiper-slide>
    </swiper-container>
    <button class="custom-prev swiper-button-prev">⬅️</button>
    <button class="custom-next swiper-button-next">➡️</button>
  </div>
</template>
