<script setup>
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import 'swiper/css/bundle';
import LightBox from './LightBox.vue';

const store = useSpaceStore();
const { imagesList } = storeToRefs(store);
const { getSpaceList } = store;

const swiperEl = ref(null);

const isOpen = ref(false);
const currentImgIndex = ref(0);

const currentUrl = computed(() => imagesList.value[currentImgIndex.value]);

const handlerShowImg = (idx) => {
  isOpen.value = true;
  currentImgIndex.value = idx;
};

const handlerCloseLightBox = (e) => {
  if (e.target.tagName === 'DIV') {
    isOpen.value = false;
  }
};

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
        v-for="(imgUrl, idx) in imagesList"
        :key="imgUrl"
        @click="handlerShowImg(idx)"
      >
        <img
          :src="imgUrl"
        >
      </swiper-slide>
    </swiper-container>
    <teleport to='body'>
      <LightBox
        @onCloseLightBox="handlerCloseLightBox"
        @onShowImg="handlerShowImg"
        :isOpen="isOpen"
        :currentUrl="currentUrl"
        :imagesList="imagesList"
      />
    </teleport>
  </div>
</template>
