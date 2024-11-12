<script setup>
import seatImg from '@/assets/images/seat-bg.svg';
</script>

<template>
  <div class="flex-title">
    <div class="title">空間資訊</div>
    <router-link to="reserve" class="button primary">立即預約</router-link>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6"></div>
      <div class="col-lg-6">
        <div class="seat-display">
          <img :src="seatImg" alt="座位圖">
          <div class="remaining-seats">
            座位剩餘：<span class="qty">8</span>個
          </div>
          <div class="seat-text">座位表</div>
        </div>
      </div>
    </div>
  </div>
</template>
