<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';

const store = useSpaceStore();
const { spaceList } = storeToRefs(store);
const { getSpaceList } = store;

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <div class="home-service block">
    <swiper-container
      class="service-swiper"
      navigation="true"
      :slides-per-view="2"
      :space-between="32"
    >
      <swiper-slide
        v-for="item in spaceList"
        :key="item.id">
        <div class="service-item">
          <div class="img">
            <img :src="item.imgUrl[0]" :alt="item.name">
          </div>
          <div class="info">
            <div class="title">{{ item.name }}</div>
            <div>{{ item.price }}</div>
            <hr>
            <div>
              <p>{{ item.info }}</p>
            </div>
            <router-link :to="`/product/${item.id}`" class="button primary">更多資訊</router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>
