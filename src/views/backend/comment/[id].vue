<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const { VITE_DATA_URL } = import.meta.env;
const commentDetail = ref({});

const getData = async () => {
  const { id } = route.params;
  const api = `${VITE_DATA_URL}/comments/${id}`;
  await axios
    .get(api)
    .then((res) => {
      commentDetail.value = res.data;
    });
};

const goBack = () => {
  router.go(-1);
};

onMounted(() => {
  try {
    getData();
  } catch (error) {
    console.log('資料存取錯誤，請重新再試');
  }
});
</script>

<template>
  <h4 class="mb-4">留言內容</h4>
  <table class="table table-bordered border-secondary mb-4">
    <tbody>
      <tr>
        <td class="table-dark">姓名</td>
        <td>{{ commentDetail.name }}</td>
      </tr>
      <tr>
        <td class="table-dark">公司名稱</td>
        <td>{{ commentDetail.company }}</td>
      </tr>
      <tr>
        <td class="table-dark">連絡電話</td>
        <td>{{ commentDetail.phone }}</td>
      </tr>
      <tr>
        <td class="table-dark">信箱</td>
        <td>{{ commentDetail.email }}</td>
      </tr>
      <tr>
        <td class="table-dark">問題內容</td>
        <td>{{ commentDetail.content }}</td>
      </tr>
    </tbody>
  </table>
  <div class="text-center">
    <button type="button" class="btn btn-secondary" @click="goBack">返回列表</button>
  </div>
</template>
