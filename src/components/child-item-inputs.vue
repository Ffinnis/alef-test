<template>
  <div class="row">
    <v-input
      v-model="childItem.name"
      @input="$emit('edit', { data: childItem, id: id })"
      label="Имя"
      type="text"
      name="childName"
    />
    <v-input
      v-model="childItem.age"
      @input="$emit('edit', { data: childItem, id: id })"
      label="Возраст"
      type="number"
      name="childAge"
    />
    <button @click="$emit('delete', id)" class="button button--text">
      Удалить
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { child } from "@/interface/user-data.interface";

export default Vue.extend({
  name: "child-item-inputs",
  components: {
    VInput: () => import("@/components/v-input.vue"),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      childItem: {} as child,
    };
  },
});
</script>

<style lang="scss" scoped>
.row {
  align-items: center;
  gap: 18px;
}
.button--text {
  background: #fff;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #01a7fd;
}
</style>
