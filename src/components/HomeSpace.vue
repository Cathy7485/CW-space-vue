<!-- eslint-disable import/extensions -->
<template>
  <div class="home-space block">
    <HomeBlockTitle :title="title" :link="link" />
    <swiper
      class="space-swiper"
      :slides-per-view="1"
      :breakpoints="{
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3}
      }"
      :space-between="0"
      :modules="modules"
      navigation
      :pagination="{ clickable: true }">
      <swiper-slide v-for="item in spaceData" :key="item.id">
        <img :src="item.imageUrl" :alt="item.title">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Navigation, Pagination,
} from 'swiper/modules';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'swiper/css';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'swiper/css/pagination';
import { mapActions, mapState } from 'pinia';
import spaceStore from '@/stores/spaceDataStore';

export default {
  data() {
    return {
      title: '環境空間',
      link: 'space',
      modules: [Navigation, Pagination],
    };
  },
  components: {
    HomeBlockTitle,
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions(spaceStore, ['getSpace']),
  },
  computed: {
    ...mapState(spaceStore, ['spaceData']),
  },
  mounted() {
    this.getSpace();
  },
};
</script>
