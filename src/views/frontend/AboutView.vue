<script setup>
import { ref, watch, onMounted } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/about-banner.jpg';
import spaceImg01 from '@/assets/images/shared01.jpg';
import spaceImg02 from '@/assets/images/office02.jpg';
import spaceImg03 from '@/assets/images/meeting02.jpg';
import spaceImg04 from '@/assets/images/pantry-room.jpg';
import spaceImg05 from '@/assets/images/lounge.jpg';

const pageTitle = ref('關於我們');

const tempData = ref([]);
const defaultIndex = ref(0); // 預設值

const spaceList = ref([
  { id: 1, title: '共同辦公空間', url: spaceImg01 },
  { id: 2, title: '獨立辦公空間', url: spaceImg02 },
  { id: 3, title: '會議室空間', url: spaceImg03 },
  { id: 4, title: '休息茶水間', url: spaceImg04 },
  { id: 5, title: '沙發休閒空間', url: spaceImg05 },
]);

const activeSpace = (index) => {
  defaultIndex.value = index;
};

const initSpace = () => {
  if (defaultIndex.value === 0) [tempData.value] = spaceList.value;
};

watch(defaultIndex, (newIndex) => {
  const target = spaceList.value.filter((item) => (item.id - 1) === newIndex);
  // eslint 錯誤 解構 => tempData.value = target[0] 改成下面寫法
  [tempData.value] = target;
});

onMounted(() => {
  initSpace();
});
</script>

<template>
  <PageBanner :images-url="bannerUrl" :page-title="pageTitle"></PageBanner>
  <div class="about content">
    <div class="container about-page-bg">
      <div class="row block">
        <div class="col-lg-6">
          <img class="w-100" src="@/assets/images/faq-banner.jpg" alt="">
        </div>
        <div class="col-lg-6">
          <div class="about-page-info">
            <p>CW space 致力打造一個舒適的辦公空間，無論您是SOHO族還是新創企業，都可以享有高品質的舒適辦公空間，無須高額費用即可享用</p>
            <p class="mt-4">最適合新創企業、SOHO族、斜槓專家</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <ul class="space-photos img-outer">
        <li class="space-item">
          <img :src="tempData.url" :alt="tempData.title">
        </li>
      </ul>
      <div class="space-name">
        <button type="button"
          v-for="(item, idx) in spaceList"
          :class="['space-name-item', {'active': defaultIndex === idx }]"
          :key="item.id"
          @click.prevent="activeSpace(idx)"
          >
          <span class="me-3">{{ '0' + item.id }}</span>
          {{ item.title }}
        </button>
      </div>
    </div>
    <div class="container block icons pt-5">
      <div class="row">
        <div class="box-title">提供給您最佳的辦公環境</div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-safe.png" alt="24小時保全系統">
          </div>
          <div class="icon-title">24小時保全系統</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-wifi.png" alt="穩定wifi網路">
          </div>
          <div class="icon-title">穩定wifi網路</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-wind.png" alt="免費空調水電均含在內">
          </div>
          <div class="icon-title">免費空調水電均含在內</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-coffee.png" alt="免費茶水咖啡供應">
          </div>
          <div class="icon-title">免費茶水咖啡供應</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-microwave.png" alt="冰箱及微波爐飲食好方便">
          </div>
          <div class="icon-title">冰箱及微波爐飲食好方便</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-clean.png" alt="公共空間定期清潔服務">
          </div>
          <div class="icon-title">公共空間定期清潔服務</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-paper.png" alt="噴墨影印事務機">
          </div>
          <div class="icon-title">噴墨影印事務機</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-mail.png" alt="信件包裹代收">
          </div>
          <div class="icon-title">信件包裹代收</div>
        </div>
        <div class="col-sm-4 gy-5 d-flex flex-column text-center">
          <div class="img-box">
            <img src="@/assets/images/i-locker.png" alt="個人上鎖置物空間">
          </div>
          <div class="icon-title">個人上鎖置物空間</div>
        </div>
      </div>
    </div>
  </div>
</template>
