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
const commentData = ref([]);

const getComments = async () => {
  isLoading.value = true;
  const api = `${VITE_DATA_URL}/comments`;
  const res = await axios.get(api);
  commentData.value = res.data;
  commentData.value.sort((a, b) => b.appointment - a.appointment);
  isLoading.value = false;
};

const commentDetail = (id) => {
  router.push(`/commentList/${id}`);
};

onMounted(() => {
  getComments();
});
</script>

<template>
  <h4>線上留言-列表</h4>
  <div class="data-list">
    <table class="table table-striped align-middle table-rwd">
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
          <td data-label="姓名">{{ item.name }}</td>
          <td data-label="公司名稱">{{ item.company }}</td>
          <td data-label="連絡電話">{{ item.phone }}</td>
          <td data-label="email">{{ item.email }}</td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="commentDetail(item.id)"
            >
              內容
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
