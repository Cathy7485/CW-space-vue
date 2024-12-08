import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useStatusStore } from '@/stores/statusStore';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useNewsStore = defineStore('NewsStore', () => {
  const newsList = ref([]);

  const statusStore = useStatusStore();
  const { loadingActive } = statusStore;

  const newsSort = computed(() => newsList.value.sort((a, b) => b.date - a.date));

  const getNewsList = async () => {
    loadingActive(true);

    const res = await axios.get(`${VITE_DATA_URL}/posts`);
    newsList.value = res.data;

    loadingActive(false);
  };

  return {
    getNewsList,
    newsSort,
    newsList,
  };
});

export default useNewsStore;
