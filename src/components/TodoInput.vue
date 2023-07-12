<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div
    class="flex items-center justify-center mb-6 bg-white w-full h-8 leading-8 wrapper"
  >
    <input
      type="text"
      v-model="newItem"
      placeholder="Type"
      v-on:keypress.enter="addTodo"
    />
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <WarningModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false"
        >할 일을 입력하세요.
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </WarningModal>
  </div>
</template>

<script>
import WarningModal from "./Modal/WarningModal.vue";

export default {
  data() {
    return {
      newItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newItem !== "") {
        var value = this.newItem && this.newItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newItem = "";
    },
  },
  components: {
    WarningModal: WarningModal,
  },
};
</script>

<style scoped>
.wrapper {
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid red;
}

input:focus {
  outline: none;
}

.wrapper input {
  border-style: none;
  font-size: 1rem;
  width: 100%;
  margin-left: 0.5rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
