<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addItem="handleAdd"></TodoInput>
    <TodoList
      v-bind:propsData="items"
      @updateItem="handleUpdate"
      @deleteItem="handleDelete"
    ></TodoList>
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
    handleAdd(item) {
      localStorage.setItem(item, item);
      this.items.push(item);
    },
    handleDeleteAll() {
      localStorage.clear();
      this.items = [];
    },
    handleDelete(item, idx) {
      localStorage.removeItem(item);
      this.items.splice(idx, 1);
    },
    handleUpdate(item, updatedItem, idx) {
      localStorage.removeItem(item);
      localStorage.setItem(updatedItem, updatedItem);

      let updatedArray = this.items;
      updatedArray[idx] = updatedItem;

      this.items = updatedArray;
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
