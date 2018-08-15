<template>
  <div class="container">
    <md-content class="md-elevation-4" v-if="tasks.length > 0">
      <md-list>
        <md-subheader class="subheader md-title">Todo List</md-subheader>
        <template v-for="(task, index) in tasks">
          <md-list-item :key="index">
            <p class="md-list-item-text text" :class="{'text--cross' : task.isDone}">{{ task.task }}</p>
            <md-checkbox v-model="task.isDone" @change="toggleTask" class="md-primary"/>
            <md-button class="md-primary md-dense" @click="deleteTask(index)">DELETE</md-button>
          </md-list-item>
          <md-divider v-if="index < tasks.length - 1" :key="`task-${index}`"></md-divider>
        </template>
      </md-list>
    </md-content>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  data(){
    return {

    }
  },
  methods: {
    deleteTask(index){
      this.$emit('taskDeleted', index);
      console.log(index);
    },
    toggleTask(){
      this.$emit('isDoneToggled');
    }
  }
}
</script>

<style lang="sass" scoped>
.text
  overflow: auto
  white-space: normal
.md-list-item
  cursor: pointer
.subheader
  display: inline-block
  text-align: center
.text--cross
  text-decoration: line-through
</style>

