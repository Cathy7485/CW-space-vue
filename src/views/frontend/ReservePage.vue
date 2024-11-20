<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import bannerUrl from '@/assets/images/visit-banner.jpg';

const pageTitle = ref('聯絡我們-預約參觀');
const activeIdx = ref(0);
const contactTabs = ref(['預約參觀', '預約空間', '線上留言', '地理位置']);

const changeIdx = (idx) => { activeIdx.value = idx; };
</script>

<template>
  <PageBanner :images-url="bannerUrl" :page-title="pageTitle"></PageBanner>
  <div class="container block mt-5">
    <div class="space-tabs">
      <div v-for="(item, index) in contactTabs" :key="item" class="space-tab-item"
        :class="{ 'active': index === activeIdx }" @click="changeIdx(index)">{{ item }}</div>
    </div>
    <div class="visit-reservation reserve-list">
      <span class="fs-6 text-danger text-end mb-2 d-block">請填寫表單，將會有專人聯繫您</span>
      <dl class="form-list">
        <dt class="form-title">
          <label for="user-name">姓名<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <input type="text" name="user-name" placeholder="請輸入姓名">
        </dd>
      </dl>
      <dl class="form-list">
        <dt class="form-title">
          <label for="company-name">公司名稱<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <input type="text" name="company-name" placeholder="請輸入公司名稱">
        </dd>
      </dl>
      <dl class="form-list">
        <dt class="form-title">
          <label for="contact-phone">聯絡電話<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <input type="tel" name="contact-phone" placeholder="請輸入聯絡電話">
        </dd>
      </dl>
      <dl class="form-list">
        <dt class="form-title">
          <label for="email">電子信箱<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <input type="email" name="email" placeholder="請輸入電子信箱">
        </dd>
      </dl>
      <dl class="form-list">
        <dt class="form-title">
          <label for="space-type">想要參觀哪個空間<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <select class="form-select" name="space-type">
            <option value="none" selected="" disabled="" hidden="">請選擇您要參觀的空間</option>
            <option>共享辦公空間</option>
            <option>獨立辦公空間</option>
            <option>會議室空間</option>
          </select>
        </dd>
      </dl>
      <dl class="form-list">
        <dt class="form-title">
          <label for="visit-date">參觀日期<span class="text-danger ms-2">*</span></label>
        </dt>
        <dd class="form-info">
          <div class="">
            <div class="row">
              <div class="col-lg-6">
                <input
                  type="text"
                  id="date-input"
                  class="hasDatepicker"
                  name="visit-date"
                  placeholder="請選擇日期">
              </div>
              <div class="col-lg-6">
                <select type="text" class="visit-time form-select w-100">
                  <option value="9:00">9:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                </select>
              </div>
            </div>
          </div>
        </dd>
      </dl>
      <div class="btn-block">
        <router-link to="/" class="button secondary" title="返回">返回</router-link>
        <button type="button" class="button primary" title="送出">送出</button>
      </div>
    </div>
  </div>
</template>
