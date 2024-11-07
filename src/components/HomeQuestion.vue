<script setup>
import { ref } from 'vue';

import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import faqList from '@/components/FrequentlyAskedQuestions.vue';

const title = ref('常見問題');
const link = ref('faq');
</script>

<template>
  <HomeBlockTitle :title="title" :link="link" />
  <faqList />
</template>
