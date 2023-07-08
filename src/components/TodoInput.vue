<template>
    <div>
      <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keypress.enter="addTodo">
      <span v-on:click="addTodo">
        <i aria-hidden="true"></i>
      </span>
    </div>
</template>

  
<script>
export default {
  data() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
				this.$emit('addTodo', value)
        this.clearInput();
      } 
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
  }
}
</script>

<style>
</style>
