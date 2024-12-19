<script setup>
import { ref } from 'vue';
import { defineRule } from 'vee-validate';
import dayjs from 'dayjs';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

const isProcessing = ref(false);
const date = ref(null);
const visitData = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  space: '',
  appointment: null,
  time: '',
});

defineRule('isPhone', (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) || '需要正確的電話號碼';
});

const submitVisit = async () => {
  date.value = dayjs(date.value).unix();
  const req = {
    name: visitData.value.name,
    company: visitData.value.company,
    phone: visitData.value.phone,
    email: visitData.value.email,
    space: visitData.value.space,
    appointment: date.value,
    time: visitData.value.time,
  };

  console.log(req);
  try {
    await axios.post(`${VITE_DATA_URL}/visit`, req);
    isProcessing.value = true;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <VForm
    v-if="!isProcessing"
    class="visit-reservation form-list"
    @submit="submitVisit"
    v-slot="{ errors, meta }"
  >
    <span class="fs-6 text-danger text-end mb-2 d-block">請填寫表單，將會有專人聯繫您</span>
    <dl>
      <dt class="form-title">
        <label for="name">姓名<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info">
        <VField
          id="name"
          type="text"
          :class="['form-control', { 'is-invalid': errors['name'] }]"
          name="name"
          v-model="visitData.name"
          placeholder="請輸入姓名"
          rules="required"
        />
        <ErrorMessage class="invalid-feedback" name="name"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-title">
        <label for="company">公司名稱<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info">
        <VField
          id="company"
          type="text"
          :class="['form-control', { 'is-invalid': errors['company'] }]"
          name="company"
          v-model="visitData.company"
          placeholder="請輸入公司名稱"
          rules="required"
        />
        <ErrorMessage class="invalid-feedback" name="company"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-title">
        <label for="phone">聯絡電話<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info">
        <VField
          id="phone"
          type="tel"
          :class="['form-control', { 'is-invalid': errors['phone'] }]"
          name="phone"
          v-model="visitData.phone"
          placeholder="請輸入聯絡電話"
          rules="isPhone|required"
        />
        <ErrorMessage class="invalid-feedback" name="phone"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-title">
        <label for="email">電子信箱<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info">
        <VField
          id="email"
          type="email"
          :class="['form-control', { 'is-invalid': errors['email'] }]"
          name="email"
          v-model="visitData.email"
          placeholder="請輸入電子信箱"
          rules="email|required"
        />
        <ErrorMessage class="invalid-feedback" name="email"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-title">
        <label for="space">想要參觀哪個空間<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info">
        <VField
          id="space"
          :class="['form-select',{ 'is-invalid': errors['space'] }]"
          name="space"
          v-model="visitData.space"
          as="select"
          rules="required"
        >
          <option value="" selected disabled>請選擇您要參觀的空間</option>
          <option value="共享辦公空間">共享辦公空間</option>
          <option value="獨立辦公空間">獨立辦公空間</option>
          <option value="會議室空間">會議室空間</option>
        </VField>
        <ErrorMessage class="invalid-feedback" name="space"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-title">
        <label for="date">參觀日期<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info">
        <div class="row">
          <div class="col-lg-6">
            <DatePicker
              class="date-picker w-100"
              v-model:value="date"
              format="YYYY-MM-DD"
              type="date"
              placeholder="請選擇日期"
              :disabled-week-days="[6, 0]"
            />
          </div>
          <div class="col-lg-6 my-2 my-lg-0">
            <VField
              id="time"
              name="time"
              :class="['visit-time form-select w-100' ,{ 'is-invalid': errors['time'] }]"
              v-model="visitData.time"
              as="select"
              rules="required"
            >
              <option value="" selected disabled>請選擇預約時段</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
            </VField>
            <ErrorMessage class="invalid-feedback" name="time"></ErrorMessage>
          </div>
        </div>
      </dd>
    </dl>
    <div class="btn-block">
      <router-link to="/" class="button secondary" title="回首頁">回首頁</router-link>
      <button
        type="button"
        class="button primary"
        title="送出"
        @click="submitVisit"
        :disabled="!meta.valid"
      >送出</button>
    </div>
  </VForm>
  <div v-else>
    <h2 class="text-center">預約成功！</h2>
    <div class="text-center mt-5">
      <router-link to="/" class="button primary">回首頁</router-link>
    </div>
  </div>
</template>
