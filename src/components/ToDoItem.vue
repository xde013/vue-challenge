<template>
  <div class="todo-item">

    <input type='checkbox' v-model="todo.checked">
     {{this.todo.text}}
     <span class='timeago'> {{ todo.createdAt | timeAgo }} </span>
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
  filters: {
    timeAgo (date) {
      const seconds = Math.floor((new Date() - date) / 1000)
      const formats = [
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
        const format = interval > 1 ? f.format + 's' : f.format
        if (interval >= 1) return `${interval} ${format} ago`
      }
      return 'Just now'
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
