<script setup>
import { storeToRefs } from 'pinia';
import { useAdminStore } from '@/stores/adminStore';

const store = useAdminStore();

const { userName } = storeToRefs(store);
</script>

<template>
  <p class="user-bg">您好，<span class="fw-bold">{{ userName }}</span>！<span>ヽ(・×・´)ゞ</span></p>
</template>
