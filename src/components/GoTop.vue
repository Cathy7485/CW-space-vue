<script setup>
import { ref, onMounted } from 'vue';

const goTopBtn = ref(null);
const show = ref(false);

const goTop = () => {
  document.scrollingElement.scrollTop = 0;
};
const btnShow = () => {
  if (window.scrollY > 150) {
    show.value = true;
  } else {
    show.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', btnShow);
  goTopBtn.value.addEventListener('click', goTop);
});
</script>

<template>
  <button
    ref="goTopBtn"
    type="button"
    :class="['go-top', {'d-block': show}]"
    >
    <span>回頂端</span>
  </button>
</template>
