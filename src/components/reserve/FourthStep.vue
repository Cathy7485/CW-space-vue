<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useReserveStore } from '@/stores/reserveStore';

const router = useRouter();
const reserveStore = useReserveStore();
const { unixDate, random, step } = storeToRefs(reserveStore);
const { scrollToTop } = reserveStore;

setTimeout(() => {
  step.value = 0;
  router.go(0);
}, 5000);

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <div class="reserve-list service-finish">
    <h2>預約成功</h2>
    <p>訂單編號 <span class="text-danger fw-bold">CW{{ unixDate }}-{{ random }}</span></p>
    <p>請確認您的電子郵件，牢記您的訂單編號。</p>
    <p>請您於<span class="text-danger fw-bold">7個工作天</span>內匯款，收到款項後，完成預約</p>
    <p>匯款資訊  013國泰世華 1234-5678-4321-0018</p>
    <p>匯款後，請您來電告知帳戶後末四碼，以及訂單資料，才算完成預約手續。</p>
  </div>
  <h6 class="mt-4 text-danger fw-bold text-center">五秒後，將自動跳轉回預約頁</h6>
  <div class="btn-block">
    <router-link to="/" class="button primary" title="回首頁">回首頁</router-link>
  </div>
</template>
