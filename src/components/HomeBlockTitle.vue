<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="block-title">
    <div class="hover-title">{{ props.title }}</div>
    <router-link :to="`/${props.link}`">MORE</router-link>
  </div>
</template>
