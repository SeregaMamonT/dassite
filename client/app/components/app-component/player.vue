<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div v-on:click="onPlayClick">Off</div>
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
      track() {
        return this.$store.state.currentTrack;
      },

      ...mapGetters({
        currentTrack: 'getCurrentTrack'
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
      },
    },


    watch: {
      currentTrack(newTrack) {
        this.audio.src = newTrack.source;
        this.play();
      }
    }
  });
</script>

<style scoped>

</style>