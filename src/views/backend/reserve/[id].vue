<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useStatusStore } from '@/stores/statusStore';
import dayjs from 'dayjs';

const status = useStatusStore();
const { isLoading } = storeToRefs(status);

const route = useRoute();
const router = useRouter();

const { VITE_DATA_URL } = import.meta.env;
const reservesData = ref([]);

const getReserves = async () => {
  isLoading.value = true;
  const { id } = route.params;
  const api = `${VITE_DATA_URL}/reserves/${id}`;
  const res = await axios.get(api);
  reservesData.value = res.data;
  isLoading.value = false;
};

const goBack = () => {
  router.go(-1);
};

const unixData = computed(() => dayjs.unix(reservesData.value.appointment).format('YYYY/MM/DD'));

onMounted(() => {
  try {
    getReserves();
  } catch (error) {
    console.log('資料存取錯誤，請重新再試');
  }
});
</script>

<template>
  <h4 class="mb-4">預約內容</h4>
  <table class="table table-bordered border-secondary mb-4">
    <tbody>
      <tr>
        <td class="table-dark">填寫時間</td>
        <td>{{ unixData }}</td>
      </tr>
      <tr>
        <td class="table-dark">姓名</td>
        <td>{{ reservesData.name }}</td>
      </tr>
      <tr>
        <td class="table-dark">公司名稱</td>
        <td>{{ reservesData.company }}</td>
      </tr>
      <tr>
        <td class="table-dark">連絡電話</td>
        <td>{{ reservesData.phone }}</td>
      </tr>
      <tr>
        <td class="table-dark">信箱</td>
        <td>{{ reservesData.email }}</td>
      </tr>
      <tr>
        <td class="table-dark">方案</td>
        <td>{{ reservesData.plan }}</td>
      </tr>
      <tr>
        <td class="table-dark">空間</td>
        <td>{{ reservesData.space }}</td>
      </tr>
      <tr>
        <td class="table-dark">空間分類</td>
        <td>{{ reservesData.kind }}</td>
      </tr>
      <tr>
        <td class="table-dark">預約時間</td>
        <td>{{ reservesData.time }}</td>
      </tr>
    </tbody>
  </table>
  <div class="text-center">
    <button type="button" class="btn btn-secondary" @click="goBack">返回列表</button>
  </div>
</template>
