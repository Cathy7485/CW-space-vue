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

  const imagesList = computed(() => spaceList.value.map((item) => item.imgUrl[0]));

  const activePlan = computed(() => spaceList.value.filter((item) => {
    const planKey = planList.value[activeIdx.value];
    return item.type[0] && item.type[0].price && Object.keys(item.type[0].price).includes(planKey);
  }));

  // 共享辦公空間的過濾結果
  const sharedOfficePrices = computed(() => {
    const sharedOffice = activePlan.value.find(
      (item) => item.name === '共享辦公空間',
    );

    if (!sharedOffice) return []; // 如果找不到資料，返回空陣列

    // 過濾共享辦公空間的唯一 price 資料
    const uniquePrices = new Map();
    sharedOffice.type.forEach((type) => {
      const priceKey = JSON.stringify(type.price);
      if (!uniquePrices.has(priceKey)) {
        uniquePrices.set(priceKey, type); // 只保留第一筆
      }
    });

    return Array.from(uniquePrices.values());
  });

  // 獨立辦公空間的完整結果
  const privateOfficePrices = computed(() => {
    const privateOffice = activePlan.value.find(
      (item) => item.name === '獨立辦公空間',
    );

    return privateOffice ? privateOffice.type : [];
  });

  const spacePlan = computed(() => spaceList.value.filter((item) => item.type[0] && item.type[0].price && !Object.keys(item.type[0].price).includes('free')));

  const pickedSpace = computed(() => spacePlan.value.find(
    (item) => item.id === spaceId.value,
  ) || null);

  const pickedType = computed(() => (pickedSpace.value ? pickedSpace.value.type : null));

  const getPlanList = (activeName) => (activeName === '共享辦公空間' ? sharedOfficePrices.value : privateOfficePrices.value);

  const changeSpaceId = (id) => {
    spaceId.value = id;
  };
  const changeIdx = (index) => {
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
    getPlanList,
    changeIdx,
    changeSpaceId,
    spaceList,
    activeIdx,
    activeSpace,
    spaceDetail,
    spaceType,
    imagesList,
    planList,
    activePlan,
    sharedOfficePrices,
    privateOfficePrices,
    spacePlan,
    spaceId,
    pickedSpace,
    pickedType,
  };
});

export default useSpaceStore;
