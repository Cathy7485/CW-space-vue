<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { VITE_DATA_URL } = import.meta.env;

const router = useRouter();

const user = ref({
  email: '',
  password: '',
});

const signin = async () => {
  const api = `${VITE_DATA_URL}/login`;
  try {
    await axios
      .post(api, user.value)
      .then((res) => {
        console.log(res);
        const token = res.data.accessToken;
        // set cookie expirations to 1 hour
        document.cookie = `spaceToken=${token};max-age=3600;`;
        router.push('/dashboard');
      });
  } catch (error) {
    console.error('帳號或密碼錯誤');
  }
};
</script>

<template>
  <div class="block container" style="margin-top: 200px;">
    <div class="h2 mb-3">登入</div>
    <div class="form-signin w-50 m-auto">
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
        class="btn btn-lg btn-primary w-100 mt-3"
        @click="signin"
      >
        登入
      </button>
    </div>
  </div>
</template>
