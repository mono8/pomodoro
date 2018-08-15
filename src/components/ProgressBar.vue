<template>
<div>
  <template v-if="this.tasks.length > 0">
  <md-subheader>Completed {{amount}}%</md-subheader>  
  <md-progress-bar md-mode="determinate" :md-value="calculateAmount"></md-progress-bar>
  </template>
</div>
</template>

<script>
export default {
  props: ['tasks'],
  data(){
    return {
      completedTask: 0,
      amount: 0
    }
  },
  computed: {
    calculateAmount(){
      this.completedTask = 0;
      this.tasks.forEach((task) => {
        if (task.isDone) {
          this.completedTask++
        }
      });
      return this.amount = Math.round((this.completedTask / this.tasks.length)*100);
    }
  }
}
</script>
