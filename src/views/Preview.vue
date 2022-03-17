<template>
  <div class="preview__page">
    <div class="container">
      <div v-show="isUserDataNotEmpty" class="user-data">
        <h3 class="user-data__title">Персональные данные</h3>
        <h2 class="user-data__info">
          {{ userData.username }} {{ userData.age }}
        </h2>
        <div v-show="filledChild.length" class="user-data__child__list">
          <h4 class="user-data__child-title">Дети</h4>
          <child-item
            v-for="item in filledChild"
            :key="`${item.name}-${item.age}`"
            :age="item.age"
            :name="item.name"
          />
        </div>
        <h3 v-show="!filledChild.length" class="warning">Детей нет</h3>
      </div>
      <h3 v-show="!isUserDataNotEmpty" class="warning">Заполните форму</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { child, userData } from "@/interface/user-data.interface";

export default Vue.extend({
  name: "Preview",
  components: {
    ChildItem: () => import("@/components/child-item.vue"),
  },
  computed: {
    userData(): userData {
      return this.$store.state.userData;
    },
    filledChild() {
      if (this.userData.child) {
        return this.userData.child
          .filter((item: child) => item.data.name)
          .map((item: child) => item.data);
      }
      return [];
    },
    isUserDataNotEmpty() {
      return this.userData.username && this.userData.age;
    },
  },
});
</script>

<style lang="scss" scoped>
.warning {
  color: #ef3333;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
.user-data {
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    margin: 0 0 20px;
  }
  &__info {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    margin: 0 0 60px;
  }
  &__child {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
    }
    &-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #111111;
    }
  }
}
</style>
