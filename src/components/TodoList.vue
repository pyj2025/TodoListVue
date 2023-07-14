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
        class="flex flex-row flex-wrap w-full justify-start items-center"
      >
        <div class="w-8">
          <span class="text-blue-800 mr-1 leading-10">
            <i class="fas fa-check" aria-hidden="true"></i>
          </span>
        </div>

        <div :title="item" class="w-11/12">
          {{ item }}
        </div>
        <span
          class="text-green-800 cursor-pointer w-8"
          type="button"
          @click="handleUpdate(item, idx)"
          title="Edit"
        >
          <i class="fas fa-pencil-alt" aria-hidden="true"></i>
        </span>
        <span
          class="text-red-700 cursor-pointer"
          type="button"
          @click="handleRemove(item, idx)"
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
  methods: {
    handleUpdate(item, idx) {
      this.$emit("updateItem", item, idx);
    },
    handleRemove(item, idx) {
      this.$emit("removeItem", item, idx);
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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
