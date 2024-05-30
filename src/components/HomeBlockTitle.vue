<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="block-title">
    <div class="title">{{ title }}</div>
    <router-link :to="`/${link}`">MORE</router-link>
  </div>
</template>

<script>
export default {
  props: ['title', 'link'],
};
</script>
