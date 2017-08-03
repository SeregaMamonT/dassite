<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div v-if="track" class="root">
    <button v-on:click="onPlayClick" class="line">
      {{ isPlaying ? '||' : '>' }}
    </button>
    <div class="artist">{{ track.artist }}</div>
    <div class="title">{{ track.title }}</div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    data() {
      return {
        audio: new Audio(),
        isPlaying: false
      };
    },


    computed: {
      ...mapGetters({
        track: 'getCurrentTrack',
        trackSource: 'getCurrentTrackSource'
      })
    },


    methods: {
      onPlayClick() {
        this.isPlaying ? this.pause() : this.play();
      },

      play() {
        this.audio.play();
        this.isPlaying = true;
      },

      pause() {
        this.audio.pause();
        this.isPlaying = false;
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
    width: 300px;
    display: inline-block;
  }

  .title {
    width: 300px;
    display: inline-block;
  }

</style>