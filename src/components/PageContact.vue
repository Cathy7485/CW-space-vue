<script setup>
import { ref } from 'vue';
import { defineRule } from 'vee-validate';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

const isProcessing = ref(false);
const commentData = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  content: '',
});

defineRule('isPhone', (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) || '需要正確的電話號碼';
});

const submitContact = async () => {
  isProcessing.value = true;

  const fromData = {
    name: commentData.value.name,
    company: commentData.value.company,
    phone: commentData.value.phone,
    email: commentData.value.email,
    content: commentData.value.content,
  };

  console.log(fromData);
  try {
    await axios.post(`${VITE_DATA_URL}/comments`, fromData);
    isProcessing.value = true;
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <VForm
    v-if="!isProcessing"
    ref="form"
    class="contact-from form-list"
    v-slot="{ errors, meta }"
  >
    <span class="fs-6 text-danger text-end mb-2 d-block">請填寫表單，將會有專人聯繫您</span>
    <dl>
      <dt class="form-label">
        <label for="name">聯絡姓名<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <VField
          id="name"
          :class="['form-control', { 'is-invalid': errors['name'] }]"
          name="name"
          type="text"
          v-model="commentData.name"
          placeholder="請輸入姓名"
          rules="required"
        />
        <ErrorMessage class="invalid-feedback" name="name"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-label">
        <label for="company">公司名稱<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <VField
          id="company"
          :class="['form-control', { 'is-invalid': errors['company'] }]"
          name="company"
          type="text"
          v-model="commentData.company"
          placeholder="請輸入公司名稱"
          rules="required"
        />
        <ErrorMessage class="invalid-feedback" name="company"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-label">
        <label for="phone">聯絡電話<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <VField
          id="phone"
          :class="['form-control', { 'is-invalid': errors['phone'] }]"
          name="phone"
          type="tel"
          v-model="commentData.phone"
          placeholder="請輸入電話"
          rules="isPhone|required"
        />
        <ErrorMessage class="invalid-feedback" name="phone"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-label">
        <label for="email">Email<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <VField
          id="email"
          :class="['form-control', { 'is-invalid': errors['email'] }]"
          name="email"
          type="email"
          v-model="commentData.email"
          placeholder="請輸入信箱"
          rules="email|required"
        />
        <ErrorMessage class="invalid-feedback" name="email"></ErrorMessage>
      </dd>
    </dl>
    <dl>
      <dt class="form-label">
        <label for="content">留言<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <VField
          id="content"
          :class="{ 'is-invalid': errors['content'] }"
          name="content"
          cols="30"
          rows="10"
          v-model="commentData.contact"
          placeholder="請輸入內容"
          as="textarea"
          rules="required"
        ></VField>
        <ErrorMessage class="invalid-feedback" name="content"></ErrorMessage>
      </dd>
    </dl>
    <div class="btn-block">
      <button
        type="button"
        class="button primary"
        title="送出"
        @click="submitContact"
        :disabled="!meta.valid"
      >送出</button>
    </div>
  </VForm>
  <div v-else>
    <h2 class="text-center">留言成功！</h2>
    <div class="text-center mt-5">
      <router-link to="/" class="button primary">回首頁</router-link>
    </div>
  </div>
</template>
