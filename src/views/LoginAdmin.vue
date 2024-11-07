<script setup>
import { ref } from 'vue';

const { VITE_URL } = import.meta.env;

const user = ref({
  username: '',
  password: '',
});

const signIn = () => {
  const api = `${VITE_URL}admin/signin`;
  this.$http.post(api, this.user)
    .then((res) => {
      if (res.data.success) {
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
        this.$router.push('/dashboard');
      }
    });
};
</script>

<template>
  <div class="block container" style="margin-top: 200px;">
    <div class="h2 mb-3">管理者登入</div>
    <form id="form" class="form-signin" @submit.prevent="signIn">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="inputUsername"
          placeholder="name@example.com"
          required autofocus
          v-model="user.username" />
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
      <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
        登入
      </button>
    </form>
  </div>
</template>
