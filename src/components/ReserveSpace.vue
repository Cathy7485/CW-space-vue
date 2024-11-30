<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import { defineRule } from 'vee-validate';
import dayjs from 'dayjs';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

const isProcessing = ref(false);
const date = ref(null);
const reserveData = ref({
  appointment: null,
  company: '',
  name: '',
  phone: '',
  email: '',
  plan: '',
  space: '',
  time: '',
});

defineRule('isPhone', (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) || '需要正確的電話號碼';
});

const router = useRouter();

const store = useSpaceStore();
const { spacePlan, pickedType } = storeToRefs(store);
const { getSpaceList, changeSpaceId } = store;

const step = ref(1);
const stepText = ['選擇空間', '選擇時段/座位', '填寫資料', '預約完成'];
const picked = ref('共享辦公空間');

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

const submitReveres = async () => {
  date.value = dayjs(date.value).unix();
  const fromData = {
    appointment: date.value,
    company: reserveData.value.company,
    name: reserveData.value.name,
    phone: reserveData.value.phone,
    email: reserveData.value.email,
    plan: reserveData.value.plan,
    space: picked.value,
    time: reserveData.value.time,
  };

  console.log(fromData);
  try {
    await axios.post(`${VITE_DATA_URL}/reserves`, fromData);
    isProcessing.value = true;
    goNextStep();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <ul class="reserve-step">
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
      <fieldset>
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
            <label for="user-name">預約方案<span class="text-danger ms-2">*</span></label>
          </dt>
          <dd class="form-info col-md-10 mb-0">
            <select name="reserve-plan" v-model="reserveData.plan" id="reserve-plan">
              <option value="" selected disabled>請選擇</option>
              <template v-if="picked === '共享辦公空間'">
                <option value="day">日租</option>
                <option value="month">月租</option>
              </template>
              <template v-if="picked === '獨立辦公空間'">
                <option value="month">月租</option>
              </template>
              <template v-if="picked === '會議室空間'">
                <option value="day">小時</option>
              </template>
            </select>
          </dd>
        </dl>
        <dl class="row align-items-center">
          <dt class="form-title col-md-2">
            <label for="user-name">預約日期<span class="text-danger ms-2">*</span></label>
          </dt>
          <dd class="form-info col-md-10 mb-0">
            <DatePicker
              class="date-picker"
              format="YYYY-MM-DD"
              type="date"
              value-type="timestamp"
              v-model:value="date"
              placeholder="請選擇日期"
            />
          </dd>
        </dl>
        <dl class="row align-items-center">
          <dt class="form-title col-md-2">
            <label for="user-name">預約時段</label>
          </dt>
          <dd class="form-info col-md-10 mb-0">
            <select name="time" id="time" v-model="reserveData.time">
              <template v-if="picked !== '會議室空間'">
                <option disabled value="">請選擇時段</option>
                <option value="08:00-18:00">08:00-18:00</option>
              </template>
              <template v-else>
                <option disabled value="">請選擇時段</option>
                <option value="09:00-11:00">09:00-11:00</option>
                <option value="11:00-13:00">11:00-13:00</option>
                <option value="13:00-15:00">13:00-15:00</option>
                <option value="15:00-17:00">15:00-17:00</option>
              </template>
            </select>
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
      </fieldset>
    </div>
    <div class="btn-block">
      <button type="button" @click="goBackStep" class="button" title="回上一步">回上一步</button>
      <button type="button" @click="goNextStep" class="button primary" title="下一步">下一步</button>
    </div>
  </div>
  <div>
    <template v-if="step === 3">
      <VForm
        v-if="!isProcessing"
        class="reserve-list form-list"
        @submit="submitReveres"
        v-slot="{ errors, meta }"
      >
        <dl class="row align-items-center">
          <dt class="form-title col-md-2">
            <label for="name">姓名<span class="text-danger ms-2">*</span></label>
          </dt>
          <dd class="form-info col-md-10 mb-0">
            <VField
              id="name"
              type="text"
              :class="['form-control', { 'is-invalid': errors['name'] }]"
              name="name"
              v-model="reserveData.name"
              placeholder="請輸入姓名"
              rules="required"
            />
            <ErrorMessage class="invalid-feedback" name="name"></ErrorMessage>
          </dd>
        </dl>
        <dl class="row align-items-center">
          <dt class="form-title col-md-2">
            <label for="name">公司名稱<span class="text-danger ms-2">*</span></label>
          </dt>
          <dd class="form-info col-md-10 mb-0">
            <VField
              id="company"
              type="text"
              :class="['form-control', { 'is-invalid': errors['company'] }]"
              name="company"
              v-model="reserveData.company"
              placeholder="請輸入公司名稱"
              rules="required"
            />
            <ErrorMessage class="invalid-feedback" name="company"></ErrorMessage>
          </dd>
        </dl>
        <dl class="row align-items-center">
          <dt class="form-title col-md-2">
            <label for="phone">聯絡電話<span class="text-danger ms-2">*</span></label>
          </dt>
          <dd class="form-info col-md-10 mb-0">
            <VField
              id="phone"
              type="phone"
              :class="['form-control', { 'is-invalid': errors['phone'] }]"
              name="phone"
              v-model="reserveData.phone"
              placeholder="請輸入聯絡電話"
              rules="isPhone|required"
            />
            <ErrorMessage class="invalid-feedback" name="phone"></ErrorMessage>
          </dd>
        </dl>
        <dl class="row align-items-center">
          <dt class="form-title col-md-2">
            <label for="email">電子信箱<span class="text-danger ms-2">*</span></label>
          </dt>
          <dd class="form-info col-md-10 mb-0">
            <input
              id="email"
              type="email"
              :class="['form-control', { 'is-invalid': errors['email'] }]"
              name="email"
              v-model="reserveData.email"
              placeholder="請輸入電子信箱"
              rules="email|required"
            />
            <ErrorMessage class="invalid-feedback" name="email"></ErrorMessage>
          </dd>
        </dl>
        <div class="btn-block">
          <button
            type="button"
            @click="goBackStep"
            class="button"
            title="回上一步"
          >回上一步</button>
          <button
            type="button"
            class="button primary"
            title="送出"
            @click="submitReveres"
            :disabled="!meta.valid"
          >送出</button>
        </div>
      </VForm>
    </template>
    <div v-if="step === 4">
      <div class="reserve-list service-finish">
        <h2>預約成功</h2>
        <p>訂單編號 <span class="text-danger fw-bold">1010-5965-4435</span></p>
        <p>請確認您的電子郵件，牢記您的訂單編號。</p>
        <p>請您於<span class="text-danger fw-bold">7個工作天</span>內匯款，收到款項後，完成預約</p>
        <p>匯款資訊  013國泰世華 1234-5678-4321-0018</p>
        <p>匯款後，請您來電告知帳戶後末四碼，及訂單資料</p>
      </div>
      <div class="btn-block">
        <router-link to="/" class="button primary" title="回首頁">回首頁</router-link>
      </div>
    </div>
  </div>
</template>
