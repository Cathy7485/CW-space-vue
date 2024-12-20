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
const visitData = ref([]);

const getVisit = async () => {
  isLoading.value = true;
  const { id } = route.params;
  const api = `${VITE_DATA_URL}/visit/${id}`;
  const res = await axios.get(api);
  visitData.value = res.data;
  isLoading.value = false;
};

const goBack = () => {
  router.go(-1);
};

const unixData = computed(() => dayjs.unix(visitData.value.appointment).format('YYYY/MM/DD'));

onMounted(() => {
  try {
    getVisit();
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
        <td>{{ visitData.name }}</td>
      </tr>
      <tr>
        <td class="table-dark">公司名稱</td>
        <td>{{ visitData.company }}</td>
      </tr>
      <tr>
        <td class="table-dark">連絡電話</td>
        <td>{{ visitData.phone }}</td>
      </tr>
      <tr>
        <td class="table-dark">信箱</td>
        <td>{{ visitData.email }}</td>
      </tr>
      <tr>
        <td class="table-dark">參觀空間</td>
        <td>{{ visitData.space }}</td>
      </tr>
      <tr>
        <td class="table-dark">參觀時間</td>
        <td>{{ visitData.time }}</td>
      </tr>
    </tbody>
  </table>
  <div class="text-center">
    <button type="button" class="btn btn-secondary" @click="goBack">返回列表</button>
  </div>
</template>
