<template>
  <button
    type="button"
    class="go-top"
    @click="scrollToTop"
    v-if="show">
    <span>回頂端</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    toggleShow() {
      const rootElement = document.documentElement;
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.1) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  mounted() {
    document.addEventListener('scroll', this.toggleShow);
  },
  unmounted() {
    document.removeEventListener('scroll', this.toggleShow);
  },
};
</script>
