import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatusStore = defineStore('statusStore', () => {
  const fullPage = ref(false);
  const isLoading = ref(false);

  return {
    fullPage,
    isLoading,
  };
});

export default useStatusStore;
