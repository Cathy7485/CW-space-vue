<!-- eslint-disable no-tabs -->
<template>
  <div class="home-service block">
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
      <swiper-slide v-for="item in spaceData" :key="item.id">
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
            <a href="#!" class="button primary">更多資訊</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation } from 'swiper/modules';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'swiper/css';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'swiper/css/navigation';
import { mapActions, mapState } from 'pinia';
import spaceStore from '@/stores/spaceDataStore';

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
    ...mapState(spaceStore, ['spaceData']),
  },
  methods: {
    ...mapActions(spaceStore, ['getSpace']),
  },
  mounted() {
    this.getSpace();
  },
};
</script>
