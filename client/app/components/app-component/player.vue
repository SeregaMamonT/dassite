<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div v-if="track" class="root">
    <hr/>
    <button v-on:click="onPlayClick" class="line">
      {{ isPlaying ? '||' : '>' }}
    </button>
    <div class="artist">{{ track.artist }}</div>
    <div class="title">{{ track.title }}</div>
    <div class="time">{{ timeStr }}</div>
    <hr/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    data() {
      return {
        audio: new Audio(),
        isPlaying: false,
        time: 0,
        timeChecker: null
      };
    },


    computed: {
      ...mapGetters({
        track: 'track/getCurrentTrack',
        trackSource: 'track/getCurrentTrackSource'
      }),

      timeStr() {
        return this.formatTime(this.time);
      }
    },


    methods: {
      onPlayClick() {
        this.isPlaying ? this.pause() : this.play();
      },

      play() {
        this.audio.play();
        this.isPlaying = true;

        if (this.timeChecker) {
          clearInterval(this.timeChecker);
        }
        this.timeChecker = setInterval(() => { this.time = ~~this.audio.currentTime}, 200);
      },

      pause() {
        this.audio.pause();
        this.isPlaying = false;
      },

      formatTime(time) {
        let min = Math.floor(time / 60);
        let sec = time % 60;
        sec = sec > 9 ? sec : '0' + sec;

        return min + ":" + sec;
      }
    },


    watch: {
      trackSource(source) {
        if (source) {
          this.audio.src = source;
          this.play();
        }
      }
    }
  });
</script>

<style scoped>
  .root {
    overflow: visible;
    height: 30px;
  }

  button {
    width: 30px;
    display: inline-block;
  }

  .artist {
    width: 350px;
    display: inline-block;
  }

  .title {
    width: 350px;
    display: inline-block;
  }

  .time {
    width: 50px;
    display: inline-block;
  }


</style>