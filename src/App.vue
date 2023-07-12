<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addItem="handleAdd"></TodoInput>
    <TodoList v-bind:propsdata="items" @removeItem="handleRemove"></TodoList>
    <TodoFooter v-on:deleteAll="handleDeleteAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    handleDeleteAll() {
      localStorage.clear();
      this.items = [];
    },
    handleAdd(item) {
      localStorage.setItem(item, item);
      this.items.push(item);
    },
    handleRemove(item, idx) {
      localStorage.removeItem(item);
      this.items.splice(idx, 1);
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.items.push(localStorage.key(i));
      }
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}

#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 10% 70% 10%;
  overflow: hidden;
}
</style>
