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
  <ul class="reverse-step">
    <li class="step active">
      <div class="circle">1</div>
      <div class="text">選擇空間</div>
    </li>
    <li class="step">
      <div class="circle">2</div>
      <div class="text">選擇時段/座位</div>
    </li>
    <li class="step">
      <div class="circle">3</div>
      <div class="text">填寫資料</div>
    </li>
    <li class="step">
      <div class="circle">4</div>
      <div class="text">預約完成</div>
    </li>
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
