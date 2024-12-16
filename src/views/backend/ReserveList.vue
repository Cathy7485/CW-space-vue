<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;
const reserveData = ref([]);

const getReserve = async () => {
  const api = `${VITE_DATA_URL}/reserves`;
  const res = await axios.get(api);
  reserveData.value = res.data;
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
          <!-- <td>連絡電話</td>
          <td>email</td> -->
          <td>方案</td>
          <td>空間</td>
          <td>空間分類</td>
          <td>預約時間</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in reserveData" :key="item.id">
          <td>{{ item.appointment }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.company }}</td>
          <!-- <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td> -->
          <td>{{ item.plan }}</td>
          <td>{{ item.space }}</td>
          <td>{{ item.kind }}</td>
          <td>{{ item.time }}</td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              內容
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
