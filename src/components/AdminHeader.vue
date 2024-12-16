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
  <div class="admin-logo">後台管理</div>
  <div class="admin-header">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="">
        <router-link to="/visitList">預約參觀訂單</router-link>
        <router-link to="/reserveList">預約空間訂單</router-link>
        <router-link to="/contactList">線上留言管理</router-link>
      </div>
      <a
        href="#"
        @click.prevent="logout"
        class="button primary">登出</a>
    </div>
  </div>
</template>
