<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';

const store = useSpaceStore();
const { spacePlan } = storeToRefs(store);
const { getSpaceList } = store;

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <ul>
    <li>選擇空間</li>
    <li>選擇時段/座位</li>
    <li>填寫資料</li>
    <li>預約完成</li>
  </ul>
  <div class="reserve-list step-one">
    <fieldset>
      <dl>
        <dt>
          <span class="">想要預約哪個空間*</span>
        </dt>
        <dd class="text-end">
          <span class="choice-space">您目前選擇的是：共享辦公空間</span>
        </dd>
      </dl>
      <dl class="option" v-for="space in spacePlan" :key="space.id">
        <label for="Coworking" class="">
          <dt class="left">
            <div class="space-img"><img :src="space.imgUrl[0]" :alt="space.name"></div>
          </dt>
          <dd class="right">
            <div class="name">{{ space.name }}</div>
          </dd>
          <span class="bg-text">{{ space.enName }}</span>
        </label>
      </dl>
      <div class="btn-block">
        <router-link to="/" class="button" title="回上頁">回上頁</router-link>
        <router-link to="" class="button primary" title="下一步">下一步</router-link>
      </div>
    </fieldset>
  </div>
</template>
