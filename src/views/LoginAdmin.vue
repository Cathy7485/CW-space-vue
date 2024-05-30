<!-- eslint-disable vuejs-accessibility/no-autofocus -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="block container mt-5">
    <form id="form" class="form-signin"
      @submit.prevent="signIn">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="inputUsername"
          placeholder="name@example.com"
          required
          autofocus
          v-model="user.username"
        />
        <label for="inputUsername">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
          required
          v-model="user.password"
        />
        <label for="inputPassword">Password</label>
      </div>
      <button
        class="btn btn-lg btn-primary w-100 mt-3"
        type="submit">
        登入
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboard');
          }
        });
    },
  },
};

</script>
