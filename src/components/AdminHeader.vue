<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  document.cookie = 'spaceToken=;max-age=0;';
  console.log('已登出');
  router.push('/login');
};
</script>

<template>
  <div class="p-4 bg-secondary mb-5">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="admin-links">
        <router-link to="/products">產品列表</router-link>
        <router-link to="/article">文章列表</router-link>
      </div>
      <a
        href="#"
        @click.prevent="logout"
        class="button primary">登出</a>
    </div>
  </div>
</template>
