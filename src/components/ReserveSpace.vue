<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const store = useSpaceStore();
const { spacePlan } = storeToRefs(store);
const { getSpaceList } = store;
const step = ref(2);
const stepText = ['選擇空間', '選擇時段/座位', '填寫資料', '預約完成'];
const picked = ref('共享辦公空間');
const date = ref();

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <ul class="reverse-step">
    <li
      :class="['step', { 'active': (index + 1 ) === step}]"
      v-for="(text, index) in stepText"
      :key="text"
    >
      <div class="circle">{{ index+1 }}</div>
      <div class="text">{{ text }}</div>
    </li>
  </ul>
  <div class="reserve-list" v-if="step === 1">
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
    </fieldset>
  </div>
  <div v-if="step === 2">
    <div class="reserve-list form-list">
      <dl>
        <dt class="form-title">
          您目前選擇的空間
        </dt>
        <dd class="form-info">
          {{ picked }}
        </dd>
      </dl>
      <dl>
        <dt class="form-title">
          <label for="user-name">預約日期<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <VueDatePicker v-model="date" :enable-time-picker="false" />
        </dd>
      </dl>
      <dl>
        <dt class="form-title">
          <label for="seat">座位選擇<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <select name="seat" id="">
            <option value="1">座位1號</option>
          </select>
        </dd>
      </dl>
    </div>
  </div>
  <div class="btn-block">
    <router-link to="/" class="button" title="回上頁">回上頁</router-link>
    <router-link to="" class="button primary" title="下一步">下一步</router-link>
  </div>
</template>
