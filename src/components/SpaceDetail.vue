<script setup>
import {
  ref, onMounted,
} from 'vue';
import seatImg from '@/assets/images/seat-bg.svg';

const windowWidth = ref(0);
const seatBgImg = ref(null);

function resizeWindow() {
  windowWidth.value = window.screen.width;
}

onMounted(() => {
  window.addEventListener('resize', resizeWindow);
});
</script>

<template>
  <div class="flex-title">
    <div class="title">空間資訊</div>
    <router-link to="reserve" class="button primary">立即預約</router-link>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <DatePicker v-model="date" />
      </div>
      <div class="col-lg-6">
        <div class="seat-display" ref="seatImgBox">
          <img :src="seatImg" class="seatImg" ref="seatBgImg" alt="座位圖示意">
          <div class="seat-text">座位表</div>
          <div class="remaining-seats">
            座位剩餘：<span class="qty">8</span>個
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
