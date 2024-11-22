<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import 'swiper/css/bundle';

const store = useSpaceStore();
const { spaceList } = storeToRefs(store);
const { getSpaceList } = store;

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <div class="service-plan block">
    <div v-for="item in spaceList" :key="item.id">
      <div class="service-item">
        <div class="img">
          <img :src="item.imgUrl[0]" :alt="item.name">
        </div>
        <div class="info">
          <div class="title">{{ item.name }}</div>
          <template v-if="item.type.length > 1">
            <div v-if="Object.keys(item.type[0].price)[0] === 'day'">
              當日體驗 NT$ {{ Object.values(item.type[0].price)[0] }} / 天
            </div>
            <div v-if="Object.keys(item.type[0].price)[0] === 'month'">
              整月優惠 NT$ {{ Object.values(item.type[0].price)[0].length > 0
                ? '6000 起' : Object.values(item.type[0].price)[0] }} / 月
            </div>
            <div v-if="Object.keys(item.type[0].price)[0] === 'hour'">
              NT$ {{ Object.values(item.type[0].price)[0] }} / 時
            </div>
          </template>
          <template v-else>
            <div v-for="price in item.type" :key="price">
              <div v-if="Object.values(price.price)[0] === 0">免費使用</div>
            </div>
          </template>
          <hr>
          <div>
            <p>{{ item.info }}</p>
          </div>
          <router-link :to="`/space`" class="button primary">更多資訊</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
