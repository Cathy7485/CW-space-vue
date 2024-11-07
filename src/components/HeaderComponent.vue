<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { currentRoute } = useRouter();

const header = ref(null);
const isTop = ref(false);
const route = currentRoute.value;

const addFixed = () => {
  if (window.scrollY > 80) {
    isTop.value = true;
  } else {
    isTop.value = false;
  }
};

window.addEventListener('scroll', addFixed);
</script>

<template>
  <header :class="['header' ,{'fixed-top': isTop}]" ref="header">
    <router-link class="logo" to="/" ref="logo">CW-space</router-link>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nav class="nav navbar navbar-expand-lg nav-bg" ref="nav">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
