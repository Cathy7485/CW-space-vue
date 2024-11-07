import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useSpaceStore = defineStore('spaceStore', () => {
  const spaceList = ref([]);

  const getSpaceList = async () => {
    const res = await axios.get(`${VITE_DATA_URL}/spaces`);
    spaceList.value = res.data;
  };

  return {
    getSpaceList,
    spaceList,
  };
});

export default useSpaceStore;
