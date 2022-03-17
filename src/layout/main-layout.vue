<template>
  <div class="body-wrapper">
    <header class="header">
      <div class="header__container container">
        <nav class="nav">
          <router-link to="/">
            <img :src="require('@/assets/img/logo.svg')" alt="Alef" />
          </router-link>
          <div class="nav__links">
            <router-link class="nav__link" to="/"> Форма </router-link>
            <router-link class="nav__link" to="/preview"> Превью </router-link>
          </div>
        </nav>
      </div>
    </header>
    <div class="page">
      <router-view />
    </div>
    <footer class="footer">
      <p class="footer__title">all rights reserved</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainLayout",
});
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  padding: 22px 0;
  &__container {
    max-width: 1280px;
    padding: 0 10px;
  }
  .nav {
    display: flex;
    align-items: center;
    &__links {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: center;
      gap: 24px;
    }
    &__link {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: rgba(17, 17, 17, 0.48);
    }
  }
}
.footer {
  padding: 30px 0;
  background: #fafafa;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  &__title {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    text-align: center;
  }
}
.page {
  margin: 30px 0;
}
.body-wrapper {
  min-height: 100%;
}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
