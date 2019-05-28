<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter === state ? 'actived':'']"
        @click="toggleState(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>
<script>
export default {

  props: {
    filter: {
      type: String,
      required: true
    },
    todos:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  methods: {
    clearAllCompleted() {
      this.$emit('clearAllCompletedItems')
    },
    toggleState(state) {
      this.$emit('toggleNowState',state)
    }
  },
  computed:{
    unFinishedTodoLength(){
      return this.todos.filter(itm => !itm.completed).length
    }
  }
};
</script>
<style scoped>
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #fff;
  font-size: 14px;
  border-top: 1px solid #ddd;
}
.left,
.clear,
.tabs {
  box-sizing: border-box;
  width: 150px;
}
.left,
.clear {
  padding: 0 15px
}
.right{
  text-align: right
}
.clear {
  text-align: center;
  cursor: pointer;
  transition:all 0.3s 
}
.clear:hover{
  font-size: 15px;
  color:rgb(223, 0, 0)
}
.tabs {
  display: flex;
  justify-content: space-around
}
.tabs * {
  display: inline-block;
  cursor: pointer;
  padding: 0 6px;
  border: 1px solid rgba(175,47,47,0)
}
.tabs *.actived {
  border: 1px solid rgba(175, 47, 47, 0.938);
  border-radius: 5px;
}
</style>
