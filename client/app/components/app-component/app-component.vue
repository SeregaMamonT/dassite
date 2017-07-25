<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <h3>{{ headerText }}</h3>
    <track-line v-for="(track, index) in tracks"
                v-bind:id="track.id"
                v-bind:artist="track.artist"
                v-bind:title="track.title"
                v-bind:key="index"
    ></track-line>
    <button v-on:click="addTrack" style="width: 80px; height: 20px;"></button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import TrackLine from './track-line.vue';
  import api from '../../api/services.js'

  export default Vue.extend({

    components: {
      'track-line': TrackLine
    },


    created() {
      this.$store.dispatch('loadTracks');
    },


    methods: {
      addTrack() {
        this.$store.commit('addTrack');
      }
    },


    computed: {
      tracks() {
        return this.$store.state.tracks;
      },

      headerText() {
        return this.tracks.length == 0 ? 'Loading tracks...' : 'Your tracks';
      }
    }

  });
</script>

<style scoped>
  h3 {
    color: green;
  }
</style>