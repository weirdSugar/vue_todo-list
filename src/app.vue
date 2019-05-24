<template>
<div id="app">
<div id="cover"></div>
<Header></Header>
<Todo></Todo>
<Footer></Footer>
</div>
</template>

<script>
import Header from './to-do/header.vue'
import Footer from './to-do/footer.vue'
import Todo from './to-do/todo.vue'
export default {
  components:{
    Header,
    Footer,
    Todo,
  }
}
</script>

<style scoped>
#app{
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover{
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: -1;
  background-color:#999 
}
</style>
