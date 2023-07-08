<template>
    <li>
      <div>
        <span>{{ todo }}</span>
        <div>
          <button @click="startEditing">Edit</button>
          <button @click="removeTodo">Remove</button>
        </div>
      </div>
      <input v-if="editing" v-model="editedTodo" type="text">
    </li>
  </template>
    
    <script>
    export default {
      props: {
        todo: {
          type: String,
          required: true
        },
        currentIndex: {
          type: Number,
          required: true
        }
      },
      data() {
        return {
          editing: false,
          editedTodo: this.todo
        };
      },
      methods: {
        startEditing() {
          this.editing = true;
        },
        updateTodo() {
          if (this.editedTodo.trim() !== '') {
            this.$emit('updateTodo', this.currentIndex, this.editedTodo);
            this.editing = false;
          }
        },
        removeTodo() {
          this.$emit('removeTodo', this.currentIndex);
        }
      }
    };
    </script>