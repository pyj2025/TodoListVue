<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div class="flex justify-center items-center w-full h-10 rounded">
    <div
      class="flex flex-row flex-nowrap bg-white w-11/12 h-8 leading-8 rounded"
    >
      <input
        class="w-full text-sm border-none ml-4"
        type="text"
        v-model="newItem"
        placeholder="Type"
        v-on:keypress.enter="handleAdd"
      />
      <div
        class="w-12 bg-blue-900 rounded-r cursor-pointer"
        title="Add"
        v-on:click="handleAdd"
      >
        <i class="text-white fas fa-plus" aria-hidden="true"></i>
      </div>
    </div>

    <WarningModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Warning</h3>
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
    handleAdd() {
      if (this.newItem !== "") {
        const val = this.newItem && this.newItem.trim();
        this.$emit("addItem", val);
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
input:focus {
  outline: none;
}
</style>
