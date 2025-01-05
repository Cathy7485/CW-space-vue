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
  reserveData.value.sort((a, b) => b.appointment - a.appointment);
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
  <h4>預約空間-列表</h4>
  <div class="data-list">
    <table class="table table-striped align-middle table-rwd">
      <thead>
        <tr class="table-dark">
          <td>填寫時間</td>
          <td>姓名</td>
          <td>公司名稱</td>
          <td>方案</td>
          <td>空間</td>
          <td>分類</td>
          <td>預約時間</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in reserveData" :key="item.id">
          <td data-label="填寫時間">
            <span v-timeformat="item.appointment"></span>
          </td>
          <td data-label="姓名">{{ item.name }}</td>
          <td data-label="公司名稱">{{ item.company }}</td>
          <td data-label="方案">{{ item.plan }}</td>
          <td data-label="空間">{{ item.space }}</td>
          <td data-label="分類">{{ item.kind }}</td>
          <td data-label="預約時間">{{ item.time }}</td>
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
