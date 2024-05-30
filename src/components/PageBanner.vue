<template>
  <div class="page-banner">
    <img :src="imagesUrl" alt="banner">
    <div class="page-title">{{ pageTitle }}</div>
  </div>
</template>

<script>
export default {
  props: ['imagesUrl', 'pageTitle'],
};
</script>
