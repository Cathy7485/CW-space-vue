<script setup>
import { storeToRefs } from 'pinia';
import { useAdminStore } from '@/stores/adminStore';

const store = useAdminStore();

const { user } = storeToRefs(store);
const { signin } = store;

</script>

<template>
  <div class="login-bg">
    <div class="login-block">
      <h2>管理者登入</h2>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="inputUsername"
          placeholder="name@example.com"
          required autofocus
          v-model="user.email" />
        <label for="inputUsername">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
          required
          v-model="user.password" />
        <label for="inputPassword">Password</label>
      </div>
      <button
        type="button"
        class="btn btn-lg btn-primary"
        @click="signin"
      >
        登入
      </button>
    </div>
  </div>
</template>
