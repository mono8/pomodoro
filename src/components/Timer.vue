<template>
  <div class="wrapper">
    <md-content class="md-elevation-6">
      <div class="timer">
        <span class="timer">{{time}}</span>
      </div>
      <div class="md-layout md-alignment-center-space-around">
          <md-field class="md-layout-item md-size-45">
            <label for="workPeriod" class="md-title">Pomodoro duration</label>
            <md-input id="workPeriod" v-model="workPeriod" @change="resetTimer" min="1" type="number"></md-input>
          </md-field>
          <md-field class="md-layout-item md-size-45">
            <label for="breakPeriod" class="md-title">Break</label>
            <md-input id="breakPeriod" v-model="breakPeriod" @change="resetTimer" min="1" type="number"></md-input>
          </md-field>
      </div>
      <div class="buttons__wrapper">
        <md-button class="md-primary md-raised" @click="pauseTimer">{{isPaused ? 'START' : 'PAUSE'}}</md-button>
        <md-button class="md-accent md-raised" @click="resetTimer">RESET</md-button>
      </div>
    </md-content>
  </div>
</template>

<script>
import Hacktimer from 'hacktimer';
export default {
  data(){
    return {
      time: '',
      workPeriod: 25,
      breakPeriod: 5,
      periodIndex: 0,
      timePassed: 0,
      isPaused: true,
      isWorking: true,
      audio: new Audio(require('../assets/bell-sound.mp3')),
    }
  },
  methods: {
    getTime(){
      let time;
      if (this.isWorking) {
        time = this.workPeriod * 60;
      } else {
        time = this.breakPeriod * 60;
      }
      let period = Number.parseInt(time) - this.timePassed;
      let minutes = Math.floor(period / 60);
      let seconds = period % 60;
      seconds = seconds < 10 ? '0'+seconds : seconds
      minutes = minutes < 10 ? '0'+minutes : minutes
      this.time = `${minutes} : ${seconds}`
      this.timePassed += 1;
      if (time < this.timePassed) {
        this.isWorking = !this.isWorking;
        this.timePassed = 0;
        this.periodIndex++;
        this.audio.play();
      }
    },
    refreshTime(){
      if (this.isPaused){
        return
      }
      if (this.periodIndex == 2){
        this.periodIndex = 0;
        this.resetTimer();
      } else {
      this.getTime();
      setTimeout(this.refreshTime, 1000)
      }
    },
    pauseTimer(){
      this.isPaused = !this.isPaused;
      if (!this.isPaused) {
        this.refreshTime();
      }
    },
    resetTimer(){
      this.timePassed = 0;
      this.isPaused = true;
      this.periodIndex = 0;
      this.isWorking = true;
      this.getTime();
    }
  },
  created(){
    this.getTime();
  }

  }
</script>

<style lang="sass" scoped>
  .buttons__wrapper
    display: flex
    justify-content: center
    padding-bottom: 10px
  .wrapper
    // max-width: 500px
    margin: 0 auto
  .timer
    padding-top: 50px
    font-size: 80px
    text-align: center
    vertical-align: middle
    height: 150px
  
</style>


