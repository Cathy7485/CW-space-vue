<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  document.cookie = 'spaceToken=;max-age=0;';
  router.push('/login');
};
</script>

<template>
  <div class="admin-header">
    <div class="container">
      <div class="admin-logo">
        <router-link to="/dashboard">後台管理</router-link>
      </div>
      <a
        href="#"
        @click.prevent="logout"
        class="button primary">登出
      </a>
    </div>
  </div>
  <div class="admin-nav">
    <div class="container">
      <router-link to="/visitList">預約參觀訂單</router-link>
      <router-link to="/reserveList">預約空間訂單</router-link>
      <router-link to="/commentList">線上留言管理</router-link>
    </div>
  </div>
</template>
