<template>
  <router-link to="/products">產品列表</router-link>
  <a
    href="#"
    @click.prevent="logout"
    class="button primary">登出</a>
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
