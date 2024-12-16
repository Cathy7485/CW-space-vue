<script setup>
import { onMounted } from 'vue';
// import { useRouter } from 'vue-router';
import adminHeader from '@/components/AdminHeader.vue';
import axios from 'axios';

// const router = useRouter();
// const { VITE_URL } = import.meta.env;

onMounted(() => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)spaceToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  console.log(token);
  // if (token) {
  //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // } else {
  //   router.push('login');
  //   console.log('登入失敗，請重新登入');
  // }
});
</script>

<template>
  <adminHeader />
  <div class="container">
    <router-view />
  </div>
</template>
