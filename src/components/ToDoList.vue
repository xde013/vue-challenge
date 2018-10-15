<template>
  <div class="todo-list">

      <to-do-input class='input'></to-do-input>

      <div class='todo-items'>
          <to-do-item v-for="todo in todos" :key="todo.createdAt.getTime()" :todo="todo"></to-do-item>
      </div>
  </div>
</template>

<script>
import ToDoInput from './ToDoInput'
import ToDoItem from './ToDoItem'
export default {
  name: 'ToDoList',
  components: {ToDoInput, ToDoItem},
  computed: {
    todos () {
      return this.$store.getters.sortedTodos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .todo-items {
        margin-top 30px
        display inline-block
        text-align left
    }
</style>
