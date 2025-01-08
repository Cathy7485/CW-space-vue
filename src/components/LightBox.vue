<script setup>
const props = defineProps({
  imagesList: {
    type: Array,
    default: () => [],
  },
  currentUrl: {
    type: String,
    default: '',
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['onShowImg', 'onCloseLightBox']);

const showImg = (idx) => {
  emit('onShowImg', idx);
};
const closeLightBox = (e) => {
  emit('onCloseLightBox', e);
};
</script>

<template>
  <div class="panel" :class="{isOpen: isOpen}" @click="closeLightBox">
    <div class="lightbox">
      <img :src="currentUrl" alt="image" />
    </div>
    <div class="thumbnail">
      <div
        @click="showImg(idx)"
        v-for="(url, idx) in props.imagesList"
        :key="url"
        :class="['thumbnail-btn' ,{ active: props.currentUrl === url }]"
      >
        <img :src="url" alt="image" />
      </div>
    </div>
  </div>
</template>
