import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useNewsStore = defineStore('NewsStore', () => {
  const newsList = ref([]);

  const getNewsList = async () => {
    const res = await axios.get(`${VITE_DATA_URL}/posts`);
    newsList.value = res.data;
  };

  return {
    getNewsList,
    newsList,
  };
});

export default useNewsStore;
