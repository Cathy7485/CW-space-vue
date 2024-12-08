import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStatusStore } from '@/stores/statusStore';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useFqaStore = defineStore('fqaStore', () => {
  const fqaList = ref([]);

  const statusStore = useStatusStore();
  const { loadingActive } = statusStore;

  const getFqaList = async () => {
    loadingActive(true);

    const res = await axios.get(`${VITE_DATA_URL}/fqa`);
    fqaList.value = res.data;

    loadingActive(false);
  };

  return {
    getFqaList,
    fqaList,
  };
});

export default useFqaStore;
