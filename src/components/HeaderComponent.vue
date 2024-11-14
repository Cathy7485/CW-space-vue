<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const header = ref(null);
const isTop = ref(false);
const isShow = ref(false);

const addFixed = () => {
  if (window.scrollY > 80) {
    isTop.value = true;
  } else {
    isTop.value = false;
  }
};

const toggleNav = () => { isShow.value = !isShow.value; };
window.addEventListener('scroll', addFixed);

watch(() => router.currentRoute.value.name, () => toggleNav());
</script>

<template>
  <header :class="['header' ,{'fixed-top': isTop}]" ref="header">
    <router-link class="logo" to="/" ref="logo">CW-space</router-link>
    <button class="navbar-toggler ms-auto" type="button">
      <span class="navbar-toggler-icon" @click="toggleNav"></span>
    </button>
    <nav class="nav navbar navbar-expand-lg nav-bg" ref="nav">
      <div class="navbar-collapse" v-show="isShow">
        <div class="navbar-nav">
          <router-link
            :class="['nav-link', route.path === '/' ? 'text-white' : '' ]"
            to="/about"
          >
            關於我們
          </router-link>
          <router-link
            :class="['nav-link', route.path === '/' ? 'text-white' : '' ]"
            to="/space"
          >
            空間介紹
          </router-link>
          <router-link
            :class="['nav-link', route.path === '/' ? 'text-white' : '' ]"
            to="/service"
          >
            方案介紹
          </router-link>
          <router-link
            :class="['nav-link', route.path === '/' ? 'text-white' : '' ]"
            to="/contact"
          >
            聯絡我們
          </router-link>
          <router-link
            :class="['nav-link', route.path === '/' ? 'text-white' : '' ]"
            to="/faq"
          >
            常見問題
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active{
  background: #D0FB55;
  color: #000 !important;
}
</style>
