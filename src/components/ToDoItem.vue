<template>
  <div class="todo-item">
    <input type='checkbox' v-model="todo.checked">
     <span class="todo-text"> {{this.todo.text}} </span>
     <span class='timeago'> {{timeAgo(todo.createdAt) }} </span>
     <button class="remove"  @click="removeTodo(todo)"> X </button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    todo: {
      required: true
    }
  },
  data() {
    return {
      now: new Date().getTime(),
      interval: 1000
    }
  },
  methods: {
    removeTodo (todo) {
      if (confirm('This will delete the todo permenatly.')) this.$store.dispatch('removeTodo', todo)
    },
    timeAgo (date) {
      // convert to seconds
      const seconds = Math.floor((this.now - date) / 1000)
      const formats = [
        // duration represents how many seconds in the time span
        { format: 'year', duration: 356 * 24 * 60 * 60 },
        { format: 'month', duration: 30 * 24 * 60 * 60 },
        { format: 'week', duration: 7 * 24 * 60 * 60 },
        { format: 'day', duration: 24 * 60 * 60 },
        { format: 'hour', duration: 60 * 60 },
        { format: 'minute', duration: 60 },
        { format: 'second', duration: 1 }
      ]
      for (const f of formats) {
        const interval = Math.floor(seconds / f.duration)
        // pluralize format
        const format = interval > 1 ? f.format + 's' : f.format
        if (interval >= 1) return `${interval} ${format} ago`
      }
      // No time difference
      return 'Just now'
    }
  },
  created() {
    // Exploit Vue data binding
    setInterval(() => {
      this.now = new Date().getTime()
    }, this.interval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .todo-item {
      height 30px
      width auto
      padding-bottom 2%
    }
    .timeago {
        opacity .5
        font-size .8em
        font-weight 200
    }
    .remove {
      float right
      background-color #f44336
      border none
      color #fff
      text-align center
      text-decoration none
      margin-left 12px
      cursor pointer
    }
</style>
