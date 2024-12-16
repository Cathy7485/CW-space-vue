<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;
const commentData = ref([]);

const getComments = async () => {
  const api = `${VITE_DATA_URL}/comments`;
  const res = await axios.get(api);
  commentData.value = res.data;
};

onMounted(() => {
  getComments();
});
</script>

<template>
  <h4>
    留言管理
  </h4>
  <div class="data-list">
    <table class="table table-striped align-middle">
      <thead>
        <tr class="table-dark">
          <td>姓名</td>
          <td>公司名稱</td>
          <td>連絡電話</td>
          <td>email</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in commentData" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
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
