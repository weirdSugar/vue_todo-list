<template>
  <footer id='footer'>
    <span>written by {{author}}</span>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      author:'Seasee'
    }
  },
}
</script>

<style scoped>
#footer {
  margin-top:40px;
  text-align: center;
  color: #1f1f1f;
  font-size: 10px;
  text-shadow: 0 1px 0 #7c7c7c
}
</style>
