<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import 'swiper/css/bundle';

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
      :navigation="true"
      :pagination="true"
      :slidesPerView="1"
      :spaceBetween="0"
      :breakpoints="{
        768: { slidesPerView: 2},
        992: { slidesPerView: 3}
      }"
    >
      <swiper-slide
        v-for="item in spaceList"
        :key="item.id"
      >
        <img :src="item.imgUrl[0]" :alt="item.name">
      </swiper-slide>
    </swiper-container>
  </div>
</template>
