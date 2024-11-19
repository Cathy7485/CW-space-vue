<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
// import seatImg from '@/assets/images/seat-bg.svg';

const defaultIdx = ref(0);
const store = useSpaceStore();
const { activeSpace, spaceDetail, spaceType } = storeToRefs(store);
const { getSpaceList, changeIdx } = store;

const addActive = (idx) => { defaultIdx.value = idx; };

onMounted(() => {
  getSpaceList();
  changeIdx(1);
});
</script>

<template>
  <div class="space-type">
    <template v-for="space in activeSpace" :key="space.id">
      <template v-if="spaceDetail[0].capacity > 0">
        <div class="flex-title">
          <div class="title">空間資訊</div>
          <router-link to="reserve" class="button primary">立即預約</router-link>
        </div>
        <div class="space-type-detail">
          <div class="type-img">
            <template v-if="defaultIdx >= space.imgUrl.length">
              <img :src="space.imgUrl[0]" alt="空間">
            </template>
            <template v-else>
              <img :src="space.imgUrl[defaultIdx]" alt="空間">
            </template>
          </div>
          <div class="type-btn">
            <div
              :class="['btn', {'active': index === defaultIdx}]"
              v-for="(item, index) in spaceDetail"
              :key="item"
              @click="addActive(index)"
            >
              <div>
                <span v-if="spaceType === 'seat'">座位</span>
                <span v-if="spaceType === 'room'">空間</span>
                {{ item.sort }}
              </div>
              <div>
                <span v-if="item.price.day">
                  NT$ {{ item.price.day }} 元/日，
                </span>
                <span v-if="item.price.month">
                  NT$ {{ item.price.month }} 元/月
                </span>
                <span v-if="item.price.hour">
                  NT${{item.price.hour}}/小時
                </span>
              </div>
              <div>容納人數：{{ item.capacity }} 人</div>
              <div class="bg-text">{{ item.sort }}</div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
  <div class="space-seat container">
    <div class="row">
      <div class="col-lg-6">
        <!-- 放月曆處 -->
      </div>
      <div class="col-lg-6">
        <!-- <div class="seat-display" ref="seatImgBox">
          <img :src="seatImg" class="seatImg" ref="seatBgImg" alt="座位圖示意">
          <div class="seat-text">座位表</div>
          <div class="remaining-seats">
            座位剩餘：<span class="qty">8</span>個
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
