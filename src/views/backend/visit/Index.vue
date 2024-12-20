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
  <div>
    預約參觀
  </div>
  <div class="data-list">
    <table class="table table-striped align-middle">
      <thead>
        <tr class="table-dark">
          <td>填寫時間</td>
          <td>姓名</td>
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
          <td>
            <span v-timeformat="item.appointment"></span>
          </td>
          <td>{{ item.company }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.space }}</td>
          <td>{{ item.time }}</td>
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
