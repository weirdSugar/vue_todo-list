<template>
  <section class='real-app'>
    <input 
      type="text"
      class="add-input"
      autofocus='autofocus'
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo"
    >
    <Item 
      v-for="todo in filteredTodos"
      :todo="todo"      
      :key="todo.id"
      @del='deleteTodo'
    />
    <Tabs
     :filter="filter"
     :todos="todos"
     @toggleNowState="toggleState"
     @clearAllCompletedItems="clearAllCompleted"
    />
  </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id=0;
export default {
  data(){
    return {
      todos:[],
      filter:'all'
    }
  },
  components:{
    Item,
    Tabs
  },
  methods:{
    addTodo(e){
      const val=e.target.value.trim()
      if(val=='')return 
      this.todos.unshift({
        id:id++,
        content:val,
        completed:false
      })
      e.target.value=''
      e.target.placeholder=''
    },
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex((itm)=>itm.id===id),1)
    },
    toggleState(state){
      this.filter=state
    },
    clearAllCompleted(){
      // this.todos.every((itm,index)=>{
      //   if(itm.completed){
      //     this.todos.splice(index,1)
      //   }
      // })
      this.todos=this.todos.filter(itm => !itm.completed)
    }
  },
  computed:{
    filteredTodos(){
      if(this.filter==='all'){
        return this.todos
      }
      const completed= this.filter==='completed'
      return this.todos.filter((itm)=>itm.completed===completed)
    }
  }
}
</script>
<style scoped>
.real-app{
  width: 600px;
  margin :0 auto ;
  box-shadow :0 0 5px #666;
  }
.add-input{ 
  width :100%;
  font-size :24px;
  font-family :inherit ;
  font-weight :inherit ;
  outline :none ;
  color: inherit ;
  line-height :1.4em;
  border :1px solid #999;
  box-shadow :inset 0 -1px 5px 0 rgba(0, 0, 0, .5);
  box-sizing :border-box;
  padding :16px 16px 16px 60px;
  }
</style>
