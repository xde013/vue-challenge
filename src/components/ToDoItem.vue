<template>
  <div class="todo-item">

    <input type='checkbox' v-model="todo.checked">
     {{this.todo.text}}
     <span class='timeago'> - 5 minutes ago</span>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    todo: {
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .timeago {
        opacity .5
        font-size .8em
        font-weight 200
    }
</style>
