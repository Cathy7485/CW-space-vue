<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';

const store = useSpaceStore();
const { spacePlan } = storeToRefs(store);
const { getSpaceList } = store;
const picked = ref('共享辦公空間');

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
          <span class="">想要預約哪個空間<span class="text-danger ms-2">*</span></span>
        </dt>
        <dd class="text-end text-secondary fs-6 fw-bold mt-2">
          <span class="choice-space">您目前選擇的是：{{ picked }}</span>
        </dd>
      </dl>
      <dl class="option" v-for="space in spacePlan" :key="space.id">
        <input type="radio" name="space" :id="space.name" :value="space.name" v-model="picked">
        <label :for="space.name">
          <dd>
            <div class="left">
              <div class="space-img"><img :src="space.imgUrl[0]" :alt="space.name"></div>
            </div>
            <div class="right">
              <div class="name">{{ space.name }}</div>
            </div>
            <div class="bg-text">{{ space.enName }}</div>
          </dd>
        </label>
      </dl>
      <div class="btn-block">
        <router-link to="/" class="button" title="回上頁">回上頁</router-link>
        <router-link to="" class="button primary" title="下一步">下一步</router-link>
      </div>
    </fieldset>
  </div>
</template>
