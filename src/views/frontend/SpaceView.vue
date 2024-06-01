<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container space-page mt-5">
    <div class="space-tabs">
      <div
        v-for="item in spaceData"
        :key="item.id"
        class="space-tab-item"
        :class="{'active': item.isActive }"
        @click="changeSpace(item)">{{ item.title }}</div>
    </div>
    <div class="row">
      <div class="col-lg-5 d-flex flex-column">
        <div class="space-title">{{ tempData.title }}</div>
        <div>
          <span>開放時間：</span>
          <p>{{ tempData.description }}</p>
          <span>價錢：</span>
          <p v-if="tempData.price === 0">免費</p>
          <p v-else>{{ tempData.price }}</p>
        </div>
        <div class="space-page-info">
          <div class="title">詳細資訊</div>
          <div class="p-3" v-html="tempData.content"></div>
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
        <swiper
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
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/shared-banner.jpg';
import { mapActions, mapState } from 'pinia';
import spaceStore from '@/stores/spaceDataStore';

export default {
  data() {
    return {
      isActive: false,
      bannerUrl,
      pageTitle: '環境空間',
      tempData: {
        title: '共享辦公空間',
        price: '300',
        content: '<p>- 獨立寬敞座位<br>- 穩定高速wifi、獨立插座<br>- 適合SOHO族、一人公司者<br>- 公共空間設備皆可自由使用</p>',
        description: '週一至週五 8:00-18:00（不含例假日)',
        imagesUrl: [
          'https://github.com/Cathy7485/CW-space-vue/blob/main/src/assets/images/shared02.jpg?raw=true',
        ],
      },
      modules: [Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    PageBanner,
  },
  methods: {
    ...mapActions(spaceStore, ['getSpace']),
    spaceTitleClass() {
      let target;
      this.spaceData.forEach((element) => {
        target = element;
        if (element.title === this.tempData.title) {
          target.isActive = true;
        } else {
          target.isActive = false;
        }
      });
    },
    changeSpace(item) {
      this.tempData = item;
      this.spaceTitleClass();
    },
  },
  computed: {
    ...mapState(spaceStore, ['spaceData']),
  },
  mounted() {
    this.getSpace();
  },
  updated() {
    // 取完資料再增加樣式
    this.spaceTitleClass();
  },
};
</script>
