<!-- eslint-disable no-tabs -->
<template>
  <HomeBlockTitle :title="title" :link="link" />
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
      <swiper-slide>
        <div class="service-item">
          <div class="img">
            <img src="https://github.com/Cathy7485/CW-space/blob/main/images/index-plan01.jpg?raw=true" alt="共享辦公空間">
          </div>
          <div class="info">
            <div class="title">共享辦公空間</div>
            <div>單日體驗 NT 300 / 天,單月方案 NT3,500 / 月</div>
            <hr>
            <div class="">
              <p class="">週一至週五 8:00-18:00（不含例假日)</p>
              <p class="">獨立寬敞座位，穩定高速wifi、獨立插座，適合SOHO族、一人公司者，公共空間設備皆可自由使用</p>
            </div>
            <a href="#!" class="button primary">更多資訊</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="service-item">
          <div class="img">
            <img src="https://github.com/Cathy7485/CW-space/blob/main/images/index-plan02.jpg?raw=true" alt="共享辦公空間">
          </div>
          <div class="info">
            <div class="title">獨立辦公空間</div>
            <div>NT 6,000/月,NT 6,000/月,NT 10,000/月</div>
            <hr>
            <div class="">
              <p class="">週一至週五 8:00-21:00（不含例假日）</p>
              <p class="">
                獨立寬敞座位，穩定高速wifi、獨立插座，每個座位皆享有大桌面、可上鎖辦公抽屜，人體工學減壓電腦椅，讓您舒服久坐辦公，公共空間設備皆可自由使用</p>
            </div>
            <a href="#!" class="button primary">更多資訊</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="service-item">
          <div class="img">
            <img src="https://github.com/Cathy7485/CW-space/blob/main/images/index-plan03.jpg?raw=true" alt="共享辦公空間">
          </div>
          <div class="info">
            <div class="title">會議室空間</div>
            <div>單日使用 NT 500/小時 (每次 2小時起租)</div>
            <hr>
            <div class="">
              <p class="">週一至週五 8:00-21:00（不含例假日)</p>
              <p class="">獨立寬敞座位，穩定高速wifi，簡報投影設備，可連接電腦或手機，專屬獨立隔音空間，會議簡報更專注</p>
            </div>
            <a href="#!" class="button primary">更多資訊</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation } from 'swiper/modules';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'swiper/css';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'swiper/css/navigation';

export default {
  data() {
    return {
      title: '方案介紹',
      link: 'service',
      modules: [Navigation],
    };
  },
  components: {
    HomeBlockTitle,
    Swiper,
    SwiperSlide,
  },
};
</script>
