<script setup>
import { ref } from 'vue';

const isProcessing = ref(false);

</script>

<template>
  <form ref="form" class="contact-from form-list" @submit="createOrder">
    <span class="fs-6 text-danger text-end mb-2 d-block">請填寫表單，將會有專人聯繫您</span>
    <dl>
      <dt class="form-label">
        <label for="email">Email<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <input id="email" name="email" type="email" placeholder="請輸入信箱" />
      </dd>
      <ErrorMessage name="email" class="invalid-feedback" />
    </dl>
    <dl>
      <dt class="form-label">
        <label for="name">預約姓名<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <input id="name" name="姓名" type="text" placeholder="請輸入姓名" />
      </dd>
      <ErrorMessage name="姓名" class="invalid-feedback" />
    </dl>
    <dl>
      <dt class="form-label">
        <label for="tel">預約電話<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <input id="tel" name="電話" type="tel" placeholder="請輸入電話" />
      </dd>
      <ErrorMessage name="電話" class="invalid-feedback" />
    </dl>
    <dl>
      <dt class="form-label">
        <label for="address">預約空間<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <select id="address" name="空間" class="form-select" as="select">
          <option disabled value="">請選擇</option>
          <option value="共享辦公空間">共享辦公空間</option>
          <option value="獨立辦公空間">獨立辦公空間</option>
          <option value="會議室空間">會議室空間</option>
          <option value="其他問題">其他問題</option>
        </select>
      </dd>
    </dl>
    <dl>
      <dt class="form-label">
        <label for="message">留言<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="from-info">
        <textarea
          id="message"
          cols="30"
          rows="10">
        </textarea>
      </dd>
    </dl>
    <div class="btn-block">
      <button type="button" class="button primary" title="送出">送出</button>
    </div>
  </form>
</template>
