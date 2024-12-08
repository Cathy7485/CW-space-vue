import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatusStore = defineStore('statusStore', () => {
  const isFullPage = ref(false);
  const isLoading = ref(false);

  const loadingActive = (active) => {
    isLoading.value = active;
  };

  return {
    loadingActive,
    isFullPage,
    isLoading,
  };
});

export default useStatusStore;
