<!-- eslint-disable arrow-body-style -->
<script setup>
import {
  ref, computed, onMounted,
} from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/shared-banner.jpg';
import btnImg from '@/assets/images/arrow-right.svg';

const defaultIdx = ref(0);
const spaceTabTitle = ref([
  '共享辦公空間',
  '獨立辦公空間',
  '會議室空間',
  '休息茶水間',
  '沙發休閒空間']);
const pageTitle = ref('空間介紹');

const store = useSpaceStore();
const {
  activeSpace, activeIdx, spaceDetail, spaceType,
} = storeToRefs(store);
const { getSpaceList, changeIdx } = store;

const isShow = computed(() => spaceDetail.value[0].price.free !== 0);

const addActive = (idx) => { defaultIdx.value = idx; };

onMounted(() => {
  getSpaceList();
  changeIdx(0);
});
</script>

<template>
  <PageBanner
    :images-url="bannerUrl"
    :page-title="pageTitle"></PageBanner>
  <div class="block container space-page mt-5">
    <div class="space-tabs">
      <div
        v-for="(title, idx) in spaceTabTitle"
        :key="title"
        class="space-tab-item"
        :class="{'active': idx === activeIdx }"
        @click="changeIdx(idx)">{{ title }}</div>
    </div>
    <div class="space-info" v-if="activeSpace">
      <div class="row">
        <div class="col-lg-5 d-flex flex-column">
          <div class="space-title">{{ activeSpace.name }}</div>
          <div class="d-block mb-3">
            <div>開放時間：</div>
            <p v-if="activeSpace.open.weekdays">週一到週五 {{ activeSpace.open.weekdays }} (不含例假日)</p>
          </div>
          <div class="gray-info">
            <div class="title">詳細資訊</div>
            <div class="p-3">{{ activeSpace.info }}</div>
          </div>
          <div class="mt-auto" v-if="isShow">
            <router-link
              to="reserve"
              class="button primary me-3"
            >立即預約</router-link>
            <router-link
              to="service"
              class="button"
            >方案價格</router-link>
          </div>
        </div>
        <div class="col-lg-7 gy-5 gy-lg-0 position-relative">
          <swiper-container
            class="space-img-box"
            loop="true"
            :navigation="{
              nextEl: '.custom-next'
            }">
            <swiper-slide
              class="space-img"
              v-for="(url, idx) in activeSpace.imgUrl"
              :key="url">
              <img :src="url" :alt="`圖片${idx}`">
            </swiper-slide>
          </swiper-container>
          <div class="custom-next space-next-btn">
            <img :src="btnImg" alt="下一張圖片">
          </div>
        </div>
      </div>
    </div>
    <h2 class="my-3 text-center" v-else>目前無資料</h2>
    <div class="space-detail" v-if="activeSpace">
      <template v-if="isShow">
        <div class="flex-title">
          <div class="title">空間資訊</div>
        </div>
        <div class="space-type-detail">
          <div class="type-img">
            <template v-if="defaultIdx >= activeSpace.imgUrl.length">
              <img :src="activeSpace.imgUrl[0]" alt="空間">
            </template>
            <template v-else>
              <img :src="activeSpace.imgUrl[defaultIdx]" alt="空間">
            </template>
          </div>
          <div class="type-btn">
            <swiper-container
              class="type-swiper type-btn-inner"
              :loop="false"
              :direction="'vertical'"
              :slidesPerView="2"
              :spaceBetween="12"
              :mousewheel="true"
              :breakpoints="{ 768: { slidesPerView: 3 }}"
              :navigation="{
                prevEl: '.type-btn .custom-prev',
                nextEl: '.type-btn .custom-next'
              }"
            >
              <swiper-slide
                :class="['btn', {'active': index === defaultIdx}]"
                v-for="(item, index) in spaceDetail"
                :key="item"
                @click="addActive(index)"
              >
                <div>
                  <span v-if="spaceType === 'seat'">座位</span>
                  <span v-if="spaceType === 'room'">空間</span>
                  {{ item.sort }}
                </div>
                <div>
                  <span v-if="item.price.day">
                    NT$ {{ item.price.day }} 元/日，
                  </span>
                  <span v-if="item.price.month">
                    NT$ {{ item.price.month }} 元/月
                  </span>
                  <span v-if="item.price.hour">
                    NT${{item.price.hour}}/小時
                  </span>
                </div>
                <div>容納人數：{{ item.capacity }} 人</div>
                <div class="bg-text">{{ item.sort }}</div>
              </swiper-slide>
            </swiper-container>
            <template v-if="activeSpace.imgUrl.length < 3">
              <button class="custom-prev"></button>
              <button class="custom-next"></button>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
