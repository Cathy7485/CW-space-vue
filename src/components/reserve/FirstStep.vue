<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import { useReserveStore } from '@/stores/reserveStore';

const spaceStore = useSpaceStore();
const { spacePlan } = storeToRefs(spaceStore);
const { getSpaceList, changeSpaceId } = spaceStore;

const reserveStore = useReserveStore();
const { picked, isPicked, pickedSpace } = storeToRefs(reserveStore);
const { goBackPage, nextStep } = reserveStore;

onMounted(() => {
  getSpaceList();
});
</script>

<template>
  <fieldset>
    <dl>
      <dt>
        <span>想要預約哪個空間<span class="text-danger ms-2">*</span></span>
      </dt>
      <dd class="text-end text-secondary fs-6 fw-bold mt-2">
        <span class="choice-space">{{ pickedSpace }}</span>
      </dd>
    </dl>
    <dl class="option" v-for="space in spacePlan" :key="space.id">
      <input
        type="radio"
        name="space"
        :id="space.id"
        :value="space.name"
        v-model="picked"
        @click="changeSpaceId(space.id)"
      >
      <label :for="space.id">
        <dd>
          <div class="left">
            <div class="space-img"><img :src="space.imgUrl[0]" :alt="space.name"></div>
          </div>
          <div class="right">
            <div class="name">{{ space.name }}</div>
          </div>
          <div class="bg-text">{{ space.enName }}</div>
        </dd>
      </label>
    </dl>
  </fieldset>
  <div class="btn-block">
    <button type="button" @click="goBackPage" class="button" title="前一頁">前一頁</button>
    <button
      type="button"
      :class="['button primary', { disabled : !isPicked }]"
      title="下一步"
      @click="nextStep"
    >下一步</button>
  </div>
</template>
