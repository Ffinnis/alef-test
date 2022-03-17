<template>
  <div class="home__page">
    <div class="container">
      <div class="form form-family">
        <h3 class="form__title">Персональные данные</h3>
        <div class="form__input">
          <v-input
            v-model="userData.username"
            name="username"
            type="text"
            label="Имя"
          />
          <v-input
            v-model="userData.age"
            name="age"
            type="number"
            label="Возраст"
          />
        </div>
        <div class="row">
          <h3 class="form__title">Дети (макс. 5)</h3>
          <add-child-button @click="addChild" />
        </div>
        <div class="form__input" v-show="userData.child.length">
          <child-item-inputs
            v-for="item in userData.child"
            :key="item.id"
            :id="item.id"
            @delete="deleteChild($event)"
            @edit="editChild($event)"
          />
        </div>
        <h3
          v-show="!userData.child.length"
          class="form__title"
          style="margin: 10px 0 0"
        >
          Добавьте детей при их наличии
        </h3>
        <button @click="saveData" class="submit-button button">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import { child, userData } from "@/interface/user-data.interface";

export default Vue.extend({
  name: "Form",
  components: {
    VInput: () => import("@/components/v-input.vue"),
    AddChildButton: () => import("@/components/add-child-button.vue"),
    ChildItemInputs: () => import("@/components/child-item-inputs.vue"),
  },
  data() {
    return {
      userData: {
        child: new Array<child>(),
      } as userData,
    };
  },
  methods: {
    addChild() {
      if (this.userData.child.length >= 5) {
        return this.$notify({
          title: "Предупреждение",
          type: "error",
          text: "Нельзя добавить больше 5 детей",
        });
      }
      const name = uuidv4();
      this.userData.child.push({
        id: name,
        data: {
          name: "",
          age: 0,
        },
      });
    },
    deleteChild(id: string) {
      const childIndex = this.userData.child.findIndex(
        (item: child) => item.id === id
      );
      this.userData.child.splice(childIndex, 1);
    },
    editChild(child: child) {
      const selectedChildIndex = this.userData.child.findIndex(
        (item: child) => item.id === child.id
      );
      if (selectedChildIndex !== -1) {
        return (this.userData.child[selectedChildIndex].data = child.data);
      }
      return this.userData.child.push(child);
    },
    saveData() {
      this.$store.dispatch("setUserData", this.userData);
    },
  },
});
</script>

<style lang="scss">
.form {
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    margin: 0 0 20px;
  }
  &__input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
.row {
  margin: 33px 0 0;
  align-items: center;
  justify-content: space-between;
}
.submit-button {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  padding: 10px 20px;
  background: #01a7fd;
  border-radius: 100px;
  border: none;
  margin: 30px 0 0;
}
</style>
