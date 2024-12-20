<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useStatusStore } from '@/stores/statusStore';

const status = useStatusStore();
const { isLoading } = storeToRefs(status);

const router = useRouter();
const { VITE_DATA_URL } = import.meta.env;
const reserveData = ref([]);

const getReserve = async () => {
  isLoading.value = true;
  const api = `${VITE_DATA_URL}/reserves`;
  const res = await axios.get(api);
  reserveData.value = res.data;
  isLoading.value = false;
};

const reserveDetail = (id) => {
  router.push(`/reserveList/${id}`);
};

onMounted(() => {
  getReserve();
});
</script>

<template>
  <div>
    預約空間
  </div>
  <div class="data-list">
    <table class="table table-striped align-middle">
      <thead>
        <tr class="table-dark">
          <td>填寫時間</td>
          <td>姓名</td>
          <td>公司名稱</td>
          <td>方案</td>
          <td>空間</td>
          <td>空間分類</td>
          <td>預約時間</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in reserveData" :key="item.id">
          <td>
            <span v-timeformat="item.appointment"></span>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.plan }}</td>
          <td>{{ item.space }}</td>
          <td>{{ item.kind }}</td>
          <td>{{ item.time }}</td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="reserveDetail(item.id)"
            >
              內容
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
