<template>
  <div class="user-data__child__item">
    <h4 class="user-data__child__item__info">{{ name }} {{ age }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "child-item",
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.user-data__child__item {
  display: flex;
  padding: 10px 20px;
  border-radius: 5px;
  background: #f1f1f1;
  &__info {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
}
</style>
