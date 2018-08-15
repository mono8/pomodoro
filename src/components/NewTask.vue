<template>
    <md-content class="md-elevation-4">
      <md-field>
        <label>Add new Todo...</label>
        <md-textarea v-model="text" md-autogrow></md-textarea>
      </md-field>
      <md-button class="md-primary md-raised" @click="addTask">ADD</md-button>
    </md-content>
</template>

<script>
export default {
  data(){
    return {
        text: ''
    }
  },
  methods: {
    addTask(){
      if (this.text == '') {
        return
      }
      this.$emit('taskAdded', this.text);
      this.text = '';
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
