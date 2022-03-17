<template>
  <button class="button add-child__button" @click="$emit('click')">
    Добавить ребенка
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "add-child-button",
});
</script>

<style lang="scss" scoped>
.add-child__button {
  border: 2px solid #01a7fd;
  border-radius: 100px;
  padding: 10px 20px 10px 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  background: #fff;
  color: #01a7fd;
  position: relative;
  &:after {
    width: 16px;
    position: absolute;
    content: "";
    background: #01a7fd;
    height: 2px;
    left: 13px;
    top: 50%;
    border-radius: 138.148px;
  }
  &:before {
    border-radius: 138.148px;
    height: 16px;
    width: 2px;
    position: absolute;
    content: "";
    background: #01a7fd;
    left: 20px;
    top: 33%;
  }
}
</style>
