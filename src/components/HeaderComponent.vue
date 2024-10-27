<template>
  <nav class="nav navbar navbar-expand-lg nav-bg fixed-top" ref="nav">
    <div class="container d-flex">
      <router-link class="logo" to="/" ref="logo">CW-space</router-link>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav w-100 d-flex justify-content-end">
          <router-link class="nav-link" to="/about">關於我們</router-link>
          <router-link class="nav-link" to="/service">方案介紹</router-link>
          <router-link class="nav-link" to="/contact">聯絡我們</router-link>
          <router-link class="nav-link" to="/faq">常見問題</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HomeHeader',
};

</script>
