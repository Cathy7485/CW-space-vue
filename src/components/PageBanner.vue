<script setup>
import { defineProps } from 'vue';

const props = defineProps(['imagesUrl', 'pageTitle']);
</script>

<template>
  <div class="page-banner">
    <img :src="props.imagesUrl" alt="banner">
    <div class="page-title">{{ props.pageTitle }}</div>
  </div>
</template>
