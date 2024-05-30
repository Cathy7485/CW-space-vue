<template>
  <adminHeader />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import adminHeader from '@/components/AdminHeader.vue';

export default {
  components: {
    adminHeader,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      console.log(res);
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },

};
</script>
