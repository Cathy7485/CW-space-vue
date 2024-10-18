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

<script>
const { VITE_URL } = import.meta.env;

export default {
  methods: {
    logout() {
      const api = `${VITE_URL}logout`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
          }
        });
    },
  },
};
</script>
