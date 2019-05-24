<template>
  <div>
    <input 
      type="checkbox"
      :class="['toggle','todo-item',{completed:todo.completed}]"
      v-model="todo.completed"
    >
    <label>{{todo.compotent}}</label>
    <button class='destory' @click="deleteTodo"></button>
  </div>
</template>
<script>
export default {
  props:{
    todo:{
      type:Object,
      required:true
    }
  },
  methods:{
    deleteTodo(){}
  }
}
</script>
