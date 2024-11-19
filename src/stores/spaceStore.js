import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useSpaceStore = defineStore('spaceStore', () => {
  const spaceList = ref([]);
  const activeIdx = ref(0);

  const activeSpace = computed(() => spaceList.value.filter((item) => item.id === activeIdx.value));
  const spaceDetail = computed(() => activeSpace.value[0].type);
  const spaceType = computed(() => activeSpace.value[0].space.type);

  const changeIdx = (index) => {
    activeIdx.value = index;
  };
  const getSpaceList = async () => {
    const res = await axios.get(`${VITE_DATA_URL}/spaces`);
    spaceList.value = res.data;
  };

  return {
    getSpaceList,
    changeIdx,
    spaceList,
    activeIdx,
    activeSpace,
    spaceDetail,
    spaceType,
  };
});

export default useSpaceStore;
