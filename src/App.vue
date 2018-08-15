<template>
  <div id="app">
      <app-header></app-header>
    <div class="container">
      <app-timer></app-timer>
      <new-task @taskAdded="newTask" class="new-task"></new-task>
      <progress-bar :tasks="tasks" class="progress-bar"></progress-bar>
      <tasks-list :tasks="tasks" @taskDeleted="deleteTask" @isDoneToggled="saveTodos"></tasks-list>
    </div>
  </div>
</template>

<script>
import Timer from './components/Timer.vue';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';
import ProgressBar from './components/ProgressBar';
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  data(){
    return {
      tasks: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    newTask(text){
      this.tasks.unshift({
        task: text,
        isDone: false
      });
      this.saveTodos();
    },
    deleteTask(index){
      this.tasks.splice(index, 1);
      this.saveTodos();
    },
    saveTodos(){
      let str = JSON.stringify(this.tasks);
      localStorage.setItem('todos', str);
    }
  },
  components: {
    appTimer: Timer,
    newTask: NewTask,
    tasksList: TasksList,
    progressBar: ProgressBar,
    appHeader: AppHeader
  }
}
</script>

<style lang="sass">
body
  font-family: "Roboto Mono", monospace
.container
  max-width: 900px
  margin: 0 auto
  margin-top: 20px
.progress-bar
  margin-top: 30px
  margin-bottom: 10px
.header
  font-size: 37px
  display: inline-block
  margin-bottom: 25px
  margin-left: 50%
  transform: translateX(-50%)
.new-task
  margin-top: 30px
</style>

