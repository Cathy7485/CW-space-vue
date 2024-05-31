<template>
  <HomeBlockTitle :title="title" :link="link" />
  <ServicePlan />
</template>

<script>
import HomeBlockTitle from '@/components/HomeBlockTitle.vue';
import ServicePlan from '@/components/ServicePlan.vue';

export default {
  data() {
    return {
      title: '空間簡介',
      link: 'service',
    };
  },
  components: {
    HomeBlockTitle,
    ServicePlan,
  },
};
</script>
