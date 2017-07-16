<template>
  <div>
    <h3>{{ headerText }}</h3>
    <track-line v-for="(track, index) in tracks"
                v-bind:artist="track.artist"
                v-bind:title="track.title"
                v-bind:key="index"
    />
    <button v-on:click="addTrack" style="width: 80px; height: 20px;"></button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import fetch from 'fetch-everywhere';
  import TrackLine from './track-line.vue';

  export default Vue.extend({

    components: {
      'track-line': TrackLine
    },


    created() {
      this.getData('rest/tracks/all', (tracks) => {
        this.$store.commit('loadTracks', tracks);
      });
    },


    methods: {
      getData(url, callback) {
        fetch(url)
            .then(resp => resp.json())
            .then(json => callback(json))
            .catch((e) => console.log(e));
      },

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