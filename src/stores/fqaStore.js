import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useFqaStore = defineStore('fqaStore', () => {
  const fqaList = ref([]);

  const getFqaList = async () => {
    const res = await axios.get(`${VITE_DATA_URL}/fqa`);
    fqaList.value = res.data;
  };

  return {
    getFqaList,
    fqaList,
  };
});

export default useFqaStore;
