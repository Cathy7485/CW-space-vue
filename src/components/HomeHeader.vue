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
          <router-link class="nav-link" to="/space">環境空間</router-link>
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
  methods: {
    // scroll() {
    //   const header = this.$ref.nav;
    //   console.log(header);
    //   const currentPosition = window.scrollY + window.innerHeight;
    //   const bgShowPosition = header.offsetTop + header.clientHeight / 2 - 10;
    //   const bgAppear = currentPosition > bgShowPosition;

    //   const imageBottom = header.offsetTop + header.clientHeight;
    //   const imageOnWindow = window.scrollY < imageBottom;

    //   if (imageOnWindow && bgAppear) {
    //     // 不符合出現條件，移除active此class
    //     header.classList.remove('addBg');
    //   } else {
    //     // 符合出現條件，加上active此class
    //     header.classList.add('addBg');
    //   }
    // },
  },
};

</script>
