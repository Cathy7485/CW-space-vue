<script setup>
import { defineRule } from 'vee-validate';
import { useReserveStore } from '@/stores/reserveStore';
import { storeToRefs } from 'pinia';

const reserveStore = useReserveStore();
const { reserveData } = storeToRefs(reserveStore);
const { backStep, submitReveres } = reserveStore;

defineRule('isPhone', (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) || '需要正確的電話號碼';
});

</script>

<template>
  <VForm
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
        <label for="company">公司名稱<span class="text-danger ms-2">*</span></label>
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
        <VField
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
      <button type="button" @click="backStep" class="button" title="上一步">上一步</button>
      <button
        type="button"
        :class="['button primary', { disabled:!meta.valid }]"
        title="送出"
        @click="submitReveres"
        :disabled="!meta.valid"
      >送出</button>
    </div>
  </VForm>
</template>
