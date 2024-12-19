import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import axios from 'axios';

export const useReserveStore = defineStore('ReserveStore', () => {
  const router = useRouter();
  const { VITE_DATA_URL } = import.meta.env;

  const isProcessing = ref(false);
  const step = ref(0);
  const random = ref(0);
  const picked = ref('');
  const isPicked = ref(false);
  const isFilledIn = ref(false);
  const pickedSpace = computed(() => (picked.value ? `您目前選擇的是：${picked.value}` : '尚未選擇，請點選列表選項'));

  watch(() => picked.value, () => {
    isPicked.value = true;
  });

  const reserveData = ref({
    appointment: null,
    company: '',
    name: '',
    phone: '',
    email: '',
    plan: '',
    space: '',
    kind: '',
    time: '',
  });

  watch(
    () => [
      reserveData.value.plan, reserveData.value.appointment,
      reserveData.value.time, reserveData.value.kind],
    ([newPlan, newAppointment, newTime, newKind]) => {
      if (newPlan !== ''
        && newAppointment !== ''
        && newTime !== ''
        && newKind !== '') {
        isFilledIn.value = true;
      }
    },
  );

  const nextStep = () => {
    if (step.value === 3 || !isPicked.value) return;
    step.value += 1;
  };
  const backStep = () => {
    if (step.value === 0) return;
    step.value -= 1;
  };

  const goBackPage = () => {
    router.go(-1);
  };

  const checkedForm = () => {
    if (reserveData.value.plan === ''
      || reserveData.value.appointment === ''
      || reserveData.value.time === ''
      || reserveData.value.kind === ''
    ) return;
    step.value += 1;
  };

  const unixDate = computed(() => dayjs(reserveData.value.appointment).unix());

  const randomFn = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

  const submitReveres = async () => {
    const req = {
      appointment: reserveData.value.appointment,
      company: reserveData.value.company,
      name: reserveData.value.name,
      phone: reserveData.value.phone,
      email: reserveData.value.email,
      plan: reserveData.value.plan,
      space: picked.value,
      kind: reserveData.value.kind,
      time: reserveData.value.time,
    };

    random.value = randomFn(12, 0);
    try {
      await axios.post(`${VITE_DATA_URL}/reserves`, req);
      req.value = {
        appointment: null,
        company: '',
        name: '',
        phone: '',
        email: '',
        plan: '',
        space: '',
        kind: '',
        time: '',
      };
      nextStep();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isProcessing,
    step,
    picked,
    isPicked,
    isFilledIn,
    random,
    pickedSpace,
    reserveData,
    unixDate,
    checkedForm,
    nextStep,
    backStep,
    goBackPage,
    randomFn,
    submitReveres,
  };
});

export default useReserveStore;
