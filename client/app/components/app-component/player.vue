<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div
      v-if="currentTrack"
      v-on:click="onPlayClick"
  >
    {{ isPlaying ? '||' : '>' }}
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
        currentTrack: 'getCurrentTrack',
        currentTrackSource: 'getCurrentTrackSource'
      })
    },


    methods: {
      onPlayClick() {
        this.isPlaying ? this.pause() : this.play();
      },

      play: function () {
        this.audio.play();
        this.isPlaying = true;
      },


      pause: function () {
        this.audio.pause();
        this.isPlaying = false;
      }
    },


    watch: {
      currentTrackSource(source) {
        if (source) {
          this.audio.src = source;
          this.play();
        }
      }
    }
  });
</script>

<style scoped>

</style>