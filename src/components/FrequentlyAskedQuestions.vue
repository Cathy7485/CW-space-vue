<script setup>
import { onMounted } from 'vue';
import { useFqaStore } from '@/stores/fqaStore';
import { storeToRefs } from 'pinia';

const store = useFqaStore();
const { fqaList } = storeToRefs(store);
const { getFqaList } = store;

onMounted(() => getFqaList());
</script>
<template>
  <div class="block home-faq">
    <div class="faq-list accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item" v-for="item in fqaList" :key="item.id">
        <h2 class="accordion-header" :id="`flush-heading-${item.id}`">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#flush-collapse-${item.id}`"
            aria-expanded="false"
            :aria-controls="`flush-collapse-${item.id}`"
          >
            Q. {{ item.question }}
          </button>
        </h2>
        <div
          :id="`flush-collapse-${item.id}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`flush-heading-${item.id}`"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            A. {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
