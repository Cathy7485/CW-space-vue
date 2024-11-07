<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useNewsStore } from '@/stores/newsStore';

const store = useNewsStore();
const { newsList } = storeToRefs(store);
const { getNewsList } = store;

onMounted(() => getNewsList());
</script>

<template>
  <ul class="news-list">
    <li class="news-item" v-for="item in newsList" :key="item.id">
      <div class="item">
        <div class="news-title">{{ item.title }}</div>
        <div class="item-block">
          <div class="date" v-timeformat="item.date"></div>
          <div :class=" item.tag ? 'tag' : '' ">{{ item.tag ? '置頂' : '' }}</div>
        </div>
      </div>
    </li>
  </ul>
</template>
