<template>
  <loading-component
    :active="isLoading"
    :color="'#000'"
  />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStatusStore } from '@/stores/statusStore';

const statusStore = useStatusStore();
const { isLoading } = storeToRefs(statusStore);
</script>
