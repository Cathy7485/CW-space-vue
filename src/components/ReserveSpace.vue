<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import { useStatusStore } from '@/stores/statusStore';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// import axios from 'axios';

// const { VITE_DATA_URL } = import.meta.env;
// const fromData = ref({
//   name: '',
//   company: '',
//   phone: '',
//   email: '',
//   space: '',
//   appointment: '',
//   time: '',
// });
const router = useRouter();

const store = useSpaceStore();
const { spacePlan, pickedType } = storeToRefs(store);
const { getSpaceList, changeSpaceId } = store;

const statusStore = useStatusStore();
const { isLoading } = storeToRefs(statusStore);

const step = ref(1);
const stepText = ['選擇空間', '選擇時段/座位', '填寫資料', '預約完成'];
const picked = ref('共享辦公空間');
const date = ref(new Date());

// const submitVisit = () => {
//   axios.post(`${VITE_DATA_URL}/reserves`, fromData.value);
// };

const goNextStep = () => {
  if (step.value === 4) return;
  step.value += 1;
};
const goBackStep = () => {
  if (step.value === 1) return;
  step.value -= 1;
};
const goBack = () => {
  router.go(-1);
};

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
    <LoadingComponent :active="isLoading" />
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
        <input
          type="radio"
          name="space"
          :id="space.id"
          :value="space.name"
          v-model="picked"
          @click="changeSpaceId(space.id)"
        >
        <label :for="space.id">
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
    <div class="btn-block">
    <router-link to="/" @click="goBack" class="button" title="回首頁">回首頁</router-link>
    <button type="button" @click="goNextStep" class="button primary" title="下一步">下一步</button>
  </div>
  </div>
  <div v-if="step === 2">
    <div class="reserve-list form-list">
      <dl class="row align-items-center">
        <dt class="form-title col-md-2">
          <label>
            目前選擇
          </label>
        </dt>
        <dd class="form-info col-md-10 mb-0">
          {{ picked }}
        </dd>
      </dl>
      <dl class="row align-items-center">
        <dt class="form-title col-md-2">
          <label for="user-name">預約日期<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info col-md-10 mb-0">
          <VueDatePicker v-model="date" :enable-time-picker="false" />
        </dd>
      </dl>
      <dl class="row align-items-center" >
        <dt class="form-title col-md-2">
          <label for="seat">
            <span v-if="picked === '共享辦公空間'">座位選擇</span>
            <span v-else>空間選擇</span>
            <span class="text-danger ms-2">*</span>
          </label>
        </dt>
        <dd class="form-info col-md-10 mb-0">
          <select name="seat" id="seat">
            <option
              v-for="item in pickedType"
              :key="item"
              :value="item.sort"
            >{{ item.sort }}</option>
          </select>
        </dd>
      </dl>
    </div>
    <div class="btn-block">
      <button type="button" @click="goBackStep" class="button" title="回上一步">回上一步</button>
      <button type="button" @click="goNextStep" class="button primary" title="下一步">下一步</button>
    </div>
  </div>
</template>
