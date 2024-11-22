<script setup>
</script>

<template>
  <div class="service-plan block">
    <pre>
      {{ spaceDetail }}
    </pre>
    <div ref="activeIdx">
      {{ activeSpace }}
      動態資料
    </div>
    <!-- <div v-for="item in spaceList" :key="item.id">
      <div class="service-item">
        <div class="img">
          <img :src="item.imgUrl[0]" :alt="item.name">
        </div>
        <div class="info">
          <div class="title">{{ item.name }}</div>
          <template v-if="item.type.length > 1">
            <div v-if="Object.keys(item.type[0].price)[0] === 'day'">
              當日體驗 NT$ {{ Object.values(item.type[0].price)[0] }} / 天
            </div>
            <div v-if="Object.keys(item.type[0].price)[0] === 'month'">
              整月優惠 NT$ {{ Object.values(item.type[0].price)[0].length > 0
                ? '6000 起' : Object.values(item.type[0].price)[0] }} / 月
            </div>
            <div v-if="Object.keys(item.type[0].price)[0] === 'hour'">
              NT$ {{ Object.values(item.type[0].price)[0] }} / 時
            </div>
          </template>
          <hr>
          <div>
            <p>{{ item.info }}</p>
          </div>
          <router-link :to="`/space`" class="button primary">更多資訊</router-link>
        </div>
      </div>
    </div> -->
  </div>
</template>
