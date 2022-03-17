<template>
  <div id="app">
    <notifications />
    <main-layout />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    MainLayout: () => import("@/layout/main-layout.vue"),
  },
});
</script>

<style lang="scss"></style>
