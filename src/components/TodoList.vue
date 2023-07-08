<template>
    <div>
      <h1>Todo List</h1>
      <div>
        <input v-model="newTodo" type="text" placeholder="Add a new todo">
        <button @click="addTodo">Add</button>
      </div>
      <ul>
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          @updateTodo="updateTodo"
          @removeTodo="removeTodo"
          :editIndex="editIndex"
          :currentIndex="index"
        />
      </ul>
    </div>
  </template>
    
    <script>
    import TodoItem from './TodoItem.vue';
    
    export default {
      components: {
        TodoItem
      },
      data() {
        return {
          todos: [],
          newTodo: '',
          editIndex: null
        };
      },
      methods: {
        addTodo() {
          if (this.newTodo.trim() !== '') {
            this.todos.push(this.newTodo);
            this.newTodo = '';
          }
        },
        removeTodo(index) {
          this.todos.splice(index, 1);
        },
        updateTodo(index, editedTodo) {
          this.todos.splice(index, 1, editedTodo);
        }
      }
    };
    </script>