<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(item, idx) in propsdata" :key="item" class="shadow">
        <span class="text-blue-800 mr-1 leading-10">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
        <div>
          {{ item }}
        </div>
        <span
          class="text-green-700"
          type="button"
          @click="handleUpdate(item, idx)"
        >
          <i class="fas fa-square-pen" aria-hidden="true"></i>
        </span>
        <span
          class="text-red-700"
          type="button"
          @click="handleRemove(item, idx)"
        >
          <i class="fas fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    handleUpdate(item, idx) {
      this.$emit("removeItem", item, idx);
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
