<template>
  <HomeBlockTitle :title="title" :link="link" />
  <faqList />
</template>

<script>
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import faqList from '@/components/FrequentlyAskedQuestions.vue';

export default {
  data() {
    return {
      title: '常見問題',
      link: 'faq',
    };
  },
  components: {
    HomeBlockTitle,
    faqList,
  },
};
</script>
