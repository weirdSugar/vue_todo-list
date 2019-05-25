<template>
  <section class='real-app'>
    <input 
      type="text"
      class="add-input"
      autofocus='autofocus'
      placeholder="接下来要作什么？"
      @keyup.enter="addTodo"
    >
    <Item :todo="todo"></Item>
  </section>
</template>
<script>
import Item from './item.vue'
export default {
  data(){
    return {
      todo:{
        id:0,
        completed:false,
        content:'i am a item'
      }
    }
  },
  components:{
    Item
  },
  methods:{
    addTodo(){}
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
  position: relative;
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
