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

const visitData = ref([]);

const getVisit = async () => {
  isLoading.value = true;
  const api = `${VITE_DATA_URL}/visit`;
  const res = await axios.get(api);
  visitData.value = res.data;
  visitData.value.sort((a, b) => b.appointment - a.appointment);
  isLoading.value = false;
};

const visitDetail = (id) => {
  router.push(`/visitList/${id}`);
};

onMounted(() => {
  getVisit();
});
</script>

<template>
  <h4>預約參觀-列表</h4>
  <div class="data-list">
    <table class="table table-striped align-middle table-rwd">
      <thead>
        <tr class="table-dark">
          <td>填寫時間</td>
          <td>公司名稱</td>
          <td>連絡電話</td>
          <td>email</td>
          <td>空間</td>
          <td>參觀時段</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in visitData" :key="item.id">
          <td data-label="填寫時間">
            <span v-timeformat="item.appointment"></span>
          </td>
          <td data-label="公司名稱">{{ item.company }}</td>
          <td data-label="連絡電話">{{ item.phone }}</td>
          <td data-label="email">{{ item.email }}</td>
          <td data-label="空間">{{ item.space }}</td>
          <td data-label="參觀時段">{{ item.time }}</td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="visitDetail(item.id)"
            >
              內容
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
