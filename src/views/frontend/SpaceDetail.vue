<script setup>
import PageBanner from '@/components/PageBanner.vue';
</script>

<template>
  <PageBanner
    :images-url="thisSpace.imagesUrl"
    :page-title="thisSpace.title"></PageBanner>
  <div class="block container space-page mt-5">
    <div class="space-tabs">
      <routerLink
        v-for="item in spaceList"
        :key="item.id"
        class="space-tab-item"
        :class="{'active': item.isActive }"
        :to="`/product/${item.id}`"
        @click.prevent="changeSpace(item.id)"
        >{{ item.title }}</routerLink>
    </div>
    <div class="row">
      <div class="col-lg-5 d-flex flex-column">
        <div class="space-title">{{ thisSpace.title }}</div>
        <div class="mb-3">
          <span>開放時間：</span>
          <p>{{ thisSpace.description }}</p>
          <span>費用：</span>
          <span v-if="thisSpace.price === 0">免費</span>
          <span class="fw-bold" v-else>NT ${{ thisSpace.price }}元</span>
        </div>
        <div class="space-page-info">
          <div class="title">詳細資訊</div>
          <div class="p-3" v-html="thisSpace.content"></div>
        </div>
        <div class="mt-auto" v-if="thisSpace.price !== 0">
          <router-link
            :to="{ path: '/reserve' }"
            class="button primary me-3">立即預約</router-link>
          <router-link
            :to="{ path: '/reserve' }"
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
            v-for="(i,index) in thisSpace.imagesUrl"
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
