<template>
  <router-link to="/products">產品列表</router-link>
  <a
    href="#"
    @click.prevent="logout"
    class="button primary">登出</a>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
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
