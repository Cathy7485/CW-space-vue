<!-- eslint-disable no-tabs -->
<template>
  <div class="home-service block">
    <LoadingComponent
      :active="isLoading"
      :is-full-page="fullPage"
      ></LoadingComponent>
    <swiper
      class="service-swiper"
      :slides-per-view="1"
      :breakpoints="{
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        }
      }"
      :space-between="50"
      :modules="modules"
      navigation>
      <swiper-slide v-for="item in spaceList" :key="item.id">
        <div class="service-item">
          <div class="img">
            <img :src="item.imageUrl" :alt="item.title">
          </div>
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div v-if="item.price === 0">免費</div>
            <div v-else>NT {{ item.price }} / 天</div>
            <hr>
            <div class="">
              <p class="">{{ item.description }}</p>
              <p v-html="item.content"></p>
            </div>
            <router-link
              :to="`/product/${item.id}`"
              class="button primary">更多資訊</router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { mapActions, mapState } from 'pinia';
import spaceStore from '@/stores/spaceDataStore';
import statusStore from '@/stores/statusStore';

export default {
  data() {
    return {
      title: '空間簡介',
      link: 'service',
      modules: [Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(spaceStore, ['spaceList']),
    ...mapState(statusStore, ['isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(spaceStore, ['getSpaceList']),
  },
  mounted() {
    this.getSpaceList();
  },
};
</script>
