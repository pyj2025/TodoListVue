<template>
  <div class="flex justify-center items-center w-full h-10 rounded">
    <transition-group
      name="list"
      tag="ul"
      class="flex flex-wrap w-11/12 h-8 leading-8 rounded"
    >
      <li
        v-for="(item, idx) in propsData"
        :key="item"
        class="flex flex-row flex-nowrap w-full justify-start items-center"
      >
        <div class="w-8">
          <span class="text-blue-800 mr-1 leading-10">
            <i class="fas fa-check" aria-hidden="true"></i>
          </span>
        </div>

        <div :title="item" class="w-11/12">
          <input
            class="w-11/12 text-sm border-none ml-4"
            type="text"
            :value="item"
            @change="changeInput(item, $event)"
          />
        </div>
        <span
          class="text-green-800 cursor-pointer w-4 btn"
          type="button"
          @click="handleUpdate(item, idx, updatedItem)"
          title="Edit"
        >
          <i class="fas fa-pencil-alt" aria-hidden="true"></i>
        </span>
        <span
          class="text-red-700 cursor-pointer w-4 pl-2 btn"
          type="button"
          @click="handleDelete(item, idx)"
          title="Delete"
        >
          <i class="fas fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["propsData"],
  data() {
    return {
      updatedItem: "",
    };
  },
  methods: {
    changeInput(item, event) {
      this.updatedItem = event.target.value;
    },
    handleUpdate(item, idx) {
      if (this.updatedItem && item !== this.updatedItem) {
        this.$emit("updateItem", item, this.updatedItem, idx);
      }
    },
    handleDelete(item, idx) {
      this.$emit("deleteItem", item, idx);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

input:focus {
  outline: none;
}

.btn {
  margin-left: auto;
}
</style>
