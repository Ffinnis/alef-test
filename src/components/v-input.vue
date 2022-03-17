<template>
  <div class="input">
    <label :for="name" class="input__label">
      {{ label }}
    </label>
    <input
      @input="$emit('input', value)"
      v-model="value"
      :name="name"
      :id="name"
      :type="type"
      class="input__field"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "v-input",
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
});
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;
  &__field {
    padding: 20px 16px 6px;
    background: #ffffff;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    width: 100%;
    outline: none;
    &:focus {
      border: 2px solid #f1f1f1;
    }
  }
  &__label {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.48);
    position: absolute;
    top: 8px;
    left: 16px;
  }
}
</style>
