<script setup>
import { onMounted } from 'vue';
import adminHeader from '@/components/AdminHeader.vue';

const { VITE_URL } = import.meta.env;

onMounted(() => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  this.$http.defaults.headers.common.Authorization = token;
  const api = `${VITE_URL}api/user/check`;
  this.$http
    .post(api, this.user)
    .then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
});
</script>

<template>
  <adminHeader />
  <div class="container">
    <router-view />
  </div>
</template>
