<script setup>
import { ref } from 'vue';

const isProcessing = ref(false);

</script>

<template>
  <h5 class="mb-3">請填聯絡表單，我們將有專人與您聯絡！</h5>
  <form ref="form" @submit="createOrder">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input id="email" name="email" type="email" class="form-control"/>
      <ErrorMessage name="email" class="invalid-feedback" />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">預約姓名</label>
      <input id="name" name="姓名" type="text" class="form-control" placeholder="請輸入姓名"/>
      <ErrorMessage name="姓名" class="invalid-feedback" />
    </div>
    <div class="mb-3">
      <label for="tel" class="form-label">預約電話</label>
      <input id="tel" name="電話" type="tel" class="form-control" placeholder="請輸入電話"/>
      <ErrorMessage name="電話" class="invalid-feedback" />
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">預約空間</label>
      <select id="address" name="空間" class="form-select" as="select">
        <option disabled value="">請選擇</option>
        <option value="共享辦公空間">共享辦公空間</option>
        <option value="獨立辦公空間">獨立辦公空間</option>
        <option value="會議室空間">會議室空間</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">留言</label>
      <textarea
        id="message"
        class="form-control"
        cols="30"
        rows="10">
      </textarea>
    </div>
    <div class="d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100">
      <div class="text-end">
        <button type="submit" class="btn btn-dark" :disabled="isProcessing">
          送出訂單
        </button>
      </div>
    </div>
  </form>
</template>
