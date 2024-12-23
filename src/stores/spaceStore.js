import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useStatusStore } from '@/stores/statusStore';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useSpaceStore = defineStore('spaceStore', () => {
  const spaceList = ref([]);
  const activeIdx = ref(0);
  const planList = ref(['day', 'month', 'year']);
  const spaceId = ref(1);

  const statusStore = useStatusStore();
  const { loadingActive } = statusStore;

  const activeSpace = computed(() => spaceList.value.find(
    (item) => item.id === activeIdx.value + 1,
  ) || null);
  const spaceDetail = computed(() => (activeSpace.value ? activeSpace.value.type : null));
  const spaceType = computed(() => (activeSpace.value && activeSpace.value.space
    ? activeSpace.value.space.type : null));

  const activePlan = computed(() => spaceList.value.filter(
    (item) => Object.keys(item.type[0].price).includes(planList.value[activeIdx.value]),
  ));
  const spacePlan = computed(() => spaceList.value.filter(
    (item) => !Object.keys(item.type[0].price).includes('free'),
  ));

  const pickedSpace = computed(() => spacePlan.value.filter((item) => item.id === spaceId.value));
  const pickedType = computed(() => (pickedSpace.value[0].type));

  const changeSpaceId = (id) => {
    spaceId.value = id;
  };
  const changeIdx = (index) => {
    activeIdx.value = index;
  };
  const changePlan = (index) => {
    activeIdx.value = index;
  };
  const getSpaceList = async () => {
    try {
      loadingActive(true);

      const res = await axios.get(`${VITE_DATA_URL}/spaces`);
      spaceList.value = res.data;
    } catch (error) {
      console.error('Error loading space list:', error);
      spaceList.value = [];
    } finally {
      loadingActive(false);
    }
  };

  return {
    getSpaceList,
    changeIdx,
    changePlan,
    changeSpaceId,
    spaceList,
    activeIdx,
    activeSpace,
    spaceDetail,
    spaceType,
    planList,
    activePlan,
    spacePlan,
    spaceId,
    pickedSpace,
    pickedType,
  };
});

export default useSpaceStore;
